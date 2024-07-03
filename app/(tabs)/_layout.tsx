import SVG from '@/assets/svg';
import TabBarIcon from '@/components/atoms/TabBarIcon';
import HeaderRightButtons from '@/components/molecules/HeaderRightButtons';
import { Tabs } from 'expo-router/tabs';
import { BlurView } from 'expo-blur';
import { getHeaderTitle } from '@react-navigation/elements';
import { View, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Typography from '@/components/atoms/Typography';
import tailwindConfig from '@/utils/tailwind';
import { useTheme } from '@/context/Theme';
import platform from '@/utils/platform';

export default function TabsLayout() {
  const { top } = useSafeAreaInsets();
  const { isDarkMode } = useTheme();

  console.log(isDarkMode);
  return (
    <Tabs
      screenOptions={{
        headerRight: () => <HeaderRightButtons />,
        header: ({ navigation, route, options }) => {
          const title = getHeaderTitle(options, route.name);
          const HeaderRightButtons = options.headerRight;

          return (
            <BlurView
              style={{
                paddingTop: top
              }}
              intensity={100}
              tint={isDarkMode ? 'dark' : 'light'}
              // TODO: Commenting out to see if this is causing crashing on Android
              // experimentalBlurMethod="dimezisBlurView"
            >
              <View className="my-2 flex-1 flex-row items-center justify-between">
                <Typography className="ml-4 mr-auto text-xl" font="geist-semiBold">
                  {title}
                </Typography>
                {HeaderRightButtons && <HeaderRightButtons />}
              </View>
            </BlurView>
          );
        },
        headerTransparent: true,
        tabBarStyle: {
          backgroundColor: isDarkMode
            ? tailwindConfig.theme.colors['tabBarBackground-dark']
            : tailwindConfig.theme.colors['tabBarBackground'],
          borderTopWidth: 0
        },
        tabBarActiveTintColor: isDarkMode
          ? tailwindConfig.theme.colors['text-dark']
          : tailwindConfig.theme.colors['text'],
        tabBarItemStyle: {
          marginBottom: platform.isAndroid ? 4 : undefined
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Welcome',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              Icon={focused ? SVG.HouseFill : SVG.House}
              focused={focused}
              width={18}
              height={18}
            />
          )
        }}
      />
      <Tabs.Screen
        name="calculate"
        options={{
          title: 'Calculate Payment',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon Icon={SVG.CalculatorFill} focused={focused} width={18} height={18} />
          ),
          tabBarButton: (props) => {
            const { onPress, accessibilityState } = props;
            return (
              <BlurView
                className="-mt-8 h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-tabBarBackground dark:bg-tabBarBackground-dark"
                tint={isDarkMode ? 'dark' : 'light'}
                // TODO: Commenting out to see if this is causing crashing on Android
                // experimentalBlurMethod="dimezisBlurView"
              >
                <TouchableOpacity
                  className="h-16 w-16 items-center justify-center rounded-full border border-tabBarBackground-dark bg-tabBarBackground dark:border-tabBarBackground dark:bg-tabBarBackground-dark"
                  onPress={onPress}
                >
                  <TabBarIcon
                    Icon={SVG.CalculatorFill}
                    focused={accessibilityState?.selected || false}
                    width={23}
                    height={23}
                  />
                </TouchableOpacity>
              </BlurView>
            );
          }
        }}
      />

      <Tabs.Screen
        name="section179"
        options={{
          title: 'Section 179',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon Icon={SVG.Document} focused={focused} width={18} height={18} />
          )
        }}
      />
    </Tabs>
  );
}
