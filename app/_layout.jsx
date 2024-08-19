import { Stack, SplashScreen} from 'expo-router/stack';
import React, { useEffect } from 'react';

// SplashScreen.preventAutoHideAsync();

export default function Layout() {

  // useEffect(() => {
  //   if (error) throw error;
  //   if (fontsLoaded) SplashScreen.hideAsync();
  // }, [fontsLoaded, error]);

  // if (!fontsLoaded) return null;
  // if (!fontsLoaded && !error) return null;
  
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
    </Stack>
  );
}
