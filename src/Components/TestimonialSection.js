import React from 'react';
import { Typography, Container } from '@mui/material';
import { styled } from '@mui/system';
import { ColorTextTypography } from './CustomTypography';

const TestimonialBox = styled('div')(({ theme }) => ({
  backgroundColor: '#121212',
  color: '#0DFF00',
  border: '3px solid #0DFF00',
  boxShadow: '0 0 5px #0DFF00, 0 0 10px #0DFF00, 0 0 15px #0DFF00, 0 0 20px #0DFF00',
  transition: 'all 0.2s ease-in-out',
  borderRadius: '4px',
  padding: theme.spacing(2),
  margin: theme.spacing(2, 0),
  '&:hover': {
    boxShadow: '0 0 5px #00FFFF, 0 0 10px #00FFFF, 0 0 15px #00FFFF, 0 0 20px #00FFFF',
    borderColor: '#00FFFF',
  },
}));

const TestimonialText = styled(Typography)(({ theme }) => ({
  color: '#EEEEEE',
  fontSize: '1rem',
  '&:first-of-type': {
    color: '#0DFF00',
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
}));

const testimonials = [
  {
    id: 1,
    name: 'Test User 1',
    testimonial: 'Daniel is an amazing game developer! His passion and creativity is unmatched.',
  },
  {
    id: 2,
    name: 'Test User 2',
    testimonial: 'Working with Daniel has been a great experience. He is dedicated and hardworking.',
  },
  {
    id: 3,
    name: 'Test User 3',
    testimonial: 'Daniel\'s ability to create engaging games is impressive. I love his work!',
  },
];

const TestimonialSection = () => {
  return (
    <Container component="section" sx={{ my: 8 }}>
      <ColorTextTypography component="h2" variant="h4" gutterBottom sx={{ color: '#0DFF00' }}>
        Testimonials
      </ColorTextTypography>
      {testimonials.map((testimonial) => (
        <TestimonialBox key={testimonial.id}>
          <TestimonialText variant="h6" gutterBottom>
            {testimonial.name}
          </TestimonialText>
          <TestimonialText>
            "{testimonial.testimonial}"
          </TestimonialText>
        </TestimonialBox>
      ))}
    </Container>
  );
};

export default TestimonialSection;