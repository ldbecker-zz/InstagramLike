import { Router, Route, browserHistory } from 'react-router';
const React = require('react');
const ReactDOM = require('react-dom');
const Upload = require('./Upload.jsx');

class App extends React.Component {
	constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <a href="/upload">Upload a new Image</a>
        </div>
      );
  }
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}></Route>
    <Route path="/upload" component={Upload}></Route>
  </Router>
), document.getElementById('app'));