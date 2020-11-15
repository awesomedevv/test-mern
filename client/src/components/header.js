import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Container, AppBar, Toolbar, Tabs, Tab, Avatar, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Sms from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    alignItems: 'center',
    display: 'flex',
    color: 'black',
  },
  btn_icon: {
    padding: '0',
    margin: '10px'
  },
  badge: {
    border: '1px solid #E1E1E1',
    borderRadius: '50%',
  },
  icon: {
    color: 'black',
    padding: '10px',
    maxHeight: '20px',
    maxWidth: '20px'
  },
  avatar: {
    width: '40px',
    height: '40px',
    margin: '10px',
    borderRadius: '2.5px',
  },
  profil_link: {
    display: 'flex',
    /* justify-content: center; */
    color: 'black',
    alignItems: 'center',
    fontSize: '14px',
    color: '#333333',
    fontFamily: 'Raleway',
    margin: '0',
    marginLeft: '20px'
  },
  tab: {
    fontSize: '14px',
    minWidth: '30px',
    textTransform: 'none',
  },
  inputRoot: {
    color: 'inherit',
  },

  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>

      </MenuItem>
      <MenuItem>

      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>

      </MenuItem>
    </Menu>
  );

  const [value, setValue] = React.useState(2);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="fixed" style={{backgroundColor:'white'}}>
      <Toolbar style={{minHeight:'60px'}}>
        <Container style={{display:'flex'}}>
          <Typography className={classes.title} variant="h6">
            ClipboardHealth
          </Typography>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Tabs
               value={value}
               onChange={handleChange}
               indicatorColor="primary"
               textColor="primary"
               centered
               style={{margin:'0 30px'}}
            >
              <Tab label="Profile" className={classes.tab} />
              <Tab label="Jobs" className={classes.tab}/>
              <Tab label="Professional Network" className={classes.tab}/>
              <Tab label="Lounge" className={classes.tab}/>
              <Tab label="Salary" className={classes.tab}/>
            </Tabs>
          </div>

          <IconButton aria-label="" className={classes.btn_icon}>
            <Badge color="secondary" className={classes.badge}>
              <NotificationsIcon className={classes.icon} />
            </Badge>
          </IconButton>
          <IconButton aria-label="" className={classes.btn_icon}>
            <Badge color="secondary" className={classes.badge}>
              <Sms className={classes.icon}/>
            </Badge>
          </IconButton>

          <Typography variant="body2" gutterBottom className={classes.profil_link}>
            Beatrice Porter
          </Typography>
          <Avatar variant="square"
            src="https://media-exp1.licdn.com/dms/image/C5603AQHYNxADyifJpQ/profile-displayphoto-shrink_200_200/0?e=1610582400&v=beta&t=PETQ-5x3wqgmSAWATcx9VwenoYQEWlpv_5pw31yCkik"
            className={classes.avatar}/>

          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
          </Container>
        </Toolbar>
        {renderMobileMenu}

      </AppBar>


  );
}