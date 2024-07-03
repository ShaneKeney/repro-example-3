// WARNING THIS ISN'T VERSIONED
import { ExpoConfig, ConfigContext } from '@expo/config';

export const ENV = {
  EXPO_PUBLIC_APP_DISPLAY_NAME: '(Dev) Reliant',
  EXPO_PUBLIC_PACKAGE: 'com.reliant.mobile.dev',
  EXPO_PUBLIC_FOREGROUND_IMAGE: './assets/adaptive-icon.png',
  EXPO_PUBLIC_SCHEME: 'reliantdev',
  EXPO_PUBLIC_BUNDLE_ID: 'com.reliant.mobile.dev',
  EXPO_PUBLIC_ICON_PATH: './assets/dev/icon.dev.png',
  EXPO_PUBLIC_APP_VERSION: '2.2',
  EXPO_PUBLIC_ANDROID_VERSION_CODE: '2000002',
  EXPO_PUBLIC_BUILD_NUMBER: '1',
  EXPO_PUBLIC_OTA: '0',
  EXPO_PUBLIC_ADAPTIVE_BACKGROUND: '#4ade80'
};

if (process.env.APP_ENV === 'production') {
  setupProductionEnvironment();
} else if (process.env.APP_ENV === 'staging') {
  setupStagingEnvironment();
} else {
  // Development environemnt is configured based on the .env file
}

// See https://docs.expo.dev/versions/latest/config/app/
export default ({ config }: ConfigContext): ExpoConfig => ({
  // Spreads static configuration from app.json if we want to seperate out and be more
  // explicit about what should / and should not change
  ...config,
  name: ENV.EXPO_PUBLIC_APP_DISPLAY_NAME || '(Dev) Reliant',
  owner: 'reliant-capital',
  slug: 'reliant',
  description:
    'Expo Router & Nativewind Template to quick project spin up.  Configured environments, EAS profiles & more!',
  privacy: 'hidden',
  platforms: ['android', 'ios', 'web'],
  scheme: ENV.EXPO_PUBLIC_SCHEME,
  version: ENV.EXPO_PUBLIC_APP_VERSION,
  orientation: 'portrait',
  icon: ENV.EXPO_PUBLIC_ICON_PATH,
  userInterfaceStyle: 'automatic',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#FFFFFF'
  },
  updates: {
    fallbackToCacheTimeout: 1000,
    url: 'https://u.expo.dev/036c74e4-180c-4ac3-824c-2d27092aafd2'
  },
  runtimeVersion: {
    policy: 'appVersion'
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    bundleIdentifier: ENV.EXPO_PUBLIC_BUNDLE_ID,
    buildNumber: ENV.EXPO_PUBLIC_BUILD_NUMBER,
    supportsTablet: true
  },
  android: {
    package: ENV.EXPO_PUBLIC_PACKAGE,
    adaptiveIcon: {
      foregroundImage: ENV.EXPO_PUBLIC_FOREGROUND_IMAGE,
      backgroundColor: ENV.EXPO_PUBLIC_ADAPTIVE_BACKGROUND
    },
    versionCode: parseInt(ENV.EXPO_PUBLIC_ANDROID_VERSION_CODE || '1')
  },
  web: {
    bundler: 'metro',
    output: 'static',
    favicon: './assets/images/favicon.png'
  },
  extra: {
    ...ENV,
    eas: {
      projectId: '036c74e4-180c-4ac3-824c-2d27092aafd2'
    }
  },
  experiments: {
    typedRoutes: true,
    tsconfigPaths: true
  },
  plugins: ['expo-font', 'expo-router']
});

// TODO: Potentially remove having leveraged .env files and eas.json instead
function setupProductionEnvironment() {
  ENV.EXPO_PUBLIC_APP_DISPLAY_NAME = 'Reliant';
  ENV.EXPO_PUBLIC_PACKAGE = 'com.reliant.mobile';
  ENV.EXPO_PUBLIC_FOREGROUND_IMAGE = './assets/adaptive-icon.png';
  ENV.EXPO_PUBLIC_SCHEME = 'reliant';
  ENV.EXPO_PUBLIC_BUNDLE_ID = 'com.reliantcapitalgrp.rcfinancecalculator';
  ENV.EXPO_PUBLIC_ICON_PATH = './assets/icon.png';
  ENV.EXPO_PUBLIC_APP_VERSION = '2.2';
  ENV.EXPO_PUBLIC_ANDROID_VERSION_CODE = '2000002';
  ENV.EXPO_PUBLIC_BUILD_NUMBER = '1';
  ENV.EXPO_PUBLIC_OTA = '0';
  ENV.EXPO_PUBLIC_ADAPTIVE_BACKGROUND = '#ffffff';
}

// TODO: Potentially remove having leveraged .env files and eas.json instead
function setupStagingEnvironment() {
  ENV.EXPO_PUBLIC_APP_DISPLAY_NAME = '(UAT) Reliant';
  ENV.EXPO_PUBLIC_PACKAGE = 'com.reliant.mobile.uat';
  ENV.EXPO_PUBLIC_FOREGROUND_IMAGE = './assets/adaptive-icon.png';
  ENV.EXPO_PUBLIC_SCHEME = 'reliantuat';
  ENV.EXPO_PUBLIC_BUNDLE_ID = 'com.reliant.mobile.uat';
  ENV.EXPO_PUBLIC_ICON_PATH = './assets/staging/icon.staging.png';
  ENV.EXPO_PUBLIC_APP_VERSION = '2.2';
  ENV.EXPO_PUBLIC_ANDROID_VERSION_CODE = '2000002';
  ENV.EXPO_PUBLIC_BUILD_NUMBER = '1';
  ENV.EXPO_PUBLIC_OTA = '0';
  ENV.EXPO_PUBLIC_ADAPTIVE_BACKGROUND = '#facc15';
}
