import { TouchableOpacity, View } from 'react-native';
import Typography from '../Typography';
import * as Linking from 'expo-linking';

type Props = {
  onPress: () => void;
  text: string;
};

export default function Button({ onPress, text }: Props) {
  return (
    <View>
      <TouchableOpacity
        className="items-center justify-center bg-[#ae1d36] p-4 dark:bg-[#ae1d36]"
        onPress={onPress}
      >
        <Typography className="!color-white dark:!color-white" size="body-18" font="geist-bold">
          {text}
        </Typography>
      </TouchableOpacity>
    </View>
  );
}

Button.ApplyNow = () => {
  const onApplyNow = async () => {
    return Linking.openURL('https://reliantcapitalgrp.com/apply-now/').catch(() => {
      console.log('An error occurred while trying to open the link.');
    });
  };

  return <Button onPress={onApplyNow} text="Apply Now" />;
};
