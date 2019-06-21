import React from 'react';
import PropTypes from 'prop-types';
import deepPurple from '@material-ui/core/colors/deepPurple';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Paper from '@material-ui/core/Paper';
import Event from '@material-ui/icons/Event';

const primary = deepPurple[900]; // #311b92
const secondary = deepPurple['A200']; // #7142f4

const tileData = [
  {title: 'V1Interview Scripts', project: "Birdseye - Application"}, 
];

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
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  gridList: {
    width: '100%',
    height: 450
  },
  gridListTileBar:{
    backgroundColor: 'rgba(0, 0, 0, 0.54)'
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  app: {
    backgroundColor: '#fff',
    position: "static"
  }
}));

const getDateToday = () => {
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  var today = new Date();
  return today.toLocaleDateString("en-US", options);
}


export default function TaskList() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div>
      <Typography component="h1" variant="h5">
        Tasks
      </Typography>
      <AppBar className={classes.app} elevation={0}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="All" />
          <Tab label="Projects" />
        </Tabs>
      </AppBar>

      <GridList cellHeight={180} className={classes.gridList} cols={1} >
        {tileData.map(tile => (
          <GridListTile className={classes.gridListTile} key={tile.title} >
            <GridListTileBar
              title={tile.title}
              textColor="#000"
              className={classes.gridListTileBar}
              subtitle={
                <div>
                  <span>{tile.project}</span>
                  <p>{getDateToday()}</p>
                </div>
              }
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <Event />
                </IconButton>
              }
            />
            
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
