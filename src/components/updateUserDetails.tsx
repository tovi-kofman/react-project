// import { TextField, Button, Typography, Modal, Box } from '@mui/material';
// import { FormEvent, useContext, useState } from 'react';
// import { UserContext } from './userReducer';
// import axios from 'axios';


// const UpdateUser = () => {
//   const userDetail = useContext(UserContext)
//   const [toUpdate, setUpdate] = useState(false);

//   const [firstName, setFirstName] = useState(userDetail.user.firstName || '');
//   const [lastName, setLastName] = useState(userDetail.user.lastName || '');
//   const [email, setEmail] = useState(userDetail.user.email || '');
//   const [address, setAddress] = useState(userDetail.user.address || '');
//   const [password, setPassword] = useState(userDetail.user.password || '');
//   const [phone, setPhone] = useState(userDetail.user.phone || '');
//   const [id, setId] = useState(userDetail.user.id || 0);

//   const handleSubmit = async (e: FormEvent) => {
//   e.preventDefault();
//     try {
      
//       const updatedData = {
//         firstName,
//         lastName,
//         email,
//         address,
//         password, 
//         phone,
//         id
//       };
    
//       await axios.put('http://localhost:3000/api/user', updatedData, {
//         headers: {
//           'user-id': userDetail.user.id||0

//         }
//       })
//       userDetail.userDispatch({
//         type: 'UPDATE_USER',
//         data: {

//           firstName: firstName,
//           lastName: lastName,
//           email: email,
//           address: address,
//           password: password,
//           phone: phone,
//           id:id

//         },
//       })
//       setUpdate(false);
//     }
//       catch (e: any) {
//   console.error("Error occurred:", e.response?.data || e.message);
//   alert(e.response?.data?.message || "An error occurred while processing the request.");
// }
//   };
//   const handleUpdate = () => {
//     setUpdate(true);
//   };
//   return (
//     <>
//       <Button onClick={handleUpdate} variant="outlined" color="primary">
//         עדכון פרטי המשתמש
//       </Button>
//       <Modal open={toUpdate}>
//         <Box sx={{
//           padding: 4, backgroundColor: 'white', borderRadius: 2, maxWidth: 500, margin: 'auto'
//         }}>

//           <form onSubmit={handleSubmit}>
//             <Typography variant="h5" gutterBottom>

//             </Typography>
//             <TextField
//               label="firstName"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//               required
//             />
//             <TextField
//               label="lastName"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//               required
//             />
//             <TextField
//               label="address"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               required
//             />
//             <TextField
//               label="email"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               type="email"
//             />
//             <TextField
//               label="password"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <TextField
//               label="phone"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               required
//             />
//             <Button onClick={handleSubmit} type="submit" variant="contained" color="primary">
//               send
//             </Button>
//           </form>
//         </Box>
//       </Modal>
//     </>
//   );
// };

// export default UpdateUser;

















// // import { Box, Modal, TextField } from "@mui/material";
// // import { FormEvent, useContext, useRef, useState } from "react";
// // import { UserContext } from "./login";
// // import { StyledButton, StyledHeading, StyledModalBox } from "./style";
// // import axios from "axios";
// // interface InputRefs {
// //     firstName: HTMLInputElement | null;
// //     lastName: HTMLInputElement | null;
// //     email: HTMLInputElement | null;
// //     password: HTMLInputElement | null;
// //     address: HTMLInputElement | null;
// //     phone: HTMLInputElement | null;
// // }

// // const Update = () => {
// //     const inputRefs = useRef<InputRefs>({
// //         firstName: null,
// //         lastName: null,
// //         email: null,
// //         password: null,
// //         address: null,
// //         phone: null
// //     });
// //    const { user, userDispatch } = useContext(UserContext)
// //     // const [user, userDispatch] = useReducer(userReducer, {} as UserType)
// //     const [open, setOpen] = useState(false);
// //     const handleSubmit = async (e: FormEvent) => {
// //         e.preventDefault()
// //         let res;
// //         try {
// //             res = await axios.put('http://localhost:3000/api/user/', {
// //                 firstName:inputRefs.current.firstName,
// //                 lastName:inputRefs.current.lastName,
// //                 email:inputRefs.current.email,
// //                 password:inputRefs.current.password,
// //                 address:inputRefs.current.address,
// //                 phone:inputRefs.current.phone,  
// //             },
// //             { headers: {'user-id':'' +user.id }}
// //             )
// //             userDispatch({
// //               type: 'UPDATE_USER',
// //               data: {
// //                  firstName:res.data.firstName,
// //                  lastName:res.data.lastName,
// //                  email:res.data.email,
// //                  password:res.data.password,
// //                  address:res.data.address,
// //                  phone:res.data.phone,
// //               },
// //             }
// //             )
      
// //           }
// //           catch (e:any) {
// //             console.log(e);
// //             alert(e.response?.data?.message)
// //           }
// //         handleClose();
// //     }
// //     const handleUpdate = () => {
// //         setOpen(true)
// //     }
// //     const handleClose = () => {
// //         setOpen(false)
// //     }
// //     return (
// //         <>
// //             <StyledButton onClick={handleUpdate} variant="contained" color="primary" >Update</StyledButton>
// //             <Modal
// //                 open={open}
// //                 onClose={handleClose}
// //             >
// //                 <StyledModalBox>
// //                 <Box>
// //                 <StyledHeading variant="h6">User update</StyledHeading>
// //                     <form onSubmit={handleSubmit}>
// //                         <TextField
// //                             label="First Name"
// //                             variant="outlined"
// //                             fullWidth
// //                             margin="normal"
// //                             required
// //                             defaultValue={user.firstName}
// //                             inputRef={(el) => (inputRefs.current.firstName = el)}
// //                         />
// //                         <TextField
// //                             label="Last Name"
// //                             variant="outlined"
// //                             fullWidth
// //                             margin="normal"
// //                             required
// //                             defaultValue={user.lastName}
// //                             inputRef={(el) => (inputRefs.current.lastName = el)}

// //                         />
// //                         <TextField
// //                             label="Email"
// //                             variant="outlined"
// //                             fullWidth
// //                             margin="normal"
// //                             type="email"
// //                             required
// //                             defaultValue={user.email}
// //                             inputRef={(el) => (inputRefs.current.email = el)}
// //                         />
// //                         <TextField
// //                             label="Password"
// //                             variant="outlined"
// //                             fullWidth
// //                             margin="normal"
// //                             required
// //                             defaultValue={user.password}
// //                             inputRef={(el) => (inputRefs.current.password = el)}

// //                         />
// //                         <TextField
// //                             label="Address"
// //                             variant="outlined"
// //                             fullWidth
// //                             margin="normal"
// //                             required
// //                             defaultValue={user.address}
// //                             inputRef={(el) => (inputRefs.current.address = el)}

// //                         />
// //                         <TextField
// //                             label="Phone"
// //                             variant="outlined"
// //                             fullWidth
// //                             margin="normal"
// //                             required
// //                             defaultValue={user.phone}
// //                             inputRef={(el) => (inputRefs.current.phone = el)}

// //                         />
// //                         <StyledButton type="submit" variant="contained" color="primary">
// //                         Submit
// //                     </StyledButton>
// //                     </form>
// //                 </Box>
// //                 </StyledModalBox>
// //             </Modal>
// //         </>);
// // }
// // export default Update