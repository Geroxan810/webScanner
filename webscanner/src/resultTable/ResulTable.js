import React, { Component } from 'react';
import ResultItem from "./resultItem/ResultItem";

class ResulTable extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.data) {
      const {data} = this.props
      const resultItems = data.map((item, index) =>
        <ResultItem key={index} value={item}/>
      )
      return (
        <div className="">
          <ul>
            {resultItems}
          </ul>
        </div>
      );
    } else {
      return (
        <div className="">
        </div>
      );
    }
  }
}

export default ResulTable;
