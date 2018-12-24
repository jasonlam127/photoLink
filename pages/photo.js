import Layout from '../components/Layout.js'
import React, { Component } from 'react'
import Card from '../components/Card.js'
import axios from 'axios'

export default class extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            errorLabel: "",
            errorLabelHidden: true,
            list: [],
            data: props.data
        };
    }
    static getInitialProps ({ query: { data ,user } }) {
        return { data: data , user:user}
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
                let newData =this.state.data ;
                newData.comments.push(response.data);
                this.setState({data: newData});
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
        //console.log(this.props.data);
        const {text} = this.state;

        return (
            <Layout title = 'PhotoLink'  user = {this.props.user}>
                <div className ="container">
                    <Card photo = {this.props.data} isZoom ={false} />
                    { this.props.user ? (
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <div className = "form-inline">
                                    <label htmlFor="add-comment">Write a comment:</label>
                                </div>
                                <textarea className="form-control mt-1" rows="2" name="text" value={text} onChange={this.onChange}></textarea>
                                <button type="submit" className="btn btn-primary btn-sm mt-2">Submit</button>
                            </div>
                        </form>
                    ):(<span></span>)}
                    
                    {
                        this.state.data.comments.map((e,i) => (
                            <div key ={i}>
                                <h3>{e.author.username}</h3>
                                <h5>{e.text}</h5>
                            </div>
                        ))
                    }
                </div>
            </Layout>
        )
    }
}