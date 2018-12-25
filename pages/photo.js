import Layout from '../components/Layout.js'
import React, { Component } from 'react'
import Card from '../components/Card.js'
import EditForm from '../components/EditForm.js'
import ShowComment from '../components/ShowComment.js'

export default class extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
        };
    }

    static getInitialProps ({ query: { data ,user } }) {
        return { data: data , user:user}
    }

    onUpdateComment = (response) => {
        let newData =this.state.data ;
        newData.comments.push(response.data);
        this.setState({data: newData});
    }

    onEditComment = (response) => {
        let newData =this.state.data ;
        newData.comments.forEach(element => {
            if(element._id === response._id){
                element.text = response.text;
                return;
            }
        });
        this.setState({data: newData});
    }

    onDeleteComment = (response) => {
        let newData =this.state.data ;
      
        //find object with response.id then remove it
        let index = newData.comments.map(x => {
            return x._id;
        }).indexOf(response._id);
          
        newData.comments.splice(index, 1);
        console.log(newData.comments);

        this.setState({data: newData});
    }

    render () {
        const {text} = this.state;

        return (
            <Layout title = 'PhotoLink'  user = {this.props.user}>
                <div className ="container">
                    <Card photo = {this.props.data} isZoom ={false} user = {this.props.user} />
                    { this.props.user &&
                        <EditForm data = {this.props.data} onUpdateComment ={this.onUpdateComment} />
                    }
                    {
                        this.state.data.comments.map((e,i) => (
                            <ShowComment photo = {this.props.data} e={e} key={i}  onEditComment ={this.onEditComment} onDeleteComment = {this.onDeleteComment}/>
                        ))
                    }
                </div>
                <style jsx>{`
                    
                `}</style>
            </Layout>
        )
    }
}