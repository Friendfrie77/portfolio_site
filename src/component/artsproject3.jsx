import React, { Component } from "react";
import { render } from "react-dom";
import Lightbox from "react-18-image-lightbox";
import lbprojectone1 from '../images/art/wed1.webp'
import lbprojectone2 from '../images/art/wed2.webp'
import lbprojectone3 from '../images/art/wed3.webp'
import lbprojectone4 from '../images/art/wed4.webp'



const images = [
    lbprojectone1,
    lbprojectone2,
    lbprojectone3,
    lbprojectone4
  ];
  
  export default class ArtsProject3 extends Component {
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