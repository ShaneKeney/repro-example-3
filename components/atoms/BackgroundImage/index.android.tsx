import { Image } from 'react-native';

// TODO: Determine why expo-image lib is causing Android app crash
export default function () {
  return (
    <Image
      source={require('@/assets/images/background.jpg')}
      style={{ flex: 1, width: '100%', height: '100%', position: 'absolute', zIndex: -1000 }}
    />
  );
}
