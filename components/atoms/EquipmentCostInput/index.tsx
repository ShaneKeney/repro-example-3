import SVG from '@/assets/svg';
import { TextInput, View } from 'react-native';
import Typography from '../Typography';
import { useTheme } from '@/context/Theme';
import { useState } from 'react';
import { isNumber } from '@/utils/numbers';

type Props = {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
};

const EquipmentCostInput = ({ inputValue, setInputValue }: Props) => {
  const { isDarkMode } = useTheme();

  const onChangeText = (text: string) => {
    // Remove existing commas and format the text with new commas
    const formattedText = text.replace(/,/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    setInputValue(formattedText);
  };

  return (
    <View className="gap-4 rounded-xl bg-[#ffffff45] px-4 py-4 border">
      <Typography className="!color-black dark:color-black" size="body-18" font="geist-medium">
        Equipment or Software Cost:
      </Typography>

      <View className="flex-row rounded-xl border border-gray-400 bg-white pl-4 ">
        <View className="absolute left-4 top-0 z-10 h-full flex-1 justify-center">
          <SVG.DollarSign className="fill-gray-400" height={16} width={16} />
        </View>
        <TextInput
          className="flex-1 py-4 pl-6 text-[20px]"
          placeholder="Enter Amount"
          placeholderTextColor={'#D1D5DB'}
          inputMode="numeric"
          keyboardAppearance={isDarkMode ? 'dark' : 'light'}
          autoFocus={true}
          onChangeText={onChangeText}
          selectionColor={'black'}
          returnKeyType="done"
          value={inputValue}
        />
      </View>
    </View>
  );
};

export const parseAmount = (inputValue: string) => {
  const numberRemoveCommas = inputValue.replace(/,/g, '');
  if (isNumber(numberRemoveCommas)) return parseFloat(numberRemoveCommas);
  return null;
};

export default EquipmentCostInput;
