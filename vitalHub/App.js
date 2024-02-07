import { StatusBar } from "expo-status-bar";
import SplashScreen from "./src/screens/SplashScreen/SplashScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Navigation } from "./src/screens/Navigation/Navigation";
import { LoginScreen } from "./src/screens/LoginScreen/LoginScreen";
import { ForgotPasswordScreen } from "./src/screens/ForgotPasswordScreen/ForgotPasswordScreen";
import { EmailVerificationScreen } from "./src/screens/EmailVerificationScreen/EmailVerificationScreen";

import {
  useFonts,
  MontserratAlternates_500Medium,
  MontserratAlternates_600SemiBold,
  MontserratAlternates_700Bold,
} from "@expo-google-fonts/montserrat-alternates";
import { Quicksand_500Medium } from "@expo-google-fonts/quicksand";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    MontserratAlternates_500Medium,
    MontserratAlternates_600SemiBold,
    MontserratAlternates_700Bold,
    Quicksand_500Medium,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    //container - envolve toda a estrutura de navegacao
    //navigator - componente de navegacao
    //screen - tela
    //name - nome da tela
    //component - componente que sera chamado
    //option(title) - titulo da tela

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Navigation"
          component={Navigation}
          options={{ title: "Navigation" }}
        />

        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ title: "LoginScreen" }}
        />

        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ title: "SplashScreen" }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{ title: "ForgotPassword" }}
        />
        <Stack.Screen
          name="EmailVerification"
          component={EmailVerificationScreen}
          options={{ title: "EmailVerification" }}
        />
      </Stack.Navigator>
      <StatusBar backgroundColor="transparent" translucent />
    </NavigationContainer>
  );
}
