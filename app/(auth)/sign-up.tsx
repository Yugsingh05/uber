import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import OAuth from "@/components/OAuth";
import { icons, images } from "@/constants";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";

const SignUp = () => {

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSignUn = () => {
    console.log(email, password);
  }

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
          Welcome 👋
          </Text>
        </View>

        <View className="p-5">
          

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

          <CustomButton title="Login" onPress={handleSignUn} className="mt-6"/>

          <OAuth/>

          <Link href={'/sign-in'} className="text-lg text-center text-general-200 mt-10">
          <Text>Don't have an account?</Text>
          <Text className="text-primary-500">Sign in</Text>
          </Link>



        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
