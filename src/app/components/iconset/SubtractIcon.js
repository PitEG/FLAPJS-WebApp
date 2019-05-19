import React from 'react';

class SubtractIcon extends React.PureComponent
{
    constructor(props) { super(props); }

    /** @override */
    render()
    {
        return (
            <svg id={this.props.id} className={this.props.className} style={this.props.style}
                xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"/>
            </svg>
        );
    }
}
export default SubtractIcon;
