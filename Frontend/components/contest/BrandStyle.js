import Image from 'next/image'
import React, { useState } from 'react';


const BrandStyle = ()=>{
  const [Slidervalue1, setSlidervalue1] = useState(0);
  const [Slidervalue2, setSlidervalue2] = useState(0);
  const [Slidervalue3, setSlidervalue3] = useState(0);
  const [Slidervalue4, setSlidervalue4] = useState(0);
  const [Slidervalue5, setSlidervalue5] = useState(0);
  const [Slidervalue6, setSlidervalue6] = useState(0);
  const [Slidervalue7, setSlidervalue7] = useState(0);
return(
    <div className='contest-cont-content  jst-SB' id="BrandStyle" >
        <div className='mb-30'>
            <h2>Brand style</h2>
        </div>
        <div className='fl-col jst xyz ali-cen wandm'>
        {/* first filter */}
     <div className='choose2 '>
       <div className='fl jst-SB'>
       <span id='nobtn2' >Classic</span>
       <span id='nobtn2' >Modern</span>
       </div>
       <input type="range" min="-100" max="100" defaultValue={Slidervalue1}  onChange={(e)=> setSlidervalue1(e.target.value)} id="valueSlider" />
     </div>
{/* first filter end*/}
     <div className='choose2 '>
       <div className='fl jst-SB'>
       <span id='nobtn2'>Playful</span>
       <span id='nobtn2'>Serious</span>
       </div>
       <input type="range" min="-100" max="100" defaultValue={Slidervalue2}  onChange={(e)=> setSlidervalue2(e.target.value)} id="valueSlider" />
     </div>   
     {/* first filter end*/} 
     <div className='choose2 '>
       <div className='fl jst-SB'>
       <span id='nobtn2' >Geometrical</span>
       <span id='nobtn2' >Organic</span>
       </div>
       <input type="range" min="-100" max="100" defaultValue={Slidervalue3}  onChange={(e)=> setSlidervalue3(e.target.value)} id="valueSlider" />
     </div> 
     {/* first filter end*/}
     <div className='choose2 '>
       <div className='fl jst-SB'>
       <span id='nobtn2' >Feminine</span>
       <span id='nobtn2' >Masculine</span>
       </div>
       <input type="range" min="-100" max="100" defaultValue={Slidervalue4}  onChange={(e)=> setSlidervalue4(e.target.value)} id="valueSlider" />
     </div> 
     {/* first filter end*/}
     <div className='choose2 '>
       <div className='fl jst-SB'>
       <span id='nobtn2'>Economical</span>
       <span id='nobtn2'>Luxurios</span>
       </div>
       <input type="range" min="-100" max="100" defaultValue={Slidervalue5}  onChange={(e)=> setSlidervalue5(e.target.value)} id="valueSlider" />
     </div> 
     <div className='choose2 '>
       <div className='fl jst-SB'>
       <span id='nobtn2' >Mature</span>
       <span id='nobtn2' >Youthful</span>
       </div>
       <input type="range" min="-100" max="100" defaultValue={Slidervalue6}  onChange={(e)=> setSlidervalue6(e.target.value)} id="valueSlider" />
     </div> 
     <div className='choose2 '>
       <div className='fl jst-SB'>
       <span id='nobtn2' >Handcrafted</span>
       <span id='nobtn2' >Minimalist</span>
       </div>
       <input type="range" min="-100" max="100" defaultValue={Slidervalue7}  onChange={(e)=> setSlidervalue7(e.target.value)} id="valueSlider" />

     </div>  


    </div>
    <div className='ght fl fl-gap47 mt-80 mb-45'>
        <div>
            <Image src="blues.svg" alt="" width={188} height={188} />
            <p>Blues</p>
        </div>
        <div>
            <Image src="dark.svg" alt="" width={188} height={188} />
            <p>Dark neutrals</p>
        </div>
        <div>
            <Image src="descolor.svg" alt="" width={188} height={188} />
            <p>Designers suggestions </p>
        </div>
    </div>
    <div className='ght'>
        <h3>Color requirements</h3>
        <textarea/>
    </div>
</div>

    )};
export default BrandStyle;