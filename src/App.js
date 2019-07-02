import React, { Component } from 'react';
import './App.css';


class App extends Component {
  state = {
    query : '',
    queryArr : [],
    wordCount : [],
    ignoreArr : ["the","our","must","through","at","there","some","my","of","be","use","her","than","and","this","an","would","first","a","have","each","make","water","to","from","which","like","been","in","or","she","him","call","is","one","do","into","who","you","had","how","time","oil","that","by","their","has","its","it","word","if","look","now","he","but","will","two","find","was","not","up","more","long","for","what","other","write","down","on","all","about","go","day","are","were","out","see","did","as","we","many","number","get","with","when","then","no","come","his","your","them","way","made","they","can","these","could","may"]
  }
  wordCloud = event => {
    console.log("wordCloud");
    let text =  event.target.value.toLowerCase();
    text = text.replace(/[^a-zA-Z ]/g, "");
    const textArr = text.split(" ");
    let ignoreArr = this.state.ignoreArr;

    let counts = {};
    let sortable = [];
    let sorted = [];

    textArr.forEach(function(x) {
      let ignore;
      ignoreArr.forEach(function(y){if(x == y){
        ignore = true;
      }})
      if(!ignore){
        counts[x] = (counts[x] || 0)+1; 
      }
    });
    Object.keys(counts).forEach(function(x){
      sortable.push([x, counts[x]]);
    });
    sortable.sort(function(a, b) {
        return b[1] - a[1];
    });
    // sortable.forEach(function(x){
    //   const wordObj = {
    //     word : x[0],
    //     count : x[1]
    //   }
    //   sorted.push(wordObj);
    // })
    console.log(sortable);
    // console.log(sorted);

    this.setState({wordCount : sortable});
    this.setState({query : event.target.value});
    console.log("wordCount:");
    console.log(this.state.wordCount);
  }
  render() {
      return (
      <div className="App">
        <div className="input-wrap">
          <div className="ignore-row">
            <input className="ignore-text" placeholder="add words to be ignored"></input>
            <button className="ignore-send">add word</button>
          </div>
          <textarea className="source-text"placeholder="paste block of text here" onChange={this.wordCloud}></textarea>
        </div>
        <table>
          <thead>
          <tr>
            <th>KEY WORD</th>
            <th># OF USES </th>
          </tr>
          </thead>
        <tbody>
          {this.state.wordCount.map((val, i) => {
            return(
            <tr key={i}>
              <td>{val[0]}</td>
              <td>{val[1]}</td>

            </tr>
            )
          })}


        </tbody>
        
      </table>
      </div>

   );
  }
}

export default App;
