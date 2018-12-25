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
            list: []
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
        const {title,img,description, list, errorLabel} = this.state;

        axios.post('/', {title: title,img: img,description: description})
            .then((response) => {
                //access the resp here....
                console.log('response'+ response.data)
                //var payload = JSON.stringify(response, null, 2);
                var payload = "Upload Success";
                console.log(`response fetched. ${payload}`);
                this.setState({
                    title: "",
                    description: "",
                    img: "",
                    errorLabelHidden: true,
                    list: this.state.list.concat([payload])
                });

                //redirect back to new photo
                window.location = response.data;
                //const href = '/'
                //router.push(href)

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
        const {title,description,img, list, errorLabel} = this.state;

        return (
            <Layout title = 'PhotoLink' user = {this.props.user}>
                
                <form className="container" onSubmit={this.onSubmit}>
                    
                    <h4>Submit a photo</h4>

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
