/* eslint-disable no-use-before-define */
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// eslint-disable-next-line import/no-extraneous-dependencies
import { AnimatedToggleButton, AnimatedIcon, AnimatedIconProps } from '@amalgama/react-native-animated-toggle-button'; 

import likeAnimation1 from './assets/heart-like-animation.json';
import likeAnimation2 from './assets/thumbs-up-animation.json';
import checkAnimation from './assets/simple-check-animation.json';
import switchAnimation from './assets/switch-animation-1.json';

const styles = StyleSheet.create( {
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	row: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		height: 100,
		maxHeight: 100
	}
} );

interface ControlledAnimatedButtonProps {
	source: AnimatedIconProps[ 'source' ],
	size?: AnimatedIconProps[ 'size' ],
	iconStyle?: AnimatedIconProps[ 'style' ],
	containerStyle?: AnimatedIconProps[ 'style' ],
	speed?: AnimatedIconProps[ 'speed' ],
	inactiveFrame: AnimatedIconProps[ 'inactiveFrame' ],
	activeFrame: AnimatedIconProps[ 'activeFrame' ],
	toActiveFrameRange: AnimatedIconProps[ 'toActiveFrameRange' ],
	toInactiveFrameRange: AnimatedIconProps[ 'toInactiveFrameRange' ],
}

const ControlledAnimatedButton = ( {
	source,
	size = 80,
	iconStyle,
	speed = 1,
	containerStyle,
	inactiveFrame,
	activeFrame,
	toActiveFrameRange,
	toInactiveFrameRange
}: ControlledAnimatedButtonProps ) => {
	const [ isActive, setIsActive ] = React.useState( false );

	return (
		<AnimatedToggleButton
			source={source}
			isActive={isActive}
			onPress={() => setIsActive( !isActive )}
			iconStyle={iconStyle}
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
	const [ iconIsActive, setIsActive ] = React.useState( false );

	React.useEffect( () => {
		const timeout = setTimeout( () => setIsActive( !iconIsActive ), 3000 );
		return () => { clearTimeout( timeout ); }
	}, [ iconIsActive ] );

	return (
		<View style={styles.container}>
			<Text>AnimatedIcon</Text>
			<View style={styles.row}>
				<AnimatedIcon
					source={likeAnimation1}
					isActive={iconIsActive}
					size={80}
					inactiveFrame={19}
					activeFrame={66}
					toInactiveFrameRange={[ 0, 19 ]}
					toActiveFrameRange={[ 19, 50 ]}
				/>
				<AnimatedIcon
					source={likeAnimation2}
					isActive={iconIsActive}
					size={90}
					inactiveFrame={0}
					activeFrame={64}
					toInactiveFrameRange={[ 0, 0 ]}
					toActiveFrameRange={[ 28, 64 ]}
				/>
				<AnimatedIcon
					source={checkAnimation}
					isActive={iconIsActive}
					size={80}
					inactiveFrame={0}
					activeFrame={15}
					toInactiveFrameRange={[ 20, 35 ]}
					toActiveFrameRange={[ 0, 15 ]}
				/>
				<View style={{ width: 80, height: 80, alignItems: 'center', justifyContent: 'center' }}>
					<AnimatedIcon
						source={switchAnimation}
						isActive={iconIsActive}
						size={40}
						inactiveFrame={0}
						activeFrame={80}
						speed={4}
						toInactiveFrameRange={[ 80, 176 ]}
						toActiveFrameRange={[ 0, 76 ]}
					/>
				</View>				
			</View>
			<Text>AnimatedToggleButton</Text>
			<View style={styles.row}>
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
		</View>
	);
}
