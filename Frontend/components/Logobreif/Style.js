import Image from "next/image";
import React, { useState } from "react";
const Style= ()=>{
    const [lettermarks, setlettermarks] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);

    const handleItemClick = (itemId) => {
        setSelectedItems((prevSelectedItems) => {
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
        <div className="oneto1 fl-col gap fl-gap32">
   
  
            <div className="fl-col fl-gap47 ">
                <label>lettermarks</label>
                <div className="fl fl-gap10">

                
                <div className="fl fl-gap32">
                    <div   className={selectedItems.includes(1)?"logoabout SelectedHighlight":"logoabout"}  onClick={()=>handleItemClick(1)}>
                    <Image src="ibm.svg" alt="" width={27} height={27} className="" />
                    </div>
                    <div className={selectedItems.includes(2)?"logoabout SelectedHighlight":"logoabout"} onClick={()=>{handleItemClick(2);console.log(selectedItems)}} >
                    <Image src="HM.svg" alt="" width={27} height={27} />
                    </div>
                    <div className={selectedItems.includes(3)?"logoabout SelectedHighlight":"logoabout"} onClick={()=>{handleItemClick(3);console.log(selectedItems)}} >
                    <Image src="LV.svg" alt="" width={27} height={27} />
                    </div>
                </div>
 
                </div>
            </div>
            
            <div className="fl-col fl-gap47">
                <label>Wordmarks</label>
                <div className="fl-col fl-gap32">


                
                <div className="fl fl-gap32">
                    <div className={selectedItems.includes(4)?"logoabout SelectedHighlight":"logoabout"} onClick={()=>{handleItemClick(4);console.log(selectedItems)}} >
                    <Image src="coca.svg" alt="" width={27} height={27}  />
                    </div>
                    <div className={selectedItems.includes(5)?"logoabout SelectedHighlight":"logoabout"} onClick={()=>{handleItemClick(5);console.log(selectedItems)}} >
                    <Image src="visa2.svg" alt="" width={27} height={27}  />
                    </div>
                    <div className={selectedItems.includes(6)?"logoabout SelectedHighlight":"logoabout"} onClick={()=>{handleItemClick(6);console.log(selectedItems)}} >
                    <Image src="virgin.svg" alt="" width={27} height={27} />
                    </div>
                </div>
                </div>
            </div>
            <div className="fl-col fl-gap47 ">
                <label>Pictorial marks</label>
                <div className="fl fl-gap10">

                
                <div className="fl fl-gap32">
                <div className={selectedItems.includes(7)?"logoabout SelectedHighlight":"logoabout"} onClick={()=>{handleItemClick(7);console.log(selectedItems)}} >
                    <Image src="7.svg" alt="" width={27} height={27} />
                    </div>
                    <div className={selectedItems.includes(8)?"logoabout SelectedHighlight":"logoabout"} onClick={()=>{handleItemClick(8);console.log(selectedItems)}} >
                    <Image src="twitter.svg" alt="" width={27} height={27} />
                    </div>
                    <div className={selectedItems.includes(9)?"logoabout SelectedHighlight":"logoabout"} onClick={()=>{handleItemClick(9);console.log(selectedItems)}} >
                    <Image src="apple.svg" alt="" width={27} height={27} />
                    </div>
                </div>
 
                </div>
            </div>
            
            <div className="fl-col fl-gap47">
                <label>Abstract logo marks</label>
                <div className="fl-col fl-gap32">


                
                <div className="fl fl-gap32">
                <div className={selectedItems.includes(10)?"logoabout SelectedHighlight":"logoabout"} onClick={()=>{handleItemClick(10);console.log(selectedItems)}} >
                    <Image src="addidas.svg" alt="" width={27} height={27}  />
                    </div>
                    <div className={selectedItems.includes(11)?"logoabout SelectedHighlight":"logoabout"} onClick={()=>{handleItemClick(11);console.log(selectedItems)}} >
                    <Image src="pepsi.svg" alt="" width={27} height={27} />
                    </div>
                    <div className={selectedItems.includes(12)?"logoabout SelectedHighlight":"logoabout"} onClick={()=>{handleItemClick(12);console.log(selectedItems)}} >
                    <Image src="bp.svg" alt="" width={27} height={27} />
                    </div>
                </div>
                </div>
            </div>
            <div className="fl-col fl-gap47 ">
                <label>Mascots</label>
                <div className="fl fl-gap10">

                
                <div className="fl fl-gap32">
                    <div className={selectedItems.includes(13)?"logoabout SelectedHighlight":"logoabout"} onClick={()=>{handleItemClick(13);console.log(selectedItems)}} >
                    <Image src="Intersection5.svg" alt="" width={27} height={27} />
                    </div>
                    <div className={selectedItems.includes(14)?"logoabout SelectedHighlight":"logoabout"} onClick={()=>{handleItemClick(14);console.log(selectedItems)}} >
                    <Image src="kfc.svg" alt="" width={27} height={27} />
                    </div>
                    <div className={selectedItems.includes(15)?"logoabout SelectedHighlight":"logoabout"} onClick={()=>{handleItemClick(15);console.log(selectedItems)}} >
                    <Image src="Intersection6.svg" alt="" width={27} height={27} />
                    </div>
                </div>
 
                </div>
            </div>
            
            <div className="fl-col fl-gap47">
                <label>Combination mark</label>
                <div className="fl-col fl-gap32">


                
                <div className="fl fl-gap32">
                    <div className={selectedItems.includes(16)?"logoabout SelectedHighlight":"logoabout"} onClick={()=>{handleItemClick(16);console.log(selectedItems)}} >
                    <Image src="doritos.svg" alt="" width={27} height={27} />
                    </div>
                    <div className={selectedItems.includes(17)?"logoabout SelectedHighlight":"logoabout"} onClick={()=>{handleItemClick(17);console.log(selectedItems)}} >
                    <Image src="lacoste.svg" alt="" width={27} height={27} />
                    </div>
                    <div className={selectedItems.includes(18)?"logoabout SelectedHighlight":"logoabout"} onClick={()=>{handleItemClick(18);console.log(selectedItems)}} >
                    <Image src="Bk.svg" alt="" width={27} height={27} />
                    </div>
                </div>
                </div>
            </div>
            <div className="fl-col fl-gap47 ">
                <label>Emblem</label>
                <div className="fl fl-gap10">

                
                <div className="fl fl-gap32">
                    <div className={selectedItems.includes(19)?"logoabout SelectedHighlight":"logoabout"} onClick={()=>{handleItemClick(19);console.log(selectedItems)}} >
                    <Image src="harley.svg" alt="" width={27} height={27} />
                    </div>
                    <div className={selectedItems.includes(20)?"logoabout SelectedHighlight":"logoabout"} onClick={()=>{handleItemClick(20);console.log(selectedItems)}} >
                    <Image src="starbucks.svg" alt="" width={27} height={27} />
                    </div>
                    <div className={selectedItems.includes(21)?"logoabout SelectedHighlight":"logoabout"} onClick={()=>{handleItemClick(21);console.log(selectedItems)}} >
                    <Image src="harvard.svg" alt="" width={27} height={27} />
                    </div>
                </div>
 
                </div>
            </div>
            


            <div className="mt-159 mb-350 fl fl-gap32 jstfe">
                <button id="skipbtn">Skip</button>
                <button>Continue</button>
            </div>
            
        </div>
    )
}
export default Style;