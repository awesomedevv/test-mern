import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Grid, makeStyles } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

import ConnectionsInfo from './components/connections-info';
import ConnectionsFilter from './components/connections-filter';
import ConnectionsList from './components/connections-list';

import { getConnections } from '../../actions'

import './connections.scss';

import data from './connects-dummy';

const useStyles = makeStyles((theme) => ({
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
  },

  })
)

export const Connections =  ({ connections, total_pages, getConnections })  => {

  const [current_page, set_current_page] = useState(1);
  const classes = useStyles();
  useEffect(() => {
    getConnections(current_page);
  }, [current_page]);

  const nextPage = () => {
    if(current_page < total_pages) set_current_page(current_page + 1)
  }

  const onChange_pagination = (event, value) => {
    set_current_page(value);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item md={3} xs={12}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={12}>
              <ConnectionsInfo user={data[0]}/>
            </Grid>
            <Grid item xs={12}>
              <ConnectionsFilter />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={9} xs={12}>
          <ConnectionsList users={connections}/>
          <div className={classes.pagination}>
            <Pagination count={total_pages} onChange={onChange_pagination} variant="outlined" shape="rounded"/>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = state => ({
  connections: state.connections.users,
  current_page: state.connections.current_page,
  total_pages: state.connections.total_pages
});

const mapDispatchToProps = { getConnections };

export default connect(mapStateToProps, mapDispatchToProps)(Connections);
