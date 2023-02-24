import BodyLayout from '@/components/layout/BodyLayout/BodyLayout'
import { SettingsContext } from '@/context/SettingsContext'
import Router from '@/Routes/Router'
import { createTheme, Loading, NextUIProvider } from '@nextui-org/react'
import React, { useContext } from 'react'
import NavbarContainer from '../NavbarContainer/NavbarContainer'

const AppContainer = () => {
  const darkTheme = createTheme({ type: "dark" });
  const {settings, loading} = useContext(SettingsContext)
  console.log(loading);
  
  return (
    <>
    {
      loading ? 
      <Loading type="points" /> : 
      <NextUIProvider theme={darkTheme}>
        <NavbarContainer />
          <BodyLayout>
            <Router />
          </BodyLayout>
        </NextUIProvider>
    }
      </>
  )
}

export default AppContainer