const React = require('react');
const axios = require('axios');
const Dropzone = require('./Dropzone.jsx');

class Upload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };

  }

  render() {
    return (
        <div>
          Please enter your Username and Caption below. <br/>
          Then drag your image to the dropzone or click the dropzone to select your image. <br/>
          Your Username: <input id="username" type="text"></input><br/>
          Your Caption: <input id="caption" type="text"></input><br/>
          Hashtags (comma seperated) <input id="hashtags" type="text"></input><br/>
          <Dropzone filename="file.jpg" fileid="1"/><br/><br/>
          <a href="/">Back to Main Page</a>
        </div>
      );
  }

}

module.exports = Upload;