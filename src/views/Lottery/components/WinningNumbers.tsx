import React, { useEffect, useState } from 'react'
import { Flex, FlexProps } from '@pancakeswap/uikit'
import { random } from 'lodash'
import uniqueId from 'lodash/uniqueId'
import { parseRetrievedNumber } from '../helpers'
import { BallWithNumber } from '../svgs'
import { BallColor } from '../svgs/Balls'

interface WinningNumbersProps extends FlexProps {
  number: string
  size?: string
  fontSize?: string
  rotateText?: boolean
}

const WinningNumbers: React.FC<WinningNumbersProps> = ({
  number,
  size = '32px',
  fontSize = '16px',
  rotateText,
  ...containerProps
}) => {
  const [rotationValues, setRotationValues] = useState([])
  const [numAsArray, setNumAsArray] = useState([])
  const rotationValuesLength = rotationValues.length
  const reversedNumber = parseRetrievedNumber(number)
  const colors: BallColor[] = ['pink', 'lilac', 'teal', 'aqua', 'green', 'yellow']

  useEffect(() => {
    const numArray = reversedNumber.split('')
    if (rotateText && numArray && rotationValuesLength === 0) {
      setRotationValues(numArray.map(() => random(-30, 30)))
    }
    setNumAsArray(numArray)
  }, [rotateText, reversedNumber, rotationValuesLength])

  return (
    <Flex justifyContent="space-between" {...containerProps}>
      {numAsArray.map((num, index) => {
        return (
          <BallWithNumber
            key={uniqueId()}
            rotationTransform={rotateText && rotationValues[index]}
            size={size}
            fontSize={fontSize}
            color={colors[index]}
            number={num}
          />
        )
      })}
    </Flex>
  )
}

export default WinningNumbers
