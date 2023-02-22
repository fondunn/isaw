import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import Auth from '../pages/Auth/Auth'
import Dashboard from '../pages/Dashboard/Dashboard'
import Features from '../pages/Features/Features'
import Intro from '../pages/Intro/Intro'
import Page404 from '../pages/Page404/Page404'
import Profile from '../pages/Profile/Profile'

const Router = () => {
  const { user } = React.useContext(AuthContext);
  const {uid} = user
  if (!uid) {
    return (
    <Routes>
      <Route path='/' element={<Intro />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='*' element={<Page404 />} />
    </Routes>
    )
  } else if (uid && uid !== process.env.REACT_APP_ADMIN_UID) {
    return (
    <Routes>
      <Route path='/' element={<Features />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
    )
  } else if (uid && uid === process.env.REACT_APP_ADMIN_UID) {
    return (
    <Routes>
      <Route path='/' element={<Features />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
    )
  }
}

export default Router