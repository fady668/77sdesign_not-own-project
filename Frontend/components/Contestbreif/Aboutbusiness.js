import Image from "next/image";
import { Logoidentity, Webdesign, ClothingMerchandise, ArtIllustration, Businessadvertising } from "../consts";
import {React, useState }  from 'react';

const Aboutbusiness = ({ handleContinue, handleChange, name, languages, industry, url,reference, description, AllCategories }) => {
    const [AllCategoriesisOpen, setAllCategoriesOpen] = useState(false);

    function CategoryClick(item) {
        handleChange("AllCategories", item);
        setAllCategoriesOpen(false);
    }

    return (
        <div className="oneto1 fl-col gap fl-gap32">
            <div className="fl fl-gap47">
                <label>Language:</label>
                <input value={languages} onChange={(e) => handleChange("languages", e.target.value)} />
            </div>
            <div className="fl fl-gap47">
                <label>Your industry:</label>
                <input value={industry} onChange={(e) => handleChange("industry", e.target.value)} />
            </div>
            <div className="fl fl-gap47">
                <label>Your website and/or social media:</label>
                <input value={url} onChange={(e) => handleChange("url", e.target.value)} />
            </div>
            <div className="fl fl-gap47">
                <label>Project name:</label>
                <input value={name} onChange={(e) => handleChange("name", e.target.value)} />
            </div>
            <div className="fl fl-gap47">
                <label>Type of design:</label>
                <div className="BreifSelect" onClick={() => setAllCategoriesOpen(!AllCategoriesisOpen)}>
                    <p id="catsele">{AllCategories}</p>
                    <div className='BreifSelectMenu' id={AllCategoriesisOpen ? "" : "DN"} onClick={() => setAllCategoriesOpen(true)}>
                        <ul>
                            <button className='CatH4' onClick={() => CategoryClick("Logo & identity")}>Logo & identity</button>
                            {Logoidentity.map((item) => (
                                <button key={item.id} onClick={() => CategoryClick(item.text)}>{item.text}</button>
                            ))}
                            <button className='CatH4' onClick={() => CategoryClick("Web - UI/UX design")}>Web - UI/UX design</button>
                            {Webdesign.map((item) => (
                                <button key={item.id} onClick={() => CategoryClick(item.text)}>{item.text}</button>
                            ))}
                            <button className='CatH4' onClick={() => CategoryClick("Clothing & Merchandise")}>Clothing & Merchandise</button>
                            {ClothingMerchandise.map((item) => (
                                <button key={item.id} onClick={() => CategoryClick(item.text)}>{item.text}</button>
                            ))}
                            <button className='CatH4' onClick={() => CategoryClick("Art & Illustration")}>Art & Illustration</button>
                            {ArtIllustration.map((item) => (
                                <button key={item.id} onClick={() => CategoryClick(item.text)}>{item.text}</button>
                            ))}
                            <button className='CatH4' onClick={() => CategoryClick("Business & advertising")}>Business & advertising</button>
                            {Businessadvertising.map((item) => (
                                <button key={item.id} onClick={() => CategoryClick(item.text)}>{item.text}</button>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="fl fl-gap47">
                <label>Describe your project:</label>
                <textarea value={description} onChange={(e) => handleChange("description", e.target.value)} />
            </div>
            <div className="fl fl-gap47">
                <label>Design will be used:</label>
                <input />
            </div>
            <div className="fl fl-gap47">
                <label>Other requirements:</label>
                <textarea />
            </div>
            <div className="fl fl-gap47">
                <label>Link of Reference and/or sketch: </label>
                <input value={reference} onChange={(e) => handleChange("reference", e.target.value)} />
            </div>
            <div className="fl fl-gap47 ">
                <label>Attach your logo</label>
                <div className="fl fl-gap10 w-80">
                    <div className="plusabout ">
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
            <div className="fl fl-gap47">
                <div className="fl fl-gap10 w-46">
                    <input type="checkbox" id="yes" />
                    <label>No logo</label>
                </div>
                <div className="w-74">
                    <p>Start a logo contest first</p>
                </div>
            </div>
            <div className="mt-159 mb-350">
                <button onClick={handleContinue}>Continue</button>
            </div>
        </div>
    )
}
export default Aboutbusiness;
