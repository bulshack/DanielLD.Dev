import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/system';
import PathToResume from '../Data/Daniel_Lopez_-_Game_Developer.pdf';
import ResumePreview from '../Data/media/ResumePreview.png';
import './Resume.css';

const ResumeButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'var(--color-accent)',
  color: '#fff',
  fontWeight: '600',
  textTransform: 'uppercase',
  padding: '10px 20px',
  margin: '10px',
  borderRadius: '8px',
  boxShadow: '0 0 15px rgba(76, 175, 80, 0.5)',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#32FF7E',
    boxShadow: '0 0 20px rgba(50, 255, 126, 0.8)',
    transform: 'scale(1.05)',
  },
}));

const Resume = () => (
  <div className="resume-page">
    <h2 className="resume-title">My Resume</h2>
    <p className="resume-subtitle">
      Explore my journey and skills. You can view or download my resume below.
    </p>

    <div className="resume-preview-container">
      <img
        src={ResumePreview}
        alt="Resume Preview"
        className="resume-preview"
      />
    </div>

    <div className="resume-buttons">
      <ResumeButton
        variant="contained"
        onClick={() => window.open(PathToResume, '_blank')}
      >
        View in Browser
      </ResumeButton>
      <ResumeButton
        variant="contained"
        onClick={() => {
          const link = document.createElement('a');
          link.href = PathToResume;
          link.download = 'Daniel_Lopez_Resume.pdf';
          link.click();
        }}
      >
        Download Resume
      </ResumeButton>
    </div>
  </div>
);

export default Resume;
