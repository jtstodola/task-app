import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../../images/logo.png';
import deepPurple from '@material-ui/core/colors/deepPurple';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import SettingsOutlined from '@material-ui/icons/SettingsOutlined';

const primary = deepPurple[900]; // #311b92
const secondary = deepPurple['A200']; // #7142f4

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 2 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  app: {
    backgroundColor: primary,
    position: "static"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: secondary,
    '&:hover': {
      backgroundColor: fade(secondary, 0.65),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    left: '-10px',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 300,
    },
  },
  sectionDesktop: {
    marginLeft: "auto",
    marginRight: -12,
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  }
}));


export default function Panel() {
  const classes = useStyles();

  return (
    <AppBar className={classes.app} elevation={0}>
      <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
          >
            <img src={logo} alt="logo" />
          </IconButton>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'Search' }}
            />
          </div>

          <div className={classes.sectionDesktop}>
            <IconButton color="inherit">
              <Badge variant="dot" color="secondary">
                <SettingsOutlined />
              </Badge>
            </IconButton>
          </div>
      </Toolbar>
    </AppBar>
  );
}
