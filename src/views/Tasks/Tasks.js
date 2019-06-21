import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../images/logo.png';
import deepPurple from '@material-ui/core/colors/deepPurple';
import { fade, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import Panel from './Panel';
import TaskList from './TaskList';
import TodayTasks from './TodayTasks';
import TomorrowTasks from './TomorrowTasks';

const primary = deepPurple[900]; // #311b92
const secondary = deepPurple['A200']; // #7142f4

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
