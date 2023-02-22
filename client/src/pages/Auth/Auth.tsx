import React from 'react'
import ContentLayout from '../../components/layout/ContentLayout/ContentLayout'
import ButtonCustom from '../../components/ui/ButtonCustom/ButtonCutsom'

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { APP, DB } from '../../firebase/initialize';
import { AuthContext } from '../../context/AuthContext';
import { getRecievedAuthData } from '../../utils/getRecievedAuthData';
import { generateCookies } from '../../utils/generateCookies';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { getCookie } from '../../utils/getCookie';
import { createUserData } from '../../utils/createUserData';
import { navigateTo } from '../../utils/navigateTo';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate()
  const auth = getAuth(APP);
  const { login } = React.useContext(AuthContext);
  const loginHandler = async () => {
    const res = await signInWithPopup(auth, provider)
    const recievedAuth = getRecievedAuthData(res.user)
    login(recievedAuth)
    let expires = 86400;
    const cookies = [
      {key: "uid", value: res.user.uid, expires},
      {key: "email", value: res.user.email, expires},
      {key: "displayName", value: res.user.displayName, expires},
    ]
    generateCookies(cookies)
    const docRef = doc(DB, "users", getCookie("uid"));
    const user = await getDoc(docRef)
    if (!user.data()) {
      const data = createUserData()
      setDoc(doc(DB, "users", getCookie("uid")), data);
    }
    navigateTo(navigate, '/')
  }
  return (
    <ContentLayout label='Auth'>
      <ButtonCustom label='Auth with Google' onPress={() => loginHandler()} />
    </ContentLayout>
  )
}

export default Auth