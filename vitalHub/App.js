import { StatusBar } from "expo-status-bar";
import SplashScreen from "./src/screens/SplashScreen/SplashScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Navigation } from "./src/screens/Navigation/Navigation";
import { LoginScreen } from "./src/screens/LoginScreen/LoginScreen";
import { ForgotPasswordScreen } from "./src/screens/ForgotPasswordScreen/ForgotPasswordScreen";
import { EmailVerificationScreen } from "./src/screens/EmailVerificationScreen/EmailVerificationScreen";
import { NewPasswordScreen } from "./src/screens/NewPasswordScreen/NewPasswordScreen";
import { CreateAccountScreen } from "./src/screens/CreateAccountScreen/CreateAccountScreen";
import { ProfileScreen } from "./src/screens/ProfileScreen/ProfileScreen";
import { DoctorHomeScreen } from "./src/screens/DoctorHomeScreen/DoctorHomeScreen";

import {
  useFonts,
  MontserratAlternates_500Medium,
  MontserratAlternates_600SemiBold,
  MontserratAlternates_700Bold,
} from "@expo-google-fonts/montserrat-alternates";
import {
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
} from "@expo-google-fonts/quicksand";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    MontserratAlternates_500Medium,
    MontserratAlternates_600SemiBold,
    MontserratAlternates_700Bold,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
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
          options={{ title: "LoginScreen", headerShown: false }}
        />

        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ title: "SplashScreen", headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{ title: "ForgotPassword", headerShown: false }}
        />
        <Stack.Screen
          name="EmailVerificationScreen"
          component={EmailVerificationScreen}
          options={{ title: "EmailVerification", headerShown: false }}
        />
        <Stack.Screen
          name="NewPasswordScreen"
          component={NewPasswordScreen}
          options={{ title: "NewPassword", headerShown: false }}
        />
        <Stack.Screen
          name="CreateAccountScreen"
          component={CreateAccountScreen}
          options={{ title: "CreateAccount", headerShown: false }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ title: "Profile", headerShown: false }}
        />
        <Stack.Screen
          name="DoctorHomeScreen"
          component={DoctorHomeScreen}
          options={{ title: "DoctorHome", headerShown: false }}
        />
      </Stack.Navigator>
      <StatusBar backgroundColor="transparent" translucent />
    </NavigationContainer>
  );
}
