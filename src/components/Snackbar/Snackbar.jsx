import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import useStyles from './Styles';

const CustomizedSnackbar = ({ open, setOpen }) => {
  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen({current:false , type:""});
  };

  return (
    <div className={classes.root}>
      <Snackbar 
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }} 
      open={open.current} autoHideDuration={6000} onClose={handleClose}>
        <MuiAlert onClose={handleClose} severity={open.type==="Income"?"success":"error"} elevation={6} variant="filled">{open.type==="Income"?"Money Added Successfully":"Money Withdrawn Successfully"}</MuiAlert>
      </Snackbar>
    </div>
  );
};

export default CustomizedSnackbar;
