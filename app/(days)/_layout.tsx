import Ionicons from '@expo/vector-icons/Ionicons';
import { router, Stack } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function RootLayout() {
	return (
		<Stack
			screenOptions={{
				headerLeft: () => (
					<TouchableOpacity style={styles.button} onPress={() => router.back()}>
						<Ionicons name='arrow-back' size={24} />
						<Text style={styles.buttonText}>Home</Text>
					</TouchableOpacity>
				),
			}}
		>
			<Stack.Screen
				name='index'
				options={{ title: '30 Days of React Native', headerLeft: () => null }}
			/>
			;
			<Stack.Screen name='day1' />
			<Stack.Screen name='day2' />
		</Stack>
	);
}

const styles = StyleSheet.create({
	button: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	buttonText: {
		marginLeft: 10,
		fontSize: 18,
	},
});
