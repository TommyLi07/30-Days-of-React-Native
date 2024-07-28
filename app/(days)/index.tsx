import { days } from '@/configs';
import FontAwesomeIcon from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import {
	Dimensions,
	FlatList,
	Image,
	Pressable,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import Swiper from 'react-native-swiper';

export default function Index() {
	return (
		<FlatList
			style={styles.container}
			ListHeaderComponent={() => (
				<Swiper
					height={150}
					showsButtons={false}
					autoplay={true}
					showsPagination={false}
					index={0}
				>
					<Image
						style={styles.image}
						source={require('@/assets/images/home/home1.png')}
					></Image>
					<Image
						style={styles.image}
						source={require('@/assets/images/home/home2.png')}
					></Image>
				</Swiper>
			)}
			data={days}
			renderItem={({ item, index }) => (
				<Pressable
					key={item.key}
					style={({ pressed }) => [
						styles.boxContainer,
						pressed && styles.opacity,
					]}
					onPress={() => {
						router.push({
              pathname: `/${item.route}`,
              params: {title: item.title},
						});
					}}
				>
					<View style={styles.boxContainer}>
						<View style={styles.boxIconContainer}>
							{item.isFAIcon ? (
								<FontAwesomeIcon
									size={item.size}
									name={item.icon as keyof typeof FontAwesomeIcon.glyphMap}
									style={{ color: item.color }}
								/>
							) : (
								<Ionicons
									size={item.size}
									name={item.icon as keyof typeof Ionicons.glyphMap}
									style={{ color: item.color }}
								/>
							)}
						</View>

						<Text style={styles.boxText}>Day{index + 1}</Text>
					</View>
				</Pressable>
			)}
			numColumns={3}
		></FlatList>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		width: Dimensions.get('window').width,
		height: 150,
	},
	boxContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		width: Dimensions.get('window').width / 3,
		height: Dimensions.get('window').width / 3,
		borderWidth: 0.5,
		borderColor: 'gray',
		padding: 16,
	},
	boxIconContainer: {
		flex: 1,
		justifyContent: 'center',
	},
	boxText: {
		marginTop: 16,
		textAlign: 'center',
	},
	opacity: {
		opacity: 0.4,
	},
});
