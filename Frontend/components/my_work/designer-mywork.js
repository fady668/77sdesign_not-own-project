import React, { useState } from "react";



const Designer = ()=>{
    const [activeside, setActiveside] = useState("favorite");
    return(
        <div className=" h-60v fl">

<div className="fl-all4 work-sidefilter fl-gap3 mb-190">
     
     <button id={`${
     activeside === "favorite" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('favorite')}>Favorite (0)</button>


      <button id={`${
     activeside === "Worked" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('Worked')}> Worked together (0)</button>

   
     
    </div>



<div className="mywork-ex">
   <div className="myworkDesigner_h2">
    <h2 className="">Designer name</h2>
   </div>
   <div className="myworkDesigner_span">
    <span className="">Brief title</span>
   </div>
  
 </div>

 </div>



       
     
 
    )
}
export default Designer;