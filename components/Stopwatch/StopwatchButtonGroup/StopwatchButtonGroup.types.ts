export interface IStopwatchButtonGroupProps {
	isRunning: boolean;
	toggleStopwatch: () => void;
	addRecord: () => void;
	resetStopwatch: () => void;
}
