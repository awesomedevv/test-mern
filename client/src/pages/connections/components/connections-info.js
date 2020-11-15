import React from 'react';
import { Card, CardContent, CardHeader } from '@material-ui/core';
import { Button, makeStyles, Avatar, List, ListItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card_header: {
    borderBottom: '1px solid #E1E1E1',
    margin: '0px 20px',
    padding: '15px 0'
  },
  card_avatar: {
    width: '49px',
    height: '49px',
    borderRadius: '2.5px'
  },
  card_title: {
    fontFamily: 'Raleway',
    fontSize: '16px',
    color: '#333333'
  },
  link: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    textTransform: 'none',
    color: '#7C7C7C',
    fontFamily: 'Raleway',
    fontSize: '14px',
    padding: '0px 20px',
  },
  link_profile: {
    padding: '0',
    fontSize: '13px',
  },
  list_item: {
    padding: '0',
    margin: '5px 0'
  }
}));

export default (props) => {
  const classes = useStyles();
  return (
    <Card variant="outlined">
      <CardHeader
        avatar={
          <Avatar variant="square" src={props.user.avatarUrl} className={classes.card_avatar}/>
        }
        title={
          <span className={classes.card_title}>{`${props.user.name.first} ${props.user.name.last}`}</span>
        }
        subheader={
          <Button size='small' className={`${classes.link_profile} ${classes.link}`}>View your profile</Button>
        }
        className={classes.card_header}
      />
      <CardContent style={{padding:'5px 0'}}>
        <List component="nav">
          <ListItem button className={classes.list_item}>
            <Button size="small" className={classes.link}>
              <span>Pending Connection</span>
              <span>2</span>
            </Button>
          </ListItem>
          <ListItem button className={classes.list_item} style={{borderLeft:'1px solid #2CB1F4'}}>
            <Button size="small" className={classes.link}>
              <span style={{color:'#333333'}}>Your Connection</span>
              <span>124</span>
            </Button>
          </ListItem>
          <ListItem button className={classes.list_item}>
            <Button size="small" className={classes.link}>
              <span>In Your Network</span>
              <span>2543</span>
            </Button>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}