import React from 'react';

class LanguageInput extends React.Component {

  constructor(props) {
    super(props);
  }

  onChange

  render() {
    return (
      <div>
        <input value={ this.props.lang } onChange={ this.props.onChange } />
        <button type="submit" onClick={ this.props.onSubmit }> Change Language </button>
      </div>
    );
  }
}


export default LanguageInput;
