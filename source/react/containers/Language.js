import React from 'react';
import { connect } from 'react-redux';
import LanguageInput from '../components/LanguageInput';
import { changeLanguage } from '../actions';

class Language extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      language: this.props.language,
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    const language = e.target.value;
    console.log(language);
    this.setState({ language });
  }

  onSubmit() {
    console.log('sumbit')
    this.props.dispatch(changeLanguage(this.state.language));
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <LanguageInput lang={ this.state.language } onChange={ this.onChange } onSubmit={ this.onSubmit } />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  console.log('happiness', state);

  return {
    language: state.language,
  };
};

export default connect(mapStateToProps)(Language);
