import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, TextField, Button } from '@material-ui/core';

//lines 5 to 26 are all about styling 
const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '2rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '1rem',
  },
  textField: {
    margin: '0.5rem',
    width: '275px',
  },
  button: {
    marginTop: '1rem',
    width: '100px',
  },
});
//this function displays the form for the user 
function SignInPage() {
  const classes = useStyles();

  return (
    <Box border={3} p={3}>
      <div className={classes.root}>
        <h1>Sign In</h1>
        <form className={classes.form}>
          
          <TextField
            label="Username"
            type="Username"
            id="Username"
            name="Username"
            className={classes.textField}
          />
          <TextField
            label="Password"
            type="password"
            id="password"
            name="password"
            className={classes.textField}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Box>
  );
}

export default SignInPage;
