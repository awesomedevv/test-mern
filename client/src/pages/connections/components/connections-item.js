import React from 'react';
import { connect } from 'react-redux';
import { Grid, Avatar, Typography, IconButton } from '@material-ui/core';
import { Button, makeStyles } from '@material-ui/core';
import MoreHoriz from '@material-ui/icons/MoreHoriz';

const useStyles = makeStyles((theme) => ({
  card_header: {
    borderBottom: '1px solid #E1E1E1',
    margin: '0px 20px',
    padding: '15px 0'
  },
  item_avatar: {
    width: '49px',
    height: '49px',
    borderRadius: '2.5px'
  },
  btn_more: {
    marginLeft: '10px',
    minWidth: '30px',
    maxWidth: '35px'
  },
  btn_connect: {
    textTransform: 'none',
    fontFamily: 'Raleway',
    fontWeight: '500',
    color: '#2CB1F4',
    borderColor: '#2CB1F4',
  },
  button_contianer: {
    display:'flex',
    justifyContent: 'flex-end',
    height: '50px',
  },
  info_des: {
    color: '#7C7C7C',
    fontSize: '14px',
    fontFamily: 'Raleway',
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: '23px',
    maxHeight: '46px',
    overflow: 'hidden',
  },
  info_sub: {
    color: '#333333',
    fontSize: '13px',
    fontFamily: 'Raleway',
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: '23px',
  },
  info_name: {
    color: '#333333',
    fontSize: '17px',
    fontFamily: 'Raleway',
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: '23px',
  }
}));

export default (props) => {
  const classes = useStyles();
  return (
    <div style={{width:'100%'}}>
      <Grid container spacing={2}>
        <Grid item md={1} xs={12}>
          <Avatar alt="" variant="square" src={props.user.avatarUrl} className={classes.item_avatar} />
        </Grid>
        <Grid item md={9} xs={12}>
          <Typography variant="body2" gutterBottom className={classes.info_name}>
            {`${props.user.name.first} ${props.user.name.last}`}
          </Typography>
          <Typography variant="body2" gutterBottom className={classes.info_sub}>
            {`${props.user.position.role} at ${props.user.position.office} | ${props.user.location.city} ${props.user.location.state}`}
          </Typography>
          <Typography variant="body2" gutterBottom className={classes.info_des}>
            {`${props.user.bio}`}
          </Typography>

        </Grid>
        <Grid item md={2} xs={12} className={classes.button_contianer}>
          <Button variant="outlined" size="small" className={classes.btn_connect}>Connect</Button>
          <Button variant="outlined" size="small" className={classes.btn_more}>
            <MoreHoriz/>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}