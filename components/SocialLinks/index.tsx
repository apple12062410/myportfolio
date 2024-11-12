'use client';
import { Stack, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from 'next/link';

export default function SocialLinks() {
  return (
    <Stack direction="row" gap={3} justifyContent="center" alignItems="center" mt={5}>
      {/* Facebook Icon Link */}
      <Link href="https://facebook.com" passHref>
        <IconButton sx={{ color: '#3b5998' }}>
          <FacebookIcon />
        </IconButton>
      </Link>

      {/* Instagram Icon Link */}
      <Link href="https://instagram.com" passHref>
        <IconButton sx={{ color: '#E4405F' }}>
          <InstagramIcon />
        </IconButton>
      </Link>

      {/* LinkedIn Icon Link */}
      <Link href="https://linkedin.com" passHref>
        <IconButton sx={{ color: '#0077B5' }}>
          <LinkedInIcon />
        </IconButton>
      </Link>

      {/* YouTube Icon Link */}
      <Link href="https://youtube.com" passHref>
        <IconButton sx={{ color: '#FF0000' }}>
          <YouTubeIcon />
        </IconButton>
      </Link>
    </Stack>
  );
}
