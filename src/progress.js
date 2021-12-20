import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function LinearProgressWithLabel(props) {
    
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgress.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default function LinearWithValueLabel() {
   let percentage = 100;
  const [progress, setProgress] = React.useState(percentage);

  React.useEffect(() => {
    const timer = setInterval(() => {
     
      setProgress((prevProgress=percentage) => (prevProgress <= 0 ? percentage : percentage = prevProgress - 10));
      if(percentage===0)   {
        clearInterval(timer);
      }   
    }, 800);

  }, []);

  return (
    <Box sx={{ width: '100%' }}>
        <LinearProgress  value={progress} />     
    </Box>
   
  );
}