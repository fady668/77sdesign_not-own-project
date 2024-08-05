import Image from "next/image";
import React, { useEffect, useState } from "react";

function reportDesign() {
  return (
    <div className="max" style={{paddingTop:"70px"}}>

    <div className="fl mb-11" style={{justifyContent:"right"}}>

        <button className="CloseBTN">X</button>
    </div>
    <div className=" fl h-90 " >
    <div>
        <div className="mb-50">
        <p >Design number #23 has been reported</p>
        <p>Because it --------------------- </p>
        </div>
        <div className="fl-col fl-gap20 mb-28">
            <p>You have withdraw it immediately</p>
            <button className="Send" style={{width:"204px"}}>Withdraw</button>
        </div>
        <div className="fl-col gap15 mb-40">
            <p>Or if the design is all your own, you </p>
            <p>can challenge the report and clarify it </p>
        </div>
        <div className="fl-col gap15 mb-40">
            <label>Clarification</label>
            <input className="Commentinput" type="text"/>
        </div>
        <div className="fl fl-gap20">
            <button className="Send" style={{width:"204px"}}>keep</button>
        </div>
    </div>

</div>
</div>
  )
}

export default reportDesign