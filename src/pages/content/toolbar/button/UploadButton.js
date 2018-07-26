//https://material.io/tools/icons/?icon=cloud_upload&style=outline
import React from 'react';
<<<<<<< HEAD
import NodalGraph from 'graph/NodalGraph';
import Toolbar from '../Toolbar';
=======

import NodalGraph from 'graph/NodalGraph.js';
import GraphUploader from 'graph/GraphUploader.js';
>>>>>>> origin/burger

class UploadButton extends React.Component
{
  constructor(props)
  {
    super(props);
<<<<<<< HEAD
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(file) {
    const name = file[0].name.slice(0,-5);
    Toolbar.setMachineName(name);

    var reader = new FileReader();
    reader.onload = (event) => {
      var contents = event.target.result;
      const dst = NodalGraph.parseJSON(JSON.parse(contents));
      const graph = this.props.app.graph;
      graph.copyGraph(dst);
=======
>>>>>>> origin/burger

    this.onChange = this.onChange.bind(this);
  }

  onChange(e)
  {
    GraphUploader.uploadFileToGraph(e.target.files[0], this.props.graph, this.props.onExecute);
  }

  render()
  {
    return(
      <button className="toolbar-button" id="toolbar-upload">
        <input id="toolbar-upload-input" type="file" style={{display: "none"}}
          onChange={this.onChange} accept="application/json"/>
        <label htmlFor="toolbar-upload-input">
          <svg className="navicons" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 24 24">
            <path d="M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z" />
          </svg>
        </label>
      </button>
    );
  }
}

export default UploadButton;
