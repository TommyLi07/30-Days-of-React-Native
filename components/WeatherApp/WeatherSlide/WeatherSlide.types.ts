import { ImageProps } from 'react-native';

interface IWeatherData {
	key: number;
	city: string;
	night: boolean;
	bg: ImageProps;
	abs: string;
	degree: number;
	today: {
		week: string;
		day: string;
		high: number;
		low: number;
	};
	hours: {
		key: number;
		time: string;
		icon: string;
		isFAIcon: boolean;
		degree: string;
		color: string;
	}[];
	days: {
		key: number;
		day: string;
		icon: string;
		high: number;
		low: number;
	}[];
	info: string;
	rise: string;
	down: string;
	prop: string;
	humi: string;
	dir: string;
	speed: string;
	feel: string;
	rain: string;
	pres: string;
	sight: string;
	uv: string;
}

export interface IWeatherSlideProps {
	data: IWeatherData;
}
