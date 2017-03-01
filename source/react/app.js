import React from 'react';
import ReactDom from 'react-dom';
import api from './helpers/api';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'This is the message',
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    console.log(api.default.get());
    api.default.get().then((data) => {
      console.log('in onClick', data.body)
      this.setState({ message: data.body });
    });
  }

  render() {
    return (
      <div
        style={ { border: 'solid', width: '200px', height: '200px' } }
        onClick={ this.onClick }
      >
        { this.state.message }
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('app'));
