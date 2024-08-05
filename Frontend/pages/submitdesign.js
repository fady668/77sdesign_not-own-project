import Image from "next/image";


const Submitdesign = ()=>{
return(
    <div className="max fl h-90">
        <div className="w-35 sb-col1">
            <div>
                <Image src="subex2.svg" alt='' width={288} height={269} />
                <span>Preview</span>
            </div>
            <div className="fl-col fl-gap8 mt-18 mb-30">
                <div className="fl fl-gapp16 ">
                    <input type="checkbox" />
                    <label>I hereby accept the code of conduct</label>
                </div>
                <div className="fl fl-gapp16  ali-start">
                    <input type="checkbox" />
                    <label>I hereby declare that the Design has been
                           designed by me solely and that I did not use existing material  
                    </label> 
                </div>
            </div>
            <div className="fl fl-gap2 mb-101">
                <Image src="paidstock.svg" alt="" width={22} height={22} />
                <p>Design uses paid stock</p>
            </div>
            <div className="SD-inp mb-190">
                <input placeholder="Describe your design" />
            </div>
            <div className="SD-btns">
                <button className="SD-btn1">Submit</button>
                <button className="SD-btn2">Cancel</button>
            </div>
        </div>
        <div className="sb-col2">
            <Image src="subex1.svg" alt='' width={861} height={917} />
        </div>
    </div>
)};

export default Submitdesign;