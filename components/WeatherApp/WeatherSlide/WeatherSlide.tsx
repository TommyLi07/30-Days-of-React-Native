import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { memo } from 'react';
import { ImageBackground, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './WeatherSlide.styles';
import { IWeatherSlideProps } from './WeatherSlide.types';

export const WeatherSlide = memo<IWeatherSlideProps>(({ data }) => {
	const { bottom } = useSafeAreaInsets();

	return (
		<ImageBackground
			source={data.bg}
			style={styles.imageBackground}
			imageStyle={{ resizeMode: 'cover' }}
		>
			<ScrollView
				style={styles.container}
				contentContainerStyle={{ paddingBottom: bottom + 20 }}
				showsVerticalScrollIndicator={true}
			>
				<View style={styles.headInfo}>
					<Text style={styles.city}>{data.city}</Text>
					<Text style={styles.abs}>{data.abs}</Text>
					<Text style={styles.degree}>{data.degree}</Text>
					<Text style={styles.circle}>°</Text>
				</View>

				<View style={styles.withinDayGeneral}>
					<View style={styles.withinDayHead}>
						<Text style={styles.withinDayWeek}>{data.today.week}</Text>
						<Text style={styles.withinDayDay}>{data.today.day}</Text>
					</View>
					<View style={styles.withinDayTail}>
						<Text style={styles.withinDayHigh}>{data.today.high}</Text>
						<Text
							style={
								data.night ? styles.withinDayLowNight : styles.withinDayLow
							}
						>
							{data.today.low}
						</Text>
					</View>
				</View>

				<ScrollView
					horizontal
					style={styles.withinDayHoursContainer}
					showsHorizontalScrollIndicator={false}
				>
					<View style={styles.withinDayHours}>
						{data.hours.map((hour, hourIndex) => {
							return (
								<View key={hour.key} style={styles.withinDayHoursBox}>
									<Text
										style={
											hourIndex === 0
												? styles.withinDayHoursTimeBold
												: styles.withinDayHoursTime
										}
									>
										{hour.time}
									</Text>
									{hour.isFAIcon ? (
										<FontAwesome5
											size={25}
											name={hour.icon as keyof typeof FontAwesome5.glyphMap}
											style={[styles.withinDayHoursIcon, { color: hour.color }]}
										/>
									) : (
										<Ionicons
											size={25}
											name={hour.icon as keyof typeof Ionicons.glyphMap}
											style={[styles.withinDayHoursIcon, { color: hour.color }]}
										/>
									)}
									<Text
										style={
											hourIndex === 0
												? styles.withinDayHoursDegreeBold
												: styles.withinDayHoursDegree
										}
									>
										{hour.degree}
									</Text>
								</View>
							);
						})}
					</View>
				</ScrollView>

				<View style={styles.withinWeek}>
					{data.days.map((day) => {
						return (
							<View key={day.key} style={styles.withinWeekLine}>
								<View style={styles.withinWeekDay}>
									<Text style={styles.withinWeekDayText}>{day.day}</Text>
								</View>
								<View style={styles.withinWeekIcon}>
									<Ionicons
										name={day.icon as keyof typeof Ionicons.glyphMap}
										style={styles.withinWeekIconIcon}
										size={25}
									></Ionicons>
								</View>
								<View style={styles.withinWeekDegree}>
									<Text style={styles.withinWeekHigh}>{day.high}</Text>
									<Text
										style={
											data.night
												? styles.withinWeekLowNight
												: styles.withinWeekLow
										}
									>
										{day.low}
									</Text>
								</View>
							</View>
						);
					})}
				</View>

				<View style={styles.weatherInfo}>
					<Text style={styles.weatherInfoText}>{data.info}</Text>
				</View>

				<View style={styles.weatherOther}>
					<View style={styles.weatherOtherSection}>
						<View style={styles.weatherOtherLine}>
							<Text style={styles.weatherOtherTitle}>日出：</Text>
							<Text style={styles.weatherOtherValue}>{data.rise}</Text>
						</View>
						<View style={styles.weatherOtherLine}>
							<Text style={styles.weatherOtherTitle}>日落：</Text>
							<Text style={styles.weatherOtherValue}>{data.down}</Text>
						</View>
					</View>
					<View style={styles.weatherOtherSection}>
						<View style={styles.weatherOtherLine}>
							<Text style={styles.weatherOtherTitle}>降雨概率：</Text>
							<Text style={styles.weatherOtherValue}>{data.prop}</Text>
						</View>
						<View style={styles.weatherOtherLine}>
							<Text style={styles.weatherOtherTitle}>湿度：</Text>
							<Text style={styles.weatherOtherValue}>{data.humi}</Text>
						</View>
					</View>
					<View style={styles.weatherOtherSection}>
						<View style={styles.weatherOtherLine}>
							<Text style={styles.weatherOtherTitle}>风速：</Text>
							<Text style={styles.weatherOtherValue}>
								<Text style={{ fontSize: 10 }}>{data.dir}</Text>
								{data.speed}
							</Text>
						</View>
						<View style={styles.weatherOtherLine}>
							<Text style={styles.weatherOtherTitle}>体感温度：</Text>
							<Text style={styles.weatherOtherValue}>{data.feel}</Text>
						</View>
					</View>
					<View style={styles.weatherOtherSection}>
						<View style={styles.weatherOtherLine}>
							<Text style={styles.weatherOtherTitle}>降水量：</Text>
							<Text style={styles.weatherOtherValue}>{data.rain}</Text>
						</View>
						<View style={styles.weatherOtherLine}>
							<Text style={styles.weatherOtherTitle}>气压：</Text>
							<Text style={styles.weatherOtherValue}>{data.pres}</Text>
						</View>
					</View>
					<View style={styles.weatherOtherSection}>
						<View style={styles.weatherOtherLine}>
							<Text style={styles.weatherOtherTitle}>能见度：</Text>
							<Text style={styles.weatherOtherValue}>{data.sight}</Text>
						</View>
						<View style={styles.weatherOtherLine}>
							<Text style={styles.weatherOtherTitle}>紫外线指数：</Text>
							<Text style={styles.weatherOtherValue}>{data.uv}</Text>
						</View>
					</View>
				</View>
			</ScrollView>
		</ImageBackground>
	);
});

export default WeatherSlide;
