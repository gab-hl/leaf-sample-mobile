import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { BottomSheetProvider, LeafProvider } from '@herbalifedev/leaf-mobile';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync();

const herbalifeFonts = {
  'HerbalifeNatural-Thin': require('../assets/fonts/HerbalifeNatural_otf/HerbalifeNatural-Thin.otf'),
  'HerbalifeNatural-Light': require('../assets/fonts/HerbalifeNatural_otf/HerbalifeNatural-Light.otf'),
  'HerbalifeNatural-Regular': require('../assets/fonts/HerbalifeNatural_otf/HerbalifeNatural-Regular.otf'),
  'HerbalifeNatural-Medium': require('../assets/fonts/HerbalifeNatural_otf/HerbalifeNatural-Medium.otf'),
  'HerbalifeNatural-Bold': require('../assets/fonts/HerbalifeNatural_otf/HerbalifeNatural-Bold.otf'),
  'HerbalifeWalsheimGT-Thin': require('../assets/fonts/HerbalifeWalsheimGT_desktopOTFs/Herbalife-Walsheim-GT-Thin.otf'),
  'HerbalifeWalsheimGT-Light': require('../assets/fonts/HerbalifeWalsheimGT_desktopOTFs/Herbalife-Walsheim-GT-Light.otf'),
  'HerbalifeWalsheimGT-Regular': require('../assets/fonts/HerbalifeWalsheimGT_desktopOTFs/Herbalife-Walsheim-GT-Regular.otf'),
  'HerbalifeWalsheimGT-Regular-Oblique': require('../assets/fonts/HerbalifeWalsheimGT_desktopOTFs/Herbalife-Walsheim-GT-Regular-Oblique.otf'),
  'HerbalifeWalsheimGT-Medium': require('../assets/fonts/HerbalifeWalsheimGT_desktopOTFs/Herbalife-Walsheim-GT-Medium.otf'),
  'HerbalifeWalsheimGT-Bold': require('../assets/fonts/HerbalifeWalsheimGT_desktopOTFs/Herbalife-Walsheim-GT-Bold.otf'),
  'HerbalifeWalsheimGT-Black': require('../assets/fonts/HerbalifeWalsheimGT_desktopOTFs/Herbalife-Walsheim-GT-Black 1 1.otf'),
} as const;

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts(herbalifeFonts);

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <LeafProvider>
        <BottomSheetProvider>
          <ThemeProvider value={DefaultTheme}>
            <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="examples" options={{ headerShown: false }} />
              <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
            </Stack>
            <StatusBar style="auto" />
          </ThemeProvider>
        </BottomSheetProvider>
      </LeafProvider>
    </SafeAreaProvider>
  );
}
