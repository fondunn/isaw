import React from 'react'
import { Button, Loading } from '@nextui-org/react'

interface IButton {
  label: string
  onPress?: Function
  auto?: boolean
  css? : {}
  loading? : boolean
}

const ButtonCustom = ({label, onPress, auto = false, css, loading}: IButton) => {
  const onPressHandler = () => {
    if (onPress) {
      onPress()
    }
  }
  return (
    <Button 
      auto={auto} 
      shadow 
      color="gradient" 
      bordered 
      css={css} 
      onPress={() => onPressHandler()}
      >
      {
        loading ?
        <Loading color="currentColor" size="sm" />
        : 
        label
      }
      
    </Button>
  )
}

export default ButtonCustom