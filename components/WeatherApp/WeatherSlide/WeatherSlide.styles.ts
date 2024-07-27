import { Layout } from '@/constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	imageBackground: {
		height: '100%',
	},
	container: {
		backgroundColor: 'transparent',
		width: Layout.window.width,
		flex: 1,
	},
	headInfo: {
		paddingTop: 40,
		paddingBottom: 20,
		alignItems: 'center',
		position: 'relative',
	},
	city: {
		fontSize: 25,
		color: '#fff',
		paddingBottom: 5,
		backgroundColor: 'transparent',
	},
	abs: {
		fontSize: 15,
		color: '#fff',
		backgroundColor: 'transparent',
	},
	degree: {
		fontSize: 85,
		color: '#fff',
		fontWeight: '100',
	},
	circle: {
		fontSize: 35,
		color: '#fff',
		fontWeight: '300',
		position: 'absolute',
		top: 100,
		right: Layout.window.width / 2 - 55,
	},

	withinDayGeneral: {
		flexDirection: 'row',
		width: Layout.window.width,
	},
	withinDayHead: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		paddingLeft: 16,
	},
	withinDayTail: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		paddingRight: 10,
	},
	withinDayWeek: {
		fontSize: 15,
		color: '#fff',
		fontWeight: '400',
		width: 50,
	},
	withinDayDay: {
		fontSize: 15,
		color: '#fff',
		fontWeight: '300',
		width: 50,
	},
	withinDayHigh: {
		fontSize: 16,
		color: '#fff',
		fontWeight: '200',
		width: 30,
	},
	withinDayLow: {
		fontSize: 16,
		color: '#eee',
		fontWeight: '200',
		width: 30,
	},
	withinDayLowNight: {
		fontSize: 16,
		color: '#aaa',
		fontWeight: '200',
		width: 30,
	},
	withinDayHoursContainer: {
		marginTop: 6,
		borderTopColor: 'rgba(255,255,255,0.7)',
		borderTopWidth: 1,
		borderBottomColor: 'rgba(255,255,255,0.7)',
		borderBottomWidth: 1,
	},
	withinDayHours: {
		paddingLeft: 7,
		paddingTop: 10,
		paddingBottom: 10,
		paddingRight: 10,
		flexDirection: 'row',
		flexWrap: 'nowrap',
	},
	withinDayHoursBox: {
		width: 55,
	},
	withinDayHoursTime: {
		color: '#fff',
		fontSize: 12,
		textAlign: 'center',
	},
	withinDayHoursTimeBold: {
		color: '#fff',
		fontSize: 13,
		textAlign: 'center',
		fontWeight: '500',
	},
	withinDayHoursIcon: {
		textAlign: 'center',
		paddingTop: 8,
		paddingBottom: 5,
	},
	withinDayHoursDegree: {
		color: '#fff',
		fontSize: 14,
		paddingTop: 5,
		textAlign: 'center',
	},
	withinDayHoursDegreeBold: {
		color: '#fff',
		fontSize: 15,
		textAlign: 'center',
		paddingTop: 5,
		fontWeight: '500',
	},

	withinWeek: {
		paddingTop: 5,
	},
	withinWeekLine: {
		flexDirection: 'row',
		height: 36,
	},
	withinWeekDay: {
		justifyContent: 'center',
		alignItems: 'flex-start',
		flex: 1,
	},
	withinWeekIcon: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	},
	withinWeekDegree: {
		justifyContent: 'flex-end',
		alignItems: 'center',
		flex: 1,
		flexDirection: 'row',
		paddingRight: 25,
	},
	withinWeekHigh: {
		color: '#fff',
		width: 35,
		fontSize: 16,
		textAlign: 'right',
	},
	withinWeekIconIcon: {
		color: '#fff',
	},
	withinWeekLow: {
		color: '#eee',
		width: 35,
		fontSize: 16,
		textAlign: 'right',
	},
	withinWeekLowNight: {
		color: '#aaa',
		width: 35,
		fontSize: 16,
		textAlign: 'right',
	},
	withinWeekDayText: {
		color: '#fff',
		paddingLeft: 20,
		fontSize: 15,
	},

	weatherInfo: {
		marginTop: 5,
		borderTopColor: 'rgba(255,255,255,0.7)',
		borderTopWidth: 1,
		borderBottomColor: 'rgba(255,255,255,0.7)',
		borderBottomWidth: 1,
	},
	weatherInfoText: {
		color: '#fff',
		fontSize: 15,
		paddingTop: 10,
		paddingLeft: 20,
		paddingBottom: 10,
		paddingRight: 20,
	},

	weatherOther: {
		paddingTop: 10,
	},
	weatherOtherSection: {
		paddingBottom: 10,
	},
	weatherOtherLine: {
		flexDirection: 'row',
		flexWrap: 'nowrap',
	},
	weatherOtherTitle: {
		width: Layout.window.width / 2 - 15,
		color: '#fff',
		textAlign: 'right',
		fontSize: 15,
	},
	weatherOtherValue: {
		width: Layout.window.width / 2,
		paddingLeft: 15,
		flex: 1,
		fontSize: 15,
		color: '#fff',
	},
});

export default styles;
