import React, { Component } from 'react'

export default class extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        const {photo, i ,isZoom,user} = this.props;

        return (
            <span key ={i} className="cardstyle col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                <div className="card text-dark shadow-sm " >
                    <a className="card-img-box" href={photo._id} >
                        {isZoom?(
                            <img className="card-img-top zoom rounded-top" src={photo.image} alt="Card image cap"/>
                        ):(
                            <img className="card-img-top rounded-top" src={photo.image} alt="Card image cap"/>
                        )}
                    </a>
                    <div className="card-body rounded-bottom">
                        <h6 className="card-text font-weight-bold">{photo.name.substring(0, 20)}</h6>
                        <h6 className="card-text font-weight-normal text-muted">{photo.author.username}</h6>
                        {
                            !isZoom &&
                            <p className="card-text font-weight-normal reduceMT">{photo.description}</p>
                        }
                        {
                            isZoom &&
                            <p className="card-text font-weight-normal reduceMT">{photo.description.substring(0, 100)}</p>
                        }
                        
                        {(() => {
                            let photoauthorid = new String(photo.author.id);
                            if (!isZoom && user && photoauthorid == user._id) {
                                return (
                                    // Expected server HTML to contain a matching <span> in <div>
                                    <span>
                                        <a className="btn btn-info btn-sm" href={photo._id+'/edit'} >Edit</a>
                                        <form action = {photo._id +'?_method=DELETE'} method ="POST" id = "btn-inline">
                                            <button className="btn btn-info btn-sm "> Delete </button>
                                        </form>
                                    </span>
                                )
                            }
                        })()}
                    </div>
                </div>

                <style jsx>{`
                .card-body{
                    background-color:lightgrey;
                }
                #btn-inline{
                    display:inline;
                    padding-left: 0.3em;
                }
                .card{
                    width: 100%;
                    border: none;
                }
                
                .cardstyle {
                    padding: 0.3em !important;
                }
                a.cardstyle,
                a.cardstyle:hover {
                color: #212529;
                text-decoration: none;
                }
                .card-img-box{
                    overflow: hidden;
                }
                .zoom {
                    transition: transform .2s; /* Animation */
                }
                .zoom:hover {
                    transform: scale(1.08); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
                }
                `}</style>
            </span>
        )
    }
}