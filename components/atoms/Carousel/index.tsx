import { ScrollView, Image, View, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { SCREEN_WIDTH } from '@gorhom/bottom-sheet';
import Typography from '../Typography';

const INDUSTRY_BANNERS = [
  { source: require('@/assets/images/Medical.jpg'), title: 'Medical' },
  { source: require('@/assets/images/Construction.jpg'), title: 'Construction' },
  { source: require('@/assets/images/Engineering.jpg'), title: 'Engineering' },
  { source: require('@/assets/images/Lab.jpg'), title: 'Lab' },
  { source: require('@/assets/images/Software.jpg'), title: 'Software' },
  { source: require('@/assets/images/Trucking.jpg'), title: 'Trucking' },
  { source: require('@/assets/images/Aesthetic.jpg'), title: 'Aesthetic' }
];

const CAROUSEL_INERVAL = 5000;

const Carousel = () => {
  const scrollViewRef = useRef<ScrollView>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / SCREEN_WIDTH);
    setSelectedIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (selectedIndex < INDUSTRY_BANNERS.length - 1) {
        scrollViewRef.current?.scrollTo({
          x: SCREEN_WIDTH * (selectedIndex + 1),
          animated: true
        });
      } else {
        scrollViewRef.current?.scrollTo({
          x: 0,
          animated: true
        });
      }
    }, CAROUSEL_INERVAL);

    return () => clearInterval(interval);
  }, [selectedIndex]);

  return (
    <View>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={0}
      >
        {INDUSTRY_BANNERS.map((banner, index) => (
          <View key={index} style={{ height: SCREEN_WIDTH, width: SCREEN_WIDTH }}>
            <View className="absolute z-10 flex w-full items-start py-4">
              <View className="rounded-sm bg-[rgba(255,255,255,.8)] px-4 py-2 dark:bg-[rgba(0,0,0,.6)]">
                <Typography font="geist-thin" size="body-16">
                  {banner.title}
                </Typography>
              </View>
            </View>
            <Image source={banner.source} className="h-full w-full" resizeMode="cover" />
          </View>
        ))}
      </ScrollView>

      <View className="absolute bottom-7 z-10 flex w-full items-center justify-center py-4">
        <View className="flex h-[25px] flex-row items-center justify-center gap-2 rounded-2xl bg-[rgba(255,255,255,.8)] px-4 dark:bg-[rgba(255,255,255,.8)]">
          {INDUSTRY_BANNERS.map((item, index) => {
            if (index === selectedIndex)
              return (
                <View
                  key={index}
                  className="h-2 w-2 rounded-full bg-gray-600 dark:bg-gray-600"
                ></View>
              );
            return (
              <View
                key={index}
                className="h-2 w-2 rounded-full bg-gray-400 dark:bg-gray-400"
              ></View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default Carousel;
