import React, { useRef } from 'react';
import type {
	StyleProp, ViewStyle
} from 'react-native';
import LottieView, { AnimatedLottieViewProps } from 'lottie-react-native';

import useAnimatedTransition from './hooks/useAnimatedTransition';

export interface AnimatedIconProps {
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
	loop?: boolean,
	style?: StyleProp<ViewStyle>
}

export const AnimatedIcon = ( {
	source,
	isActive = false,
	inactiveFrame,
	activeFrame,
	toActiveFrameRange,
	toInactiveFrameRange,
	speed = 1,
	size = 50,
	loop = false,
	style,
	testID = 'AnimatedToggleButton'
}: AnimatedIconProps ) => {
	const animationRef = useRef( null );

	useAnimatedTransition( {
		animationRef,
		isActive,
		inactiveFrame,
		activeFrame,
		toActiveFrameRange,
		toInactiveFrameRange
	} );

	return (
		<LottieView
			ref={animationRef}
			style={[
				{ width: size, height: size },
				style
			]}
			source={source}
			speed={speed}
			loop={loop}
			testID={`${testID}-animation`}
		/>
	);
};
