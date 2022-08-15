import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const LoadingSpinner = () => {
  return (
    <Box sx={{
      display: 'flex',
      width: '100%',
      height: 'calc(100vh - 68.5px)',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <CircularProgress size={50} />
    </Box>
  )
}

export default LoadingSpinner
