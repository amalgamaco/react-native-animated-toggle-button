import React from 'react';
import {
	StyleProp, ViewStyle, View, Pressable
} from 'react-native';
import type { AnimatedLottieViewProps } from 'lottie-react-native';
import { AnimatedIcon } from './AnimatedIcon';

export interface AnimatedIconButtonProps {
	source: AnimatedLottieViewProps[ 'source' ],
	isActive?: boolean,
	onPress?: () => void,
	inactiveFrame: number,
	activeFrame: number,
	toActiveFrameRange: [ number, number ],
	toInactiveFrameRange: [ number, number ]
	size?: number,
	speed?: number,
	testID?: string,
	containerStyle?: StyleProp<ViewStyle>,
	iconStyle?: StyleProp<ViewStyle>
}

const AnimatedToggleButton = ( {
	source,
	isActive = false,
	onPress,
	inactiveFrame,
	activeFrame,
	toActiveFrameRange,
	toInactiveFrameRange,
	speed = 1,
	size = 50,
	iconStyle,
	testID = 'AnimatedToggleButton',
	containerStyle
}: AnimatedIconButtonProps ) => (
	<View
		style={[
			{ display: 'flex', justifyContent: 'center', alignItems: 'center' },
			{ width: size, height: size },
			containerStyle
		]}
		testID={`${testID}-container`}
	>
		<Pressable
			onPress={onPress}
		>
			<AnimatedIcon
				source={source}
				style={iconStyle}
				loop={false}
				inactiveFrame={inactiveFrame}
				activeFrame={activeFrame}
				toActiveFrameRange={toActiveFrameRange}
				toInactiveFrameRange={toInactiveFrameRange}
				speed={speed}
				isActive={isActive}
				size={size}
				testID={testID}
			/>
		</Pressable>
	</View>
);

export default AnimatedToggleButton;
