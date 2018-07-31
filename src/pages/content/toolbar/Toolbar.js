import React from 'react';

import './Toolbar.css';
import NewButton from './button/NewButton.js';
import SaveButton from './button/SaveButton.js';
import UndoButton from './button/UndoButton.js';
import RedoButton from './button/RedoButton.js';
import HelpButton from "./button/HelpButton";
import UploadButton from "./button/UploadButton";
import ExportButton from "./button/ExportButton";

class Toolbar extends React.Component
{
  constructor(props)
  {
    super(props);

    this.machineName = React.createRef();
  }

  getMachineName()
  {
    return this.machineName.value;
  }

  static setMachineName(name) {
    document.getElementById("machine-name").value = name;
  }

  getMachineType()
  {
    return "DFA";
  }

  render()
  {
    const app = this.props.app;
    const machineBuilder = this.props.machineBuilder;
    const graph = this.props.graph;
    const eventHistory = this.props.eventHistory;
    const getMachineName = this.getMachineName.bind(this);

    return <div className="toolbar-container">
      <div className="toolbar-title">
        <input id="machine-name" type="text" defaultValue="Untitled" ref={ref=>this.machineName=ref}/>
        <label id="machine-type"
          onClick={()=>app.drawer.setTab(1)}>
          {machineBuilder.getMachineType()}
        </label>
      </div>

      <div className="toolbar-tray">
        <NewButton graph={graph} onExecute={()=>{
          eventHistory.clear();
        }}/>
        <UploadButton graph={graph} onExecute={()=>{
          eventHistory.clear();
        }}/>
        <SaveButton graph={graph} getFileName={getMachineName}/>
        <UndoButton eventHistory={eventHistory}/>
        <RedoButton eventHistory={eventHistory}/>
        <ExportButton workspace={app.workspace} getFileName={getMachineName}/>
      </div>

      <HelpButton app={app}/>
    </div>;
  }
}

export default Toolbar;
