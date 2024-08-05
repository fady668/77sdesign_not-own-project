import React, { useState } from "react";



const Ndas = ()=>{
    const [activeside, setActiveside] = useState("Active");
    return(
        <div className=" h-60v fl ">

<div className="fl-all4 work-sidefilter fl-gap3 mb-190">
     
     <button id={`${
     activeside === "Active" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('Active')}>Brief title</button>

    </div>



<div className="mywork-ex">
    <span>Contest link</span>
 </div>

 </div>



       
     
 
    )
}
export default Ndas;