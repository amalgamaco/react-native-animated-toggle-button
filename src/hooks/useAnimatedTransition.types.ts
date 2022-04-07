import type { RefObject } from 'react';
import type LottieView from 'lottie-react-native';

export enum ActiveStatus { Active = 'active', Inactive = 'inactive' }
export enum RenderStatus { FirstRender = 'first', SubsequentRenders = 'others' }

export const renderStatusFor = ( { isFirstRender }: { isFirstRender: boolean } ): RenderStatus => (
	isFirstRender ? RenderStatus.FirstRender : RenderStatus.SubsequentRenders
);

export const activeStatusFor = ( { isActive }: { isActive: boolean } ): ActiveStatus => (
	isActive ? ActiveStatus.Active : ActiveStatus.Inactive
);

export interface HookProps {
	animationRef: RefObject<LottieView>,
	isActive: boolean,
	inactiveFrame: number,
	activeFrame: number,
	toActiveFrameRange: [ number, number ],
	toInactiveFrameRange: [ number, number ]
}

export interface FramesMatrixForProps {
	inactiveFrame: number,
	activeFrame: number,
	toActiveFrameRange: [ number, number ],
	toInactiveFrameRange: [ number, number ]
}

export type FramesMatrix = {
	[ key in RenderStatus ]: {
		[ activeKkey in ActiveStatus ]: [ number, number ]
	}
}
