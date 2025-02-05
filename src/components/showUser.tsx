import { useContext } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import { UserContext } from "./userReducer";

const ShowUser = () => {
    const { user } = useContext(UserContext);
    return (
        <Box 
            sx={{ 
                position: 'absolute', // Use absolute positioning
                top: 4, // Adjust the top position as needed
                left: 0, // Adjust the left position as needed
                zIndex: 1000, // Ensure it appears above other elements
                 // Use flexbox for horizontal alignment
                alignItems: 'center' // Center items vertically
            }}
        >
            <Avatar 
                sx={{ 
                    bgcolor: green[900], 
                    marginRight: 1, // Space between Avatar and Typography
                    width: 56, 
                    height: 56,
                    border: '2px solid white', // White border
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' // Shadow effect
                }}
            >
                {user.firstName?.charAt(0)}
            </Avatar>
            <Typography color="white" variant="h5">{"Hello!!! "+user.firstName||''}</Typography>
        </Box>
    );
}

export default ShowUser;
