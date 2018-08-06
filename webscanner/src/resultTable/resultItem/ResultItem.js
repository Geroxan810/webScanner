import React, { Component } from 'react';
import styled from 'styled-components';

const ResultChild = styled.div`
  background: #fff;
  padding: 20px 30px;
  list-style: none;
  margin-bottom: 1em;
  border-radius: 5px;
`
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
    return <ResultChild>{this.props.value} - {this.state.status ? this.state.status : 'in progress'}</ResultChild>
  }

}

export default ResultItem;
