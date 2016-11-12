import React, { Component } from 'react';
import SearchBar from './search_bar';
import JobsList from './jobs_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
        <JobsList/>
      </div>
    );
  }
}
