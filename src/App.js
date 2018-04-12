import React, { Component } from 'react';
import Projects from './components/Projects';
import AddProject from './components/AddProject';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount() {
    this.setState({
      projects: [
        {
          coursename: 'EEE',
          category: 'ELECTRICAL'
        },
        {
          coursename: 'CSE',
          category: 'COMPUTER SCIENCE'
        },
        {
          coursename: 'MECH',
          category: 'MECHANICAL'
        },
        {
          coursename: 'CIVIL',
          category: 'CIVIL'
        }
      ]
    });

  };

  render() {
    return (
      <div className="App">
        My App
        <AddProject />
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
