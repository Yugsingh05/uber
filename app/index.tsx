import { Redirect, useRouter } from 'expo-router'
import React from 'react'
import { Button, Text, View } from 'react-native'

 const Home = () => {
  const router = useRouter();
  return  <Redirect href="/welcome" />
}

export default Home
