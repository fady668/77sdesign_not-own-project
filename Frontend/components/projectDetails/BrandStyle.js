import Image from 'next/image'
import React, { useEffect, useState } from 'react';


const BrandStyle = ({ApiData})=>{
  const [Slidervalue1, setSlidervalue1] = useState(0);
  const [Slidervalue2, setSlidervalue2] = useState(0);
  const [Slidervalue3, setSlidervalue3] = useState(0);
  const [Slidervalue4, setSlidervalue4] = useState(0);
  const [Slidervalue5, setSlidervalue5] = useState(0);
  const [Slidervalue6, setSlidervalue6] = useState(0);
  const [Slidervalue7, setSlidervalue7] = useState(0);

  useEffect(() => {
    console.log(ApiData)

    setSlidervalue1(ApiData.classic_to_modern)
    setSlidervalue2(ApiData.playful_to_serious)
    setSlidervalue3(ApiData.geometrical_to_organic)
    setSlidervalue4(ApiData.feminine_to_masculine)
    setSlidervalue5(ApiData.economical_to_luxurious)
    setSlidervalue6(ApiData.mature_to_youthful)
    setSlidervalue7(ApiData.handcrafted_to_minimalist)
}, [ApiData]);
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
       <input type="range" min="0" max="10" value={Slidervalue1} id="valueSlider" />
     </div>
{/* first filter end*/}
     <div className='choose2 '>
       <div className='fl jst-SB'>
       <span id='nobtn2'>Playful</span>
       <span id='nobtn2'>Serious</span>
       </div>
       <input type="range" min="0" max="10" value={Slidervalue2}   id="valueSlider" />
     </div>   
     {/* first filter end*/} 
     <div className='choose2 '>
       <div className='fl jst-SB'>
       <span id='nobtn2' >Geometrical</span>
       <span id='nobtn2' >Organic</span>
       </div>
       <input type="range" min="0" max="10" value={Slidervalue3}   id="valueSlider" />
     </div> 
     {/* first filter end*/}
     <div className='choose2 '>
       <div className='fl jst-SB'>
       <span id='nobtn2' >Feminine</span>
       <span id='nobtn2' >Masculine</span>
       </div>
       <input type="range" min="0" max="10" value={Slidervalue4}  id="valueSlider" />
     </div> 
     {/* first filter end*/}
     <div className='choose2 '>
       <div className='fl jst-SB'>
       <span id='nobtn2'>Economical</span>
       <span id='nobtn2'>Luxurios</span>
       </div>
       <input type="range" min="0" max="10" value={Slidervalue5}   id="valueSlider" />
     </div> 
     <div className='choose2 '>
       <div className='fl jst-SB'>
       <span id='nobtn2' >Mature</span>
       <span id='nobtn2' >Youthful</span>
       </div>
       <input type="range" min="0" max="10" value={Slidervalue6}   id="valueSlider" />
     </div> 
     <div className='choose2 '>
       <div className='fl jst-SB'>
       <span id='nobtn2' >Handcrafted</span>
       <span id='nobtn2' >Minimalist</span>
       </div>
       <input type="range" min="0" max="10" value={Slidervalue7}   id="valueSlider" />

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