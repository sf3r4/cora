import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getList } from './List.actions';
import './List.css';

const List = props => {
  return (
    <div>
      <h1>List</h1>
    </div>
  );
};

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    list: state.list
  };
};

const mapDispatchToProps = { getList };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(List));
