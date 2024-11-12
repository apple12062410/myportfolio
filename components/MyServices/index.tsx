'use client'
import { Grid, Box, Typography, Stack } from '@mui/material';
import Image from 'next/image';

export default function MyServices() {
  // Create an array of 20 items to map over
  const items = Array.from({ length: 20 });

  return (
   <Stack mt={5}>
    <Stack 
    justifyContent='center'
    alignItems='center'
    >
        <Typography
            variant='h1'
            fontWeight={600}
            fontSize={30}
        >
            My Services
        </Typography>
    </Stack>
    <Grid container spacing={4} justifyContent="center" mt={5}>
      {items.map((_, index) => (
        <Grid key={index} item xs={12} sm={6} md={6} lg={3}>
          <Box
            sx={{
              height: '300px',
              borderRadius: '8px',
              overflow: 'hidden',
              position: 'relative',
              backgroundColor: 'red',
              // Apply pop-up effect on hover
              '&:hover': {
                transform: 'scale(1.1)', // Magnification effect
                animation: 'popUp 0.9s ease-out', // Pop-up effect
              },
              transition: 'transform 0.3s ease-out', // Smooth transition for magnification

              // Keyframes for pop-up effect
              '@keyframes popUp': {
                '0%': { transform: 'scale(1)' },
                '30%': { transform: 'scale(1.1)' },
                '50%': { transform: 'scale(0.9)' },
                '70%': { transform: 'scale(1.05)' },
                '100%': { transform: 'scale(1)' },
              },
            }}
          >
            <Image
              src="/vercel.svg"
              alt={`Image ${index + 1}`}
              layout="responsive"
              width={300}
              height={200}
              objectFit="cover"
            />

            {/* Info Overlay on Image */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
                color: 'white',
                padding: '10px',
                textAlign: 'left',
              }}
            >
              <Typography variant="h6">Service Name {index + 1}</Typography>
              <Stack gap={2} direction='row'>
                <Typography
                    fontWeight={600}
                    variant="body2"
                    sx={{
                    textDecoration: 'line-through', // Apply strikethrough effect
                    }}
                 >
                   Price: ${100 + index}
                </Typography>
                <Typography
                   fontWeight={600}
                   variant="body2">Discounted Price: ${100 - index}</Typography>
              </Stack>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Stack>
  );
}
