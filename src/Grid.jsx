import React from 'react';
import Box from '@mui/material/Box';

export default function Grid({
  cols,
  cg = 1,
  rg = 0,
  lh = 25,
  sx = {},
  children,
}) {
  return (
    <Box
      display="grid"
      gridTemplateColumns={cols}
      columnGap={cg}
      rowGap={rg}
      lineHeight={`${lh}px`}
      sx={sx}
    >
      {children}
    </Box>
  );
}
