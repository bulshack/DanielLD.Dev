import { styled } from '@mui/system';

/* 
  The main container for the footer.
  We use a dark background (#232323, or #121212—whichever you prefer).
*/
export const FooterContainer = styled('footer')(({ theme }) => ({
  backgroundColor: '#232323',
  color: '#ffffff',
  padding: '2rem 1rem',
  marginTop: 'auto',
  textAlign: 'center',
  /* If you want text in the center, keep textAlign: 'center'. */
}));

/*
  The social icon anchor link.
  We give it the accent color (#4CAF50), with a neon-like hover.
*/
export const SocialIcon = styled('a')({
  color: '#4CAF50',
  margin: '0 0.5rem',
  fontSize: '1.5rem', 
  transition: 'color 0.3s ease',
  '&:hover': {
    color: '#32FF7E',  // a brighter green on hover
  },
});
