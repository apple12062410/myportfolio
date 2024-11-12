'use client';
import { Typography, Stack } from '@mui/material';
import Info from './Info';
import EmailForm from './EmailForm';

export default function ContactUs() {
  return (
    <Stack gap={3}>
      <Typography sx={{ fontColor: 'white' }} variant="h4">
        Contact Me
      </Typography>
      <Info />
      <EmailForm />
    </Stack>
  );
}
