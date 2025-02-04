import { useContext } from "react"
import { Avatar, Box, Typography } from "@mui/material"
import {  green } from "@mui/material/colors"
import { UserContext } from "./userReducer"


const ShowUser=()=>{
    const  {user}= useContext(UserContext)
return(
    <>
    <Box display="absolute" alignItems="center">
            <Avatar sx={{ bgcolor: green[900], marginRight: 3,top:75 }}>
                {user.firstName?.charAt(0)}
            </Avatar>
            <Typography variant="h6">{user.firstName}</Typography>
        </Box>
        </>
)
}
export default ShowUser
