import { Container, Typography, Button, Box } from '@mui/material';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';

const Home = () => {
    return (
        <Container
            maxWidth="lg"
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                padding: 0, 
                margin: 0 
            }}
        >
            <video
                width="100%"
                height="100%"
                controls
                autoPlay
                loop
                style={{
                    objectFit: 'cover', 
                    position: 'absolute', 
                    top: 0,
                    left: 0,
                    zIndex: -1 
                }}
            >
                <source src="../public/עוגת לב מהממת.MP4" type="video/mp4" />
            </video>
            <Typography variant="h2" component="h1" gutterBottom style={{ color: 'green', zIndex: 1}}>
            ברוכים הבאים לספר המתכונים המופלא שלי
            </Typography>
            <Typography variant="h5" component="h2" paragraph style={{ color: 'green', zIndex: 1 }}>
                גלו את המתכונים הטעימים והייחודיים שלנו, ותחוו חוויות קולינריות שלא תשכחו
            </Typography>
            <Box display="flex" justifyContent="center" zIndex={1}>
                <Box margin={2} textAlign="center">
                    <AccessAlarm style={{ fontSize: 50, color: '#3f51b5' }} />
                    <Typography variant="body1" style={{ color: 'green' }}>מתכונים מהירים</Typography>
                </Box>
                <Box margin={2} textAlign="center">
                    <ThreeDRotation style={{ fontSize: 50, color: '#3f51b5' }} />
                    <Typography variant="body1" style={{ color: 'green' }}>מתכונים יצירתיים</Typography>
                </Box>
            </Box>
            <Button variant="contained" color="primary" style={{ marginTop: '20px', zIndex: 1 }}>
                התחילו לבשל עכשיו
            </Button>
        </Container>
    );
};

export default Home;
