import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	listWrapper: {
		flex: 1,
		width: '100%',
	},
	container: {
		width: '100%',
		height: 40,
		borderBottomColor: '#bbb',
		paddingVertical: 5,
		paddingHorizontal: 10,
		flexDirection: 'row',
	},
	title: {
		backgroundColor: 'transparent',
		flex: 1,
		textAlign: 'left',
		paddingLeft: 20,
		color: '#777',
	},
	time: {
		backgroundColor: 'transparent',
		flex: 1,
		textAlign: 'right',
		paddingRight: 20,
		color: '#222',
	},
});

export default styles;
