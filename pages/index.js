import SlideShow from '../components/SlideShow.js'
import Layout from '../components/Layout.js'
import Gallery from '../components/Gallery.js'
import React, { Component } from 'react'
import axios from 'axios'
import 'isomorphic-fetch'
const dev = process.env.NODE_ENV !== 'production';
const server = dev ? 'http://localhost:3000' : 'https://photolink122.herokuapp.com';

export default class extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isWIPfinished:false
        }
        
    }

    static async getInitialProps ({ query: { user ,isSearch, data} }) {
        
        if(isSearch){
            return { data: data ,user:user}
        }
        const resx = await fetch(`${server}getPhotos`)
        const json = await resx.json()
        return { data: json.x ,user:user}
    }

    render () {
        return (
            <Layout title = 'PhotoLink' user = {this.props.user} >

                <SlideShow />

                <div className="containerButton btn-group">

                    <div className="uploadButton ml-3 ">
                        <a className="btn btn-info" href="/submit">Submit</a>
                    </div>

                    <div className = 'container'>
                        <form className="form-inline  my-lg-0 lead" action ='/getPhotosSearch' method='GET'>
                            <input className="form-control  mr-sm-2" name ='search' type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success mt-1 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                    {this.state.isWIPfinished &&
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
                    }
                </div>

                
                
                <Gallery user = {this.props.user} data = {this.props.data} />

                

                
                
                <style jsx>{`
                    
                    body{
                        background: #f9f9f9 !important;
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