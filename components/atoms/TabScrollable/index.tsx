import { ScrollView, ScrollViewProps, View } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';

interface Props extends ScrollViewProps {
  children: React.ReactNode;
  useHeaderInsets?: boolean;
  childrenContainerClassName?: string;
  scrollViewClassName?: string;
}

const TabScrollable = ({
  children,
  useHeaderInsets = true,
  childrenContainerClassName,
  scrollViewClassName,
  bounces
}: Props) => {
  const headerHeight = useHeaderHeight();
  const marginTop = useHeaderInsets ? headerHeight : 0;

  return (
    <ScrollView
      style={{ flex: 1, width: '100%' }}
      className={scrollViewClassName}
      bounces={bounces}
    >
      <View className={childrenContainerClassName} style={{ marginTop: marginTop }}>
        {children}
      </View>
    </ScrollView>
  );
};

export default TabScrollable;
