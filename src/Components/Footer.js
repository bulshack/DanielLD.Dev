// Footer.js

import React from 'react';

// Extract styled components to separate files 
import { FooterContainer, SocialIcon } from './FooterStyles';
import { Typography, Box } from '@mui/material';

// Extract social icons to separate component
import SocialIcons from './SocialIcons';

const Footer = () => (
  <FooterContainer>

    {/* Consistent spacing between sections */}
    <Typography variant="h6" align="center" gutterBottom>
      Let's Connect
    </Typography>
    
    <SocialIcons />

    <Typography variant="body2" align="center">
      Daniellopezdib@gmail.com
      <br />
      &copy; {new Date().getFullYear()} Your Name  
    </Typography>

  </FooterContainer>
);

export default Footer;