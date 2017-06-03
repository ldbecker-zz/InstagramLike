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
          UPLOAD! <br/>
          <Dropzone filename="file.jpg" fileid="1"/>
        </div>
      );
  }

}

module.exports = Upload;