import { useContext, useEffect, useState } from "react";
import ShowUser from "./showUser";
import { User, UserContext } from "./userReducer";
import UserModal from "./userModal";
import axios from "axios";
import { StyledButton } from "./style";
const Login = () => {
  const { user, userDispatch } = useContext(UserContext)
  const [showUserComponent, setShowUserComponent] = useState(false);
  const [openUserModal, setOpenUserModal] = useState(false);
  const [modalType, setModalType] = useState<'login' | 'register' | 'update'>('login');
  const handleUserSubmit = async (data: User, type: 'register' | 'update' | 'login') => {
    try {
      let response;
      if (type === 'register') {
        response = await axios.post('http://localhost:3000/api/user/register', {
          email: data.email,
          password: data.password,
        });
        userDispatch({ type: 'ADD_USER', data: { email: data.email || '@@@', password: data.password || '%%%', id: response.data.userId } });
        ///////
        console.log(response.data)

      } else if (type === 'login') {
        response = await axios.post('http://localhost:3000/api/user/login', {
          email: data.email,
          password: data.password,
        });
        userDispatch({
          type: 'UPDATE_USER', data: {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password,
            address: data.address,
            phone: data.phone,
          },
        });
        //////////////
        console.log(response.data)
      } else if (type === 'update') {
        console.log(user)
        response = await axios.put('http://localhost:3000/api/user', {
          data: {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password,
            address: data.address,
            phone: data.phone,
            //id:user.id
          }
        }, { headers: { 'user-id': ''+user.id } });
        userDispatch({
          type: 'UPDATE_USER', data: {
            firstName: data.firstName, lastName: data.lastName, email: data.email, password: data.password, address: data.address, phone: data.phone,
          },
        });
        console.log(response.data.user)
      }
      setShowUserComponent(true);
      setOpenUserModal(false);
    } catch (error: any) {
      if (type === 'register') {
        if (error.response && error.response.data.message) {
          alert(`Registration Error: ${error.response.data.message}`);
        } else {
          alert('An error occurred during registration.');
        }
      } else if (type === 'login') {
        if (error.response && error.response.data.message) {
          alert(`Login Error: ${error.response.data.message}`);
        } else {
          alert('An error occurred during login.');
        }
      }
      else if (type === 'update') {
        if (error.response && error.response.data.message) {
          alert(`Update Error: ${error.response.data.message}`);
        } else {
          alert('An error occurred during update.');
        }
      }
    }
  };

  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <>
      <UserContext.Provider value={{ user, userDispatch }}>
        <StyledButton onClick={() => { setModalType('login'); setOpenUserModal(true); }} variant="contained" color="primary">Login</StyledButton>
        <StyledButton onClick={() => { setModalType('register'); setOpenUserModal(true); }} variant="contained" color="primary">Register</StyledButton>
        <UserModal
          open={openUserModal}
          onClose={() => setOpenUserModal(false)}
          onSubmit={(data: User) => handleUserSubmit(data, modalType)} // Corrected here
          title={modalType.charAt(0).toUpperCase() + modalType.slice(1)}
          type={modalType}
          initialData={user}
        />
        {showUserComponent && <ShowUser />}
        {showUserComponent && (
          <StyledButton onClick={() => { setModalType('update'); setOpenUserModal(true); }} variant="contained" color="primary">Update User</StyledButton>
        )}
        <style>
          {`
          body {
            overflow: hidden;
          }
        `}
        </style>
      </UserContext.Provider>

    </>
  );
};
export default Login;
