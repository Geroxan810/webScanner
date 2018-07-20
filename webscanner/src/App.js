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

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      domainName: '',
      isActive: false,
      error: '',
      findIssue: {},
      processRunning: false
    }

    this.setDomainName = this.setDomainName.bind(this)
    this.toggleClick = this.toggleClick.bind(this)
    this.fetchUrls = this.fetchUrls.bind(this)
    this.getFetchHead = this.getFetchHead.bind(this)

  }

  fetchUrls = () => {
    const res = [];
    this.setState({
      processRunning: true
    })
    if (this.state.isActive) {
      searchFiles.forEach((val, index)=>{
        res.push(this.getFetchHead(this.state.domainName, searchFiles[index]))
      })
      Promise.all(res).then((response)=>{
        this.setState({
          findIssue: response.map(response => {return {url: response.url, code: response.status} })
        })
      })
    } else this.setState({error: 'missing domain'})
  }

  getFetchHead = (url, option) => {
    return fetch('//' + url + '/' + option)
  }

  setDomainName = (input) => {
    this.setState({
      domainName: input
    })
  }

  toggleClick = (isActive) => {
    this.setState({
      isActive: !isActive
    })

    if (isActive) {
      this.fetchUrls()
    }

  }

  render() {
    return <div className="App">
      <DomainInput onChangeInput={this.setDomainName}/>
      <Button btnStatus={this.state.isActive} title='btn' onToggleBtn={this.toggleClick}/>
      {this.state.findIssue.length ? <ResulTable res={this.state.findIssue}/> : null}
      {this.state.error ? this.state.error : null}
    </div>;
  }
}

export default App;
