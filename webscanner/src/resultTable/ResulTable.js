import React, { Component } from 'react';
import ResultItem from "./resultItem/ResultItem";
import styled from 'styled-components';

const ResultBody = styled.div`
  padding: 0 20px;
`

class ResulTable extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    if (this.props.data.length) {
      const {data} = this.props
      const resultItems = data.map((item, index) =>
        <ResultItem key={index} value={item}/>
      )
      return (
        <ResultBody className="">
            {resultItems}
        </ResultBody>
      );
    } else {
      return null
    }
  }
}

export default ResulTable;
