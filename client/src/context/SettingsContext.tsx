import { DB } from "@/firebase/initialize";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { IContextChildrenProps } from "../types/AuthContext";

export interface IAuthorize {
  linksColor: string,
  navLinkSelectedColor: string,
}

export interface IContext {
  settings: IAuthorize,
  loading: boolean,
}

interface ISettings {
  linksColor: string,
  navLinkSelectedColor: string,
}

const initialState : ISettings = {
  linksColor: '#fff',
  navLinkSelectedColor: 'orange',
}

export const SettingsContext = React.createContext<IContext | undefined>(undefined);

const generateSettings = (data: any) => {
  return {
    linksColor: data.linksColor,
    navLinkSelectedColor: data.navLinkSelectedColor,
  }
}

const SettingsProvider : React.FC<IContextChildrenProps> = ({ children }) => {
  const [settingsState, setSettingsState] = useState(initialState)
  const [loading, setLoading] = useState(true)
  const getSettings = async () => {
    const settingsRef = doc(DB, "settings", "data");
    try {
      const res = await getDoc(settingsRef);
      const settings = res.data()
      setSettingsState(generateSettings(settings));
    } 
      catch (e) {console.error(e)}
  }
  useEffect(() => {
    getSettings().finally(() => setLoading(false))
  }, [])

  return (
    <SettingsContext.Provider value={{
      settings: settingsState,
      loading: loading
    }}>{children}</SettingsContext.Provider>
  );
};

export default SettingsProvider;
