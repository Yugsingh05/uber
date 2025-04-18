import { Redirect, useRouter } from 'expo-router'
import React from 'react'
import { Button, Text, View } from 'react-native'

 const Welcome = () => {
  const router = useRouter();
  return (
  <View>
    <Button title='Login' onPress={() => router.push('/sign-up')} />
    <Button title='Sign in' onPress={() => router.push('/sign-in')}/>
    <Button title='HomeScreen' onPress={() => router.push('/HomeScreen')}/>
  </View>
  )
}

export default Welcome