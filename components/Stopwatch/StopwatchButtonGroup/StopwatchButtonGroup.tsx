import React, { memo, useCallback } from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './StopwatchButtonGroup.styles';
import { IStopwatchButtonGroupProps } from './StopwatchButtonGroup.types';

export const StopwatchButtonGroup = memo<IStopwatchButtonGroupProps>(
	({ isRunning, toggleStopwatch, addRecord, resetStopwatch }) => {
		const handleAddRecord = useCallback(() => {
			if (isRunning) {
				addRecord();
			} else {
				resetStopwatch();
			}
		}, [addRecord, resetStopwatch, isRunning]);

		return (
			<View style={styles.watchControlContainer}>
				<Pressable
					onPress={handleAddRecord}
					style={({ pressed }) => [styles.btn, pressed && styles.pressedColor]}
				>
					<Text style={styles.btnStopText}>{isRunning ? 'Lap' : 'Reset'}</Text>
				</Pressable>

				<Pressable
					onPress={toggleStopwatch}
					style={({ pressed }) => [styles.btn, pressed && styles.pressedColor]}
				>
					<Text
						style={[
							styles.btnStartText,
							{ color: isRunning ? '#ff0044' : '#60B644' },
						]}
					>
						{isRunning ? 'Stop' : 'Start'}
					</Text>
				</Pressable>
			</View>
		);
	}
);

export default StopwatchButtonGroup;
