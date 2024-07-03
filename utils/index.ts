import { Linking, Platform, Share } from 'react-native';

export const callPhoneNumber = (phoneNumber: string) => {
  Linking.openURL(`tel:${phoneNumber}`);
};

export const sendEmail = (email: string) => {
  Linking.openURL(`mailto:${email}`);
};

export const shareContent = async () => {
  try {
    const link =
      Platform.OS === 'ios'
        ? 'https://apps.apple.com/ca/app/reliant-finance-calculator/id1593285687'
        : 'https://play.google.com/store/apps/details?id=com.reliantcapitalgrp.rcfinancecalculator';

    const result = await Share.share({
      message: `Check out our mobile app: ${link}`
      // You can also include additional options like title and URL
      // title: 'Share Example',
      // url: 'https://example.com',
    });

    if (result.action === Share.sharedAction) {
      // Content shared successfully
      console.log('Content shared successfully');
    } else if (result.action === Share.dismissedAction) {
      // User dismissed the share sheet
      console.log('Share sheet dismissed');
    }
  } catch (error) {
    console.error('Error sharing content:', error);
  }
};
