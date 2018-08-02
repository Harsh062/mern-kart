import React, { Component, Fragment } from 'react';

class Settings extends Component {
    state = {
        fileName: ''
    };
    fileChangeHandler = (ev) => {
        this.setState({
            fileName: ev.target.files[0]
        })
    }
    render() {
        return (
            <Fragment>
                <h1>Settings Form</h1>
                <input type="file" onChange={(ev) => this.fileChangeHandler(ev)}/>
            </Fragment>
        )
    }
}

export default Settings;