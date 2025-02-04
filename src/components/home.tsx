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
                minHeight: '100vh' // מבטיח שהקונטיינר יתפס את כל גובה העמוד
            }}
        >
            <Typography variant="h2" component="h1" gutterBottom style={{ color: 'green' }}>
                ברוכים הבאים לספר המתכונים המופלא שלי
            </Typography>
            <Typography variant="h5" component="h2" paragraph style={{ color: 'green' }}>
                גלו את המתכונים הטעימים והייחודיים שלנו, ותחוו חוויות קולינריות שלא תשכחו
            </Typography>
            <Box display="flex" justifyContent="center">
                <Box margin={2} textAlign="center">
                    <AccessAlarm style={{ fontSize: 50, color: '#3f51b5' }} />
                    <Typography variant="body1" style={{ color: 'green' }}>מתכונים מהירים</Typography>
                </Box>
                <Box margin={2} textAlign="center">
                    <ThreeDRotation style={{ fontSize: 50, color: '#3f51b5' }} />
                    <Typography variant="body1" style={{ color: 'green' }}>מתכונים יצירתיים</Typography>
                </Box>
            </Box>
            <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
                התחילו לבשל עכשיו
            </Button>
        </Container>
    );
};

export default Home;
