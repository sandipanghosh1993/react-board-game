import React, {Component} from 'React';

class Scoreboard extends Component {
  render() {
    return (
      <div>
        <button className="btn">
          Score: <span className="badge badge-pill badge-primary">{this.props.score}</span>
        </button>
      </div>
    );
  }
}

export default Scoreboard;
