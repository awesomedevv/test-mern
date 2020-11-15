import React from 'react';

import { Card, CardContent, CardHeader } from '@material-ui/core';
import { makeStyles, List, ListItem, ListItemText, Divider, Collapse } from '@material-ui/core';
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  card_header: {
    borderBottom: '1px solid #E1E1E1',
    padding: '8px 20px'
  },
  card_header_title: {
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '16px',
    color: '#7C7C7C',
  },
  list: {
    padding: '0 0',
    margin: '0 0',
  },
  list_item_text: {
    fontSize: '14px',
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: '16px',
    color: '#333333',
  },
  list_item: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  link: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    textTransform: 'none',
    color: '#7C7C7C',
  },
  arrow: {
    color: '#C5C5C5',
  },
  filter_detail_item: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0px 15px',
    color: '#7C7C7C',
    fontSize: '14px',
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: '30px',
  },
  filter_detail_input: {
    width: '100%',
    height: '35px',
    marginBottom: '10px',
    marginTop: '5px',
    padding: '0px 15px',
    border: '1px solid #D5D5D5',
    borderRadius: '3px',
    fontSize: '14px',
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: '30px',
    color: '#333333',
  },
  card_content: {
    padding: 0,
    "&:last-child": {
      paddingBottom: '0px'
    }
  }
}));

export default () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Card variant="outlined">
      <CardHeader
        subheader={<span className={classes.card_header_title}>Filter</span>}
        className={classes.card_header}
      />
      <CardContent className={classes.card_content}>
        <List component="nav" className={classes.list} aria-label="mailbox folders">
          <ListItem button onClick={handleClick}>
            <ListItemText primary="Location" classes={{primary:classes.list_item_text}}/>
            {open ? <ArrowDropUp className={classes.arrow}/> : <ArrowDropDown className={classes.arrow}/>}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit style={{paddingBottom: '5px'}}>
            <div className={classes.filter_detail_item}>
              <input type="text"  className={classes.filter_detail_input} placeholder="Enter a Location"/>
            </div>
            <div className={classes.filter_detail_item}>
              <span>New York</span>
              <span>24</span>
            </div>
            <div className={classes.filter_detail_item}>
              <span>San Francisco</span>
              <span>16</span>
            </div>
            <div className={classes.filter_detail_item}>
              <span>Los Angeles</span>
              <span>21</span>
            </div>
            <div className={classes.filter_detail_item}>
              <span>Chicago</span>
              <span>36</span>
            </div>
          </Collapse>

          <Divider />
          <ListItem button>
            <ListItemText primary="Roles" classes={{primary:classes.list_item_text}}/>
            <ArrowDropDown className={classes.arrow}/>
          </ListItem>

          <Divider />
          <ListItem button>
            <ListItemText primary="School" classes={{primary:classes.list_item_text}}/>
            <ArrowDropDown className={classes.arrow}/>
          </ListItem>

          <Divider />
          <ListItem button >
            <ListItemText primary="Employer" classes={{primary:classes.list_item_text}}/>
            <ArrowDropDown className={classes.arrow}/>
          </ListItem>

          <Divider />
          <ListItem button >
            <ListItemText primary="Department" classes={{primary:classes.list_item_text}}/>
            <ArrowDropDown className={classes.arrow}/>
          </ListItem>

        </List>
      </CardContent>
    </Card>
  );
}