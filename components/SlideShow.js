

const SlideShow = () => (
    <div>
        <div className="jumbotron jumbotron-fluid slideshow">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <div className="container">
                
                <h2 className="display-5">Welcome to PhotoLink!</h2>
                <p className="lead">Connect with other people and share your beautiful photos with the world</p>
                <a className="btn btn-info startShare" href = '/submit'role="button">Start Share</a>
                
            </div>
        </div>

        <style jsx>{`
            .jumbotron {
                background-color: #000;
                background-size: cover;
                padding-top: 10%;
                padding-bottom: 10%;
                margin-bottom: 0rem !important; 
                z-index: 0 ;
                position:relative;
                overflow: hidden;
            }
            .display-5 , .lead , .startShare {
                color:white; 
                z-index: 1 ;
                position: relative;
            }
            .slideshow li { 
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                
                background-size: cover;
                background-position: 50% 50%;
                background-repeat: no-repeat;
                opacity: 0;
                z-index: 0;
                animation: imageAnimation 25s linear infinite; 
            }
            .slideshow li:nth-child(1) { 
            background-image: url("/static/bg1.jpg");
            }
            .slideshow li:nth-child(2) { 
            background-image: url("/static/bg2.jpg");
            animation-delay: 5s; 
            }
            .slideshow li:nth-child(3) { 
            background-image: url("/static/bg3.jpg");
            animation-delay: 10s; 
            }
            .slideshow li:nth-child(4) { 
            background-image: url("/static/bg4.jpg");
            animation-delay: 15s; 
            }
            .slideshow li:nth-child(5) { 
            background-image: url("/static/bg5.jpg");
            animation-delay: 20s; 
            }
            @keyframes imageAnimation { 
                0% { 
                    opacity: 0; 
                    animation-timing-function: ease-in;
                }
                10% {
                    opacity: 1;
                    animation-timing-function: ease-out;
                }
                20% {
                    opacity: 1
                }
                30% {
                    opacity: 0
                }
            }
            /* Older browser support - .no-cssanimations class added by modernizr */
            .no-cssanimations .slideshow li {
                opacity: 1;
            }
            
        `}</style>
    </div>
)
export default SlideShow