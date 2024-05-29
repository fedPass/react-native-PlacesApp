import {useEffect, useRef, useState} from 'react';
import {Alert, Button, Image, Modal, StyleSheet, Text, View} from 'react-native';
import {
  Camera,
  useCameraDevice,
  CameraPermissionStatus,
} from 'react-native-vision-camera';

export default function ImagePicker() {
  const device = useCameraDevice('back');
  const camera = useRef<Camera>(null);
  const [cameraPermission, setCameraPermission] = useState<CameraPermissionStatus | null>(null);
  const [photoPath, setPhotoPath] = useState<string | null>();
  const [isCameraVisible, setIsCameraVisible] = useState(false);

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setCameraPermission(status);
    })();
  }, []);

  const onTakePhoto = async () => {
    try {
      if (camera.current) {
        const photo = await camera.current.takePhoto();
        console.log(photo);
        // const result = await fetch(`file://${photo.path}`);
        // const data = await result.blob();
        setPhotoPath('file://' + photo.path);
      }
    } catch (error) {
      console.error("Failed to take photo:", error);
    }
    setIsCameraVisible(false)
  };

  if (cameraPermission === 'denied') return <Text>Camera permission denied</Text>;
  if (cameraPermission === 'restricted') return <Text>Camera permission restricted</Text>;
  if (cameraPermission === null) return <Text>Requesting camera permission...</Text>;
  if (device == null) return <Text>No camera device available</Text>;
  return (
    <View style={{flex: 1}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isCameraVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setIsCameraVisible(!isCameraVisible);
        }}>
          <View style={{flex: 1, height: '100%'}}>
            <Camera
              style={styles.camera}
              device={device}
              ref={camera}
              isActive
              photo
            />
            <View style={styles.btn}>
              <Button title="Scatta foto" onPress={onTakePhoto} />
            </View>
          </View>
      </Modal>
      {photoPath && <Image style={styles.image} source={{uri: photoPath}} />}
      <View style={styles.btn}>
        <Button title="Scatta foto" onPress={() => setIsCameraVisible(true)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    marginHorizontal: 16,
    paddingTop: 8,
    width: 300,
    height: 300
  },
  camera: {
    height: 460,
    width: '100%',
    alignSelf: 'center',
  },
  btn: {
    marginTop: 16,
  }
})
