import { Redirect, useRouter } from 'expo-router'
import React from 'react'
import { Button, Text, View } from 'react-native'

 const Home = () => {
  const router = useRouter();
  return<View>

<Button title='Welcome' onPress={() => router.push('/welcome')} />
      <Button title='Login' onPress={() => router.push('/sign-up')} />
      <Button title='Sign in' onPress={() => router.push('/sign-in')}/>
    </View>
}

export default Home
