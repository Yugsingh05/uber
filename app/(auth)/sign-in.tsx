import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import OAuth from "@/components/OAuth";
import { icons, images } from "@/constants";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";

const SignIn = () => {
  const [name, setName] = useState("");

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSignIn = () => {
    console.log(name, email, password);
  }

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

          <CustomButton title="sign in" onPress={handleSignIn} className="mt-6"/>

          <OAuth/>

          <Link href={'/sign-up'} className="text-lg text-center text-general-200 mt-10">
          <Text>Already have an account?</Text>
          <Text className="text-primary-500">Log In</Text>
          </Link>



        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;
