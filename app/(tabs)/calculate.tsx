import SVG from '@/assets/svg';
import BackgroundImage from '@/components/atoms/BackgroundImage';
import Button from '@/components/atoms/Button';
import EquipmentCostInput, { parseAmount } from '@/components/atoms/EquipmentCostInput';
import Spacer from '@/components/atoms/Spacer';
import TabScrollable from '@/components/atoms/TabScrollable';
import Typography from '@/components/atoms/Typography';
import Tables from '@/components/molecules/Tables';
import { useTheme } from '@/context/Theme';
import { isNumber } from '@/utils/numbers';
import { useState } from 'react';
import { TextInput, View } from 'react-native';

export default function Calculate() {
  const [value, setAmount] = useState('');

  const amount = parseAmount(value);

  return (
    <View className="flex-1 items-center justify-center">
      <BackgroundImage />

      <TabScrollable childrenContainerClassName="px-4 py-4 gap-4">
        <EquipmentCostInput inputValue={value} setInputValue={setAmount} />

        <Tables inputValue={amount}>
          <Tables.Table index={0} />
          <Tables.Table index={1} />
          <Tables.Table index={2} />
        </Tables>

        <Button.ApplyNow />

        <Spacer />
      </TabScrollable>
    </View>
  );
}
