import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './StopwatchRecord.styles';
import { IStopwatchRecordProps } from './StopwatchRecord.types';

export const StopwatchRecord = ({ records }: IStopwatchRecordProps) => {
	return (
		<View style={styles.listWrapper}>
			<FlashList
				data={records}
				renderItem={({ item, index }) => (
					<View style={styles.container}>
						<Text style={styles.title}>Lap {records.length - index}</Text>
						<Text style={styles.time}>{item}</Text>
					</View>
				)}
				estimatedItemSize={30}
			/>
		</View>
	);
};

export default StopwatchRecord;
