import React, { Component } from 'react';
import Header from '../../components/header';
import { Container } from '@material-ui/core';

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    marginTop: '100px',
  },
  background: {
    backgroundColor: '#F2F2F2',
  }
});

export default ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <Container className={classes.root}>
          {children}
      </Container>
    </div>
  );
}
