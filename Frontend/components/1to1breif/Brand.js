import Image from "next/image";
import { useState } from "react";
const Brand= ({classic_to_modern,setclassic_to_modern,playful_to_serious,setplayful_to_serious,geometrical_to_organic,setgeometrical_to_organic,feminine_to_masculine,setfeminine_to_masculine,
  economical_to_luxurious,seteconomical_to_luxurious,mature_to_youthful,setmature_to_youthful,handcrafted_to_minimalist,sethandcrafted_to_minimalist})=>{




    return(
        <div className="oneto1 fl-col gap fl-gap32">


    <div className='fl-col jstfe xyz ali-cen '>
        {/* first filter */}
     <div className='choose2 '>
       <div className='fl jst-SB'>
       <span id='nobtn2' >Classic</span>
       <span id='nobtn2' >Modern</span> 
       </div>
       <input type="range" min="0" max="10" value={classic_to_modern}  onChange={(e)=> setclassic_to_modern(e.target.value)} id="valueSlider" />
     </div>
{/* first filter end*/}
     <div className='choose2 '>
       <div className='fl jst-SB'>
       <span id='nobtn2'>Playful</span>
       <span id='nobtn2'>Serious</span>
       </div>
       <input type="range" min="0" max="10" defaultValue={playful_to_serious}  onChange={(e)=> setplayful_to_serious(e.target.value)} id="valueSlider" />
     </div>   
     {/* first filter end*/} 
     <div className='choose2 '>
       <div className='fl jst-SB'>
       <span id='nobtn2' >Geometrical</span>
       <span id='nobtn2' >Organic</span>
       </div>
       <input type="range" min="0" max="10" defaultValue={geometrical_to_organic}  onChange={(e)=> setgeometrical_to_organic(e.target.value)} id="valueSlider" />
     </div> 
     {/* first filter end*/}
     <div className='choose2 '>
       <div className='fl jst-SB'>
       <span id='nobtn2' >Feminine</span>
       <span id='nobtn2' >Masculine</span>
       </div>
       <input type="range" min="0" max="10" defaultValue={feminine_to_masculine}  onChange={(e)=> setfeminine_to_masculine(e.target.value)} id="valueSlider" />
     </div> 
     {/* first filter end*/}
     <div className='choose2 '>
       <div className='fl jst-SB'>
       <span id='nobtn2'>Economical</span>
       <span id='nobtn2'>Luxurios</span>
       </div> 

       <input type="range" min="0" max="10" defaultValue={economical_to_luxurious}  onChange={(e)=> seteconomical_to_luxurious(e.target.value)} id="valueSlider" />
     </div> 
     <div className='choose2 '>
       <div className='fl jst-SB'>
       <span id='nobtn2' >Mature</span>
       <span id='nobtn2' >Youthful</span>
       </div>
       <input type="range" min="0" max="10" defaultValue={mature_to_youthful}  onChange={(e)=> setmature_to_youthful(e.target.value)} id="valueSlider" />
     </div> 
     <div className='choose2 '>
       <div className='fl jst-SB'>
       <span id='nobtn2' >Handcrafted</span>
       <span id='nobtn2' >Minimalist</span>
       </div>
       <input type="range" min="0" max="10" defaultValue={handcrafted_to_minimalist}  onChange={(e)=> sethandcrafted_to_minimalist(e.target.value)} id="valueSlider" />

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