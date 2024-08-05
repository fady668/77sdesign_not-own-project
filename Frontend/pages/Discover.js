import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React, { useState } from 'react';
import Card from "@/components/profcard"
import Image from 'next/image'
import { FaThumbsUp } from "react-icons/fa";
import Footer2 from '@/components/footer2';
// import {AllCategoriesItems,industriesMenu } from "../components/consts"
import {Logoidentity,Webdesign,ClothingMerchandise,ArtIllustration,Businessadvertising, industriesMenu,AllCategoriesItems} from "../components/consts"

import Select from "react-select";

const Discover = ()=>{
    const [selectedOption, setSelectedOption] = useState("");
    const [isOpen, setOpen] = useState(false);
    const [ActiveCat, setActiveCat] = useState('');
    const [listItems, setListItems] = useState([
        { id: 1, name: "bayuRip" ,pp:'PI.svg' , img:"1549403924.svg"},
        { id: 2, name: "bayuRip1" ,pp:'PI.svg' , img:"1549403924.svg"},
        { id: 3, name: "bayuRip111" ,pp:'PI.svg' , img:"1549403924.svg"},
        { id: 4, name: "bayuRip111" ,pp:'PI.svg' , img:"1549403924.svg"},
        { id: 5, name: "bayuRip1111" ,pp:'PI.svg' , img:"1549403924.svg"},
        { id: 6, name: "bayuRip1111" ,pp:'PI.svg' , img:"1549403924.svg"},
        { id: 7, name: "bayuRip1111" ,pp:'PI.svg' , img:"1549403924.svg"},
      ]);


      const [AllIndustries, setAllIndustries] = useState("Industries");
      const [IndustriesisOpen, setIndustriesOpen] = useState(false);

      function IndustClick(item){
        setAllIndustries(item);
        setIndustriesOpen(!IndustriesisOpen)

      }
      const [AllCategories, setAllCategories] = useState("All Categories");
      const [AllCategoriesisOpen, setAllCategoriesOpen] = useState(false);
      function CategoryClick(item){
        setAllCategories(item);
        setAllCategoriesOpen(!AllCategoriesisOpen)

      }



      function handle(e){
        setActiveCat(e)
        console.log(ActiveCat)
      }


    const industriesMenustrAscending = [...industriesMenu].sort((a, b) =>
      a.label > b.label ? 1 : -1,
    );
    console.log(industriesMenustrAscending);
  return (
    <div className="ProfilePage">

        <Navbar/>



        <div className='mainscr  '>
        <div className='max mt-175'>



        {
        <div className='w-101 '>
            <div className='pd-1 disc-head'>
             <h1 id='FFBold'>Discover design ideas & inspiration</h1>
            </div>

            <div className='pd-1 disc-fil'>
                <div className='fl fl-gap32'>

                {/* <select className="filter filter-contin" id="filter" placeholder='All categories' onChange={(e)=>handle(e.currentTarget.value)}>
                    <option value="" >All Categories</option>
                    <option value="Logo-brand">Logo-brand identity</option>
                    <option value="Business-Advertising">Business-Advertising</option>
                    <option value="Web-App">Web-App design</option>
                    <option value="Clothing">Clothing-Merchandise</option>
                    <option value="Illustration">Illustration-Graphics</option>
                </select> */}
                <div style={{width:"320px"}}  className="filter2 prel" id="filter3" onClick={()=>{setAllCategoriesOpen(!AllCategoriesisOpen);setIndustriesOpen(false)}}>
                  <p>{AllCategories}</p>
                  <div  style={{width:"320px"}}  className='SelectMenu' id={AllCategoriesisOpen?"":"DN"} onClick={()=>setAllCategoriesOpen(true)}>
                    <ul>
                    <button className='CatH4' onClick={()=>CategoryClick("Logo & identity")}>Logo & identity</button>
                      {
                      Logoidentity.map((item) => (
                        <button key={item.id} onClick={()=>CategoryClick(item.text)}>{item.text}</button>
                      ))
                      }

                    <button className='CatH4' onClick={()=>CategoryClick("Web - UI/UX design")}>Web - UI/UX design</button>
                    {
                      Webdesign.map((item) => (
                        <button key={item.id} onClick={()=>CategoryClick(item.text)}>{item.text}</button>
                      ))
                    }

                    {/* <h4 className='CatH4'>Clothing & Merchandise</h4> */}
                    <button className='CatH4' onClick={()=>CategoryClick("Clothing & Merchandise")}>Clothing & Merchandise</button>
                    {
                      ClothingMerchandise.map((item) => (
                        <button key={item.id} onClick={()=>CategoryClick(item.text)}>{item.text}</button>
                      ))
                    }


                    <button className='CatH4' onClick={()=>CategoryClick("Art & Illustration")}>Art & Illustration</button>
                    {
                    ArtIllustration.map((item) => (
                      <button key={item.id} onClick={()=>CategoryClick(item.text)}>{item.text}</button>
                    ))
                    }


                    <button className='CatH4' onClick={()=>CategoryClick("Business & advertising")}>Business & advertising</button>
                    {
                      Businessadvertising.map((item) => (
                        <button key={item.id} onClick={()=>CategoryClick(item.text)}>{item.text}</button>
                      ))
                    }

                    </ul>
                  </div>
                </div>
                {/* <select className="filter filter-contin" id="filter2" maxMenuHeight={175}>
                <option value="volvo" >All industries</option>
                {
                  industriesMenu.map((item) => (
                    <option key={item.id}>{item.text}</option>
                  ))
                  }
                </select> */}

                {/* <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={industriesMenustrAscending}
                        isSearchable={true}
                        maxMenuHeight="150px"
                        placeholder="All Industries"
                        classNames={{
                          control: (state) =>
                            state.isFocused ? 'filter10' : 'filter10',


                        }}
                /> */}
                <div style={{width:"320px"}} className="filter2 prel" id="filter3" onClick={()=>{setIndustriesOpen(!IndustriesisOpen);setAllCategoriesOpen(false)}}>
                  <p>{AllIndustries}</p>
                  <div style={{width:"320px"}} className='SelectMenu' id={IndustriesisOpen?"":"DN"}>
                    <ul>
                    {
                      industriesMenustrAscending.map((item) => (
                        <button key={item.id} onClick={()=>IndustClick(item.label)}>{item.label}</button>
                      ))
                    }
                    </ul>
                  </div>
                </div>

                </div>
                <input   placeholder='Search' className='filterSearch'/>

            </div>

        <div className='fl-all2  '>
        <div>
            <div className='disc-card-cont'>


          {listItems.map((item) => (
            <div key={item.id} className='disc-card'><a href='#'>

               <Image src={item.img} id='ds-img' alt="" width={400} height={400}/>
                <div className='ds-text'>
                  <div className='fl-all5'>
                  <Image src={item.pp} alt="" width={40} height={40}/>
                   <span>{item.name}</span>
                  </div>

                   <div className='fl-all5'>
                   <FaThumbsUp />
                    <span>18</span>
                   </div>
                </div>


            </a></div>
          ))}

            </div>
        </div>



        </div>

    </div>
      }






</div>


      </div>

      <Footer2/>
      <Footer/>
    </div>
  );
}

export default Discover;




