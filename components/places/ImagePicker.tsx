import {useEffect, useRef, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  CameraPermissionStatus,
} from 'react-native-vision-camera';

export default function ImagePicker() {
  const {hasPermission, requestPermission} = useCameraPermission();
  const device = useCameraDevice('back');
  const camera = useRef<Camera>(null);
  const [hasCameraPermission, setHasCameraPermission] = useState<CameraPermissionStatus | null>(null);

  useEffect(() => {
    (async () => {
      const status = await requestPermission();
      setHasCameraPermission(status);
    })();
  }, []);

  const onTakePhoto = async () => {
    try {
      if (camera.current) {
        const photo = await camera.current.takePhoto();
        console.log(photo);
      }
    } catch (error) {
      console.error("Failed to take photo:", error);
    }
  };

  // if (!hasPermission) return <PermissionsPage />
  // if (device == null) return <NoCameraDeviceError />
  if (hasPermission === 'denied') return <Text>Camera permission denied</Text>;
  if (hasPermission === 'restricted') return <Text>Camera permission restricted</Text>;
  if (hasPermission === null) return <Text>Requesting camera permission...</Text>;
  if (device == null) return <Text>No camera device available</Text>;
  return (
    <View style={{flex: 1}}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        ref={camera}
        photo={true}
      />
      <View>
        <Button title="Scatta foto" onPress={onTakePhoto} />
      </View>
    </View>
  );
}
