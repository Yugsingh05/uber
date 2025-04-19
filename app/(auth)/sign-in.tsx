import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import OAuth from "@/components/OAuth";
import { icons, images } from "@/constants";
import { useSignUp } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Image, ScrollView, Text, TextInput, View } from "react-native";
import {ReactNativeModal} from 'react-native-modal'

const SignIn = () => {
  const [name, setName] = useState("");
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();
  const [pendingVerification, setPendingVerification] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onSignUpPress = async () => {
    if (!isLoaded) return;

    // Start sign-up process using email and password provided
    try {
      await signUp.create({
        emailAddress: email,
        password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setPendingVerification(true);
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  const onVerifyPress = async () => {
    if (!isLoaded) return;

    try {
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (signUpAttempt.status === "complete") {
        await setActive({ session: signUpAttempt.createdSessionId });
        router.replace("/");
      } else {
        console.error(JSON.stringify(signUpAttempt, null, 2));
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
      Alert.alert("Error", JSON.stringify(err, null, 2));
    }
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Create Your Account
          </Text>
        </View>

        <View className="p-5">
          <InputField
            label="Name"
            placeholder="Enter your name"
            icon={icons.person}
            value={name}
            onChangeText={setName}
          />

          <InputField
            label="Email"
            placeholder="Enter your email"
            icon={icons.email}
            value={email}
            onChangeText={setEmail}
          />

          <InputField
            label="password"
            placeholder="Enter your password"
            icon={icons.lock}
            value={password}
            secureTextEntry
            onChangeText={setPassword}
          />

          <CustomButton
            title="sign in"
            onPress={onSignUpPress}
            className="mt-6"
          />

          <OAuth />

          <Link
            href={"/sign-up"}
            className="text-lg text-center text-general-200 mt-10"
          >
            <Text>Already have an account?</Text>
            <Text className="text-primary-500">Log In</Text>
          </Link>
        </View>

        <ReactNativeModal isVisible={isSuccess}>
          <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
            <Image
            source={images.check} className="w-[110px] h-[110px] mx-auto my-5"/>

            <Text className="text-2xl font-JakartaSemiBold text-black text-center">
              Account Verfied
            </Text>

            <Text className="text-lg font-JakartaRegular text-black text-center">
              You have successfully created your account
            </Text>


          </View>

        </ReactNativeModal>
      </View>
    </ScrollView>
  );
};

export default SignIn;
