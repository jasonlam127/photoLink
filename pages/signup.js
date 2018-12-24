import Layout from '../components/Layout.js'
import React, { Component } from 'react'
import axios from 'axios'
import Router from 'next/router'

export default class extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            password: "",
            errorLabel: "",
            errorLabelHidden: true,
            list: []
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
        const {name,password, list, errorLabel} = this.state;

        axios.post('/signup', {username: name,password: password})
            .then((response) => {
                if(response.data ==='success'){
                    //console.log('response'+ response.data)
                    //var payload = JSON.stringify(response, null, 2);
                    var payload = "Upload Success";
                    //console.log(`response fetched. ${payload}`);
                    this.setState({
                        name: "",
                        password: "",
                        errorLabelHidden: true,
                        list: this.state.list.concat([payload])
                    });
                    
                    //redirect back to homepage
                    window.location = "/"

                }else{
                    //log in failure handling
                }

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
        const {name,password, list, errorLabel} = this.state;

        return (
            <Layout title = 'PhotoLink'>
                
                <form className="container" onSubmit={this.onSubmit}>
                    
                    <h4>Sign Up</h4>

                    <div className="form-group">
                        <label htmlFor="title">User Name</label>
                        <input type="text" className="form-control" id="exampleTitle" placeholder="username" required name="name" value={name} onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Password</label>
                        <input type="password" className="form-control" id="exampleDiscription" placeholder="password" name="password" value={password} onChange={this.onChange}/>
                    </div>

                    <div><span hidden>{errorLabel}</span></div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

                <style jsx>{`
                    form{
                        margin:auto;
                        padding:0 2em;
                    }
                    .btn-primary{
                        margin-top:1.5em;
                    }
                    h4{
                        margin-top:1em;
                        margin-bottom:1em;
                    }
                `}</style>
            </Layout>
        )

    }
}
