'use client';
import { Typography, Stack, useMediaQuery} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';

export default function Info() {
   const isMobile = useMediaQuery('(max-width:600px)');
   const addressText = 'b22 house street Karachi'
  return (
      <Stack direction="row" gap={5} justifyContent="center">
        <Stack justifyContent="center" alignItems="center">
          <LocationOnIcon sx={{ color: 'blue' }} />
          <Typography fontWeight={600}>Address</Typography>
          <Typography>{isMobile && addressText.length > 8
            ? `${addressText.slice(0, 8)}...`
            : addressText}</Typography>
        </Stack>
        <Stack justifyContent="center" alignItems="center">
          <PhoneIcon sx={{ color: 'blue' }} />
          <Typography fontWeight={600}>Call Us On</Typography>
          <Typography>+9233*********</Typography>
        </Stack>
        <Stack justifyContent="center" alignItems="center">
          <MailIcon sx={{ color: 'blue' }} />
          <Typography fontWeight={600}>Email</Typography>
          <Typography>claudia@gmail.com</Typography>
        </Stack>
      </Stack>
  );
}
