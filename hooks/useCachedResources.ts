import { useCallback, useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Image, ImageRequireSource } from 'react-native';
import { Asset } from 'expo-asset';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from 'expo-router';

const useCachedResources = () => {
  const [appIsReady, setAppIsReady] = useState(false);
  const [fontsLoaded, error] = useFonts({
    'geist-black': require('../assets/fonts/Geist-Black.otf'),
    'geist-bold': require('../assets/fonts/Geist-Bold.otf'),
    'geist-light': require('../assets/fonts/Geist-Light.otf'),
    'geist-medium': require('../assets/fonts/Geist-Medium.otf'),
    'geist-regular': require('../assets/fonts/Geist-Regular.otf'),
    'geist-semiBold': require('../assets/fonts/Geist-SemiBold.otf'),
    'geist-thin': require('../assets/fonts/Geist-Thin.otf'),
    'geist-ultraBlack': require('../assets/fonts/Geist-UltraBlack.otf'),
    'geist-ultraLight': require('../assets/fonts/Geist-UltraLight.otf')
  });
  const [assetsCached] = useImages([
    require('../assets/images/background.jpg'),
    require('../assets/images/banner.jpg')
  ]);

  useEffect(() => {
    async function prepare() {
      try {
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        // await new Promise((resolve) => setTimeout(resolve, 5000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    if (fontsLoaded && assetsCached) prepare();
  }, [fontsLoaded, assetsCached]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      // TODO: Remove the 'setTimeout' portion of this.  Used purely for testing.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return { appIsReady, onLayoutRootView };
};

const useImages = (images: Array<ImageRequireSource | string>) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const loadImagePromises = cacheImages(images);

    Promise.all(loadImagePromises)
      .then(() => {
        setImagesLoaded(true);
      })
      .catch((error) => {
        console.error('Error pre-loading images...', error);
        setError(error);
      });
  }, [images]);

  return [imagesLoaded, error];
};

function cacheImages(images: Array<ImageRequireSource | string>) {
  return images.map((image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default useCachedResources;
