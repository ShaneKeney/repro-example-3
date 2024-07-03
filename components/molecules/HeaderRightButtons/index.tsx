import SVG from '@/assets/svg';
import Typography from '@/components/atoms/Typography';
import { useTheme } from '@/context/Theme';
import { callPhoneNumber, sendEmail, shareContent } from '@/utils';
import tailwindConfig from '@/utils/tailwind';
import {
  BottomSheetModal,
  BottomSheetView,
  SCREEN_HEIGHT,
  SCREEN_WIDTH
} from '@gorhom/bottom-sheet';
import { useRouter } from 'expo-router';
import { cssInterop } from 'nativewind';
import { useCallback, useMemo, useRef } from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

cssInterop(BottomSheetView, {
  className: 'style'
});

cssInterop(BottomSheetModal, {
  className: 'style',
  backgroundClassName: 'backgroundStyle',
  handleClassName: 'handleStyle',
  handleIndicatorClassName: 'handleIndicatorStyle'
});

export default function HeaderRightButtons() {
  const router = useRouter();
  const { isDarkMode, toggleTheme } = useTheme();
  const { bottom } = useSafeAreaInsets();

  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <View className="mr-4 flex-row items-center justify-center gap-4">
      <TouchableOpacity onPress={handlePresentModalPress}>
        <SVG.InfoCircle className="fill-text dark:fill-text-dark" />
      </TouchableOpacity>

      <TouchableOpacity onPress={toggleTheme}>
        {/* <SVG.Gear height={22} width={22} className="fill-text dark:fill-text-dark" /> */}
        {isDarkMode && <Typography className="!text-[16px]">🌔</Typography>}
        {!isDarkMode && <Typography className="!text-[16px]">🌞</Typography>}
      </TouchableOpacity>

      <BottomSheetModal
        ref={bottomSheetModalRef}
        enableDynamicSizing={true}
        enablePanDownToClose={true}
        animateOnMount={true}
        backdropComponent={() => (
          <Pressable
            style={{
              height: SCREEN_HEIGHT,
              width: SCREEN_WIDTH,
              backgroundColor: 'black',
              position: 'absolute',
              opacity: 0.5
            }}
            onPress={() => bottomSheetModalRef.current?.close()}
          ></Pressable>
        )}
        handleStyle={{
          backgroundColor: isDarkMode
            ? tailwindConfig.theme.colors['tableHeaderBackground']
            : tailwindConfig.theme.colors['background'],
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          paddingTop: 12
        }}
        handleIndicatorStyle={{
          backgroundColor: isDarkMode
            ? tailwindConfig.theme.colors['inactiveTabBarLabel']
            : tailwindConfig.theme.colors['tableHeaderBackground-dark'],
          width: '25%'
        }}
        backgroundStyle={{
          backgroundColor: isDarkMode
            ? tailwindConfig.theme.colors['tableHeaderBackground']
            : tailwindConfig.theme.colors['background']
        }}
      >
        <BottomSheetView
          className="flex flex-col justify-center gap-4 p-6"
          style={{
            paddingBottom: bottom
          }}
        >
          <TouchableOpacity
            className="flex-row items-center gap-6 rounded-xl border border-inactiveTabBarLabel bg-[#E5E7EB] p-4 dark:border-[#E5E7EB] dark:bg-inactiveTabBarLabel"
            onPress={() => callPhoneNumber('9494644020')}
          >
            <SVG.Phone className="fill-black dark:fill-white" height={23} width={23} />
            <Typography
              className="!color-black dark:!color-white"
              size="body-16"
              font="geist-light"
            >
              949-464-4020
            </Typography>
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-row items-center gap-6 rounded-xl border border-inactiveTabBarLabel bg-[#E5E7EB] p-4 dark:border-[#E5E7EB] dark:bg-inactiveTabBarLabel"
            onPress={() => sendEmail('applications@reliantcapitalgrp.com')}
          >
            <SVG.Envelope className="fill-black dark:fill-white" height={23} width={23} />
            <Typography
              className="!color-black dark:!color-white"
              size="body-16"
              font="geist-light"
            >
              applications@reliantcapitalgrp.com
            </Typography>
          </TouchableOpacity>

          <TouchableOpacity
            className="mb-4 flex-row items-center justify-center gap-6 rounded-xl border border-inactiveTabBarLabel bg-[#E5E7EB] p-4 dark:border-[#E5E7EB] dark:bg-inactiveTabBarLabel"
            onPress={() => shareContent()}
          >
            <Typography className="!color-black dark:!color-white" size="body-16" font="geist-bold">
              Share
            </Typography>
          </TouchableOpacity>
        </BottomSheetView>
      </BottomSheetModal>
    </View>
  );
}
