import AnimatedChevron from '@/components/atoms/Animated/Chevron';
import Typography from '@/components/atoms/Typography';
import { useEffect, useState } from 'react';
import { Pressable, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming
} from 'react-native-reanimated';
import { useTablesContext } from '../context';
import LineItem from '@/components/atoms/Table/LineItem';

type Props = {
  index: number;
};

const ROW_HEIGHT = 50;
const NUMBER_OF_ROWS = 4;

export default function ({ index }: Props) {
  const tableHeight = useSharedValue(0);
  const [flipped, setFlipped] = useState(true);
  const { inputValue, data, onRowPress, selectedRow } = useTablesContext();
  const tableHeaderText = data[index].title;

  // Open and close the tables based on
  useEffect(() => {
    if (inputValue === null && tableHeight.value !== 0) return collapse();
    if (inputValue !== null && tableHeight.value === 0) return open();
  }, [inputValue]);

  const collapse = () => {
    setFlipped(() => {
      tableHeight.value = withTiming(0, { duration: 300, easing: Easing.ease });
      return true;
    });
  };

  const open = () => {
    setFlipped(() => {
      tableHeight.value = withSpring(ROW_HEIGHT * NUMBER_OF_ROWS, { damping: 10, stiffness: 40 });
      return false;
    });
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: tableHeight.value
    };
  });

  return (
    <Animated.View>
      <View className="flex-row justify-center bg-tableHeaderBackground p-4 dark:bg-tableHeaderBackground-dark">
        <Typography className="mr-auto !text-text-dark" size="body-20" font="geist-light">
          {tableHeaderText}
        </Typography>
        <AnimatedChevron flipped={flipped} />
      </View>

      <Animated.View
        className="justify-between overflow-hidden border-x bg-white"
        style={animatedStyle}
      >
        {data[index].rowData.map((item, lineItemIndex) => {
          return (
            <LineItem
              key={lineItemIndex}
              itemNumber={lineItemIndex}
              rowHeight={ROW_HEIGHT}
              tableNumber={index}
              selected={
                selectedRow?.tableId === data[index].id &&
                selectedRow?.selectedRow.term === item.term
              }
              onPress={() => {
                onRowPress({ tableId: data[index].id, selectedRow: item });
              }}
            />
          );
        })}
      </Animated.View>
    </Animated.View>
  );
}
