import React from 'react';
import { Card, CardContent, CardHeader, Divider } from '@material-ui/core';
import { makeStyles, Paper, InputBase, List, ListItem } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import ConnectionsItem from './connections-item';

const useStyles = makeStyles((theme) => ({
  serach_bar: {
    margin: '15px 0',
    padding: '0 0',
    display: 'flex',
    alignItems: 'center',
    width: 311,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  icon_search: {
    color: '#ABABAB',
    paddingLeft: '10px',
  },
  list: {
    margin: '0 18.5px',
    padding: 0,
    backgroundColor: theme.palette.background.paper,
  },
  card_content: {
    padding: 0,
    "&:last-child": {
      paddingBottom: 0
    }
  },
  card_header: {
    padding: '5px 20px'
  },
  card_title: {
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '15px',
    color: '#333333',
  },
}));

export default (props) => {
  const classes = useStyles();
  return (
    <Card variant="outlined">
      <CardHeader
        action={
          <Paper variant="outlined" component="form" className={classes.serach_bar}>
            <SearchIcon className={classes.icon_search}/>
            <InputBase
              className={classes.input}
              placeholder="Search"
            />
          </Paper>
        }
        title={
          <span className={classes.card_title}>People in your network</span>
        }
        className={classes.card_header}
      />
      <CardContent className={classes.card_content}>
        <List className={classes.list}>

          {
            props.users.map((user, idx) => (
              <div key={idx}>
                <Divider/>
                <ListItem style={{padding:'14.5px 0'}}>
                  <ConnectionsItem user={user}/>
                </ListItem>
              </div>
            )
            )
          }

        </List>
      </CardContent>
    </Card>
  );
}