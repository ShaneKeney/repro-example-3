import SVG from '@/assets/svg';
import BackgroundImage from '@/components/atoms/BackgroundImage';
import Button from '@/components/atoms/Button';
import Disclaimer from '@/components/atoms/Disclaimer';
import EquipmentCostInput, { parseAmount } from '@/components/atoms/EquipmentCostInput';
import Spacer from '@/components/atoms/Spacer';
import TabScrollable from '@/components/atoms/TabScrollable';
import Table from '@/components/atoms/Table';
import Typography from '@/components/atoms/Typography';
import { useTheme } from '@/context/Theme';
import { isNumber } from '@/utils/numbers';
import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { TextInput, View, Pressable } from 'react-native';

const DATA = [
  {
    title: 'Qualifications',
    description:
      'Most new and used equipment, as well as some software, qualify for the Section 179 Deduction'
  },
  {
    title: 'Bonus Depreciation',
    description: '100% bonus depreciation for 2024 new and used equipment'
  },
  {
    title: 'Increased Limit',
    description: 'Section 179 deduction limit is now $1,220,000'
  },
  {
    title: 'Total Amount',
    description:
      '2024 Section 179 Deduction threshold for total amount of equipment that can be purchased is now $3,050,000'
  }
] as const;

export default function Section179() {
  const { isDarkMode } = useTheme();
  const { calculatorAmount } = useLocalSearchParams<{ calculatorAmount: string }>();
  const [value, setAmount] = useState('');

  const amount = parseAmount(value);

  useEffect(() => {
    if (calculatorAmount) setAmount(calculatorAmount);
  }, [calculatorAmount]);

  const calculateDeduction = () => {
    if (value === '' || amount === null) return 'N/A';
    const result = Math.round(amount);
    if (result > 1220000) return '$' + (1220000).toLocaleString(); // Max deduction
    return '$' + result.toLocaleString();
  };

  const calculateSavings = (discount: number) => {
    if (value === '' || amount === null) return 'N/A';
    const result = Math.round(amount);
    return '$' + (result * discount).toLocaleString();
  };

  return (
    <View className="flex-1 items-center justify-center">
      <BackgroundImage />

      <TabScrollable childrenContainerClassName="px-4 py-4 gap-10">
        <EquipmentCostInput inputValue={value} setInputValue={setAmount} />

        <View className="gap-4 rounded-xl border bg-[#ffffff75] px-4 py-4">
          <Section179Breakdown title="Estimated Marginal Tax Rate:" value="35%" />
          <Section179Breakdown title="Section 179 Deduction:" value={`${calculateDeduction()}`} />
          <Section179Breakdown
            title="Total First Year Deduction:"
            value={`${calculateDeduction()}`}
          />
          <Section179Breakdown title="Cash Savings:" value={`${calculateSavings(0.35)}`} />
          <Section179Breakdown
            title="Lowered Cost of Equipment:"
            value={`${calculateSavings(0.65)}`}
          />
        </View>

        <View className="mt-4 gap-2">
          <Typography className="!color-black dark:!color-black" font="geist-light" size="h1">
            Key Provisions
          </Typography>
          <View className="h-[3px] w-10 bg-[#9D2436] dark:bg-[#9D2436]"></View>
        </View>

        <View className="gap-4">
          {DATA.map((item, index) => {
            return (
              <View key={index} className="flex-1 flex-row gap-4">
                <View className="flex">
                  <View className="flex h-8 w-8 items-center justify-center rounded-full bg-tableHeaderBackground dark:bg-tableHeaderBackground-dark">
                    <Typography
                      className="!color-white dark:!color-white"
                      font="geist-black"
                      size="body-14"
                    >
                      {index + 1}
                    </Typography>
                  </View>
                </View>

                <View className="flex-1 gap-3">
                  <Typography
                    className="!color-[#A11532] dark:!color-[#A11532]"
                    font="geist-regular"
                    size="h2"
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    className="leading-7 !color-black dark:!color-black"
                    font="geist-regular"
                    size="body-16"
                  >
                    {item.description}
                  </Typography>
                </View>
              </View>
            );
          })}
        </View>

        <Button.ApplyNow />

        <Disclaimer />
        <Spacer />
      </TabScrollable>
    </View>
  );
}

const Section179Breakdown = ({ title, value }: { title: string; value: string }) => {
  return (
    <View className="gap-2">
      <Typography
        className="text-center !color-[#9D2436] dark:!color-[#9D2436]"
        font="geist-semiBold"
        size="body-16"
      >
        {title}
      </Typography>

      <Typography className="text-center dark:!color-black" font="geist-medium" size="body-16">
        {value}
      </Typography>
    </View>
  );
};
