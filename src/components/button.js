import React, {Component} from 'react';
let score = 0;

class Button extends Component {
  constructor(props) {
    super(props);

  this.state = {
                 flag: true
               };
  }

  componentWillReceiveProps() {
    this.setState({flag: true});
  }

  render() {
    let className = `btn ${this.props.thekey} btn-lg`;
    return (
      <button
        type="button"
        className={className}
        onClick={this.onInputChange.bind(this)}
      />
    );
  }

  onInputChange() {
    if(this.props.thekey  == 'btn-warning' && this.state.flag) {
        console.log(++score);
        console.log("+++++++++++");
        this.setState({flag: false});
        this.props.score(score);
    }
    else if(this.state.flag) {
        console.log(--score);
        console.log('---------------');
        this.setState({flag: false});
        this.props.score(score);
    }
  }
}

export default Button;
