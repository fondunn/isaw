import React from 'react'
import { useLocation } from 'react-router-dom'

export const usePath = () => {
  const {pathname} = useLocation()
  return {currentPath: pathname}
}
