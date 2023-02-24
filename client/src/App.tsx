import React from "react";
import './styles/global.scss'
import Router from "./Routes/Router";
import AuthProvider from "./context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import NavbarContainer from "./components/ui/NavbarContainer/NavbarContainer";
import BodyLayout from "./components/layout/BodyLayout/BodyLayout";
import SettingsProvider from "./context/SettingsContext";
import AppContainer from "./components/ui/AppContainer/AppContainer";
const App = () => {
  const darkTheme = createTheme({ type: "dark" });
  return (
    <AuthProvider>
      <SettingsProvider>
        <BrowserRouter>
         
          <AppContainer />
        </BrowserRouter>
      </SettingsProvider>
    </AuthProvider>
  )
};

export default App;
