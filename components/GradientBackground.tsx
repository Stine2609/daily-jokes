import React from 'react'
import Svg, { Defs, RadialGradient, Rect, Stop } from 'react-native-svg';

export default function GradientBackground() {
    return(
        <Svg height="100%" width="100%">
        <Defs>
          <RadialGradient id="grad" cx="50%" cy="50%" r="50%">
            <Stop offset="0%" stopColor="#A559FE" stopOpacity="1" />
            <Stop offset="100%" stopColor="#7053FD" stopOpacity="1" />
          </RadialGradient>
        </Defs>
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
      </Svg>
    )
}
