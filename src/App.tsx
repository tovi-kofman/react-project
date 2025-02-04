import { RouterProvider } from 'react-router'
import './App.css'

import { Provider } from 'react-redux'
import { useReducer } from 'react'
import userReducer, { UserContext } from './components/userReducer';
import Login from './components/login';
import store from './store/store';
import { router } from './router';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { theme } from './components/style';



function App() {
  const [user, userDispatch] = useReducer(userReducer, {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: '',
    phone: '',
    id:0
  }); 
  return (
    <>
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={{ user: user, userDispatch }}>
    <Provider store={store}>
      <Login/>
      <RouterProvider router={router} />
      </Provider>
      </UserContext.Provider>
      </ThemeProvider>
    </>
  )
}

export default App