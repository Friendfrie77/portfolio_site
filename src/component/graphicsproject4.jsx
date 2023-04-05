import React, { Component } from "react";
import Lightbox from "react-18-image-lightbox";
import photo0 from '../images/graphics/graphics-4/photo_0.webp'
import photo1 from '../images/graphics/graphics-4/photo_01.webp'
import photo2 from '../images/graphics/graphics-4/photo_02.webp'

const images = [
    photo0,
    photo1,
    photo2
  ];
  
  export default class GraphicsProject4Lightbox extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        photoIndex: 0,
        isOpen: false,
      };
    }
  
    render() {
      const { photoIndex, isOpen } = this.state;
  
      return (
        <div>
          <button className='lightbox-button' type="button" onClick={() => this.setState({ isOpen: true })}><span>Click here for a larger view!</span>
          </button>
  
          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + images.length - 1) % images.length,
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % images.length,
                })
              }
            />
          )}
        </div>
      );
    }
  }