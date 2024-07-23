import { Stack } from 'expo-router';

export default function RootLayout() {
	return (
		<Stack>
			<Stack.Screen name='(days)' options={{ headerShown: false }} />
			<Stack.Screen name='+not-found' />
		</Stack>
	);
}
