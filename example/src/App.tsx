/* eslint-disable no-use-before-define */
import * as React from 'react';
import { StyleSheet, View } from 'react-native';

// eslint-disable-next-line import/no-extraneous-dependencies
import AnimatedIconButton, { AnimatedIconButtonProps } from '@amalgama/react-native-animated-icon-button';

import likeAnimation1 from './assets/heart-like-animation.json';
import likeAnimation2 from './assets/thumbs-up-animation.json';
import checkAnimation from './assets/simple-check-animation.json';
import switchAnimation from './assets/switch-animation-1.json';

const styles = StyleSheet.create( {
	container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	}
} );

interface ControlledAnimatedButtonProps {
	source: AnimatedIconButtonProps[ 'source' ],
	size?: AnimatedIconButtonProps[ 'size' ],
	style?: AnimatedIconButtonProps[ 'style' ],
	containerStyle?: AnimatedIconButtonProps[ 'containerStyle' ],
	speed?: AnimatedIconButtonProps[ 'speed' ],
	inactiveFrame: AnimatedIconButtonProps[ 'inactiveFrame' ],
	activeFrame: AnimatedIconButtonProps[ 'activeFrame' ],
	toActiveFrameRange: AnimatedIconButtonProps[ 'toActiveFrameRange' ],
	toInactiveFrameRange: AnimatedIconButtonProps[ 'toInactiveFrameRange' ],
}

const ControlledAnimatedButton = ( {
	source,
	size = 80,
	style,
	speed = 1,
	containerStyle,
	inactiveFrame,
	activeFrame,
	toActiveFrameRange,
	toInactiveFrameRange
}: ControlledAnimatedButtonProps ) => {
	const [ isActive, setIsActive ] = React.useState( false );

	return (
		<AnimatedIconButton
			source={source}
			isActive={isActive}
			onPress={() => setIsActive( !isActive )}
			style={style}
			containerStyle={containerStyle}
			size={size}
			speed={speed}
			inactiveFrame={inactiveFrame}
			activeFrame={activeFrame}
			toActiveFrameRange={toActiveFrameRange}
			toInactiveFrameRange={toInactiveFrameRange}
		/>
	);
};

export default function App() {
	return (
		<View style={styles.container}>
			<ControlledAnimatedButton
				source={likeAnimation1}
				inactiveFrame={19}
				activeFrame={66}
				toInactiveFrameRange={[ 0, 19 ]}
				toActiveFrameRange={[ 19, 50 ]}
			/>
			<ControlledAnimatedButton
				source={likeAnimation2}
				inactiveFrame={0}
				activeFrame={64}
				size={90}
				toInactiveFrameRange={[ 0, 0 ]}
				toActiveFrameRange={[ 28, 64 ]}
			/>
			<ControlledAnimatedButton
				source={checkAnimation}
				size={80}
				inactiveFrame={0}
				activeFrame={15}
				toInactiveFrameRange={[ 20, 35 ]}
				toActiveFrameRange={[ 0, 15 ]}
			/>
			<ControlledAnimatedButton
				source={switchAnimation}
				size={40}
				containerStyle={{ width: 80, height: 80 }}
				inactiveFrame={0}
				activeFrame={80}
				speed={4}
				toInactiveFrameRange={[ 80, 176 ]}
				toActiveFrameRange={[ 0, 76 ]}
			/>
		</View>
	);
}
