import React, { useState } from "react";
import Image from 'next/image'
import Aboutbusiness from "@/components/1to1breif/Aboutbusiness";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Time from "@/components/1to1breif/Time";
import Size from "@/components/1to1breif/size";
import Brand from "@/components/1to1breif/Brand";
import Colors from "@/components/1to1breif/Colors";
import Checkout from "@/components/1to1breif/Checkout";
import { BASE_URL ,API_VERSION } from '@/config';
import Cookies from 'js-cookie';
import axiosInstance from "@/helpers/axios";

const Oneto1breif = ()=>{
    const [activeside, setActiveside] = useState("About");

    /////////////////////////////////////////
    const [name, setName] = useState("name"); 
    const [languages, setLanguages] = useState("languages"); 
    const [industry, setIndustry] = useState(1);  
    const [description, setDescription] = useState("description"); 
    const [url, setUrl] = useState("https://www.google.com/"); 
    const [reference, setReference] = useState("https://www.google.com/"); 
    const [logo, setLogo] = useState("logo"); 

    const [budget_from, setBudget_from] = useState('4075');  
    const [budget_to, setBudget_to] = useState('9946639.61'); 
    const [timeline, setTimeline] = useState("timeline");
    const [portfolio_allowed, setPortfolio_allowed] = useState(true); 

    const [size, setSize] = useState("size"); 
    const [feature_text , setFeature_text] = useState("feature_text"); 

    const [guarentee, setGuarentee] = useState(true); 
    const [deadline, setDeadline] = useState("2023-03-20"); 
    const [category, setCategory] = useState(1); 
    
    const [color_palette, setColor_palette] = useState(1); 

    const [classic_to_modern, setclassic_to_modern] = useState(5);
    const [playful_to_serious, setplayful_to_serious] = useState(5);
    const [geometrical_to_organic, setgeometrical_to_organic] = useState(5);
    const [feminine_to_masculine, setfeminine_to_masculine] = useState(5);
    const [economical_to_luxurious, seteconomical_to_luxurious] = useState(5);
    const [mature_to_youthful, setmature_to_youthful] = useState(5);
    const [handcrafted_to_minimalist, sethandcrafted_to_minimalist] = useState(5);

    const callback = {
      name: name,
      languages: languages,
      description: description,
      url: url,
      reference: reference,
      // logo: logo,
      budget_from: budget_from,
      budget_to: budget_to,
      timeline:timeline,
      portfolio_allowed: portfolio_allowed,
      size: size,
      feature_text: feature_text,
      classic_to_modern:parseInt(classic_to_modern),
      playful_to_serious: parseInt(playful_to_serious),
      geometrical_to_organic: parseInt(geometrical_to_organic),
      feminine_to_masculine: parseInt(feminine_to_masculine),
      economical_to_luxurious: parseInt(economical_to_luxurious),
      mature_to_youthful: parseInt(mature_to_youthful),
      handcrafted_to_minimalist: parseInt(handcrafted_to_minimalist),
      guarentee: guarentee,
      deadline: deadline,
      budget: "-1710",
      industry: industry,
      category: category,
      color_palette: color_palette,
    }
    function cosn() {
      console.log(name,languages,industry,description,url,reference,logo,portfolio_allowed);
      console.log("yes");
      console.log(callback);
    } 
 

    const handleDataCheckout= (e)=>{
      e.preventDefault();
      const csrfToken = Cookies.get('csrfToken');
      console.log(csrfToken);
      const formData = { ...callback  };
      console.log(formData);
      // fetch(`${BASE_URL}/${API_VERSION}/project/client/`, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'X-CSRFToken': csrfToken,
      //   },
      //   credentials:"include",
      //   body: JSON.stringify(formData)
      // })
      // .then(response => response.json())
      // .then(data => console.log(data))
      // .catch(error => console.error(error));
      axiosInstance
      .post(`${BASE_URL}/${API_VERSION}/project/client/`, formData)
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {console.error(error);alert(error)});


    };

   
    return(

<div>
    
         <div className="home_section p-15">
            <div className="max">
                <Navbar/>
                <div className="my-workkk mt-125">
                    <h2 id="title2">1 to 1</h2>
                    <h1 id="title">Brief details</h1>
                </div>
            </div>
      
 
        </div>
        <div className="mywork-conten max">
        <div className="h-60v fl jst-SB">

<div className="fl-all4 work-sidefilter2 fl-gap3 mb-190 ">
     
     <button id={`${
     activeside === "About" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('About')}>About business & brand</button>


      <button id={`${
     activeside === "Time" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('Time')}>Time & budget</button>

   
     <button id={`${
     activeside === "Size" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('Size')}>Size, Text & Images</button>

       <button id={`${
     activeside === "Brand" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('Brand')}>Brand’s style / Target audience</button>

        <button id={`${
     activeside === "Colors" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('Colors')}>Preferred colors</button>

        <button id={`${
     activeside === "Checkout" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('Checkout')}>Checkout</button>

    </div>


<div className="mywork-ex">
   {activeside === "About" && <Aboutbusiness setName={setName} setLanguages={setLanguages} setIndustry={setIndustry} setDescription={setDescription} setUrl={setUrl} setReference={setReference} setLogo={setLogo}  cosn={cosn}  />}
   {activeside === "Time" && <Time  setBudget_from={setBudget_from} setBudget_to={setBudget_to} setTimeline={setTimeline} setPortfolio_allowed={setPortfolio_allowed} cosn={cosn}/>}
   {activeside === "Size" && <Size setFeature_text={setFeature_text} setSize={setSize}/>}
    
   {activeside === "Brand" && <Brand classic_to_modern={classic_to_modern} setclassic_to_modern={setclassic_to_modern} playful_to_serious={playful_to_serious} setplayful_to_serious={setplayful_to_serious} 
   geometrical_to_organic={geometrical_to_organic} setgeometrical_to_organic={setgeometrical_to_organic} feminine_to_masculine={feminine_to_masculine} setfeminine_to_masculine={setfeminine_to_masculine}
   economical_to_luxurious={economical_to_luxurious} seteconomical_to_luxurious={seteconomical_to_luxurious} mature_to_youthful={mature_to_youthful} setmature_to_youthful={setmature_to_youthful}
   handcrafted_to_minimalist={handcrafted_to_minimalist} sethandcrafted_to_minimalist={sethandcrafted_to_minimalist}
   />}
   {activeside === "Colors" && <Colors/>}
   {activeside === "Checkout" && <Checkout handleDataCheckout={handleDataCheckout}/>}
 </div>
 
 </div>

 </div>

 <Footer/>
 </div>     
 
    )
}
export default Oneto1breif;    
