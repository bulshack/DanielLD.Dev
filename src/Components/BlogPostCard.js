import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, Grid } from '@mui/material';
import './CardStyles.css'; // Import your custom CSS file

const BlogPostCard = ({ post }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}> {/* Adjust the grid sizes here */}
      <Card className="custom-card">
        <img src={post.thumbnailUrl} alt={post.title} className="post-thumbnail" />
        <CardContent>
          <Typography component="h3" variant="h5" className="custom-card-title">
            {post.title}
          </Typography>
          <Typography component="p" variant="body2" className="custom-card-body">
            {post.description}
          </Typography>
        </CardContent>
        <CardActions className="custom-card-actions">
          <Button size="small" href={post.postUrl} className="custom-card-button">Read More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default BlogPostCard;