import React, { Component } from 'react'
import axios from 'axios'
import Moment from 'react-moment';

export default class extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            text: props.e.text,
            photo: props.photo,
            isEdit: false,
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
        axios.post('/'+this.props.photo._id+'/'+this.props.e._id+'?_method=PUT',{text:text})
            .then((response) => {
                var payload = "Upload Success";
                //console.log(`response fetched. ${payload}`);
                this.setState({
                    text: response.data.text,
                    errorLabelHidden: true,
                });

                //add new data to new state
                this.props.onEditComment(response.data);
                
                this.onClick();
            })
            .catch((error) => {
                var payload = JSON.stringify(error, null, 2);
                console.log(error);
                this.setState({
                    errorLabelHidden: false,
                    errorLabel: "OOPS that didn't work :(",
                });
            });
    }

    onSubmitDelete = (e) => {
        e.preventDefault();
        // get our form data out of state
        const {text} = this.state;
        axios.post('/'+this.props.photo._id+'/'+this.props.e._id +'?_method=DELETE',{})
            .then((response) => {
                var payload = "Upload Success";
                //console.log(`response fetched. ${payload}`);
                this.setState({
                    text: response.data.text,
                    errorLabelHidden: true,
                });

                //add new data to new state
                this.props.onDeleteComment(response.data);
            })
            .catch((error) => {
                var payload = JSON.stringify(error, null, 2);
                console.log(error);
                this.setState({
                    errorLabelHidden: false,
                    errorLabel: "OOPS that didn't work :(",
                });
            });
    }

    onClick = () => {
        this.setState({isEdit:!this.state.isEdit});
    }

    render () {
        const {e,} = this.props;
        const{text} = this.state;
        return (
            <div>
                <div className="list-group">
                    <div className="list-group-item list-group-item-action mb-2 shadow-sm">
                        <div className="d-flex w-100 justify-content-between">
                            <h6 className="mb-1">{e.author.username}</h6>
                            <small className="text-muted"><Moment fromNow>{e.updatedAt}</Moment></small>
                        </div>
                        {
                            !this.state.isEdit &&
                            <p className="mb-1 is-breakable">{e.text}</p>   
                        }
                        {
                            this.state.isEdit &&
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <textarea className="form-control mt-1" rows="5" name="text" value={text} onChange={this.onChange}></textarea>
                                    <button type="submit" className="btn btn-primary btn-sm mt-1">Submit</button>
                                    <button onClick = {this.onClick} className="btn btn-primary btn-sm ml-2 mt-1">Cancel</button>
                                </div>
                            </form>
                        }
                        
                        {(() => {
                            let commentauthorid = new String(e.author.id);
                            if (!this.state.isEdit && this.props.user && commentauthorid == this.props.user._id) {
                                return (
                                    // Expected server HTML to contain a matching <span> in <div>
                                    <span>
                                        <a onClick = {this.onClick} className="btn btn-primary text-white btn-sm ">Edit</a>
                                        <a onClick = {this.onSubmitDelete} className="btn btn-primary btn-sm text-white ml-2  "> Delete </a>
                                    </span>
                                )
                            }
                        })()}
                    </div>
                </div>

                

                <style jsx>{`
                    .list-group-item-action{
                        border: none;
                    }
                    .list-group{
                      
                    }
                    #btn-inline{
                        display:inline;
                    }
                    .is-breakable{
                        word-wrap: break-word;

                    }
                `}</style>
            </div>
        )
    }
}