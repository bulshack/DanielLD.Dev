import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { styled } from '@mui/system';
import { categories } from '../Data/ProjectsData';
import ProjectCard from './ProjectCard';
import Footer from './Footer';
import ProjectModal from './Modal';

import './Home.css';

// 1) Define the keyframes for flicker
import { keyframes } from '@emotion/react';

const buttonFlicker = keyframes`
  0% { filter: brightness(1); }
  50% { filter: brightness(2); }
  100% { filter: brightness(1); }
`;

// 2) Create a smaller NeonButton with flicker and new hover color
const NeonButton = styled(Button)(({ theme }) => ({
  color: '#fff',
  backgroundColor: '#1DB954',   // Normal color
  textTransform: 'uppercase',
  fontWeight: 600,
  letterSpacing: '1px',
  // Make it smaller
  padding: theme.spacing(1, 2),
  fontSize: '0.85rem',
  borderRadius: '6px',
  position: 'relative',
  // Subtle glow
  boxShadow: '0 0 6px rgba(0,255,127,0.3)', // Using a bright greenish glow
  transition: 'all 0.2s ease-out',
  '&:hover': {
    backgroundColor: '#32FF7E',  // A bright neon green on hover
    boxShadow: '0 0 12px rgba(0,255,127,0.6)',
    transform: 'scale(1.03)',
    animation: `${buttonFlicker} 0.3s linear`, // Flicker effect
  },
  '&:active': {
    transform: 'scale(0.98)',
    boxShadow: '0 0 8px rgba(0,255,127,0.4)',
  },
}));

// Helper: get 3 Game Projects
function getFeaturedProjects() {
  const gameCat = categories.find((cat) => cat.title === 'Game Projects');
  return gameCat ? gameCat.projects.slice(0, 3) : [];
}

const Home = () => {
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(null);

  useEffect(() => {
    setFeaturedProjects(getFeaturedProjects());
  }, []);

  const handleOpenModal = (project, uniqueId) => {
    setSelectedProject(project);
    setIsModalOpen(uniqueId);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(null);
  };

  return (
    <Box className="home-page" component="main">
      {/* HERO SECTION */}
      <section className="hero-section">
        <Container maxWidth="lg" className="hero-content">
          <Typography variant="h1" className="hero-title" gutterBottom>
            HELLO! I AM <span className="accent-text">DANIEL LOPEZ</span>
          </Typography>
          <Typography variant="h5" className="hero-subtitle">
            Software Engineer | Game Developer & Designer
          </Typography>
        </Container>
      </section>

      {/* FEATURED PROJECTS */}
      <Container sx={{ mt: 10 }}>
        <Typography variant="h4" className="category-title" gutterBottom>
          Featured Projects
        </Typography>
        <Grid container spacing={4}>
          {featuredProjects.map((project) => {
            const uniqueId = `home-feature-${project.id}`;
            return (
              <Grid item xs={12} sm={6} md={4} key={project.id}>
                <ProjectCard
                  project={project}
                  uniqueId={uniqueId}
                  setSelectedProject={() => handleOpenModal(project, uniqueId)}
                />
              </Grid>
            );
          })}
        </Grid>

        {/* Another smaller NeonButton for "View All Projects" */}
        <NeonButton variant="contained" href="/portfolio" sx={{ mt: 3 }}>
          View All Projects
        </NeonButton>
      </Container>

      {/* ABOUT SECTION */}
      <Container sx={{ mt: 10, mb: 10 }} className="about-section">
        <Typography variant="h4" className="category-title" gutterBottom>
          About Me
        </Typography>
        <Typography variant="h5" className="about-text">
          I’m Daniel Lopez, a passionate game developer with X years of experience in Unity and C#.
          My mission is to craft fresh, immersive worlds. Check out my projects below and see what’s cooking!
        </Typography>
      </Container>

      {/* FOOTER */}
      <Footer />

      {/* MODAL (only if a project is selected) */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          uniqueId={isModalOpen}
          isModalOpen={isModalOpen}
          closeModal={closeModal}
        />
      )}
    </Box>
  );
};

export default Home;
