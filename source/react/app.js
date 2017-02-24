import React from 'react';
import ReactDom from 'react-dom';

const App = () => (
  <div> I am JSX </div>
);

ReactDom.render(<App />, document.getElementById('app'));
