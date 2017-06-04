const React = require('react');
const ReactDOM = require('react-dom');

class Image extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
      filename: props.image.filename,
      uploader: props.image.uploader,
      caption: props.image.caption,
      hashtags: props.image.hashtags
    };
  }

  render() {
    return (
        <div className="image">
          {this.state.uploader}<br/>
          <img className="pic" src={"/files/" + this.state.filename}></img><br/>
          Caption: {this.state.caption}<br/>
          Hashtags: {this.state.hashtags.slice(1, this.state.hashtags.length - 1)}<br/>
        </div>
      );
  }
}

module.exports = Image;