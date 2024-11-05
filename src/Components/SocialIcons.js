// SocialIcons.js

import { Box } from '@mui/material';

import { SocialIcon } from './FooterStyles'; 

import TwitterIcon from '@mui/icons-material/Twitter';

import InstagramIcon from '@mui/icons-material/Instagram';

import LinkedInIcon from '@mui/icons-material/LinkedIn';

import EmailIcon from '@mui/icons-material/Email';


const SocialIcons = () => {

  return (

    <Box display="flex" justifyContent="center">

      <SocialIcon href="https://twitter.com/you">
        <TwitterIcon />
      </SocialIcon>

      <SocialIcon href="https://instagram.com/you">
       <InstagramIcon />
      </SocialIcon>

      <SocialIcon href="https://linkedin.com/you">
        <LinkedInIcon />
      </SocialIcon>
      
      <SocialIcon href="mailto:you@email.com">
        <EmailIcon />
      </SocialIcon>

    </Box>

  );

}


export default SocialIcons;