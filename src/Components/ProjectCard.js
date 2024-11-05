import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, Grid } from '@mui/material';
import { ColorTextTypography } from './CustomTypography';
import './CardStyles.css'; // Import your custom CSS file

const ProjectCard = ({ project }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className="custom-card">
        <CardContent>
          <ColorTextTypography component="h3" variant="h5" className="custom-card-title">
            {project.title}
          </ColorTextTypography>
          <Typography component="p" variant="body2" className="custom-card-body">
            {project.description}
          </Typography>
        </CardContent>
        <CardActions className="custom-card-actions">
          <Button size="small" href={project.projectUrl} className="custom-card-button">View Project</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProjectCard;