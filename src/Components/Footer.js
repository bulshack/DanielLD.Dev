// --------------------------------------
// src/components/Footer.js
// --------------------------------------
import React from 'react';
import { Typography } from '@mui/material';
import { FooterContainer } from './FooterStyles';
import SocialIcons from './SocialIcons';

const Footer = () => {
  return (
    <FooterContainer>
      <Typography variant="h6" gutterBottom>
        Let's Connect
      </Typography>

      {/* Your social icons row */}
      <SocialIcons />

      {/* Email & Copyright */}
      <Typography variant="body2" sx={{ mt: 2 }}>
        Daniellopezdib@gmail.com
        <br />
        &copy; {new Date().getFullYear()} Daniel Lopez
      </Typography>
    </FooterContainer>
  );
};

export default Footer;
