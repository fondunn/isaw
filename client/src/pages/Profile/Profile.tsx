import React from 'react'
import ContentLayout from '../../components/layout/ContentLayout/ContentLayout'
import ButtonCustom from '../../components/ui/ButtonCustom/ButtonCutsom'
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
  const madalHandler = (state: boolean) => {
    setIsOpenModal(state)
  }
  const logoutHandler = async() => {
    logout();
    generateCookies(resetCookies);
    signOut(auth);
    navigateTo(navigate, '/')
  }
  return (
    <ContentLayout>
      <ButtonCustom label='Logout' onPress={() => madalHandler(true)} />
      <Modal 
      closeButton
      aria-labelledby="modal-title"
      open={isOpenModal}
      onClose={() => madalHandler(false)}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
          Are you sure, <br /> you want to logout?
          </Text>
        </Modal.Header>
        <Modal.Footer>
        <Grid.Container>
          <Grid xs={6}>
            <Button light color='error' onPress={() => madalHandler(false)}>Cancel</Button>
          </Grid>
          <Grid xs={6}>
            <Button light color='success' onPress={() => logoutHandler()}>Logout</Button>
          </Grid>
        </Grid.Container>
        </Modal.Footer>
      </Modal>
    </ContentLayout>
  )
}

export default Profile