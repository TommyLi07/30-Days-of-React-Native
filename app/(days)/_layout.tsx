import Ionicons from '@expo/vector-icons/Ionicons';
import { router, Stack } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function RootLayout() {
	return (
		<Stack>
			<Stack.Screen
				name='index'
				options={{ title: '30 Days of React Native' }}
			/>
			;
			<Stack.Screen
				name='day1'
				options={{
					title: 'Day 1',
					headerLeft: () => (
						<TouchableOpacity
							style={styles.button}
							onPress={() => router.back()}
						>
							<Ionicons name='arrow-back' size={24} />
							<Text style={styles.buttonText}>Home</Text>
						</TouchableOpacity>
					),
				}}
			/>
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
