import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Card, CardHeader, Grid } from '@material-ui/core';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import ChevronRightIcon from '@material-ui/icons/ChevronRight';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    //maxWidth: '60ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
    fontSize:17,
    fontWeight:'bold',
    letterSpacing:0.5
  },
  card:{
    width: '100%',
      marginTop:20
  },
  title:{
    fontWeight:'bold',
    fontSize:20,
  },
  titlef:{
    fontWeight:'bold',
    fontSize:20,
    color:'#3f51b5',
    
  },
  iconf:{
    fontSize:36,
    color:'#3f51b5'
  }
}));

export default function FundRaiserList() {
  const classes = useStyles();

  return (
      <Card className={classes.card}>
        <Grid container>
          <Grid xs={1} style={{color:'#ccc'}}><AcUnitIcon></AcUnitIcon></Grid>
          <Grid xs={6}> <Typography className={classes.title}>Funraiser Team</Typography></Grid>
        </Grid>
          
         <Grid container>
         <Grid xs={3}>  <AddCircleOutlineIcon className={classes.iconf}></AddCircleOutlineIcon></Grid>
           <Grid xs={6}> <Typography className={classes.titlef}>Funraiser Team</Typography></Grid>
           <Grid xs={3}><ChevronRightIcon className={classes.iconf}></ChevronRightIcon></Grid>
         </Grid>
        
    <List className={classes.root} >
      <ListItem alignItems="flex-start" style={{width:'100%'}}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://cdn2.iconfinder.com/data/icons/metro-uinvert-dock/256/User_No-Frame.png" />
        </ListItemAvatar>
        <ListItemText
          primary={"Brunch this weekend?"}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="primary"
              >
               1,000
              </Typography>
              {/* {" — I'll be in your neighborhood doing errands this…"} */}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://cdn2.iconfinder.com/data/icons/metro-uinvert-dock/256/User_No-Frame.png" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="primary"
              >
               6,075
              </Typography>
              {/* {" — Wish I could come, but I'm out of town this…"} */}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://cdn2.iconfinder.com/data/icons/metro-uinvert-dock/256/User_No-Frame.png" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="primary"
              >
                10,950
              </Typography>
              {/* {' — Do you have Paris recommendations? Have you ever…'} */}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
    </Card>
  );
}
