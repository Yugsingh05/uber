import { SignedIn, SignedOut, useAuth, useUser } from '@clerk/clerk-expo'
import { Link } from 'expo-router'
import { Button, Text, View } from 'react-native'
// import { SignOutButton } from '@/app/components/SignOutButton'

export default function Page() {
  const { user } = useUser()
  const { signOut } = useAuth();

  return (
    <View>
      <SignedIn>
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
        <Button title='Sign out' onPress={signOut} />

        {/* <SignOutButton /> */}
      </SignedIn>
      <SignedOut>
        <Link href="/(auth)/sign-in">
          <Text>Sign in</Text>
        </Link>
        <Link href="/(auth)/sign-up">
          <Text>Sign up</Text>
        </Link>
      </SignedOut>
    </View>
  )
}