import { Router, Route, browserHistory } from 'react-router';
const React = require('react');
const ReactDOM = require('react-dom');
const Upload = require('./Upload.jsx');
const Images = require('./Images.jsx');
const axios = require('axios');

class App extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
      images: []
    };

    this.doQuery = this.doQuery.bind(this);
    this.doQuery('');
  }

  doQuery(query) {
    let context = this;
    axios.post('/search', {query : query})
    .then(function(resp) {
      context.setState({
        images: resp.data
      });
    });
  }

  render() {
    return (
        <div>
          <a href="/upload">Upload a new Image</a><br/><br/>
          <div id="images">
            {this.state.images.length === 0 ? 
              <div>No images to Display</div> 
              :
              <Images images={this.state.images}/>
            }
          </div>
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