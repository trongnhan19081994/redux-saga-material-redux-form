import React, { Component } from 'react';
import propTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import styles from './styles';
import TaskList from '../../components/TaskList';
import TaskForm from '../../components/TaskForm';
import { STATUSES } from '../../constants';

const listTask = [
  {
    id: 1,
    title: 'Read book',
    description: 'Read material ui book',
    status: 0,
  },
  {
    id: 2,
    title: 'Read book 2',
    description: 'Read material ui book 2',
    status: 2,
  },
  {
    id: 3,
    title: 'Read book 3',
    description: 'Read material ui book 3',
    status: 1,
  },
];

class Taskboard extends Component {
  // eslint-disable-next-line react/state-in-constructor
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  openForm = () => {
    this.setState({
      open: true,
    });
  };

  randerForm() {
    const { open } = this.state;
    let xhtml = null;
    return (xhtml = <TaskForm open={open} onClose={this.handleClose} />);
  }

  renderBoard() {
    let xhtml = null;
    return (xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((status) => {
          const taskFilter = listTask.filter(
            (task) => task.status === status.value,
          );
          return (
            <TaskList tasks={taskFilter} status={status} key={status.value} />
          );
        })}
      </Grid>
    ));
  }

  render() {
    const { classes } = this.props;
    var test = null;
    return (
      <div className={classes.taskBoard}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.openForm}
        >
          <AddIcon /> Thêm mới công việc
        </Button>
        {this.renderBoard()}
        {this.randerForm()}
      </div>
    );
  }
}

Taskboard.propTypes = {
  classes: propTypes.object,
};

export default withStyles(styles)(Taskboard);
