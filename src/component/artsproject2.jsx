import React, { Component } from "react";
import Lightbox from "react-18-image-lightbox";
import lbprojectone1 from '../images/art/arts-2/fullshot1.webp'
import lbprojectone2 from '../images/art/arts-2/fullshot2.webp'
import lbprojectone3 from '../images/art/arts-2/fullshot3.webp'
import lbprojectone4 from '../images/art/arts-2/analogous.webp'
import lbprojectone5 from '../images/art/arts-2/chromatic.webp'
import lbprojectone6 from '../images/art/arts-2/monochrome.webp'


const images = [
    lbprojectone1,
    lbprojectone2,
    lbprojectone3,
    lbprojectone4,
    lbprojectone5,
    lbprojectone6

  ];
  
  export default class ArtsProject2 extends Component {
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