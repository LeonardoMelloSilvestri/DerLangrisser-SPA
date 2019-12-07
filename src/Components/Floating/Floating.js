import React from 'react';
import { backToTop } from '../../helpers';

const Floating = () => {
  return (
    <>
      <div onClick={backToTop} className="fixed-action-btn">
        <a className="btn-floating btn-large red">
          <i className="large material-icons">keyboard_arrow_up</i>
        </a>
      </div>
    </>
  )
}

export default Floating