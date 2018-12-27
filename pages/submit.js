import Layout from '../components/Layout.js'
import React, { Component } from 'react'
import axios from 'axios'
import classNames from'classnames';

export default class extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            img: "",
            errorLabel: "",
            errorLabelHidden: true,
            isUpload:true,
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
                        image: "",
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
    onClickUploadButton = () => {
        this.setState({isUpload: true});
        this.setState({
            title: "",
            description: "",
            img: "",
            image: "",
            errorLabelHidden: true,
        });
    }
    onClickURLButton = () => {
        this.setState({isUpload: false});
    }

    render () {
        const {title,description,img,image,isUpload, errorLabel} = this.state;
        var btnAClass = classNames({
            'active': this.state.isUpload,
            'btn':true,
            'btn-secondary':true, 
            'custom-width':true
        });
        var btnBClass = classNames({
            'active': !this.state.isUpload,
            'btn':true,
            'btn-secondary':true, 
            'custom-width':true
        });

        return (
            <Layout title = 'PhotoLink' user = {this.props.user}>
                <div className ='container mt-4'>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className={btnAClass} onClick = {this.onClickUploadButton}>Upload</button>
                        <button type="button" className={btnBClass} onClick = {this.onClickURLButton} > URL </button>
                    </div>
                </div>
                {!this.state.isUpload &&
                <form className="container" onSubmit={this.onSubmit}>
                    
                    <h4>Submit a photo</h4>
                    
                    {!this.state.errorLabelHidden &&
                        <div className="alert alert-danger" role="alert">
                            {errorLabel}
                        </div>
                    }

                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" id="title" placeholder="Title" required name="title" value={title} onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input type="text" className="form-control" id="description" placeholder="(Optional)" name="description" value={description} onChange={this.onChange}/>
                    </div>

                    
                    <div className ='mt-0'>
                        <div >
                            <label htmlFor="img">Your Photo URL</label>
                        </div>
                    
                        <div className="input-group mb-3 ">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon3">https://example.com/img.jpg</span>
                        </div>
                            <input type="url" className="form-control" id="basic-url" aria-describedby="basic-addon3" name="img" value={img} onChange={this.onChange}/>
                        </div>

                        <div><span hidden>{errorLabel}</span></div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
                }
                {this.state.isUpload &&
                <form  className="container mt-2" action="/upload" method="POST" encType="multipart/form-data">
                    <h4>Submit a photo</h4>

                    {!this.state.errorLabelHidden &&
                        <div className="alert alert-danger" role="alert">
                            {errorLabel}
                        </div>
                    }
                    
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input className="form-control" type="text" name="title" placeholder="Title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input className="form-control" type="text" name="description" placeholder="(Optional)" />
                    </div>
                        <div >
                            <label htmlFor="img">Your Photo Location</label>
                        </div>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Upload</span>
                        </div>
                        <div className="custom-file">
                        <input type="file" className="custom-file-input" id="inputGroupFile01" name="image" value ={image}onChange={this.onChange} accept="image/*" required />
                            <label className="custom-file-label" for="inputGroupFile01">{image}</label>
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <button className="btn btn-primary ">Submit</button>
                    </div>

                    
                </form>
                }


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
                    .custom-width{
                        width: 78px !important;
                    }
                    .btn-group{
                        float:right;
                    }
                `}</style>
            </Layout>
        )

    }
}
