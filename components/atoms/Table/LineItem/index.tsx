import { Pressable, View } from 'react-native';
import Typography from '../../Typography';
import { useTablesContext } from '@/components/molecules/Tables/context';
import { VariantProps, tv } from 'tailwind-variants';

export const variants = tv({
  base: 'flex-row border-b bg-white dark:bg-white',
  variants: {
    selected: {
      true: 'bg-blue-200 dark:bg-blue-200'
    }
  }
});

type LineItemVariants = VariantProps<typeof variants>;

interface Props extends LineItemVariants {
  className?: string;
  rowHeight?: number; // Default: 50px
  itemNumber: number;
  tableNumber: number;
  selected: boolean;
  onPress?: () => void;
}

export default function LineItem({
  rowHeight = 50,
  itemNumber,
  tableNumber,
  selected,
  className,
  onPress
}: Props) {
  const { data, inputValue, selectedRow } = useTablesContext();
  const row = data[tableNumber];

  const lineItem = row.rowData[itemNumber];
  const { term, rate } = lineItem;

  const calculateMonthly = () => {
    if (inputValue === null) return 0;
    const result = Math.round(inputValue * rate); // Round to nearest hundreth
    return result.toLocaleString();
  };

  return (
    <Pressable onPress={onPress}>
      <View style={{ height: rowHeight }} className={`${variants({ selected: selected })}`}>
        <View className="w-[30%] justify-center border-r border-r-black p-4">
          <Typography className="text-center !text-text" font="geist-light">
            {term} Month
          </Typography>
        </View>
        <View className="flex-1 flex-col justify-center p-4">
          <Typography className="pr-4 !text-right !text-text" font="geist-medium">
            {`$${calculateMonthly()}`}
          </Typography>
        </View>
      </View>
    </Pressable>
  );
}
