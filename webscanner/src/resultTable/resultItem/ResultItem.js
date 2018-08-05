import React, { Component } from 'react';

class ResultItem extends Component {

  constructor() {
    super()
    this.state = {
      status: ''
    }
  }

  componentDidMount() {
    fetch(this.props.value).then((response) => {
      this.setState({
        status: response.status
      })
    })
  }

  render() {
    return <li>{this.props.value} - {this.state.status ? this.state.status : 'in progress'}</li>
  }

}

export default ResultItem;
