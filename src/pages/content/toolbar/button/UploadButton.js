//https://material.io/tools/icons/?icon=cloud_upload&style=outline
import React from 'react';
import NodalGraph from 'graph/NodalGraph.js';
import GraphUploader from 'graph/GraphUploader.js';

class UploadButton extends React.Component
{
  constructor(props)
  {
    super(props);
  }

  onChange(e)
  {
    GraphUploader.uploadFileToGraph(e.target.files[0], this.props.graph, this.props.onExecute);
  }

  render()
  {
    return(
      <button className="toolbar-button" id="toolbar-upload">
        <input id="import-file" type="file" name="import"
          onChange={this.onChange.bind(this)} accept="application/json"/>
        <label htmlFor="import-file">
          <svg className="navicons" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 24 24">
            <path d="M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z" />
          </svg>
        </label>
      </button>
    );
  }
}

export default UploadButton;
