import { ThemeProvider } from "styled-components/native";
import { AppProvider, UserProvider } from "@realm/react";
import { StatusBar } from "react-native";
import { REALME_APP_ID } from "@env";
import theme from "./src/theme";
import { SignIn } from "./src/screens/signIn";
import { Routes } from "./src/routes";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

export default function App() {
  const [fontLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontLoaded) {
    return;
  }
  return (
    <AppProvider id={REALME_APP_ID}>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <StatusBar
            barStyle={"light-content"}
            backgroundColor={"transparent"}
            translucent
          />
          <UserProvider fallback={SignIn}>
            <Routes />
          </UserProvider>
        </SafeAreaProvider>
      </ThemeProvider>
    </AppProvider>
  );
}
