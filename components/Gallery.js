import React, { Component } from 'react'
import Masonry from 'react-masonry-component';
import Card from '../components/Card.js'

const masonryOptions = {
    transitionDuration: 0
};
const imagesLoadedOptions = { background: '.my-bg-image-el' }
 

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: true
        }
    }
    componentDidMount() {
        //this.hide();
    }
    handleImagesLoaded(imagesLoadedInstance) {
        //this.show();
        if(this.state.isHidden){
            this.setState({
                isHidden: !this.state.isHidden
            })
        }
        
    }

    render(){
        const childElements = this.props.data.map((photo,i) => (
            <Card key={i} photo = {photo} isZoom = {1} user = {this.props.user}/>
        ))

        return(
            <div className="containerGrid">
                    <Masonry
                        className={'my-gallery-class'} // default ''
                        elementType={'div'} // default 'div'
                        options={masonryOptions} // default {}
                        disableImagesLoaded={false} // default false
                        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                        imagesLoadedOptions={imagesLoadedOptions} // default {}
                        onImagesLoaded={this.handleImagesLoaded.bind(this)}
                    >
                        {!this.state.isHidden && childElements}
                    </Masonry>   

                    <style jsx>{`
                    .containerGrid{
                        width:98%;
                        margin-left:auto; 
                        margin-right:auto; 
                        padding: 1em;
                        padding-top: 0em;
                    }
                    `}</style>         
            </div>
        )
    }

}