'use client'
import { Typography, Stack, Grid, Box } from '@mui/material';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import SocialLinks from '../SocialLinks';

const AnimatedTypography = styled(Typography)({
  animation: 'fadeIn 2s ease-in-out',
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
      transform: 'translateY(20px)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
});

export default function AboutUs() {
  return <Stack mt={5} gap={2}>
           <Stack direction="row" gap={5} justifyContent="center">
            <AnimatedTypography variant="h4">Hi There I am Claudia</AnimatedTypography>
          </Stack>
          <SocialLinks />
           <AnimatedTypography>
                **Hello! I'm Claudia, a software engineer with a passion for building impactful digital solutions.**
                 With over five years of hands-on experience in software development, I specialize in 
                 crafting robust and scalable applications that improve user engagement and streamline 
                 operations. My expertise lies in full-stack development, and I have a strong foundation 
                 in a range of technologies, including JavaScript, React, Node.js, Python, and various 
                 cloud platforms. This blend of skills enables me to tackle complex problems from both 
                 front-end and back-end perspectives, ensuring seamless integration and performance.
          </AnimatedTypography>
          <AnimatedTypography>
             From a young age, I’ve always been fascinated by how things work, especially in the realm 
             of technology. My curiosity led me to explore various aspects of computing, and over time,
             it grew into a deep interest in software engineering. This curiosity evolved into a profession 
             where I get to combine my problem-solving skills with my love for technology to make a real impact
             on businesses and users alike.
          </AnimatedTypography>
          <AnimatedTypography>
             I have a strong foundation in both front-end and back-end development, with significant
             experience in building scalable web applications. Over the years, I’ve had the opportunity to
             work with a diverse range of technologies, from the basics like HTML, CSS, and JavaScript to
             more advanced tools like React, Node.js, Express.js, and Python. My ability to adapt to various
             technologies has allowed me to tackle a broad range of projects, each with its unique 
             challenges and rewards.
          </AnimatedTypography>
          <AnimatedTypography>
            My journey in software development started after I graduated with a degree in Computer Science,
            where I learned the theoretical foundations of computer systems, algorithms, data structures,
            and software design. Although these subjects were fascinating, what truly piqued my interest was
                the idea of creating software that could solve real-world problems. During my academic years, 
                I worked on several small projects, each one teaching me new things about coding, testing, and 
                deploying applications. These early experiences helped me realize 
            that software engineering was the career path I wanted to pursue.
          </AnimatedTypography>
          <Grid container spacing={2} mt={{xs: 1, md: 3}}>
            <Grid item xs={12} sm={3} md={3}>
             <Box
                sx={{
                    height: '200px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    position: 'relative', // Make sure the image is contained within the Box
                    backgroundColor: 'red', // Grey background for the empty part
                    filter: 'blur(3px)', // Apply blur effect
                }}
                >
                <Image
                    src="/vercel.svg"
                    alt="Image 1"
                    layout="responsive"
                    width={300}
                    height={200}
                    objectFit="cover"
                />
               </Box>
             </Grid>
             <Grid item xs={12} sm={3} md={3}>
             <Box
                sx={{
                    height: '200px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    position: 'relative', // Make sure the image is contained within the Box
                    backgroundColor: 'red', // Grey background for the empty part
                    filter: 'blur(3px)', // Apply blur effect
                }}
                >
                <Image
                    src="/vercel.svg"
                    alt="Image 1"
                    layout="responsive"
                    width={300}
                    height={200}
                    objectFit="cover"
                />
               </Box>
             </Grid>
             <Grid item xs={12} sm={3} md={3}>
             <Box
                sx={{
                    height: '200px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    position: 'relative', // Make sure the image is contained within the Box
                    backgroundColor: 'red', // Grey background for the empty part
                    filter: 'blur(3px)', // Apply blur effect
                }}
                >
                <Image
                    src="/vercel.svg"
                    alt="Image 1"
                    layout="responsive"
                    width={300}
                    height={200}
                    objectFit="cover"
                />
               </Box>
             </Grid>
             <Grid item xs={12} sm={3} md={3}>
             <Box
                sx={{
                    height: '200px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    position: 'relative', // Make sure the image is contained within the Box
                    backgroundColor: 'red', // Grey background for the empty part
                    filter: 'blur(3px)', // Apply blur effect
                }}
                >
                <Image
                    src="/vercel.svg"
                    alt="Image 1"
                    layout="responsive"
                    width={300}
                    height={200}
                    objectFit="cover"
                />
               </Box>
             </Grid>
             
          </Grid>
    </Stack>;
}
