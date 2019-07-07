import React, { Component } from 'react';
import './App.css';


class App extends Component {
  state = {
    query : '',
    queryArr : [],
    wordCount : [],
    ignoreArr : ["the","our","must","through","at","there","some","my","of","be","use", "using", "her","than","and","this","an","would","first","a","have","each","make","water","to","from","which","like","been","in","or","she","him","call","is","one","do","into","who","you","had","how","time","oil","that","by","their","has","its","it","word","if","look","now","he","but","will","two","find","was","not","up","more","long","for","what","other","write","down","on","all","about","go","day","are","were","out","see","did","as","we","many","number","get","with","when","then","no","come","his","your","them","way","made","they","can","these","could","may"]
  }
  wordCloud = event => {
    let text;
    if(event){
    console.log("wordCloud");
    text =  event.target.value.toLowerCase();
    } else {
      text = "Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum. Cras mattis consectetur purus sit amet fermentum. Curabitur blandit tempus porttitor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.";
    }
    text = text.replace(/\n/g, " ");
    text =  text.replace(/\s\s+/g, ' ');
    text = text.replace(/[^a-zA-Z \-]/g, "");
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
    this.setState({query : text});
    console.log("wordCount:");
    console.log(this.state.wordCount);
  }
  componentDidMount(){
    this.wordCloud();
  
  }
  render() {
      return (
      <div className="App">
        <div className="input-wrap">
          <div className="ignore-row">
            <input className="ignore-text" placeholder="add words to be ignored"></input>
            <button className="ignore-send">add word</button>
          </div>
          <textarea className="source-text"placeholder="paste block of text here" onChange={this.wordCloud}>
Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum. Cras mattis consectetur purus sit amet fermentum. Curabitur blandit tempus porttitor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </textarea>
        </div>

        <div className="word-count-bank">
          {/* <div className="inner-wrap"> */}
          {this.state.wordCount.map((val, i) => {
            return(
            <div className= {"key-word count-" + val[1]} key={i}>
              <span className="word">{val[0]}</span>
              <span className="count">{val[1]}</span>

            </div>
            )
          })}


        {/* </div> */}
        </div>
      </div>

   );
  }
}

export default App;
