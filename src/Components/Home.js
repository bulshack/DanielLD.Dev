import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { styled } from '@mui/system';
import { keyframes } from '@emotion/react';

import { categories } from '../Data/ProjectsData';
import ProjectCard from './ProjectCard';
import Footer from './Footer';
import ProjectModal from './Modal';

import './Home.css';

/* ----- Flicker Animation for Neon Button ----- */
const buttonFlicker = keyframes`
  0% { filter: brightness(1); }
  50% { filter: brightness(2); }
  100% { filter: brightness(1); }
`;

/* ----- NeonButton: same style as before ----- */
const NeonButton = styled(Button)(({ theme }) => ({
  color: '#fff',
  backgroundColor: '#1DB954',
  textTransform: 'uppercase',
  fontWeight: 600,
  letterSpacing: '1px',
  padding: theme.spacing(1, 2),
  fontSize: '0.85rem',
  borderRadius: '6px',
  position: 'relative',
  boxShadow: '0 0 6px rgba(0,255,127,0.3)',
  transition: 'all 0.2s ease-out',
  '&:hover': {
    backgroundColor: '#32FF7E',
    boxShadow: '0 0 12px rgba(0,255,127,0.6)',
    transform: 'scale(1.03)',
    animation: `${buttonFlicker} 0.3s linear`,
  },
  '&:active': {
    transform: 'scale(0.98)',
    boxShadow: '0 0 8px rgba(0,255,127,0.4)',
  },
}));

/* Helper: get 3 game projects (for "Featured Projects") */
function getFeaturedProjects() {
  const gameCat = categories.find((cat) => cat.title === 'Game Projects');
  return gameCat ? gameCat.projects.slice(0, 3) : [];
}

/* Utility to handle multi-line typed text by splitting \n into <br/> */
function formatTypedTextWithBreaks(text) {
  return text.split('\n').map((line, idx) => (
    <React.Fragment key={idx}>
      {line}
      {idx < text.split('\n').length - 1 && <br />}
    </React.Fragment>
  ));
}

const Home = () => {
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(null);

  // Typewriter state
  const [typedText, setTypedText] = useState("");
  const [typedIndex, setTypedIndex] = useState(0);

  // Multiline text with \n for line breaks
  const fullText = "HELLO!\nI AM\nDANIEL LOPEZ";

  // Load featured projects
  useEffect(() => {
    setFeaturedProjects(getFeaturedProjects());
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (typedIndex < fullText.length) {
      const timer = setTimeout(() => {
        setTypedText((prev) => prev + fullText[typedIndex]);
        setTypedIndex((prev) => prev + 1);
      }, 100); // typing speed
      return () => clearTimeout(timer);
    }
  }, [typedIndex, fullText]);

  const typedDone = typedIndex >= fullText.length;

  // Modal
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
          {/* Typewriter Title */}
          <Typography variant="h1" className="hero-title" gutterBottom>
            {typedDone ? (
              // If done, show final lines with accent on "DANIEL LOPEZ"
              <>
                HELLO!
                <br />
                I AM
                <br />
                <span className="accent-text">DANIEL LOPEZ</span>
                <span className="console-cursor" />
              </>
            ) : (
              // If still typing, show partial text plus blinking cursor
              <>
                {formatTypedTextWithBreaks(typedText)}
                <span className="console-cursor" />
              </>
            )}
          </Typography>

          {/* Subtitle fades in after typing is done */}
          <Typography
            variant="h5"
            className={`hero-subtitle ${typedDone ? 'show' : ''}`}
          >
            Game Developer ∙ Designer ∙ VR Innovator
          </Typography>

          {/* Quote line (also fades in after typing is done) */}
          <Typography
            variant="subtitle2"
            className={`hero-quote ${typedDone ? 'show' : ''}`}
          >
            “Dreaming Big, Building Bigger: Crafting Worlds That Players Love.”
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

        <NeonButton variant="contained" href="/about" sx={{ mt: 3 }}>
          Read More About Me
        </NeonButton>
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
