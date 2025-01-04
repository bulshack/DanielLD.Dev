// src/components/NeonButton.jsx
import { styled } from '@mui/system';
import { Button } from '@mui/material';

/**
 * A neon-styled button that aligns with 
 * your dark glitchy game-dev theme.
 */
const NeonButton = styled(Button)(({ theme }) => ({
  color: '#fff',
  backgroundColor: '#1DB954',
  textTransform: 'uppercase',
  fontWeight: 600,
  letterSpacing: '1px',
  padding: theme.spacing(1.5, 3),
  borderRadius: '6px',
  position: 'relative',
  boxShadow: '0 0 8px rgba(0,255,255,0.3)', /* Subtle teal glow */
  transition: 'all 0.2s ease-out',
  '&:hover': {
    backgroundColor: '#00ffff', 
    boxShadow: '0 0 12px rgba(0,255,255,0.6)', /* brighter glow on hover */
    transform: 'scale(1.05)', 
  },
  // Optional "active" state to remove the push-down effect:
  '&:active': {
    transform: 'scale(1.02)',
    boxShadow: '0 0 10px rgba(0,255,255,0.4)',
  },
}));

export default NeonButton;
