import { Dimensions } from 'react-native';

const { width: winWidth, height: winHeight } = Dimensions.get('window');

export const Layout = {
	window: {
		width: winWidth,
		height: winHeight,
	},
	isSmallDevice: winWidth <= 360,
};
