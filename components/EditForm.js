import React, { Component } from 'react'
import axios from 'axios'

export default class extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            errorLabel: "",
            errorLabelHidden: true,
            list: [],
        };
    }

    onChange = (e) => {
        // Because we named the inputs to match their corresponding values in state, it's
        // super easy to update the state
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        const {text} = this.state;
        axios.post('/'+this.props.data._id,{text:text})
            .then((response) => {
                var payload = "Upload Success";
                //console.log(`response fetched. ${payload}`);
                this.setState({
                    text: "",
                    author: "",
                    errorLabelHidden: true,
                    list: this.state.list.concat([payload])
                });

                //add new data to new state
                this.props.onUpdateComment(response);
            })
            .catch((error) => {
                var payload = JSON.stringify(error, null, 2);
                console.log(error);
                this.setState({
                    errorLabelHidden: false,
                    errorLabel: "OOPS that didn't work :(",
                    list: this.state.list.concat([payload])
                });
            });
    }

    render () {
        const {text} = this.state;

        return (
            <div className ="container">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <div className = "form-inline">
                            <label htmlFor="add-comment">Write a comment:</label>
                        </div>
                        <textarea className="form-control mt-1" rows="2" name="text" value={text} onChange={this.onChange}></textarea>
                        <button type="submit" className="btn btn-primary btn-sm mt-2 mb-3">Submit</button>
                    </div>
                </form>
                <style jsx>{`
                    .container {
                        
                    }
                `}</style>
            </div>
        )
    }
}