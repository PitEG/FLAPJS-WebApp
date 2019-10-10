import React from 'react';
import PropTypes from 'prop-types';

import ViewportComponent from './viewport/ViewportComponent.jsx';
import ViewportInputHandler from '../controller/inputhandler/ViewportInputHandler.js';

import InputContext from '@flapjs/deprecated/graph/input/InputContext.js';

class GraphView extends React.Component
{
    constructor(props)
    {
        super(props);
        
        this._inputContext = new InputContext();

        this._viewportComponent = React.createRef();
        this._viewportInputHandler = new ViewportInputHandler(props.inputController);
    }

    /** @override */
    componentDidMount()
    {
        const inputContext = this._inputContext;
        const inputController = this.props.inputController;
        const viewport = this._viewportComponent.current;
        const inputAdapter = viewport.getInputAdapter();
        inputContext.addInputHandler(inputController);
        inputContext.addInputHandler(this._viewportInputHandler, 10);
        inputAdapter.bindContext(inputContext);
    }

    /** @override */
    componentWillUnmount()
    {
        const inputContext = this._inputContext;
        const viewport = this._viewportComponent.current;
        const inputAdapter = viewport.getInputAdapter();
        inputContext.removeInputHandler(this._viewportInputHandler);
        inputContext.clearInputHandlers();
        inputAdapter.unbindContext(inputContext);
    }

    moveViewToPosition(x, y)
    {
        // Center view at position; inverted due to graph-to-screen space
        this.getViewportAdapter().setOffset(-x, -y);
    }

    getInputController() { return this.props.inputController; }
    getInputContext() { return this._inputContext; }

    getViewportComponent() { return this._viewportComponent.current; }
    getInputAdapter() { return this._viewportComponent.current.getInputAdapter(); }
    getViewportAdapter() { return this._viewportComponent.current.getViewportAdapter(); }

    /** @override */
    render()
    {
        const viewport = this._viewportComponent.current;
        const renderGraph = this.props.renderGraph;
        const renderOverlay = this.props.renderOverlay;

        return (
            <div id={this.props.id}
                className={this.props.className}
                style={this.props.style}>
                <ViewportComponent ref={this._viewportComponent}>
                    {renderGraph && viewport && renderGraph(this)}
                </ViewportComponent>
                {renderOverlay && viewport && renderOverlay(this)}
            </div>
        );
    }
}
GraphView.propTypes = {
    id: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
    renderGraph: PropTypes.func,
    renderOverlay: PropTypes.func,
    inputController: PropTypes.object.isRequired,
};

export default GraphView;