import { useRef, useEffect, useMemo } from 'react';
import {
	HookProps, FramesMatrixForProps, FramesMatrix,
	ActiveStatus, RenderStatus, activeStatusFor, renderStatusFor
} from './useAnimatedTransition.types';

const framesMatrixFor = ( {
	inactiveFrame, activeFrame,
	toActiveFrameRange, toInactiveFrameRange
}: FramesMatrixForProps ): FramesMatrix => ( {
	[ RenderStatus.FirstRender ]: {
		[ ActiveStatus.Active ]: [ activeFrame, activeFrame ],
		[ ActiveStatus.Inactive ]: [ inactiveFrame, inactiveFrame ]
	},
	[ RenderStatus.SubsequentRenders ]: {
		[ ActiveStatus.Active ]: toActiveFrameRange,
		[ ActiveStatus.Inactive ]: toInactiveFrameRange
	}
} );

const useAnimatedTransition = ( {
	animationRef,
	isActive,
	inactiveFrame,
	activeFrame,
	toActiveFrameRange,
	toInactiveFrameRange
}: HookProps ) => {
	const firstRenderRef = useRef( true );
	const isFirstRender = firstRenderRef.current || false;

	const frames: FramesMatrix = useMemo(
		() => framesMatrixFor( {
			inactiveFrame, activeFrame, toActiveFrameRange, toInactiveFrameRange
		} ),
		[
			inactiveFrame, activeFrame, toActiveFrameRange, toInactiveFrameRange
		]
	);

	useEffect( () => {
		const activeStatus = activeStatusFor( { isActive } );
		const renderStatus = renderStatusFor( { isFirstRender } );

		const [ fromFrame, toFrame ] = frames[ renderStatus ][ activeStatus ];

		if ( isFirstRender ) { firstRenderRef.current = false; }

		animationRef.current?.play( fromFrame, toFrame );
	}, [ animationRef, isActive ] );
};

export default useAnimatedTransition;
