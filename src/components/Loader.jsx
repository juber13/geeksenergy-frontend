import React from "react";


const Loader = ({text}) => {
    return (
      <div className='d-flex align-items-center justify-content-center gap-2'>
        <div
          className='spinner-border'
          role='status'
          aria-hidden='true'
          style={{ width: "1.5rem", height: "1.5rem" }}
        >
          <span className='visually-hidden'>{text}</span>
        </div>
        <span>{text}</span>
      </div>
    );
}

export default Loader;    