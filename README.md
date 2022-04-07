# ReactNative - Animated Toggle Button

A two states button that can be animated when trasitioning between them.

![Example](/docs/gifs/react-native-animated-toggle-button-example.gif)

## Installation

### Requirements

This library depends on [lottie-react-native](https://github.com/lottie-react-native/lottie-react-native) in order to work. You must add this library as a dependency before installing this package.

```sh
yarn add lottie-react-native
yarn add lottie-ios@3.2.3
```

The version to install depends on the react native version being used in the project, you can see the corresponding version of the library for each react native version next: 

| App built in React Native version | Requires lottie-react-native version | Requires lottie-ios version |
|-----------------------------------|--------------------------------------|-----------------------------|
| >= 0.59                           | 3.0.2                                | 3.0.3                       |
| >= 0.60                           | 4.0.2                                | 3.2.3                       |
| >= 0.63                           | 4.0.3                                | 3.2.3                       |
| >= 0.64                           | 4.1.3                                | 3.2.3                       |
| >= 0.66                           | latest                               | 3.2.3                       |

### With yarn

```sh
yarn add @amalgama/react-native-animated-toggle-button
```

### With npm

```sh
npm install @amalgama/react-native-animated-toggle-button
```
## Usage

The AnimatedToggleButton component can be used in a declarative way:

```js
import React, { useState } from 'react';
import AnimatedToggleButton from 'react-native-animated-toggle-button';

import animation from './animation.json';

const BasicExample = () => {
   const [ isActive, setIsActive ] = useStsate( false );
   (
      <AnimatedToggleButton
         source={animation}
         isActive={isActive}
         onPress={() => setIsActive( !isActive )}
         activeFrame={20}
         inactiveFrame={0}
         toActiveFrameRange={[ 10, 20 ]}
         toInactiveFrameRange={[ 20, 30 ]}
      />
   );
}
```

## API

The `AnimatedToggleButton` accepts several props. They are describe in the following table:


| Prop |  Description | Default |
| ---  | -------------| ------- |
| **`source`** | **Mandatory** - The source of animation. Can be referenced as a local asset by a string, or remotely with an object with a `uri` property, or it can be an actual JS object of an animation, obtained (for example) with something like `require('../path/to/animation.json')`. | _None_  |
| **`inactiveFrame`** | **Mandatory** - A number indicating the still frame to show when the animation is in `inactive` state. | _None_ |
| **`activeFrame`** | **Mandatory** - A number indicating the still frame to show when the animation is in `active` state. | _None_ |
| **`toActiveFrameRange`** | **Mandatory** - A range of two numbers indicating an start and end frame for the animation to show when the button passes from `inactive` to `active` state. The end frame must be always greater that the start frame. _Example:_ `[ 10, 20 ]`  | _None_ |
| **`toInactiveFrameRange`** | **Mandatory** - A range of two numbers indicating an start and end frame for the animation to show when the button passes from `active` to `inactive` state. The end frame must be always greater that the start frame. _Example:_ `[ 20, 30 ]`  | _None_ |
| **`isActive`** | A boolean flag indicating whether or not the button is in an active state or not. If the button is active it will show the animation frame set in the **activeFrame** prop, otherwise it will show the animation frame set in the **inactiveFrame** prop. | `false` |
| **`onPress`** | A callback to call when the button is pressed. | `undefined` |
|**`speed`**| The speed the animation will progress. Sending a negative value will reverse the animation |`1`|
|**`size`**| The size of the animation. This prop will set the `width` and `height` of the animation view.  |`50`|
| **`style`** | Style attributes for the view, as expected in a standard [`View`](https://facebook.github.io/react-native/docs/layout-props.html). | `undefined` |
| **`containerStyle`** | Style attributes for the container view, as expected in a standard [`View`](https://facebook.github.io/react-native/docs/layout-props.html). | `undefined` |


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
