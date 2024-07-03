import React from 'react';
import { SvgProps } from 'react-native-svg';
import { tv } from 'tailwind-variants';

type Props = {
  focused: boolean;
  width: number;
  height: number;
  Icon: React.FC<SvgProps>;
  className?: string;
};

export const variants = tv({
  base: 'fill-inactiveTabBarLabel dark:fill-inactiveTabBarLabel',
  variants: {
    focused: { true: 'dark:fill-activeTabBarLabel-dark fill-activeTabBarLabel' }
  }
});

const TabBarIcon = ({ focused, Icon, className, width, height }: Props) => {
  return (
    <Icon
      width={width}
      height={height}
      className={`${variants({ focused: focused })} ${className}`}
    />
  );
};

export default TabBarIcon;
