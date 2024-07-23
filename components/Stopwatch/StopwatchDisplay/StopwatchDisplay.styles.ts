import { Layout } from '@/constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	watchFaceContainer: {
		width: Layout.window.width,
		height: 170,
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 40,
		backgroundColor: '#fff',
		borderBottomWidth: 1,
		borderBottomColor: '#ddd',
	},
	sectionTime: {
		fontSize: 20,
		fontWeight: '100',
		color: '#555',
		alignSelf: 'flex-end',
		paddingRight: 70,
	},
	totalTime: {
		fontSize: Layout.window.width === 375 ? 80 : 70,
		fontWeight: '100',
		color: '#222',
	},
});

export default styles;
