const React = require('react');
const ReactDOM = require('react-dom');
const axios = require('axios');

class Image extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      filename: props.image.filename,
      uploader: props.image.uploader,
      caption: props.image.caption,
      hashtags: props.image.hashtags,
      id: props.image.id,
      comments: []
    };

    this.submitComment = this.submitComment.bind(this);
    this.getComments = this.getComments.bind(this);
    this.getComments();
  }

  getComments(id) {
    if(!id) id = this.state.id;
    let context = this;
    axios.get('/comments/' + id)
    .then(function(resp) {
      context.setState({
        comments: resp.data
      });
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      filename: nextProps.image.filename,
      uploader: nextProps.image.uploader,
      caption: nextProps.image.caption,
      hashtags: nextProps.image.hashtags,
      id: nextProps.image.id
    });
    this.getComments(nextProps.image.id);
  }

  submitComment(e) {
    e.preventDefault();
    let context = this;
    let username = document.getElementById('u' + this.state.id).value;
    let comment = document.getElementById('c' + this.state.id).value;
    if(username === '') {
      alert("Enter a username.");
      return;
    }
    if(comment === '') {
      alert("Enter a comment.");
      return;
    }
    axios.post('/newComment', {
      uploader: username,
      comment: comment,
      imageid: this.state.id
    }).then(function(resp) {
      context.getComments();
    });
  }

  render() {
    return (
        <div className="image">
          {this.state.uploader}<br/>
          <img className="pic" src={"/files/" + this.state.filename}></img><br/>
          Caption: {this.state.caption}<br/>
          Hashtags: {this.state.hashtags.slice(1, this.state.hashtags.length - 1)}<br/>
          {this.state.comments.length === 0 ? 
            <div className="comment">No Comments</div>
            :
            this.state.comments.map(function(comment) {
              return (
                  <div className="comment">{comment.uploader + ": " + comment.comment}</div>
                );
            })
          }
          <form onSubmit={this.submitComment}>
            Username: <input id={'u' + this.state.id} type="text"></input><br/>
            Comment: <input id={'c' + this.state.id} type="text"></input><br/>
            <button type="submit">Submit</button>
          </form>
        </div>
      );
  }
}

module.exports = Image;