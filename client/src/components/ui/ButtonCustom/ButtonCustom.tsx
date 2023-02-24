import React from 'react'
import { Button, Loading, PressEvent } from '@nextui-org/react'

interface IButton {
  label: string
  onPress?: (e: PressEvent) => void
  auto?: boolean
  css? : {}
  loading? : boolean,
  bordered? : boolean
}

const ButtonCustom = ({label, onPress, auto = false, css, loading, bordered = true}: IButton) => {
  return (
    <Button 
      auto={auto} 
      shadow 
      color="gradient" 
      bordered={bordered}
      css={css} 
      onPress={(e) => onPress(e)}
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