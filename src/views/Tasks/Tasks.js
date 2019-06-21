import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Panel from './Panel';
import TaskList from './TaskList';
import TodayTasks from './TodayTasks';
import TomorrowTasks from './TomorrowTasks';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
  }
}));


export default function Login() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container component="main" className={classes.root}>
        <Grid item xs={12} md={3} component={Paper} elevation={0} square>
          <TaskList />
        </Grid>

        <Grid item xs={12} md={9} component={Paper} square >
          <Panel />
          <Grid item xs={12} md={7}>
            <TodayTasks />
          </Grid>
          <Grid item xs={12} md={3}>
            <TomorrowTasks />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
