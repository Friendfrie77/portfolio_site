import React, { Component } from "react";
import Lightbox from "react-18-image-lightbox";
import lbprojectone1 from '../images/graphics/graphics-1/photo_0007.webp'
import lbprojectone2 from '../images/graphics/graphics-1/photo_0002.webp'
import lbprojectone3 from '../images/graphics/graphics-1/photo_0003.webp'
import lbprojectone4 from '../images/graphics/graphics-1/photo_0005.webp'
import lbprojectone5 from '../images/graphics/graphics-1/photo_0006.webp'
import lbprojectone6 from '../images/graphics/graphics-1/photo_0004.webp'
import lbprojectone7 from '../images/graphics/graphics-1/photo_0001.webp'

const images = [
    lbprojectone1,
    lbprojectone2,
    lbprojectone3,
    lbprojectone4,
    lbprojectone5,
    lbprojectone6,
    lbprojectone7,
  ];
  
  export default class GraphicsProject1Lightbox extends Component {
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
          <button className='lightbox-button' type="button" onClick={() => this.setState({ isOpen: true })}><span>Click here for a larger view!</span></button>
  
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