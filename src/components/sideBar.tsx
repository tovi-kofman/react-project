import { Drawer, List, ListItem, ListItemText, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <Drawer
            variant="permanent"
            anchor="right"
            sx={{
                width: 240,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 240,
                    boxSizing: 'border-box',
                },
            }}
        >
            <List>
                <ListItem>
                    <Button component={Link} to="/Home">
                        <ListItemText primary="Home" />
                    </Button>
                </ListItem>
                <ListItem>
                    <Button component={Link} to="/About">
                        <ListItemText primary="About" />
                    </Button>
                </ListItem>
                <ListItem>
                    <Button component={Link} to="/Recipes">
                        <ListItemText primary="Recipes" />
                    </Button>
                </ListItem>
                
            </List>
        </Drawer>
    );
};

export default Sidebar;