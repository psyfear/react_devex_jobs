import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchJob } from '../actions/index';
import { Link } from 'react-router';

class JobsShow extends Component {
  componentWillMount() {
    this.props.fetchJob(this.props.params.id);
  }

  renderPlaces(places) {
    return places.map((place) => {
      return(
        <li key={place.id}>{place.place_name}</li>
      );
    });
  }

  render() {
    const { job } = this.props;

    if(!job) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <Link to="/">Back To Index</Link>
        <h3>{job.name}</h3>
        <h4>{job.employer_company.name}</h4>
        <p>{job.description}</p>
        Places:
        <ul>
          {this.renderPlaces(job.places)}
        </ul>
        <p>Closing Date: {job.closing_date}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { job: state.jobs.job};
}

export default connect(mapStateToProps, { fetchJob })(JobsShow);
