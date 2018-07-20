import React, { Component } from 'react';
import ResultItem from "./resultItem/ResultItem";

class ResulTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      res: this.props.res ? this.props.res : []
    }
  }

  render() {

    const { res } = this.props
    const resultItems = res.map((item, index) =>
      <ResultItem key={index} value={item}/>
    )

    return (
      <div className="">
        <ul>
          {resultItems}
        </ul>
      </div>
    );
  }
}

export default ResulTable;
