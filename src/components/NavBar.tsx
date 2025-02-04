import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { Link } from "react-router-dom"

const NavBar = () => {
    return (      
        <AppBar position="fixed" sx={{ bgcolor: "primary.dark", top: 0, left: 0, width: "100%", zIndex: 0 }}>
            <Toolbar sx={{ justifyContent: "flex-end" }}>
                <Link to={"/Home"}>
                    <Button>🏢 Home</Button>
                </Link>
                <Link to={"/About"}>
                    <Button>⁉️ About</Button>
                </Link>
                <Link to={"/Recipes"}>
                    <Button>מתכונים 📚</Button>
                </Link>
            </Toolbar>
        </AppBar>
    )
}
export default NavBar;