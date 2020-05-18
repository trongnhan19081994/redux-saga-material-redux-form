import React, { Component } from 'react';
// import Button from '@material-ui/core/Button';
import styles from './styles';
import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import Taskboard from './../Taskboard';
import theme from './../../commons/Theme';

class App extends Component {
  render() {
    // console.log('props:', this.props)
    // const { classes } = this.props;
    return (
      // <div className="App">
      //     <h1>Hello</h1>
      //     <Button variant="contained" color="primary">Hello World</Button>
      //     <div className={classes.box}>
      //         <div className={classes.shape} > React Js </div>
      //         <div className={classes.shape} > Angular Js </div>
      //         <div className={classes.shape} > Vue Js </div>
      //     </div>
      // </div>
      <ThemeProvider theme={theme}>
        <Taskboard />
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
