import React, { Component } from "react";
import ReactJson from 'react-json-view';
import Markmirror from 'react-markmirror';

class AppForm extends Component {

    constructor(props) {
        super(props);
        this.submitStatus = 'Successful !';
        this.handleSubmit = this.handleSubmit.bind(this);
        this.requestState = {
            request: '// type your code for request schema...',
        }
        this.responseState = {
            response: '// type your code for response schema...',
        }
        this.state = {
            code: '#FILE HEADER'
        };
    }

    handleChange = (code) => {
        this.setState({ code });
    };

    handleSubmit(event) {
        console.log(event);
        // console.log(this.props);
        alert('A name was submitted:' + JSON.stringify(this.submitStatus));
        event.preventDefault();
    }

    render() {
        // const { classes } = this.props;
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <div>
                        <p>Request Schema: </p>
                       
                        <ReactJson src={this.requestState} />
                    </div>
                    <div>
                        <p>Response Schema: </p>
                       
                        <ReactJson src={this.responseState} />
                    </div>
                    <div>
                        <input type="submit" value="Submit" />
                    </div>
                    <div>
                        <p>MD file: </p>
                        
                        <Markmirror
                            theme="light"
                            value={this.state.code}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>

            </form>
        )
    }
}

export default AppForm;