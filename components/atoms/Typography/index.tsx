import { Text, TextProps } from 'react-native';
import { tv, type VariantProps } from 'tailwind-variants';

/**
 * For reference of font weights:
 * Thin or Hairline: 100
 * Extra Light or Ultra Light: 200
 * Light: 300
 * Regular or Normal: 400
 * Medium: 500
 * Semi-Bold or Demi-Bold: 600
 * Bold: 700
 * Extra Bold or Ultra Bold: 800
 * Black or Heavy: 900
 */
export const variants = tv({
  base: 'color-text dark:color-text-dark font-geist-regular text-body-14',
  variants: {
    font: {
      'geist-regular': 'font-geist-regular',
      'geist-black': 'font-geist-black',
      'geist-bold': 'font-geist-bold',
      'geist-light': 'font-geist-light',
      'geist-medium': 'font-geist-medium',
      'geist-semiBold': 'font-geist-semiBold',
      'geist-thin': 'font-geist-thin',
      'geist-ultraBlack': 'font-geist-ultraBlack',
      'geist-ultraLight': 'font-geist-ultraLight'
    },
    size: {
      'display-1': 'text-display-1',
      'display-2': 'text-display-2',
      'display-3': 'text-display-3',
      'display-4': 'text-display-4',
      'display-5': 'text-display-5',
      'display-6': 'text-display-6',
      'display-7': 'text-display-7',
      'display-8': 'text-display-8',
      h1: 'text-h1',
      h2: 'text-h2',
      h3: 'text-h3',
      'eyebrow-12': 'text-eyebrow-12',
      'eyebrow-10': 'text-eyebrow-10',
      'body-20': 'text-body-20',
      'body-18': 'text-body-18',
      'body-16': 'text-body-16',
      'body-14': 'text-body-14',
      'body-12': 'text-body-12',
      'body-10': 'text-body-10'
    }
  }
});

// TODO: Look to remove this.  It is being used in one other component at the moment for a TextInput
export const typography = variants;

type TypographyVariants = VariantProps<typeof variants>;

interface Props extends TypographyVariants, TextProps {
  children: React.ReactNode;
  className?: string;
}

function Typography({ font, size, children, className, ...props }: Props) {
  return (
    <Text className={`${variants({ font: font, size: size })} ${className}`} {...props}>
      {children}
    </Text>
  );
}

export default Typography;
