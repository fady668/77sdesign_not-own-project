import Image from "next/image";
import React from "react";

const Brand = ({ formData,handleContinue,  handleChange, classic_to_modern , playful_to_serious , geometrical_to_organic , feminine_to_masculine ,economical_to_luxurious ,mature_to_youthful , handcrafted_to_minimalist}) => {

  const handleSliderChange = (key, value) => {
    handleChange(key, parseInt(value, 10));
};
    return (
        <div className="oneto1 fl-col gap fl-gap32">
            <div className='fl-col jstfe xyz ali-cen '>
                <div className='choose2 '>
                    <div className='fl jst-SB'>
                        <span id='nobtn2'>Classic</span>
                        <span id='nobtn2'>Modern</span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="10"
                        value={classic_to_modern}
                        onChange={(e) => handleSliderChange("classic_to_modern", e.target.value)}
                        id="valueSlider"
                    />
                </div>
                <div className='choose2 '>
                    <div className='fl jst-SB'>
                        <span id='nobtn2'>Playful</span>
                        <span id='nobtn2'>Serious</span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="10"
                        value={playful_to_serious}
                        onChange={(e) => handleSliderChange("playful_to_serious", e.target.value)}
                        id="valueSlider"
                    />
                </div>
                <div className='choose2 '>
                    <div className='fl jst-SB'>
                        <span id='nobtn2'>Geometrical</span>
                        <span id='nobtn2'>Organic</span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="10"
                        value={geometrical_to_organic}
                        onChange={(e) => handleSliderChange("geometrical_to_organic", e.target.value)}
                        id="valueSlider"
                    />
                </div>
                <div className='choose2 '>
                    <div className='fl jst-SB'>
                        <span id='nobtn2'>Feminine</span>
                        <span id='nobtn2'>Masculine</span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="10"
                        value={feminine_to_masculine}
                        onChange={(e) => handleSliderChange("feminine_to_masculine", e.target.value)}
                        id="valueSlider"
                    />
                </div>
                <div className='choose2 '>
                    <div className='fl jst-SB'>
                        <span id='nobtn2'>Economical</span>
                        <span id='nobtn2'>Luxurious</span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="10"
                        value={economical_to_luxurious}
                        onChange={(e) => handleSliderChange("economical_to_luxurious", e.target.value)}
                        id="valueSlider"
                    />
                </div>
                <div className='choose2 '>
                    <div className='fl jst-SB'>
                        <span id='nobtn2'>Mature</span>
                        <span id='nobtn2'>Youthful</span>
                    </div>
                    <input
                        type="range"
                        min="-0"
                        max="10"
                        value={mature_to_youthful}
                        onChange={(e) => handleSliderChange("mature_to_youthful", e.target.value)}
                        id="valueSlider"
                    />
                </div>
                <div className='choose2 '>
                    <div className='fl jst-SB'>
                        <span id='nobtn2'>Handcrafted</span>
                        <span id='nobtn2'>Minimalist</span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="10"
                        value={handcrafted_to_minimalist}
                        onChange={(e) => handleSliderChange("handcrafted_to_minimalist", e.target.value)}
                        id="valueSlider"
                    />
                </div>
            </div>
            <div className="mt-159 mb-350 fl fl-gap32 jstfe">
                {/* <button id="btndiff">Skip</button> */}
                <button onClick={handleContinue}>Continue</button>
            </div>
        </div>
    );
};

export default Brand;
