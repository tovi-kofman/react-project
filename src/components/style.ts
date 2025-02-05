import { Button, createTheme, styled } from "@mui/material";
  
 export const StyledButton = styled(Button)(({ theme}) => ({
    marginTop: theme.spacing(2),
    margin:'5px',
    left :'53px',
   zIndex:10000,
  backgroundColor:theme.palette.common.white,
  color: theme.palette.primary.main, 
  '&:hover': {
    backgroundColor:theme.palette.primary.dark,
    color: theme.palette.common.white
  }
  }));
 export const theme = createTheme({
    palette: {
      background: {
        paper: '#ffff',
      },
      primary: {
        main: '#00796b',
      },
      secondary: {
        main: '#f50057', 
        dark: '#ab003c', 
      },
      
    },
  });