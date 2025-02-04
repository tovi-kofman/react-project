import { Button, createTheme, styled } from "@mui/material";
  
 export const StyledButton = styled(Button)(({ theme}) => ({
    marginTop: theme.spacing(2),
    margin:'5px',
    top:75,
  backgroundColor:theme.palette.primary.main,
  color: theme.palette.common.white, 
  '&:hover': {
    backgroundColor:theme.palette.primary.dark,
  },
  zIndex: 100,
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