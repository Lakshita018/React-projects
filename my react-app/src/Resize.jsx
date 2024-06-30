import React ,{useState,useEffect}from 'react';

function MyComponent() {
  const [width,setWidth]=useState(window.innerWidth);
  const [height,setHeight]=useState(window.innerHeight);
  useEffect(()=>{
    window.addEventListener("resize",handleResize);
  },[]);
  function handleResize(){
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  
  return (
    <div>
      <p>window width:{width}px</p>
      <p>window height:{height}px
      </p>
      </div>
  )
}

export default MyComponent