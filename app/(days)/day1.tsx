import {
	StopwatchButtonGroup,
	StopwatchDisplay,
	StopwatchRecord,
} from '@/components';
import { formatTime } from '@/utils';
import { Stack, useLocalSearchParams } from 'expo-router';
import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';

const Day1 = memo(() => {
	const { title } = useLocalSearchParams<{ title?: string }>();

	const [isRunning, setIsRunning] = useState(false);
	const [sectionTime, setSectionTime] = useState(0);
	const [totalTime, setTotalTime] = useState(0);
	const [records, setRecords] = useState<string[]>([]);
	const timerRef = useRef<NodeJS.Timeout | null>(null);

	const toggleStopwatch = useCallback(() => {
		if (isRunning) {
			clearInterval(timerRef.current as NodeJS.Timeout);
		} else {
			timerRef.current = setInterval(() => {
				setSectionTime((prevTime) => prevTime + 10);
				setTotalTime((prevTime) => prevTime + 10);
			}, 10);
		}

		setIsRunning(!isRunning);
	}, [isRunning]);

	const addRecord = useCallback(() => {
		if (records.length >= 10) records.pop();

		setRecords((prevRecords) => {
			const recordsCopy = [...prevRecords];
			recordsCopy.unshift(formatTime(sectionTime));
			return recordsCopy;
		});

		setSectionTime(0);
	}, [records, sectionTime]);

	const resetStopwatch = useCallback(() => {
		setIsRunning(false);
		setSectionTime(0);
		setTotalTime(0);
		setRecords([]);
	}, []);

	useEffect(() => {
		return () => {
			if (timerRef.current) {
				clearInterval(timerRef.current);
			}
		};
	}, []);

	return (
		<View style={styles.container}>
			<Stack.Screen
				options={{
					title,
				}}
			/>

			<StopwatchDisplay
				sectionTime={formatTime(sectionTime)}
				totalTime={formatTime(totalTime)}
			/>
			<StopwatchButtonGroup
				isRunning={isRunning}
				toggleStopwatch={toggleStopwatch}
				addRecord={addRecord}
				resetStopwatch={resetStopwatch}
			/>
			<StopwatchRecord records={records} />
		</View>
	);
});

export default Day1;

const styles = StyleSheet.create({
	container: {
		width: '100%',
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#f3f3f3',
	},
});
