import Layout from '../components/Layout.js'
import React, { Component } from 'react'
import axios from 'axios'

export default class extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            password: "",
            password2: "",
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
        const {name,password,password2, list, errorLabel} = this.state;

        if(password != password2){
            this.setState({
                errorLabelHidden: false,
                errorLabel: "Passwords do not match.",
            });
            return;
        }
        axios.post('/signup', {username: name,password: password})
            .then((response) => {
                if(response.data ==='success'){
                    
                    this.setState({
                        name: "",
                        password: "",
                        errorLabelHidden: true,
                    });
                    
                    //redirect back to homepage
                    window.location = "/"

                }else{
                    //log in failure handling
                    this.setState({
                        errorLabelHidden: false,
                        errorLabel: response.data,
                    });
                }

            })
            .catch((error) => {
                this.setState({
                    errorLabelHidden: false,
                    errorLabel: "OOPS that didn't work :(",
                });
            });
    }

    render () {
        const {name,password,password2, list, errorLabel} = this.state;

        return (
            <Layout title = 'PhotoLink'>
                
                <form className="container" onSubmit={this.onSubmit}>
                    
                    <h4>Sign Up</h4>
                    {!this.state.errorLabelHidden &&
                        <div className="alert alert-danger" role="alert">
                            {errorLabel}
                        </div>
                    }

                    <div className="form-group">
                        <label htmlFor="title">User Name</label>
                        <input type="text" className="form-control" id="exampleTitle" placeholder="username" required name="name" value={name} onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Password</label>
                        <input type="password" className="form-control" id="exampleDiscription" placeholder="password" name="password" value={password} onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                    <label htmlFor="password2">Confirm Password</label>
                    <input id="password2" className="form-control" type="password" name="password2" placeholder="password" value={password2} onChange={this.onChange} />
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
