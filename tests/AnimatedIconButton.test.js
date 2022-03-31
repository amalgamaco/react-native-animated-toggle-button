import React from 'react';
import { render } from '@testing-library/react-native';

import AnimatedIconButton from '../src/AnimatedIconButton';

const mockPlay = jest.fn();

jest.mock( 'lottie-react-native', () => {
	const R = jest.requireActual( 'react' );
	const RN = jest.requireActual( 'react-native' );

	class AnimatedLottieView extends R.Component {
		constructor( props ) {
			super( props );
			this.play = mockPlay;
		}

		render() {
			return <RN.View {...this.props} />;
		}
	}

	return AnimatedLottieView;
} );

const animationSource = {
	v: '',
	fr: '',
	ip: 1,
	op: 1,
	w: 20,
	h: 20,
	nm: '',
	ddd: 0,
	assets: [],
	layers: []
};

describe( 'AnimatedIconButton', () => {
	beforeEach( () => { mockPlay.mockClear(); } );

	const activeFrame = 10;
	const inactiveFrame = 0;
	const toInactiveFrameRange = [ 11, 15 ];
	const toActiveFrameRange = [ 2, 9 ];

	const renderComponent = ( { isActive = false } = {} ) => render(
		<AnimatedIconButton
			source={animationSource}
			isActive={isActive}
			activeFrame={activeFrame}
			inactiveFrame={inactiveFrame}
			toInactiveFrameRange={toInactiveFrameRange}
			toActiveFrameRange={toActiveFrameRange}
			testID="test-button"
		/>
	);
	const rerenderComponent = ( { rerender, isActive = false } = {} ) => rerender(
		<AnimatedIconButton
			source={animationSource}
			isActive={isActive}
			activeFrame={activeFrame}
			inactiveFrame={inactiveFrame}
			toInactiveFrameRange={toInactiveFrameRange}
			toActiveFrameRange={toActiveFrameRange}
			testID="test-button"
		/>
	);

	it( 'renders a LottieView with the animation source passed', () => {
		const { getByTestId } = renderComponent();

		expect( getByTestId( 'test-button-animation' ).props.source ).toEqual( animationSource );
	} );

	it( 'plays only the activeFrame when the button initial state is active', () => {
		renderComponent( { isActive: true } );

		expect( mockPlay ).toHaveBeenCalledWith( activeFrame, activeFrame );
	} );

	it( 'plays only the inactiveFrame when the button initial state is not active', () => {
		renderComponent( { isActive: false } );

		expect( mockPlay ).toHaveBeenCalledWith( inactiveFrame, inactiveFrame );
	} );

	it( 'plays the toActiveFrameRange when the button initial state is not active and is updated to be active', () => {
		const { rerender } = renderComponent( { isActive: false } );
		rerenderComponent( { rerender, isActive: true } );

		expect( mockPlay ).toHaveBeenCalledWith( toActiveFrameRange[ 0 ], toActiveFrameRange[ 1 ] );
	} );

	it( 'plays the toInactiveFrameRange when the button initial state is active and is updated to be not active', () => {
		const { rerender } = renderComponent( { isActive: true } );
		rerenderComponent( { rerender, isActive: false } );

		expect( mockPlay ).toHaveBeenCalledWith( toInactiveFrameRange[ 0 ], toInactiveFrameRange[ 1 ] );
	} );
} );
