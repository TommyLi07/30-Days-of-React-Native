import { WeatherSlide } from '@/components';
import { weatherData } from '@/configs';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { router, Stack, useLocalSearchParams } from 'expo-router';
import React, { memo } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';

const day2 = memo(() => {
	const item = useLocalSearchParams();

	const { bottom } = useSafeAreaInsets();

	return (
		<View style={styles.container}>
			<Stack.Screen
				options={{
					title: item.title as string,
				}}
			/>

			<Swiper
				showsPagination={true}
				loop={false}
				dot={<View style={styles.dot} />}
				activeDot={<View style={styles.activeDot} />}
			>
				{weatherData.map((data) => {
					return <WeatherSlide key={data.key} data={data} />;
				})}
			</Swiper>

			<View style={[styles.buttonContainer, { height: bottom + 20 }]}>
				<Pressable
					onPress={() => router.back()}
					style={({ pressed }) => [pressed && styles.opacity, styles.button]}
				>
					<FontAwesome size={18} name='list-alt' color='#fff'></FontAwesome>
				</Pressable>
			</View>
		</View>
	);
});

export default day2;

const styles = StyleSheet.create({
	container: {
		width: '100%',
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#f3f3f3',
	},
	dot: {
		backgroundColor: 'rgba(255,255,255,0.2)',
		width: 6,
		height: 6,
		borderRadius: 3,
		margin: 3,
	},
	activeDot: {
		backgroundColor: 'rgba(255,255,255,0.5)',
		width: 6,
		height: 6,
		borderRadius: 3,
		margin: 3,
	},
	buttonContainer: {
		width: '100%',
		borderTopWidth: 1,
		borderTopColor: '#fff',
		position: 'absolute',
		left: 0,
		bottom: 0,
		justifyContent: 'center',
		backgroundColor: 'transparent',
	},
	button: {
		height: '100%',
		justifyContent: 'center',
		alignSelf: 'flex-end',
		marginRight: 20,
	},
	opacity: {
		opacity: 0.4,
	},
});
