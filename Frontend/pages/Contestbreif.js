import React, { useState } from "react";
import Aboutbusiness from "@/components/Contestbreif/Aboutbusiness";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Time from "@/components/Contestbreif/TypeofDesign";
import Size from "@/components/Contestbreif/Size";
import Brand from "@/components/Contestbreif/Brand";
import Colors from "@/components/Contestbreif/Colors";
import Checkout from "@/components/Contestbreif/Checkout";
import { BASE_URL, API_VERSION } from "@/config";
import axios from "axios";

const Contestbreif = () => {
    const [activeside, setActiveside] = useState("About");
    const [formData, setFormData] = useState({
        name: "",
        languages: "",
        industry: 1,  
        description: "",
        url: "",
        reference: "",
      //other_requiremnets: "",
        logo: "logo",
        budget_from: '',
        budget_to: '',
        timeline: "",
        portfolio_allowed: false,
        size: "",
        feature_text: "",
        guarentee: false,
        deadline: "",
        category: 1,  
        color_palette: 1,  
        classic_to_modern: 0,
        playful_to_serious: 0,
        geometrical_to_organic: 0,
        feminine_to_masculine: 0,
        economical_to_luxurious: 0,
        mature_to_youthful: 0,
        handcrafted_to_minimalist: 0,
        Colors: [],
        currency: "USD", 
        selectedPackage: 1, 
        customPackage: "",  
        promoteProject: false,
        blindContest: false,
        privateProject: false,
        urgentContest: false,
        guaranteed: false, // the upcoming fields are intially added till update the form&req
        package: 1,
        round_one_finalists: [
            4,
            5,
            6
          ],
        round_one_start_date: "2024-05-26T17:22:36Z",
        round_one_end_date: "2024-05-26T17:22:39Z",
        start_date: "2024-05-26T00:00:00Z",
        end_date: "2024-06-26T00:00:00Z",
        round_two_start_date: "2024-05-26T22:10:33.093Z",
        round_two_end_date: "2024-05-26T22:10:33.093Z",
        round_two_status: "PENDING",
        contest_extension: "DAY",
        guarantee: true,
        promote_to_top: true,
        NDA: true,
        blind: true,
        urgent: true,
        is_listed: true,
        released: true,
    });

    const handleChange = (key, value) => {
        setFormData(prev => ({ ...prev, [key]: value }));
    };

    const handleCheckout = async (e) => {
        e.preventDefault();
        console.log(formData);
        
        const url = `${BASE_URL}/${API_VERSION}/contest/client/`;
        try {
            const response = await axios.post(url, formData);
            console.log('Form submitted successfully:', response.data);
        } catch (error) {
            console.error('Form submission error:', error);
        }
    };


    const handleContinue = () => {
        const tabs = ["About", "Size", "Brand", "Colors", "Time", "Checkout"];
        const currentIndex = tabs.indexOf(activeside);
        if (currentIndex < tabs.length - 1) {
            setActiveside(tabs[currentIndex + 1]);
        }
    };

    return (
        <div>
            <div className="home_section p-15">
                <div className="max">
                    <Navbar />
                    <div className="my-workkk mt-125">
                        <h2 id="title2">Contest</h2>
                        <h1 id="title">Brief details</h1>
                    </div>
                </div>
            </div>
            <div className="mywork-conten max">
                <div className="h-60v fl jst-SB">
                    <div className="fl-all4 work-sidefilter2 fl-gap3 mb-190 ">
                        <button id={`${activeside === "About" ? "sideActive" : ""}`} onClick={() => setActiveside('About')}>About business & brand</button>
                        <button id={`${activeside === "Size" ? "sideActive" : ""}`} onClick={() => setActiveside('Size')}>Size, Text & Images</button>
                        <button id={`${activeside === "Brand" ? "sideActive" : ""}`} onClick={() => setActiveside('Brand')}>Brand’s style / Target audience</button>
                        <button id={`${activeside === "Colors" ? "sideActive" : ""}`} onClick={() => setActiveside('Colors')}>Preferred colors</button>
                        <button id={`${activeside === "Time" ? "sideActive" : ""}`} onClick={() => setActiveside('Time')}>The type of design pack you are interested in</button>
                        <button id={`${activeside === "Checkout" ? "sideActive" : ""}`} onClick={() => setActiveside('Checkout')}>Checkout</button>
                    </div>
                    <div className="mywork-ex">
                        {activeside === "About" && <Aboutbusiness {...formData} handleChange={handleChange} handleContinue={handleContinue} />}
                        {activeside === "Size" && <Size {...formData} handleChange={handleChange} handleContinue={handleContinue} />}                     
                        {activeside === "Brand" && <Brand {...formData} handleChange={handleChange} handleContinue={handleContinue} />}
                        {activeside === "Colors" && <Colors {...formData} handleChange={handleChange} handleContinue={handleContinue} />}
                        {activeside === "Time" && <Time {...formData} handleChange={handleChange} handleContinue={handleContinue} />}
                        {activeside === "Checkout" && <Checkout {...formData} handleDataCheckout={handleCheckout} />}
                    </div>
                </div>
                <button onClick={handleCheckout}>Submit form</button>
            </div>
            <Footer />
        </div>
    )
}
export default Contestbreif;
