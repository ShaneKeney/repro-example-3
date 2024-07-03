import React from 'react';
import { TouchableOpacity } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { tv } from 'tailwind-variants';

/*
  Use Icon when you need that Icon to invoke an action onPress.
*/
type Props = {
  focused: boolean;
  width: number;
  height: number;
  Icon: React.FC<SvgProps>;
  className?: string;
  onClick?: () => void;
};

export const variants = tv({
  base: 'fill-gray-500',
  variants: {
    focused: { true: 'fill-black' }
  }
});

const Icon = ({ focused, Icon, className, onClick }: Props) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <Icon className={`${variants({ focused })} ${className}`} />
    </TouchableOpacity>
  );
};

export default Icon;
