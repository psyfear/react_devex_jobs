import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import JobList from '../containers/job_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
        <JobList/>
      </div>
    );
  }
}
