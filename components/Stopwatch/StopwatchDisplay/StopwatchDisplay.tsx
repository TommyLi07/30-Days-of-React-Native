import React, { memo } from 'react';
import { Text, View } from 'react-native';
import styles from './StopwatchDisplay.styles';
import { IStopwatchDisplayProps } from './StopwatchDisplay.types';

export const StopwatchDisplay = memo<IStopwatchDisplayProps>(
	({ sectionTime, totalTime }) => {
		return (
			<View style={styles.watchFaceContainer}>
				<Text style={styles.sectionTime}>{sectionTime}</Text>
				<Text style={styles.totalTime}>{totalTime}</Text>
			</View>
		);
	}
);

export default StopwatchDisplay;
