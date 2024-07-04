const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './hooks/**/*.{js,jsx,ts,tsx}',
    './utils/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'selector',
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        // Example custom font.  Requires custom font to be loaded via expo-font.  See useCachedResources.ts and README.md.
        'geist-regular': ['geist-regular'],
        'geist-black': ['geist-black'],
        'geist-bold': ['geist-bold'],
        'geist-light': ['geist-light'],
        'geist-medium': ['geist-medium'],
        'geist-semiBold': ['geist-semiBold'],
        'geist-thin': ['geist-thin'],
        'geist-ultraBlack': ['geist-ultraBlack'],
        'geist-ultraLight': ['geist-ultraLight']
      },
      colors: {
        background: colors.gray[100],
        backgroundDark: colors.stone[800],

        text: '#000000',
        'text-dark': '#FFFFFF',

        tabBarBackground: '#FFFFFF',
        'tabBarBackground-dark': colors.stone[900],

        activeTabBarLabel: '#000000',
        'activeTabBarLabel-dark': '#FFFFFF',
        inactiveTabBarLabel: '#8E8E8F',

        tableHeaderBackground: '#3F4040',
        'tableHeaderBackground-dark': '#3F4040'
      },
      fontSize: {
        'display-1': ['64px'],
        'display-2': ['54px'],
        'display-3': ['42px'],
        'display-4': ['36px'],
        h1: ['32px'],
        h2: ['24px'],
        h3: ['22px'],
        'eyebrow-12': ['12px'],
        'eyebrow-10': ['10px'],
        'body-20': ['20px'],
        'body-18': ['18px'],
        'body-16': ['16px'],
        'body-14': ['14px'],
        'body-12': ['12px'],
        'body-10': ['10px']
      }
    }
  },
  plugins: []
};
