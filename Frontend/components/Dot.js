import { useEffect } from "react";
import { useState } from "react";
  


// {const DotColor ="#FF6B6B"}
const Dot = ({x,y,DotColor,DotID,setIsHoveringDot,setIsHoveringID,handleDotClick,textbody})=>{
  
  function handleMouseEnterDot(id) {
    
    setIsHoveringDot(true);
    setIsHoveringID(id)
    
    // console.log("yo")
    // console.log(IsHovering)
    // console.log(IsHoveringID)
  }

  function handleMouseLeaveDot() {
    setIsHoveringDot(false);
    
  }
  // const handleDotClick=(x,y,id)=>{
  //   console.log(x,y)
  //   console.log(id)
  // }
  
    // console.log('Dot component')
    return (
        <canvas
          width={10}
          height={10}
          className="feedbackhover"
          style={{
            position: 'absolute',
            left: x -5,
            top: y  -5 ,
            backgroundColor: DotColor,
            borderRadius: '50%',
          }}
          onMouseEnter={()=>handleMouseEnterDot(DotID)}
          onMouseLeave={handleMouseLeaveDot}
          onClick={()=>{if(DotID){handleDotClick()}}}
          draggable
      ></canvas>
      );
    }

export default Dot;


