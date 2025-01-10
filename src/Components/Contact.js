// --------------------------------------------------------
// src/pages/Contact.js
// --------------------------------------------------------
import React, { useState } from 'react';
import './Contact.css';

import { Container, Typography, TextField } from '@mui/material';
import { styled } from '@mui/system';
import { keyframes } from '@emotion/react';
import { GitHub, LinkedIn, MailOutline } from '@mui/icons-material';

/* Flicker animation for neon button */
const buttonFlicker = keyframes`
  0% { filter: brightness(1); }
  50% { filter: brightness(2); }
  100% { filter: brightness(1); }
`;

/* NeonButton styling */
const NeonButton = styled('button')(({ theme }) => ({
  backgroundColor: 'var(--color-accent)',
  color: '#fff',
  textTransform: 'uppercase',
  fontWeight: 600,
  letterSpacing: '1px',
  fontSize: '0.85rem',
  borderRadius: '6px',
  boxShadow: '0 0 6px rgba(0,255,127,0.3)',
  border: 'none',
  padding: '0.8rem 1.5rem',
  cursor: 'pointer',
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

const Contact = () => {
  const [serverState, setServerState] = useState({ ok: false, msg: '' });

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mwppavrg', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });
      if (response.ok) {
        setServerState({ ok: true, msg: 'Thank you! Your message has been received.' });
        form.reset();
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Something went wrong');
      }
    } catch (err) {
      setServerState({ ok: false, msg: err.message || 'Oops! There was an error.' });
    }
  };

  return (
    <div className="contact-page">
      <Container maxWidth="md">
        <Typography variant="h2" className="contact-title">
          Get in Touch
        </Typography>

        <div className="contact-form-container">
          <form onSubmit={handleOnSubmit}>
            <TextField
              name="name"
              label="Name"
              variant="outlined"
              required
              className="contact-input"
              InputLabelProps={{ className: 'contact-label' }}
            />
            <TextField
              name="_replyto"
              label="Email"
              variant="outlined"
              type="email"
              required
              className="contact-input"
              InputLabelProps={{ className: 'contact-label' }}
            />
            <TextField
              name="message"
              label="Message"
              variant="outlined"
              required
              multiline
              rows={4}
              className="contact-input"
              InputLabelProps={{ className: 'contact-label' }}
            />

            <div className="form-button-wrapper">
              <NeonButton type="submit">
                Send Message
              </NeonButton>
            </div>
          </form>

          {serverState.msg && (
            <Typography
              variant="body1"
              sx={{ mt: 2, color: serverState.ok ? 'lightgreen' : 'salmon' }}
            >
              {serverState.msg}
            </Typography>
          )}
        </div>

        <div className="contact-extra">
          <p>
            Prefer email? You can reach me at{' '}
            <strong>
              <a
                href="mailto:Daniellopezdib@gmail.com"
                style={{ color: 'var(--color-accent)' }}
              >
                Daniellopezdib@gmail.com
              </a>
            </strong>.
          </p>

          <p>Or find me on social media:</p>
          <div className="social-icons">
            <a
              href="https://github.com/YourGitHubUsername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHub />
            </a>
            <a
              href="https://www.linkedin.com/in/YourLinkedInProfile/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedIn />
            </a>
            <a
              href="mailto:Daniellopezdib@gmail.com"
              aria-label="Email"
            >
              <MailOutline />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
