import React from 'react';
import Image from 'next/image';

const Size = ({ size, feature_text,url, handleChange , handleContinue }) => {
    const handleFeatureTextChange = (e) => {
        handleChange("feature_text", e.target.value);
    };

    const handleSizeChange = (e) => {
        handleChange("size", e.target.value);
    };

    return (
        <div className="oneto1 fl-col gap fl-gap32">
            <div className="fl fl-gap47">
                <label>Size of the product</label>
                <input 
                    placeholder="Optional (according to the product)" 
                    onChange={handleSizeChange} 
                    value={size} 
                />
            </div>
            <div className="fl fl-gap47">
                <label>Text you would like to feature on the product</label>
                <textarea 
                    placeholder="Optional (according to the product)" 
                    onChange={handleFeatureTextChange} 
                    value={feature_text} 
                />
            </div>
            <div className="fl fl-gap47">
                <label>Upload text file:</label>
                <div className="fl fl-gap10 w-80">
                    <div className="plusabout">
                        <Image src="+.svg" alt="" width={27} height={27} />
                        <p>Please attach</p>
                    </div>
                </div>
            </div>
            <div className="fl fl-gap47">
                <label>Link of the image or upload: </label>
                <div className="fl-col fl-gap32 w-80">
                    <input 
                        id="w-100" 
                        placeholder="If you have images link please upload"
                        value={url} 
                        onChange={(e) => handleChange("url", e.target.value)}  
                    />
                    <div className="fl fl-gap10">
                        <div className="plusabout">
                            <Image src="+.svg" alt="" width={27} height={27} />
                            <p>Please attach</p>
                        </div>
                        <div className="plusabout">
                            <Image src="+.svg" alt="" width={27} height={27} />
                        </div>
                        <div className="plusabout">
                            <Image src="+.svg" alt="" width={27} height={27} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-159 mb-350">
            <button onClick={handleContinue}>Continue</button>
            </div>
        </div>
    );
};

export default Size;
