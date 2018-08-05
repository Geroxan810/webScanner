import React, { Component } from 'react';
import './App.css';
import DomainInput from "./domainInput/DomainInput";
import ResulTable from "./resultTable/ResulTable";
import Button from "./assets/Button";


const searchFiles = [
  'drevena-postel',
  'drevena-postel',
  'drevena-postel',
  'drevena-postel',
  'drevena-postel',
  'drevena-postel'
]

let testData = []

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      domainName: '',
      runTest: false,
    }

    this.setDomainName = this.setDomainName.bind(this)
    this.toggleClick = this.toggleClick.bind(this)
  }

  setDomainName = (input) => {
    // remove any protocol and slash on end?
    input = input.replace(/(^\w+:|^)\/\//, '').replace(/\/$/, '')
    this.setState({
      domainName: input
    })
  }

  toggleClick = (runTest) => {
    this.setState({
      runTest: !runTest
    })

    if (runTest) {
      testData = searchFiles.map((data)=>{
        return '//' + this.state.domainName + '/' + data
      })
    }
  }

  render() {
    return <div className="App">
      <DomainInput onChangeInput={this.setDomainName} />
      <Button btnStatus={this.state.runTest} title='btn' onToggleBtn={this.toggleClick}/>
      <ResulTable data={testData}/>
    </div>;
  }
}

export default App;
