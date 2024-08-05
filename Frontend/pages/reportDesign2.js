import Image from "next/image";
import React, { useEffect, useState } from "react";

function reportDesign() {
  return (
    <div className="max" style={{paddingTop:"70px"}}>

    <div className="fl mb-11" style={{justifyContent:"right"}}>

        <button className="CloseBTN">X</button>
    </div>
    <h2 className="mb-82">Report this design</h2>
    <div className=" fl h-90 " >
    <div className="w-25 ">
        
    <div className="" >
        <Image src="logo.svg" alt='' width={210} height={210} />
    </div>

    </div>
    <div>
        <p className="mb-50">Tell us reason for reporting this design</p>
        <div className="fl-col fl-gap20 mb-28">
            <div className="fl fl-gap8">
                <input type="radio" id="copy" name="reporting"  value="copy"/>
                <label htmlFor="copy">Copy of other design</label>
            </div>
            <div className="fl fl-gap8">
                <input type="radio" id="Stock" name="reporting"  value="Stock"/>
                <label htmlFor="Stock">Stock image</label>
            </div>
            <div className="fl fl-gap8">
                <input type="radio" id="Inappropriate" name="reporting"  value="Inappropriate"/>
                <label htmlFor="Inappropriate">Inappropriate content</label>
            </div>
        </div>
        <div className="fl-col gap15 mb-40">
            <label>Link or design number (e.g.#38)</label>
            <input className="LinkOrDesign" type="text"/>
        </div>
        <div className="fl-col gap15 mb-40">
            <label>Comment</label>
            <input className="Commentinput" type="text"/>
        </div>
        <div className="fl fl-gap20">
            <button className="Send">Send</button>
            <button className="Cancel">Cancel</button>
        </div>
    </div>

</div>
</div>
  )
}

export default reportDesign