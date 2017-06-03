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
    if(file.length === 0) return;
    if(file[0].size > 2000000) {
      alert('Sorry, but the maximum file upload size is 2 MB.');
      return;
    }
    if(file[0].name !== this.state.filename) {
      alert('Invalid file name. Please select ' + this.state.filename);
      return;
    }
    const context = this;
    var fileData = new FormData();
    var options = JSON.stringify({fileName: file[0].name, size:file[0].size, fileid: this.state.fileid});
    fileData.append('file', file[0]);
    fileData.append('opts', options);

    request.post('/uploadHandler')
      .send(fileData)
      .end(function(err, resp) {
        if(err) {console.error(err);}
        alert('Phase 2 complete. To view file details, hit the refresh button then select it below.');
        return resp;
      });
  }

});

module.exports = Dropzone;