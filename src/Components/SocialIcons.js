import React from 'react';
import { Box } from '@mui/material';
import { SocialIcon } from './FooterStyles';
import { GitHub, LinkedIn, MailOutline } from '@mui/icons-material';

const SocialIcons = () => {
  return (
    <Box sx={{ mb: 2 }}>
      <SocialIcon
        href="https://github.com/YourGitHubUser"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHub />
      </SocialIcon>
      <SocialIcon
        href="https://www.linkedin.com/in/YourLinkedInProfile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedIn />
      </SocialIcon>
      <SocialIcon href="mailto:Daniellopezdib@gmail.com">
        <MailOutline />
      </SocialIcon>
    </Box>
  );
};

export default SocialIcons;