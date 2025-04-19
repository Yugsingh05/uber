import { useAuth } from "@clerk/clerk-expo";
import { Redirect, Stack } from "expo-router";

export default function Layout() {

  const { isSignedIn } = useAuth()

  if (!isSignedIn) {
    return <Redirect href={'/sign-in'} />
  }
  return (
    <Stack>
      <Stack.Screen name="HomeScreen" options={{ headerShown: false, headerBackVisible: false, headerTransparent: true }} />
      <Stack.Screen name="Profile" options={{ headerShown: false, headerBackVisible: false, headerTransparent: true }} />
      <Stack.Screen name="Chat" options={{ headerShown: false, headerBackVisible: false, headerTransparent: true }} />
      <Stack.Screen name="Rides" options={{ headerShown: false, headerBackVisible: false, headerTransparent: true }} />
      
    </Stack>
  );
}
