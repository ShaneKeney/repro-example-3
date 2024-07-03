import Typography from '@/components/atoms/Typography';
import { View } from 'react-native';

type Props = {
  tableHeaderText: string;
};

export default function ({ tableHeaderText }: Props) {
  return (
    <View className="border-x-2 border-t-2">
      <View className="items-center border-b-2 bg-tableHeaderBackground p-4 dark:bg-tableHeaderBackground-dark">
        <Typography
          className="text-center !text-text-dark dark:!text-text-dark"
          size="body-18"
          font="geist-bold"
        >
          {tableHeaderText}
        </Typography>
      </View>

      {SECTION_179_DATA.map((item, index) => {
        const test =
          index === SECTION_179_DATA.length - 1
            ? 'flex-1 flex-row border-b-2 bg-[#B4D4A7] h-[70px] items-center justify-center'
            : "flex-1 flex-row border-b-2 bg-['rgba(255,255,255,0.8)'] h-[70px] items-center justify-center";

        return (
          <View key={index} className={test}>
            <View className="flex h-full w-[65%] justify-center border-r-2 p-4">
              <Typography className="flex !text-text" size="body-16" font="geist-light">
                {item.title}
              </Typography>
            </View>

            <View className="flex-1 items-center justify-center">
              <Typography className="!text-center !text-text" size="body-16" font="geist-light">
                {item.amount}
              </Typography>
            </View>
          </View>
        );
      })}
    </View>
  );
}

const SECTION_179_DATA = [
  { title: 'Equipment Purchaes', amount: '$1,300,000' },
  { title: 'First Year Write Off', amount: '$1,220,000' },
  { title: '60% Bonus First Year Depreciation', amount: '$48,000' },
  { title: 'Normal First Year Depreciation', amount: '$0' },
  { title: 'Total First Year Depreciation', amount: '$1,268,000' },
  { title: 'Cash Savings', amount: '$443,800' },
  { title: 'Equipment Costs After Tax', amount: '$856,200' }
];
