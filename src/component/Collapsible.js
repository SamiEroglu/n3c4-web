import {
  React, useState, useRef, useEffect
} from 'react';
import '../styles/Collapsible.css';

function Collapsible({ title, icon, btn, children, ico }) {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  const contentRef = useRef();
  const mainRef = useRef();

  useEffect(() => {
    const listener = event => {
      if (!mainRef.current || mainRef.current.contains(event.target)) {
        return;
      }

      setOpen(false);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [mainRef]);

  return (

    <div ref={mainRef}>

      <div onClick={toggle} className='content-cont'>

        {icon}
        <div className='content-title'>{title}</div>
        {btn} {ico}
      </div>
      <div
        className='content-parent'
        ref={contentRef}
        style={open
          ? {
            height: `${contentRef.current.scrollHeight
              }px`
          }
          : { height: '0px' }}
      >
        <div className='content'>{children}</div>
      </div>
    </div>
  );
}

export default Collapsible;
