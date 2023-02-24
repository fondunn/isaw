import React from 'react'
import ContentLayout from '../../components/layout/ContentLayout/ContentLayout'
import { AuthContext } from '../../context/AuthContext';
import {
  getAuth,
  signOut,
} from "firebase/auth";
import { APP } from '../../firebase/initialize';
import { generateCookies } from '../../utils/generateCookies';
import { navigateTo } from '../../utils/navigateTo';
import { useNavigate } from 'react-router-dom';
import { Button, Grid, Modal, Text } from '@nextui-org/react';
import { resetCookies } from '../../consts/resetCookies';

const Profile = () => {
  const { logout } = React.useContext(AuthContext);
  const auth = getAuth(APP);
  const navigate = useNavigate()
  const [isOpenModal, setIsOpenModal] = React.useState(false)

  const openModalHandler = () => {
    setIsOpenModal(true)    
  }
  const closeModalHandler = () => {
    setIsOpenModal(false)    
  }
  
  const logoutHandler = async() => {
    logout();
    generateCookies(resetCookies);
    signOut(auth);
    navigateTo(navigate, '/')
  }
  return (
    <ContentLayout label='Profile'>
      <Button onPress={openModalHandler} >Logout</Button>
      <Modal 
      closeButton
      aria-labelledby="modal-title"
      open={isOpenModal}
      onClose={closeModalHandler}
      autoMargin
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
          Are you sure, <br /> you want to logout?
          </Text>
        </Modal.Header>
        <Modal.Footer>
        <Grid.Container>
          <Grid sm={6} xs={12} justify='center'>
            <Button 
             color='error' light auto onPress={closeModalHandler}>Cancel</Button>
          </Grid>
          <Grid sm={6} xs={12} justify='center' >
            <Button 
             color='success' auto light onPress={logoutHandler}>Logout</Button>
          </Grid>
        </Grid.Container>
        </Modal.Footer>
      </Modal>
    </ContentLayout>
  )
}

export default Profile