import Image from "next/image";
import { useState } from "react";
const Brand= ()=>{
    const [BrandStyle1, setBrandStyle1] = useState("Classic");
    const [BrandStyle2, setBrandStyle2] = useState("Playful");
    const [BrandStyle3, setBrandStyle3] = useState("Geometrical");
    const [BrandStyle4, setBrandStyle4] = useState("Feminine");
    const [BrandStyle5, setBrandStyle5] = useState("Economical");
    const [BrandStyle6, setBrandStyle6] = useState("Mature");
    const [BrandStyle7, setBrandStyle7] = useState("Handcrafted");

    return(
        <div className="oneto1 fl-col gap fl-gap32">


    <div className='fl-col jstfe xyz ali-cen w900'>
        {/* first filter */}
     <div className='choose2 '>
       <div className='fl jst-SB'>
       <button id='nobtn2' onClick={()=>{setBrandStyle1('Classic')}}>Classic</button>
       <button id='nobtn2' onClick={()=>{setBrandStyle1('Modern')}}>Modern</button>
       </div>
       <div className='abc'>
       <Image src="btn.svg" alt='' height={25} width={25} className={` ${BrandStyle1 === "Classic" ? "drag drag-left":"drag drag-right"}`} />
       </div>
     </div>
{/* first filter end*/}
     <div className='choose2 '>
       <div className='fl jst-SB'>
       <button id='nobtn2' onClick={()=>{setBrandStyle2('Playful')}}>Playful</button>
       <button id='nobtn2' onClick={()=>{setBrandStyle2('Serious') }}>Serious</button>
       </div>
       <div className='abc'>
       <Image src="btn.svg" alt='' height={25} width={25} className={` ${BrandStyle2 === "Playful" ? "drag drag-left":"drag drag-right"}`} />
       </div>
     </div>   
     {/* first filter end*/} 
     <div className='choose2 '>
       <div className='fl jst-SB'>
       <button id='nobtn2' onClick={()=>{setBrandStyle3('Geometrical')}}>Geometrical</button>
       <button id='nobtn2' onClick={()=>{setBrandStyle3('Organic') }}>Organic</button>
       </div>
       <div className='abc'>
       <Image src="btn.svg" alt='' height={25} width={25} className={` ${BrandStyle3 === "Geometrical" ? "drag drag-left":"drag drag-right"}`} />
       </div>
     </div> 
     {/* first filter end*/}
     <div className='choose2 '>
       <div className='fl jst-SB'>
       <button id='nobtn2' onClick={()=>{setBrandStyle4('Feminine')}}>Feminine</button>
       <button id='nobtn2' onClick={()=>{setBrandStyle4('Masculine') }}>Masculine</button>
       </div>
       <div className='abc'>
       <Image src="btn.svg" alt='' height={25} width={25} className={` ${BrandStyle4 === "Feminine" ? "drag drag-left":"drag drag-right"}`} />
       </div>
     </div> 
     {/* first filter end*/}
     <div className='choose2 '>
       <div className='fl jst-SB'>
       <button id='nobtn2' onClick={()=>{setBrandStyle5('Economical')}}>Economical</button>
       <button id='nobtn2' onClick={()=>{setBrandStyle5('Luxurios') }}>Luxurios</button>
       </div>
       <div className='abc'>
       <Image src="btn.svg" alt='' height={25} width={25} className={` ${BrandStyle5 === "Economical" ? "drag drag-left":"drag drag-right"}`} />
       </div>
     </div> 
     <div className='choose2 '>
       <div className='fl jst-SB'>
       <button id='nobtn2' onClick={()=>{setBrandStyle6('Mature')}}>Mature</button>
       <button id='nobtn2' onClick={()=>{setBrandStyle6('Youthful') }}>Youthful</button>
       </div>
       <div className='abc'>
       <Image src="btn.svg" alt='' height={25} width={25} className={` ${BrandStyle6 === "Mature" ? "drag drag-left":"drag drag-right"}`} />
       </div>
     </div> 
     <div className='choose2 '>
       <div className='fl jst-SB'>
       <button id='nobtn2' onClick={()=>{setBrandStyle7('Handcrafted')}}>Handcrafted</button>
       <button id='nobtn2' onClick={()=>{setBrandStyle7('Minimalist') }}>Minimalist</button>
       </div>
       <div className='abc'>
       <Image src="btn.svg" alt='' height={25} width={25} className={` ${BrandStyle7 === "Handcrafted" ? "drag drag-left":"drag drag-right"}`} />
       </div>
     </div>  


</div>

            <div className="mt-159 mb-350 fl fl-gap32 jstfe">
                <button id="btndiff">Skip</button>
                <button>Continue</button>
            </div>
            
        </div>
    )
}
export default Brand;