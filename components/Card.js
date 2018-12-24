
const Card = ({ photo, i ,isZoom}) => (
    
        <span key ={i} className="cardstyle col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
            <div className="card text-dark shadow-sm" >
                <a className="card-img-box" href={photo._id} >
                    {isZoom?(
                        <img className="card-img-top zoom" src={photo.image} alt="Card image cap"/>
                    ):(
                        <img className="card-img-top" src={photo.image} alt="Card image cap"/>
                    )}
                </a>
                <div className="card-body">
                    <p className="card-text font-weight-normal">{photo.name}</p>
                    <small className="card-text font-weight-normal">{photo.author.username}</small>
                    <p className="card-text font-weight-normal">{photo.description}</p>
                    {!isZoom?(
                        <a className="btn btn-info btn-sm" href={photo._id+'/edit'} >Edit</a>
                    ):(<span></span>)}
                    
                </div>
            </div>

            <style jsx>{`
            .card-body{
                background-color:lightgrey;
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
export default Card