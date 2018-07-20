import React, { Component } from 'react';

class ResultItem extends Component {

  render() {
    return <li>{this.props.value.url}  -   {this.props.value.code}</li>
  }

}

export default ResultItem;
