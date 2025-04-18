import { Stack } from "expo-router";

export const layout = () => {
    return <Stack>
        <Stack.Screen name="welcome" options={{headerShown: false}} />
        <Stack.Screen name="(auth)/sign-in" options={{headerShown: false}}/>
        <Stack.Screen name="sign-up" options={{headerShown: false}}/>
    </Stack>;
};