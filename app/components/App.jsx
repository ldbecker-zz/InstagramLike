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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.doQuery('');
  }

  handleSubmit(e) {
    e.preventDefault();
    this.doQuery(document.getElementById('query').value);
  }

  doQuery(query) {
    let context = this;
    axios.post('/search', {query : query})
    .then(function(resp) {
      context.setState({
        images: resp.data
      });
      console.log(resp);
    });
  }

  render() {
    return (
        <div>
          <a href="/upload">Upload a new Image</a><br/><br/>
          <form onSubmit={this.handleSubmit}>
            Search Term: <input id="query" type="text"></input><br/>
            Note: To search for a hashtag, start your term with a "#". To search for a user, start your term with "@"<br/>
            Searches the caption by default. An empty search term brings up the 10 latest images. <br/>
            <button type="submit">Search</button>
          </form>
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