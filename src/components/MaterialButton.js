import * as mdc from 'material-components-web';
import React from 'react';

class MaterialButton extends React.Component {
    constructor(props) {
        super(props);
        this.clicked.bind(this);
    }

    componentDidMount() {
        const button = document.querySelector('.mdc-button');
        new mdc.ripple.MDCRipple(button);
    }

    clicked(e) {
        console.log("pressed");
    }

    render() {
        return <button className="foo-button mdc-button" onClick={this.clicked}>
            <div className="mdc-button__ripple"></div>
            <span className="mdc-button__label">{this.props.text}</span>
        </button>
    }
}

export default MaterialButton;
