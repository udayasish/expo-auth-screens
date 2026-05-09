import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as SystemUI from "expo-system-ui";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const APP_BG = "#0F0F10";

SystemUI.setBackgroundColorAsync(APP_BG);

const navTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: APP_BG,
    card: APP_BG,
  },
};

export default function RootLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: APP_BG }}>
      <SafeAreaProvider>
        <ThemeProvider value={navTheme}>
          <StatusBar style="light" />
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: { backgroundColor: APP_BG },
              navigationBarColor: APP_BG,
              animation: "slide_from_right",
            }}
          />
        </ThemeProvider>
      </SafeAreaProvider>
    </View>
  );
}
