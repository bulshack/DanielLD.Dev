import React from 'react';
import { Grid } from '@mui/material';
import BlogPostCard from './BlogPostCard'; // Import the BlogPostCard component

function Blog() {
  // This is just dummy data. In a real app, you would fetch this data from a server.
  const posts = [
    { 
      id: 1, 
      title: 'My first post', 
      description: 'This is the first post on my blog...', 
      postUrl: '/blog/1',
      thumbnailUrl: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixid=M3w0NDgzMDl8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGdhbWVzfGVufDB8fHx8MTY4Nzc1MDE4MHww&ixlib=rb-4.0.3' // Add a thumbnail URL
    },
    { 
      id: 2, 
      title: 'My second post', 
      description: 'This is the second post on my blog...', 
      postUrl: '/blog/2',
      thumbnailUrl: 'https://images.unsplash.com/photo-1586182987320-4f376d39d787?ixid=M3w0NDgzMDl8MHwxfHNlYXJjaHwyfHx2aWRlbyUyMGdhbWVzfGVufDB8fHx8MTY8Nzc1MDE4MHww&ixlib=rb-4.0.3' // Add a thumbnail URL
    },
    // Add more posts as needed...
  ];

  return (
    <div className="blog">
      <h1>Blog</h1>
      <Grid container spacing={3}>
        {posts.map(post => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </Grid>
    </div>
  );
}

export default Blog;