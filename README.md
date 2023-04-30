# React Native OTP Pad

The `react-native-otp-pad` package provides a customizable OTP (one-time password) input component for React Native applications. With `react-native-otp-pad`, users can input OTPs in a secure and intuitive way using a visual pad of boxes that represent each digit of the code. The package offers a range of customizable options, including box size and style, active and inactive colors, and font size. The component is easy to use and integrates seamlessly into any React Native project.

## Installation

To install `react-native-otp-pad`, simply run the following command in your project directory:

`npm install react-native-otp-pad`


## Features

| Feature       | Description                                                                                      |
| ------------- | ------------------------------------------------------------------------------------------------ |
| length        | The number of digits in the OTP code.                                                           |
| caretShown    | Whether or not to show a caret animation in the currently active box.                           |
| boxWidth      | The width of each box in the pad.                                                                |
| boxHeight     | The height of each box in the pad.                                                               |
| activeColor   | The color of the active (selected) box.                                                          |
| inActiveColor | The color of the inactive (unselected) boxes.                                                   |
| activeFill    | The fill color of the active (selected) box.                                                     |
| inActiveFill  | The fill color of the inactive (unselected) boxes.                                              |
| fontSize      | The font size of the digits inside each box.                                                     |
| borderRadius | The border radius of each box.                                                                   |
| borderWidth   | The width of the border around each box.                                                         |
| onComplete    | A callback function that is called when the user completes entering the OTP code.               |

## Usage

Here's an example of how to use the `OtpPad` component in your React Native application:

```jsx
import React from 'react';
import { OtpPad } from 'react-native-otp-pad';

const MyComponent = () => {
  const runFunction = (code: string) => {
    console.log(`OTP entered: ${code}`);
  };

  return (
    <OtpPad
        length={4}
        caretShown={false}
        boxWidth={60}
        boxHeight={60}
        activeColor="blue"
        inActiveColor="gray"
        inActiveFill="white"
        activeFill="white"
        fontSize={24}
        borderRadius={8}
        borderWidth={1}
        onComplete={(val)=>runFunction(val)}
      />
  );
};

export default MyComponent;


