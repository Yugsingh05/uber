import CustomButton from "@/components/CustomButton";
import { onboarding } from "@/constants";
import { Redirect, useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";

const Welcome = () => {
  const router = useRouter();
  const swiperRef = useRef<Swiper>(null);
  const [ActiveIndex,setActiveIndex] = useState(0);
  const isLastIndex = ActiveIndex === onboarding.length - 1;

  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <TouchableOpacity
        className="w-full justify-end items-end p-5"
        onPress={() => router.replace("/sign-in")}
      >
        <Text className="text-black text-lg font-JakartaBold">Skip</Text>
      </TouchableOpacity>

      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full" />}
        activeDot={<View className="w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full" />}
        onIndexChanged={(index) => setActiveIndex(index)}
      >

{onboarding.map((item, index) => {
  return (
    <View key={item.id} className="flex items-center justify-center">
      <Image source={item.image} 
      className="w-full h-[300px]"
      resizeMode="contain"/>

      
    <View className="flex flex-row items-center justify-center w-full mt-10">
      <Text className="text-black text-3xl font-bold mx-10 text-center">{item.title}</Text>
      </View>

      <Text className="text-lg font-JakartaSemiBold text-center text-[#6B7280] mx-10 mt-3">{item.description}</Text>
      
    </View>

  )})}

      </Swiper>

      <CustomButton title={isLastIndex ? "Get Started" : "Next"} 
      onPress={() => isLastIndex ? router.replace("/sign-in") : swiperRef.current?.scrollBy(1)}
      className="w-11/12 mt-10"
      />
    </SafeAreaView>
  );
};

export default Welcome;
