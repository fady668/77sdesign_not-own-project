import React, { useState } from "react";
import Image from 'next/image'
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Aboutbusiness from "@/components/Logobreif/Aboutbusiness";
import Time from "@/components/Logobreif/TypeofDesign";
import Size from "@/components/Logobreif/Style";
import Brand from "@/components/Logobreif/Brand";
import Colors from "@/components/Logobreif/Colors";
import Checkout from "@/components/Logobreif/Checkout";


const Contestbreif = ()=>{
    const [activeside, setActiveside] = useState("About");
    return(

<div>
    
         <div className="home_section p-15">
            <div className="max">
                <Navbar/>
                <div className="my-workkk mt-125">
                    <h2 id="title2">Logo contest</h2>
                    <h1 id="title">Brief details</h1>
                </div>
            </div>
      
 
        </div>
        <div className="mywork-conten max">
        <div className="h-60v fl jst-SB">

<div className="fl-all4 work-sidefilter2 fl-gap3 mb-190 ">
     
     <button id={`${
     activeside === "About" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('About')}>About business & brand</button>




   
     <button id={`${
     activeside === "style" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('style')}>Select designs style you like</button>

       <button id={`${
     activeside === "Brand" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('Brand')}>Brand’s style / Target audience</button>

        <button id={`${
     activeside === "Colors" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('Colors')}>Preferred colors</button>

        <button id={`${
     activeside === "Time" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('Time')}>The type of design pack you are interested in</button>

        <button id={`${
     activeside === "Checkout" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('Checkout')}>Checkout</button>

    </div>


<div className="mywork-ex">
   {activeside === "About" && <Aboutbusiness/>}
   {activeside === "Time" && <Time/>}
   {activeside === "style" && <Size/>}
   {activeside === "Brand" && <Brand/>}
   {activeside === "Colors" && <Colors/>}
   {activeside === "Checkout" && <Checkout/>}
 </div>

 </div>

 </div>

 <Footer/>
 </div>     
 
    )
}
export default Contestbreif;