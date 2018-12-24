import SlideShow from '../components/SlideShow.js'
import Layout from '../components/Layout.js'
import Card from '../components/Card.js'
import React, { Component } from 'react'
import axios from 'axios'
import 'isomorphic-fetch'

export default class extends Component {
    
    constructor(props) {
        super(props);
    }

    static async getInitialProps ({ query: { user } }) {
        //console.log(user);
        const resx = await fetch('http://localhost:3000/getPhotos')
        const json = await resx.json()
        return { data: json.d ,user:user}
    }

    render () {
        //console.log(this.props);
        return (
            <Layout title = 'PhotoLink' user = {this.props.user} >

                <SlideShow />

                <div className="containerButton btn-group">

                    <div className="uploadButton ml-3">
                        <a className="btn btn-info" href="/submit">Submit</a>
                    </div>

                    <div className="dropdown mb-2 ml-auto">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sort By:
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Most View</a>
                            <a className="dropdown-item" href="#">Most Likes</a>
                            <a className="dropdown-item" href="#">Most Recent</a>
                        </div>
                    </div>
                </div>

                <div className="containerGrid">
                    <div className="row ">
                        {
                            this.props.data.map((photo,i) => (
                                <Card key={i} photo = {photo} isZoom = {1}/>
                            ))
                        }
                    </div>
                </div>
                
                <style jsx>{`
                    
                    body{
                        background: #f9f9f9 !important;
                    }
                
                    .containerGrid{
                        width:98%;
                        margin-left:auto; 
                        margin-right:auto; 
                        padding: 1em;
                        padding-top: 0em;
                    }

                    .containerButton{
                        width:98%;
                        margin-left:auto; 
                        margin-right:auto; 
                        padding-top: 1em;
                    }

                `}</style>
            </Layout>
        )
    }
}