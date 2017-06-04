const React = require('react');
const ReactDOM = require('react-dom');
const Image = require('./Image.jsx');

class Images extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
      images: props.images
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      images: nextProps.images
    });
  }

  render() {
    return (
        <div className="images">
          IMAGES!<br/>
          {this.state.images.map(function(image) {
            return (
                <Image image={image}/>
              );
          })}
        </div>
      );
  }
}

module.exports = Images;