import React, { useRef } from 'react';
import {
	StyleProp, ViewStyle, View, TouchableWithoutFeedback
} from 'react-native';
import LottieView, { AnimatedLottieViewProps } from 'lottie-react-native';

import useAnimatedTransition from './hooks/useAnimatedTransition';

export interface AnimatedIconButtonProps {
	source: AnimatedLottieViewProps[ 'source' ],
	isActive: boolean,
	onPress: () => void,
	inactiveFrame: number,
	activeFrame: number,
	toActiveFrameRange: [ number, number ],
	toInactiveFrameRange: [ number, number ]
	size?: number,
	speed?: number,
	testID?: string,
	containerStyle?: StyleProp<ViewStyle>,
	style?: StyleProp<ViewStyle>
}

const AnimatedIconButton = ( {
	source,
	isActive,
	onPress,
	inactiveFrame,
	activeFrame,
	toActiveFrameRange,
	toInactiveFrameRange,
	speed = 1,
	size = 50,
	style,
	testID = 'AnimatedIconButton',
	containerStyle
}: AnimatedIconButtonProps ) => {
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
		<View
			style={[
				{ display: 'flex', justifyContent: 'center', alignItems: 'center' },
				{ width: size, height: size },
				containerStyle
			]}
			testID={`${testID}-container`}
		>
			<TouchableWithoutFeedback
				onPress={onPress}
			>
				<LottieView
					ref={animationRef}
					style={[
						{ width: size, height: size },
						style
					]}
					source={source}
					speed={speed}
					autoSize={true}
					loop={false}
					autoPlay={false}
					testID={`${testID}-animation`}
				/>
			</TouchableWithoutFeedback>
		</View>
	);
};

export default AnimatedIconButton;
