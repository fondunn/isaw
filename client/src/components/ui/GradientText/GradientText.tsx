import { Text } from '@nextui-org/react'
import React from 'react'
import { IGradientText } from '../../../types/GradientText'

const GradientText = ({text, size}: IGradientText) => {
  return (
    <Text
            h1
            size={size}
            css={{
              textGradient: "45deg, $yellow600 -20%, $red600 100%",
            }}
            weight="bold"
          >
            {text}
          </Text>
  )
}

export default GradientText