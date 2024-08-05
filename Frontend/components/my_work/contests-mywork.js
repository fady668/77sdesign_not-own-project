import React, { useState } from "react";
import Image from 'next/image'



const Contests = ()=>{
    const [activeside, setActiveside] = useState("Active");
    return(
        <div className="h-60v fl jst-SB">

<div className="fl-all4 work-sidefilter fl-gap3 mb-190">
     
     <button id={`${
     activeside === "Active" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('Active')}>Active (0)</button>


      <button id={`${
     activeside === "Locked" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('Locked')}> Locked (0)</button>

   
     <button id={`${
     activeside === "Finished" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('Finished')}>Finished (0)</button>

       <button id={`${
     activeside === "Qualifying" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('Qualifying')}>Qualifying (0)</button>

        <button id={`${
     activeside === "Final" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('Final')}>Final round (0)</button>

        <button id={`${
     activeside === "Eliminated" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('Eliminated')}>Eliminated (0)</button>

        <button id={`${
     activeside === "Watching" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('Watching')}>Watching (0)</button>
    </div>




 </div>



       
     
 
    )
}
export default Contests;