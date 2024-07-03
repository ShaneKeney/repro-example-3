import SVG from '@/assets/svg';
import { useEffect } from 'react';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';

const AnimatedChevron = ({ flipped }: { flipped: boolean }) => {
  // 0 for pointed down. 180 for flipped.
  // Note: interpolatedRotatedValue will impact the transform of the Chevron
  const rotateY = useSharedValue(180);

  useEffect(() => {
    if (flipped && rotateY.value === 180) return;
    if (!flipped && rotateY.value === 0) return;
    rotateY.value = withTiming(flipped ? 180 : 0, {
      duration: 150,
      easing: Easing.ease
    });
  }, [flipped]);

  const rotateYStyle = useAnimatedStyle(() => {
    return {
      transform: [{ perspective: 1000 }, { rotateX: `${rotateY.value}deg` }]
    };
  });

  return (
    <Animated.View style={rotateYStyle}>
      <SVG.ChevronDown className="fill-text-dark dark:fill-text-dark" height={25} width={25} />
    </Animated.View>
  );
};

export default AnimatedChevron;
