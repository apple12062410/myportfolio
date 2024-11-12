import React, { useMemo } from 'react';
import { Typography } from '@mui/material';
import { usePathname } from 'next/navigation';
import { getPathName } from '@/utils/getPathName';

export default function SectionTitle() {
  const pathname = usePathname();

  const sectionTitleText = useMemo(() => getPathName(pathname), [pathname]);

  return (
    <Typography
      key={pathname} // Changing key triggers re-render with each pathname change
      variant="h6"
      noWrap
      component="div"
      sx={{
        '@keyframes slideIn': {
          from: {
            opacity: 0,
            transform: 'translateX(-50%)',
          },
          to: {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
        animation: `slideIn 1s ease-out`,
      }}
    >
      {sectionTitleText}
    </Typography>
  );
}
