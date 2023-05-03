import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, TextField, Button } from '@material-ui/core';

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

function SignUpPage() {
  const classes = useStyles();

  return (
    <Box border={3} p={3}>
      <div className={classes.root}>
        <h1>Sign Up</h1>
        <form className={classes.form}>
          <TextField
            label="First Name"
            type="First Name"
            id="First Name"
            name="First Name"
            className={classes.textField}
          />
          <TextField
            label="Last Name"
            type="Last Name"
            id="Last Name"
            name="Last Name"
            className={classes.textField}
          />
          <TextField
            label="Username"
            type="Username"
            id="Username"
            name="Username"
            className={classes.textField}
          />
          <TextField
            label="Email"
            type="email"
            id="email"
            name="email"
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
            Sign Up
          </Button>
        </form>
      </div>
    </Box>
  );
}

export default SignUpPage;
