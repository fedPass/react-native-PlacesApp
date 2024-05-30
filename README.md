## Install icon
https://github.com/oblador/react-native-vector-icons

```bash
npm install --save react-native-vector-icons

```
Edit android/app/build.gradle (NOT android/build.gradle) and add:

```bash
apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")

```


## Install react-native-vision-camera
https://github.com/mrousavy/react-native-vision-camera

```bash
npm i react-native-vision-camera
cd ios && pod install

```

Updating manifests:

### For Android

Open your project's AndroidManifest.xml and add the following lines inside the <manifest> tag:

```bash
<uses-permission android:name="android.permission.CAMERA" />

<!-- optionally, if you want to record audio: -->
<uses-permission android:name="android.permission.RECORD_AUDIO" />
```

### For iOS

Open your project's Info.plist and add the following lines inside the outermost <dict> tag:

```bash
<key>NSCameraUsageDescription</key>
<string>$(PRODUCT_NAME) needs access to your Camera.</string>

<!-- optionally, if you want to record audio: -->
<key>NSMicrophoneUsageDescription</key>
<string>$(PRODUCT_NAME) needs access to your Microphone.</string>
```


## Install camera-roll
https://github.com/react-native-cameraroll/react-native-cameraroll

```bash
npm install @react-native-camera-roll/camera-roll --save

```

Updating manifests:

### For Android

Open AndroidManifest.xml:

```bash
<manifest>
...
  <uses-permission android:name="android.permission.READ_MEDIA_IMAGES" />
  <uses-permission android:name="android.permission.READ_MEDIA_VIDEO" />
  <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"
    android:maxSdkVersion="32" />
  <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
...
<application>

```

### For iOS

Open your project's Info.plist and add the following lines inside the outermost <dict> tag:

```bash
<key>NSPhotoLibraryUsageDescription</key>
<string>$(PRODUCT_NAME) needs access to your Photo Gallery.</string>

```

## Install geolocation
https://github.com/michalchudziak/react-native-geolocation
Example: https://github.com/michalchudziak/react-native-geolocation/tree/master/example

```bash
npm install @react-native-community/geolocation --save

```

Updating manifests:

### For Android

Open AndroidManifest.xml:

```bash
<manifest>
...
  <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
...
<application>

```

or 

```bash
<manifest>
...
  <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
...
<application>
```

Android API >= 18 Positions will also contain a mocked boolean to indicate if position was created from a mock provider.

Android API >= 23 Requires an additional step to check for, and request the ACCESS_FINE_LOCATION or ACCESS_COARSE_LOCATION permissions using the PermissionsAndroid API. Failure to do so may result in a hard crash.


### For iOS

Open your project's Info.plist and add the following lines inside the outermost <dict> tag:

```bash
<key>NSLocationWhenInUseUsageDescription</key>
<string>$(PRODUCT_NAME) needs access to your position.</string>
<key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
<string>$(PRODUCT_NAME) needs access to your position.</string>

```

## Install Google Map Static API maps
#TODO: retry google api key to implement map

## Install SQLite
https://www.npmjs.com/package/react-native-sqlite-storage
https://blog.logrocket.com/using-sqlite-react-native/

```bash
npm install --save react-native-sqlite-storage
npm install @types/react-native-sqlite-storage

```

### For iOS

```bash
cd ios && pod install && cd ..

```
