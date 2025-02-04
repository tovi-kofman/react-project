import { Typography, Container, Paper } from '@mui/material';

const About = () => {
    return (
        <Container maxWidth="md">
            <Paper elevation={3} style={{ padding: '20px', marginTop: '20px', textAlign: 'right' }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    אודות ספר המתכונים המופלא שלי
                </Typography>
                <Typography variant="body1" paragraph>
                    ספר המתכונים המופלא שלי הוא אוסף של מתכונים טעימים ומגוונים,
                    שנבחרו בקפידה כדי לספק חוויה קולינרית בלתי נשכחת 
                    בכל מתכון תמצאו הנחיות ברורות, מרכיבים טריים וטיפים מקצועיים 
                    שיסייעו לכם בכל שלב של הבישול.
                </Typography>
                <Typography variant="body1" paragraph>
                    בין אם אתם מתחילים או שפים מנוסים, ספר זה מציע משהו לכל אחד 
                    תגלו מתכונים לארוחות יומיות, חגיגיות, קינוחים ועוד
                </Typography>
                <Typography variant="body1" paragraph>
                    אני מקווה שתיהנו מהמתכונים שלי ותשתפו את החוויות שלכם עם אחרים
                </Typography>
            </Paper>
        </Container>
    );
};

export default About;
