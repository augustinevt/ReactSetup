import React from 'react';
import { connect } from 'react-redux';
import { changeMessage } from '../actions';

const mapStateToProps = (state) => {
  console.log('happiness', state);

  return {
    message: state.message,
  };
};

class App extends React.Component {

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    console.log("hello from the container", this.props);
    this.props.changeMessage("foo");
  }

  render() {
    return (
      <div style={ { border: 'solid', width: '200px', height: '200px' } } onClick={ this.onClick } >
        {this.props.message}
      </div>
    );
  }
}

export default connect(mapStateToProps, { changeMessage })(App);
