import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';
import './CardStyles.css'; // Import your custom CSS file

const CustomCard = ({ title, description }) => {
    return (
        <Card className="custom-card">
            <CardContent>
                <Typography variant="h5" component="div" className="custom-card-title">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" className="custom-card-body">
                    {description}
                </Typography>
            </CardContent>
            <CardActions className="custom-card-actions">
                <Button size="small" className="custom-card-button">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default CustomCard;