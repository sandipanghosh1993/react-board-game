import React, {Component} from 'react';
import Button from './button';
import Scoreboard from './scoreboard';
// import Config from './config/config';
let keyval = 0;
let f = 0;
let intervalId;
let score = 0;
let inscore = 0;
let time;

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      key: null
    };

    this.setRandom = this.setRandom.bind(this);
  }

  setRandom() {
    let key = Math.floor(Math.random()*(this.props.size*this.props.size));
    this.setState({ key });
    //console.log(key);
    keyval = 0;

    this.props.score(score);
  }

  componentDidMount() {
      time = this.props.time;
      this.setRandom();
      intervalId = setInterval(() => { this.setRandom() }, this.props.interval);
  }

  componentDidUpdate() {
    if(score == inscore + this.props.maxscore) {
      inscore = score;
      time += this.props.time;
      //this.setState({score: this.state.score, size: (this.state.size+1)});
      console.log('inscore', inscore);
    //  console.log('this.state.score', this.state.score);
      console.log(time);
      console.log('YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY');
    }

    if(f++==1) this.setRandom()
    console.log("Time", this.props.time);
    if(time/this.props.interval == f-1 && inscore<score) {
        clearInterval(intervalId);
        console.log('this.props.cutscore', inscore);
        console.log('score', score);
        console.log('this.props.time', this.props.time);
        console.log("KKKKKKKKKKKKKKKKKKKKKKKKKKKKKK");
    }
    console.log("*********************");
  }

  addButton(n) {
    let arr = [];

    for(let i=0; i<n; i++)
    {
      let className = 'btn-success'
      if(this.state.key == keyval++)
        className = 'btn-warning';
        //console.log('key = ', keyval);
      arr[i] = (<Button key={keyval} thekey={className} score={s => score = s} />);
      //console.log('key = ', keyval);
    }

    return arr;
  }

  addRow(n) {
    let arr = [];

    for(let i=0; i<n; i++)
      arr[i] = (<div key={i}>
                  {this.addButton(n).map(button => button)}
                </div>)
    return arr;
  }

  render() {
    return (
      <div >
        {this.addRow(this.props.size).map(row => row)}
      </div>
    );
  }
}

export default Board;
