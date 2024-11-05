import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { styled } from '@mui/system';
import ProjectCard from './ProjectCard';
import BlogPostCard from './BlogPostCard';
import { ColorTextTypography } from './CustomTypography';

import Footer from './Footer';
import TestimonialSection from './TestimonialSection';

const HeroContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const HeroButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
  backgroundColor: '#1DB954',
  '&:hover': {
    backgroundColor: '#00FFFF',
  },
}));

const ViewAllButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
  backgroundColor: '#1DB954',
  '&:hover': {
    backgroundColor: '#00FFFF',
  },
}));

// ... rest of the code...
const posts = [
  { 
    id: 1, 
    title: 'My first post', 
    description: 'This is the first post on my blog...', 
    postUrl: '/blog/1',
    thumbnailUrl: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixid=M3w0NDgzMDl8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGdhbWVzfGVufDB8fHx8MTY4Nzc1MDE4MHww&ixlib=rb-4.0.3'
  },
  { 
    id: 2, 
    title: 'My second post', 
    description: 'This is the second post on my blog...', 
    postUrl: '/blog/2',
    thumbnailUrl: 'https://images.unsplash.com/photo-1586182987320-4f376d39d787?ixid=M3w0NDgzMDl8MHwxfHNlYXJjaHwyfHx2aWRlbyUyMGdhbWVzfGVufDB8fHx8MTY8Nzc1MDE4MHww&ixlib=rb-4.0.3'
  },
];

const projects = [
  { 
    id: 1, 
    title: 'Project Alpha', 
    description: 'An innovative solution for efficient resource management.', 
    projectUrl: '/projects/1',
    thumbnailUrl: 'https://images.unsplash.com/photo-1555066931-bf19f8fd108f?ixid=M3w0NDgzMDl8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwbWFuYWdlbWVudHxlbnwwfHx8fDE2ODc3NTAxODA&ixlib=rb-1.2.1'
  },
  { 
    id: 2, 
    title: 'Project Beta', 
    description: 'A cutting-edge application to streamline online workflows.', 
    projectUrl: '/projects/2',
    thumbnailUrl: 'https://images.unsplash.com/photo-1553484771-371e8e279a19?ixid=M3w0NDgzMDl8MHwxfHNlYXJjaHwyfHxwcm9qZWN0JTIwbWFuYWdlbWVudHxlbnwwfHx8fDE2ODc7NTAxODA&ixlib=rb-1.2.1' 
  },
];


const Home = () => {
  const [isDarkTheme, setTheme] = React.useState(false);
  
  const toggleTheme = () => {
    setTheme(!isDarkTheme);
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <HeroContainer component="section">
        <ColorTextTypography component="h1" variant="h2" align="center" gutterBottom>
          Welcome to Daniel Lopez's Game Dev Portfolio
        </ColorTextTypography>
        <Typography component="h2" variant="h5" align="center" paragraph>
          I'm a passionate game developer. Here you can find my projects and read my blog posts.
        </Typography>
        <HeroButton variant="contained" href="/portfolio">
          View My Portfolio
        </HeroButton>
      </HeroContainer>

      <Container component="section" sx={{ my: 8 }}>
        <ColorTextTypography component="h2" variant="h4" gutterBottom>
          Latest Projects
        </ColorTextTypography>
        <Grid container spacing={4}>
          {projects.map(project => <ProjectCard key={project.id} project={project} />)}
        </Grid>
        <ViewAllButton variant="contained" href="/portfolio">View All Projects</ViewAllButton>
      </Container>

      <Container component="section" sx={{ my: 8 }}>
        <ColorTextTypography component="h2" variant="h4" gutterBottom>
          Recent Blog Posts
        </ColorTextTypography>
        <Grid container spacing={4}>
          {posts.map(post => <BlogPostCard key={post.id} post={post} />)}
        </Grid>
        <ViewAllButton variant="contained" href="/blog">View All Blog Posts</ViewAllButton>
      </Container>

      <Container component="section" sx={{ my: 8 }}>
        <ColorTextTypography component="h2" variant="h4" gutterBottom>
          About Me
        </ColorTextTypography>
        <Typography component="h3" variant="h6">
          I am Daniel Lopez, a passionate game developer with X years of experience. 
          I specialize in developing engaging and innovative digital and physical game designs.
        </Typography>
      </Container>
      <TestimonialSection />
      <Footer />
    </Box>
  );
};

export default Home;