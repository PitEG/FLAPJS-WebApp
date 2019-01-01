import React from 'react';
import Style from './NavbarWidget.css';

import FullscreenWidget from './FullscreenWidget.js';
import ZoomWidget from './ZoomWidget.js';
import FocusCenterWidget from './FocusCenterWidget.js';

class NavbarWidget extends React.Component
{
  constructor(props)
  {
    super(props);
  }

  //Override
  render()
  {
    const app = this.props.app;
    const viewport = app.getInputAdapter().getViewport();

    return (
      <div id={this.props.id}
        className={Style.navbar_container +
          " " + this.props.className}
        style={this.props.style}>
        <FullscreenWidget app={app}/>
        <ZoomWidget viewport={viewport}/>
        <FocusCenterWidget viewport={viewport}/>
      </div>
    );
  }
}

export default NavbarWidget;