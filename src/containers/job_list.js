import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchJobs } from '../actions/index';

class JobList extends Component {
  componentWillMount() {
    this.props.fetchJobs('');
  }

  renderJobs(jobData) {
    console.log('jobData:', jobData);
    return jobData.data.map((job) => {
      return(
        <tr key={job.id}>
          <td>{job.name}</td>
          <td>{job.employer_company.name}</td>
          <td>{job.workflow_state}</td>
          <td>{job.closing_date}</td>
        </tr>
      );
    });
  }

  render() {
    console.log('Jobs: ', this.props.jobs);
    console.log('Jobs Data: ', this.props.jobs.data);
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Company</th>
            <th>Workflow State</th>
            <th>Closing Date</th>
          </tr>
        </thead>
        <tbody>
          {this.props.jobs.map(this.renderJobs)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ jobs }) {
  return { jobs };// {jobs} === {jobs: jobs}
}

export default connect(mapStateToProps, { fetchJobs })(JobList);