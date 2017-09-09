//import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board';
import Scoreboard from './components/scoreboard';
import Config from './config/config';

let inscore = 0;
let time = Config.time;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      size: Config.size
    }
  }

  componentDidUpdate() {
    if(this.state.score == inscore + Config.score) {
      inscore = this.state.score;
      time += Config.time;
      this.setState({score: this.state.score, size: (this.state.size+1)});
      console.log('inscore', inscore);
      console.log('this.state.score', this.state.score);
      console.log(time);
    }


    console.log('zzzzzzzzzzzzzzzzzzzzzzzzz');
  }

  render() {
      return (
        <div className="container">
          <div className="row">
            <div className="col-xm-10 col-sm-10 col-lg-8">
              <Board
                size={this.state.size}
                time={time}
                interval={Config.interval}
                maxscore={Config.score}
                level={Config.level}
                score={score => this.setState({ score, size: this.state.size })}
                cutscore={inscore}
              />
            </div>
            <div className="col-xm-2 col-sm-2 col-lg-4">
              <Scoreboard score={this.state.score}/>
            </div>
          </div>
        </div>
      );
   }
}

ReactDOM.render(<App />, document.querySelector('.container'));
