import { Image, View } from 'react-native';
import Typography from '@/components/atoms/Typography';
import SVG from '@/assets/svg';
import TabScrollable from '@/components/atoms/TabScrollable';
import { SCREEN_WIDTH } from '@gorhom/bottom-sheet';
import BackgroundImage from '@/components/atoms/BackgroundImage';
import Spacer from '@/components/atoms/Spacer';
import Carousel from '@/components/atoms/Carousel';

export default function WelcomeScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <BackgroundImage />

      <TabScrollable useHeaderInsets={true} bounces={false}>
        <View className={`aspect-[1.5/1] w-full`}>
          <Image
            source={require('@/assets/images/Cityscape.png')}
            width={SCREEN_WIDTH}
            resizeMode="cover"
            className="h-full w-full"
          />

          <View className="absolute flex h-full w-full items-center justify-center px-5">
            <View className="gap-2 rounded-xl bg-[rgba(255,255,255,.5)] py-5 dark:bg-[rgba(0,0,0,.6)]">
              <View className="aspect-[254/61] w-[55%] self-center px-4">
                <SVG.Logo />
              </View>

              <Typography className="px-6 text-center leading-8" size="body-20">
                We specialize in building custom finance programs for industry leading equipment
                manufacturers & distributors.
              </Typography>
            </View>
          </View>
        </View>

        <Typography className="py-4 text-center dark:!color-black" size="h2" font="geist-medium">
          Industries{' '}
          <Typography
            className="!color-[#ae1d36] dark:!color-[#ae1d36]"
            size="h2"
            font="geist-medium"
          >
            We Serve
          </Typography>
        </Typography>

        <Carousel />
      </TabScrollable>
    </View>
  );
}
