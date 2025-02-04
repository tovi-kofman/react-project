import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const AppLayout = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            
                    <NavBar /> 
                    <Outlet />
                </Box>
    );
};

export default AppLayout;