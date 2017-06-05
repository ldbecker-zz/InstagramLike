const React = require('react');
const DropzoneComponent = require('react-dropzone');
const request = require('superagent');
const axios = require('axios');

var Dropzone = React.createClass({

  getInitialState: function() {
    return {
      filename: this.props.filename,
      fileid: this.props.fileid
    };
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({
      filename: nextProps.filename,
      fileid: nextProps.fileid
    });
  },

  render: function() {
    return (
      <div>
        <DropzoneComponent disableClick={false} multiple={false} onDrop={this.dropHandler}>
        </DropzoneComponent>
      </div>
    );
  },

  dropHandler: function(file, filerej) {
    if(document.getElementById('username').value === '') {
      alert('Please enter your username!');
      return;
    }
    if(document.getElementById('caption').value === '') {
      alert('Please enter a caption!');
      return;
    }
    if(document.getElementById('hashtags').value === '') {
      alert('Please enter some hashtags!');
      return;
    }
    if(file.length === 0) return;
    if(file[0].size > 2000000) {
      alert('Sorry, but the maximum file upload size is 2 MB.');
      return;
    }
    if(!(file[0].name.toLowerCase().endsWith('.jpg') || file[0].name.toLowerCase().endsWith('.jpeg') || file[0].name.toLowerCase().endsWith('.gif') || file[0].name.toLowerCase().endsWith('.png'))) {
      alert('Invalid file type. Please select an image.');
      return;
    }
    const context = this;
    var fileData = new FormData();
    var hashtags = document.getElementById('hashtags').value.split(',').map(function(hashtag) {
      hashtag = hashtag.trim();
      if(hashtag.startsWith('#')) hashtag = hashtag.slice(1);
      return hashtag;
    });
    hashtags = JSON.stringify(hashtags);
    var options = JSON.stringify({fileName: file[0].name, username: document.getElementById('username').value, caption: document.getElementById('caption').value, hashtags: hashtags});
    fileData.append('file', file[0]);
    fileData.append('opts', options);

    request.post('/uploadHandler')
      .send(fileData)
      .end(function(err, resp) {
        if(err) {console.error(err);}
        alert('Upload Complete');
        return resp;
      });
  }

});

module.exports = Dropzone;