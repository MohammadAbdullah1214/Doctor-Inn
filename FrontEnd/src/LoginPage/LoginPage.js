import React from "react";
import styles from "./LoginPageStyle";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Text,
  ScrollView,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Button, SocialIcon } from "react-native-elements";
import * as Facebook from "expo-facebook";

const appId = "1047121222092614";

export default function LoginPage({ navigation }) { // Ensure navigation prop is passed
  const onLoginPress = () => {
    navigation.navigate('Home'); // Navigate to HomeScreen
  };

  const onFbLoginPress = async () => {
    Alert.alert(
      `Please use our React Native Starer Kit instead. You can download it for free at https://instamobile.io`
    );
    // try {
    //   await Facebook.initializeAsync({
    //     appId,
    //   });
    //   const { type, token } = await Facebook.logInWithReadPermissionsAsync({
    //     permissions: ["public_profile", "email"],
    //   });
    //   if (type === "success") {
    //     const response = await fetch(
    //       `https://graph.facebook.com/me?access_token=${token}`
    //     );
    //     Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
    //   }
    // } catch ({ message }) {
    //   Alert.alert(`Facebook Login Error: ${message}`);
    // }
  };

  return (
    <ScrollView>
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <Text style={styles.logoText}>The</Text><Text style={styles.logoColor}> Doctors Inn</Text>
            <TextInput
              placeholder="Username"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
            />
            <TextInput
              placeholder="Password"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
              secureTextEntry={true}
            />
            <Button
              buttonStyle={styles.loginButton}
              onPress={() => onLoginPress()}
              title="Login"
            />
            <Button
              containerStyle={styles.fbLoginButton}
              type="clear"
              onPress={() => onFbLoginPress()}
              title="Login With Facebook"
            />

          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    </ScrollView>
  );

};