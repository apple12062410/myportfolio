'use client';
import { Box, Grid, Button } from '@mui/material';
import { StyledTextField } from '@/components/StyledComponents';

export default function EmailForm() {
  return (
    <Box sx={{ flexGrow: 1 }} mt={2}>
      <Grid
        container
        spacing={2}
        sx={{
          padding: 3,
          borderRadius: '12px',
        }}
      >
        <Grid item xs={12} md={6}>
          <StyledTextField id="outlined-basic" label="Name*" variant="outlined" />
        </Grid>

        <Grid item xs={12} md={6}>
          <StyledTextField id="outlined-basic" label="Email*" variant="outlined" />
        </Grid>

        <Grid item xs={12} md={12}>
          <StyledTextField id="outlined-basic" label="Subject*" variant="outlined" />
        </Grid>

        <Grid item xs={12} md={12}>
          <StyledTextField
            id="outlined-basic"
            variant="outlined"
            label="Your Message"
            multiline
            rows={6}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <Button
            variant="contained"
            sx={{
              borderRadius: '12px',
              height: '40px',
              marginTop: 2
            }}
          >
            Send Message
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
