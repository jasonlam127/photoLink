import Layout from '../components/Layout.js'
import React, { Component } from 'react'
import axios from 'axios'

export default class extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            img: "",
            errorLabel: "",
            errorLabelHidden: true,
        };
    }

    static async getInitialProps ({ query: { user } }) {
        return {user:user}
    }

    onChange = (e) => {
        // Because we named the inputs to match their corresponding values in state, it's
        // super easy to update the state
        this.setState({[e.target.name]: e.target.value});
    }


    onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        const {title,img,description, errorLabel} = this.state;

        axios.post('/', {title: title,img: img,description: description})
            .then((response) => {
                
                if(!response.data.error){
                    this.setState({
                        title: "",
                        description: "",
                        img: "",
                        errorLabelHidden: true,
                    });

                    //redirect back to new photo
                    window.location = response.data.url;
                }else{
                    this.setState({
                        errorLabelHidden: false,
                        errorLabel: response.data.errormessage,
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
        const {title,description,img, errorLabel} = this.state;

        return (
            <Layout title = 'PhotoLink' user = {this.props.user}>
                
                <form className="container" onSubmit={this.onSubmit}>
                    
                    <h4>Submit a photo</h4>
                    {!this.state.errorLabelHidden &&
                        <div className="alert alert-danger" role="alert">
                            {errorLabel}
                        </div>
                    }
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" id="exampleTitle" placeholder="Title" required name="title" value={title} onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input type="text" className="form-control" id="exampleDiscription" placeholder="(Optional)" name="description" value={description} onChange={this.onChange}/>
                    </div>

                    <label htmlFor="img">Your Photo URL</label>
                        <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon3">https://example.com/img.jpg</span>
                        </div>
                        <input type="url" className="form-control" id="basic-url" aria-describedby="basic-addon3" name="img" value={img} onChange={this.onChange}/>
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
