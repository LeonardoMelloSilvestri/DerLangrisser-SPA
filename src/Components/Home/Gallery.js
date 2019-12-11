import React from 'react';

const Gallery = () => {
  return (
    <>
      <section>
        <div className="gallery custom-container center">
          <h3 className="orange-text">Gallery</h3>
          <div className="row">
            <div className="col s12 m6 l4">
              <img className="materialboxed responsive-img" src={require('../../img/gallery1.jpg')} />
            </div>
            <div className="col s12 m6 l4">
              <img className="materialboxed responsive-img" src={require('../../img/gallery2.jpg')} />
            </div>
            <div className="col s12 m6 l4">
              <img className="materialboxed responsive-img" src={require('../../img/gallery3.jpg')} />
            </div>
            <div className="col s12 m6 l4">
              <img className="materialboxed responsive-img" src={require('../../img/gallery5.jpg')} />
            </div>
            <div className="col s12 m6 l4">
              <img className="materialboxed responsive-img" src={require('../../img/gallery5.jpg')} />
            </div>
            <div className="col s12 m6 l4">
              <img className="materialboxed responsive-img" src={require('../../img/gallery6.jpg')} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Gallery;