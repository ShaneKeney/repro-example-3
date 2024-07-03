// import { Image } from 'react-native';
import { Image } from 'expo-image';

const blurhash =
  '|3Ogc|0001IAM{bbRjtRae~CD%IURkj[WVjZWoof00MxIUbHM{fOR%j]WV?v9Gs.xua|oJWBofay01WU9Gxuf6WBofj[of-;fkWCWBxuWBWBoeWV4oxaNGt7R*xaWBayofxuoft7ofbFaxofWBof9GfkR%s:RjaxRjj[Rj';

export default function () {
  return (
    <Image
      source={require('@/assets/images/background.jpg')}
      contentFit="cover"
      style={{ flex: 1, width: '100%', height: '100%', position: 'absolute', zIndex: -1000 }}
      placeholder={blurhash}
      transition={3000}
    />
  );
}
