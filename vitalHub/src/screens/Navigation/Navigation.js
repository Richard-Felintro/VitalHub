import { Button, View } from "react-native";

export const Navigation = ({ navigation }) => {
  return (
    <View>
      <Button
        title="login"
        onPress={() => navigation.navigate("LoginScreen")}
      />
      <Button
        title="splash"
        onPress={() => navigation.navigate("SplashScreen")}
      />
      <Button
        title="forgot password"
        onPress={() => navigation.navigate("ForgotPassword")}
      />
      <Button
        title="email verification"
        onPress={() => navigation.navigate("EmailVerificationScreen")}
      />
      <Button
        title="new password"
        onPress={() => navigation.navigate("NewPasswordScreen")}
      />
      <Button
        title="create account"
        onPress={() => navigation.navigate("CreateAccountScreen")}
      />
      <Button
        title="profile"
        onPress={() => navigation.navigate("ProfileScreen")}
      />
      <Button
        title="patient home"
        onPress={() => navigation.navigate("PatientHomeScreen")}
      />
    </View>
  );
};
