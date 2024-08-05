import React, { useState } from "react";
import Image from 'next/image'


const Colors= ()=>{
    const [Colors, setColors] = useState([]);

    const handleItemClick = (itemId) => {
        setColors((prevSelectedItems) => {
          if (prevSelectedItems.includes(itemId)) {
            // If item is already selected, remove it from selected items
            return prevSelectedItems.filter((id) => id !== itemId);
          } else {
            // If item is not selected, add it to selected items
            return [...prevSelectedItems, itemId];
          }
        });
      };
return(
    <div>
        <div className='ght fl fl-gap20  mb-101 wrap'>
            <div className={Colors.includes(1)?"ColorSelectedHighlight":""}  onClick={()=>handleItemClick(1)}>
                <Image src="blues.svg" alt="" width={144.52} height={144.52} />
                <p>Blues</p>
            </div>

            <div className={Colors.includes(2)?"ColorSelectedHighlight":""}  onClick={()=>handleItemClick(2)}>
                <Image src="Aquas.svg" alt="" width={144.52} height={144.52} />
                <p>Aquas </p>
            </div>

            <div className={Colors.includes(3)?"ColorSelectedHighlight":""}  onClick={()=>handleItemClick(3)}>
                <Image src="Greens.svg" alt="" width={144.52} height={144.52} />
                <p>Greens</p>
            </div>

            <div className={Colors.includes(4)?"ColorSelectedHighlight":""}  onClick={()=>handleItemClick(4)}>
                <Image src="Purples.svg" alt="" width={144.52} height={144.52} />
                <p>Purples  </p>
            </div>

            <div className={Colors.includes(5)?"ColorSelectedHighlight":""}  onClick={()=>handleItemClick(5)}>
                <Image src="Pinks.svg" alt="" width={144.52} height={144.52} />
                <p>Pinks</p>
            </div>

            <div className={Colors.includes(6)?"ColorSelectedHighlight":""}  onClick={()=>handleItemClick(6)}>
                <Image src="Reds.svg" alt="" width={144.52} height={144.52} />
                <p>Reds</p>
            </div>

            <div className={Colors.includes(7)?"ColorSelectedHighlight":""}  onClick={()=>handleItemClick(7)}>
                <Image src="Oranges.svg" alt="" width={144.52} height={144.52} />
                <p>Oranges</p>
            </div>
            
            <div className={Colors.includes(8)?"ColorSelectedHighlight":""}  onClick={()=>handleItemClick(8)}>
                <Image src="Yellows.svg" alt="" width={144.52} height={144.52} />
                <p>Yellows</p>
            </div>

            <div className={Colors.includes(9)?"ColorSelectedHighlight":""}  onClick={()=>handleItemClick(9)}>
                <Image src="Lightneutrals.svg" alt="" width={144.52} height={144.52} />
                <p>Light neutrals </p>
            </div>

            <div className={Colors.includes(10)?"ColorSelectedHighlight":""}  onClick={()=>handleItemClick(10)}>
                <Image src="dark.svg" alt="" width={144.52} height={144.52} />
                <p>Dark neutrals</p>
            </div>

            <div className={Colors.includes(11)?"ColorSelectedHighlight":""}  onClick={()=>handleItemClick(11)}>
                <Image src="descolor.svg" alt="" width={144.52} height={144.52} />
                <p>Designers suggestions</p>
            </div>

    </div>
    <div className="fl fl-gap47">
                <div className="fl-col fl-gap10 zn">
                <span>Note: If you have specific colors Please use their value in RGB, Hex, CMYK etc.</span>
                <input placeholder="" />
                
                </div>
            </div>
            <div className="mt-159 mb-350 fl fl-gap32 jstfe oneto1 ">
                <button id="btndiff">Skip</button>
                <button>Continue</button>
            </div>
    </div>
)}

export default Colors;