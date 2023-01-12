import React, { useRef,useEffect } from 'react';
import './Header.css';

const Header = () => {
  const resultRef = useRef();
  const expressionRef = useRef();

  useEffect(() => {
    resultRef.current.scrollIntoView();
  }, [props.history]);

  useEffect(() => {
    expressionRef.current.scrollLeft = expressionRef.current.scrollWidth;
  }, [props.expression]);

  return (
    <div className='header custom-scroll'>
     <div className='header_history'>
      <p>10+2</p>
      <p>10+2</p>
      <p>10+2</p>
      <p>10+2</p>
      
     </div>
     <br />
     <div className='header_expression custom-scroll'>
      <p>10+50</p>
     </div>
     <p ref={resultRef} className='header_result'>60</p>
    </div>
  )
}

export default Header;
