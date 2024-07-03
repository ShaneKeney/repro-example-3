import { Image } from 'react-native';

export default function () {
  return (
    <Image
      source={require('@/assets/images/background.jpg')}
      style={{ flex: 1, width: '100%', height: '100%', position: 'absolute', zIndex: -1000 }}
    />
  );
}
