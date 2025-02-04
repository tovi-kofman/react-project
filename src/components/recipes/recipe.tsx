import Button from '@mui/material/Button';
import { Link} from 'react-router-dom'; 
import { Card, CardContent, Typography } from '@mui/material';
const Recipe = ({ id, title, description }: { id?: number; title: string; description: string }) => {
return (
<Card sx={{ borderRadius: 2, boxShadow: 2 }}>
            <CardContent>
            
                <Link to={`/Recipes/${id}`} style={{ textDecoration: "none" }}>
                    <Button variant="contained" color="primary">
                    <Typography variant="h6" fontWeight="bold">{title}</Typography>

                    </Button>
                </Link>
                <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                    {description}
                </Typography>
            </CardContent>
        </Card>
        )
}
export default Recipe;
