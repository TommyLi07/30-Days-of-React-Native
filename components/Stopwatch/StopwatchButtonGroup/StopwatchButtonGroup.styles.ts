import { Layout } from '@/constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	watchControlContainer: {
		width: Layout.window.width,
		flexDirection: 'row',
		justifyContent: 'space-around',
		backgroundColor: '#f3f3f3',
		padding: 16,
	},
	btn: {
		width: 100,
		height: 100,
		backgroundColor: '#fff',
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},
	btnStopText: {
		fontSize: 14,
		backgroundColor: 'transparent',
		color: '#555',
	},
	btnStartText: {
		fontSize: 14,
		backgroundColor: 'transparent',
	},
	pressedColor: {
		backgroundColor: '#eee',
	},
});

export default styles;
