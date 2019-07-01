import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    query : '',
    queryArr : [],
    wordCount : {}
  }
  wordCloud = event => {
    console.log("wordCloud");
    let text = event.target.value;
    text = text.replace(/[^a-zA-Z ]/g, "");
    const textArr = text.split(" ");

    let counts = {};
    textArr.forEach(function(x) { 
      counts[x] = (counts[x] || 0)+1; 
      console.log(counts[x]);

    });
    this.setState({wordCount : counts});

    
    this.setState({query : event.target.value});
    console.log(text);
    console.log(this.state.wordCount);
  }
  render() {
      return (
      <div className="App">
        <textarea className="source-text" onChange={this.wordCloud}></textarea>

        <table>
        <tbody>
          <tr>
            <th>hi</th>
            <th>there </th>
          </tr>
        </tbody>
      </table>
      </div>

   );
  }
}

export default App;
