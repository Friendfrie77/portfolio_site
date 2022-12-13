import React, { Component } from "react";
import { render } from "react-dom";
import Lightbox from "react-18-image-lightbox";
import lbprojectthree1 from '../images/graphics/draft.webp'
import lbprojectthree2 from '../images/graphics/draft2.webp'
import lbprojectthree3 from '../images/graphics/Final.webp'

const images = [
    lbprojectthree1,
    lbprojectthree2,
    lbprojectthree3
  ];
  
  export default class GraphicsProject3Lightbox extends Component {
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