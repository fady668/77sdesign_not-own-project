import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import React, { useEffect, useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import Footer2 from "@/components/footer2";
import { BASE_URL ,API_VERSION } from '@/config';
import {listItems,listItems2,listItems3,listItems4,listItems5} from "../components/consts"
import CatmenuSelector from "@/components/CatmenuSelector";

const Categories2 = ()=>{

    const [chatboxOpen, SetchatboxOpen] = useState(false);

    useEffect(()=>{
        fetch(`${BASE_URL}/${API_VERSION}/core/categories/`, {
          
       
        })
        .then(response => {
        //   if(response.ok){
        //     console.log(response.json());
        //   } else {
        //     throw new Error('Something went wrong');
        //   }
        return response.json()
        })
        .then(data => console.log(data))

        .catch(error => console.error(error));
        
    },[])

    const [GeneralCat, setGeneralCat] = useState('');
    const [FirstCat, setFirstCat] = useState('');
    const [FirstCatIsOpen, setFirstCatIsOpen] = useState(false); 
    const [SecondCat, setSecondCat] = useState('');
    const [SecondCatIsOpen, setSecondCatIsOpen] = useState(false); 
    const [ThirdCat, setThirdCat] = useState('');
    const [ThirdCatIsOpen, setThirdCatIsOpen] = useState(false);
    const [ForthCat, setForthCat] = useState('');
    const [ForthCatIsOpen, setForthCatIsOpen] = useState(false);
    const [FifthCat, setFifthCat] = useState('');
    const [FifthCatIsOpen, setFifthCatIsOpen] = useState(false);
    function handleFirstCat(e){
        setFirstCat(e)
        setGeneralCat(e)
        setSecondCat('')
        setThirdCat('')
        setForthCat('')
        setFifthCat('')
        setFirstCatIsOpen(false)
    }
    function handleSecondCat(e){
        setSecondCat(e)
        setGeneralCat(e)
        setFirstCat('')
        setThirdCat('')
        setForthCat('')
        setFifthCat('')
        setSecondCatIsOpen(false)
    }

    function handleThirdCat(e){
        
        setThirdCat(e)
        setGeneralCat(e)
        setFirstCat('')
        setSecondCat('')
        setForthCat('')
        setFifthCat('')
        setThirdCatIsOpen(false) 
    }

    function handleForthCat(e){
        setForthCat(e)
        setGeneralCat(e)
        setFirstCat('')
        setSecondCat('')
        setThirdCat('')
        setFifthCat('')
        setForthCatIsOpen(false) 
    }

    function handleFifthCat(e){
        setFifthCat(e)
        setGeneralCat(e)
        setFirstCat('')
        setSecondCat('')
        setThirdCat('')
        setForthCat('')
        setFifthCatIsOpen(false)
    }
    function handleCatClick(){
        setFirstCatIsOpen(false)
        setSecondCatIsOpen(false)
        setThirdCatIsOpen(false) 
        setForthCatIsOpen(false) 
        setFifthCatIsOpen(false)
    }
    return(
        <div>
               <div className="home_section  " style={{height:"480px"}}>
        <div className=" max">
               <Navbar/>
        <div className="pb-64 mt-140  ">
        <div>
        <div className="mb-20">
            <h1 className='DiffTitle-'  id="title">All Categories</h1>
        </div>
        <div className="fl jst-SB" style={{marginTop:"12px"}}>
            <Image src='catlogo1.svg' alt="" width={137.03} height={137.03}/>
            <Image src='catlogo2.svg' alt="" width={137.03} height={137.03}/>
            <Image src='catlogo3.svg' alt="" width={137.03} height={137.03}/>
            <Image src='catlogo4.svg' alt="" width={137.03} height={137.03}/>
            <Image src='catlogo5.svg' alt="" width={137.03} height={137.03}/>
            <Image src='catlogo5.svg' alt="" width={137.03} height={137.03}/>
            </div>
        </div>

        
        </div>
        </div>
        </div>
            <div className=" cat2-bg">
                <div className="fl max">
                    
                
            <div className="fl-all4 w-30 fl-gap32 pos">
            <div class="dropdown" >
                <div className="Cat2" onClick={()=>{handleCatClick();setFirstCatIsOpen(!FirstCatIsOpen)}}>
                <Image src="cat2logo1.svg" alt="" width={160} height={160}/>
                </div>
                <div class="dropdown-content2" id={FirstCatIsOpen?"":"DN"}>
                    <ul>
                        {listItems.map((item) => (
                            <li key={item.id} className="cat-menu-links"><button onClick={()=>handleFirstCat(item.text)}>{item.text}</button></li>
                            ))}
                    </ul>
                </div>
                <div  className={FirstCatIsOpen?"CategResult CategResultRedBG ":"CategResult CategResultRedBG DN"} id={FirstCat!=""&&"DF"} onClick={()=>{handleCatClick();setFirstCatIsOpen(!FirstCatIsOpen)}}>
                            <p>{FirstCat===""?"Select from category":FirstCat}</p>
                </div>
            </div>
            <div class="dropdown">
            <div className="Cat2" onClick={()=>{handleCatClick();setSecondCatIsOpen(!SecondCatIsOpen)}}>
                <Image src="cat2logo2.svg" alt="" width={160} height={160}/> 
                </div>
                <div class="dropdown-content2"  id={SecondCatIsOpen?"":"DN"}>
                    <ul>
                        {listItems2.map((item) => (
                            <li key={item.id} className="cat-menu-links"><button onClick={()=>handleSecondCat(item.text)}>{item.text}</button></li>
                            ))}
                </ul>
                </div>
                <div  className={SecondCatIsOpen?"CategResult CategResultBlueBG ":"CategResult CategResultBlueBG DN"} id={SecondCat!=""&&"DF"} onClick={()=>{handleCatClick();setSecondCatIsOpen(!SecondCatIsOpen)}}> 
                            <p>{SecondCat===""?"Select from category":SecondCat}</p>
                </div>
            </div>
            <div class="dropdown">
                <div className="Cat2" onClick={()=>{handleCatClick();setThirdCatIsOpen(!ThirdCatIsOpen)}}>
                    <Image src="cat2logo3.svg" alt="" width={160} height={160}/>  
                </div>
                <div class="dropdown-content2" id={ThirdCatIsOpen?"":"DN"}>
                    <ul>
                        {listItems3.map((item) => (
                            <li key={item.id} className="cat-menu-links"><button onClick={()=>handleThirdCat(item.text)}>{item.text}</button></li>
                            ))}
                </ul>
                </div>
                <div  className={ThirdCatIsOpen?"CategResult CategResultCyanBG ":"CategResult CategResultCyanBG DN"} id={ThirdCat!=""&&"DF"} onClick={()=>{handleCatClick();setThirdCatIsOpen(!ThirdCatIsOpen)}}>
                            <p>{ThirdCat===""?"Select from category":ThirdCat}</p>
                </div>
            </div>
            <div class="dropdown">
                <div className="Cat2" onClick={()=>{handleCatClick();setForthCatIsOpen(!ForthCatIsOpen)}}>
                <Image src="cat2logo4.svg" alt="" width={160} height={160}/>  
                </div>
                <div class="dropdown-content2" id={ForthCatIsOpen?"":"DN"}>
                    <ul>
                        {listItems4.map((item) => (
                            <li key={item.id} className="cat-menu-links"><button onClick={()=>handleForthCat(item.text)}>{item.text}</button></li>
                        ))}
                </ul>
                </div>
                <div  className={ForthCatIsOpen?"CategResult CategResultDarkBG ":"CategResult CategResultDarkBG DN"} id={ForthCat!=""&&"DF"} onClick={()=>{handleCatClick();setForthCatIsOpen(!ForthCatIsOpen)}}>
                            <p>{ForthCat===""?"Select from category":ForthCat}</p>

                </div>
            </div>
            <div class="dropdown">
                <div className="Cat2" onClick={()=>{handleCatClick();setFifthCatIsOpen(!FifthCatIsOpen)}}>
                <Image src="cat2logo5.svg" alt="" width={160} height={160}/>
                </div>
                <div class="dropdown-content2" id={FifthCatIsOpen?"":"DN"}>
                    <ul>
                        {listItems5.map((item) => (
                            <li key={item.id} className="cat-menu-links"><button onClick={()=>handleFifthCat(item.text)}>{item.text}</button></li>
                            ))}
                </ul>
                </div>
                <div  className={FifthCatIsOpen?"CategResult CategResultblackBG ":"CategResult CategResultblackBG DN"} id={FifthCat!=""&&"DF"} onClick={()=>{handleCatClick();setFifthCatIsOpen(!FifthCatIsOpen)}}>
                            <p>{FifthCat===""?"Select from category":FifthCat}</p>
                </div>
            </div>

            <div className="cat2-chatbox">
            <button id="catbtn" onClick={()=>SetchatboxOpen(!chatboxOpen)}>Others</button>
            <Link href="#" className={chatboxOpen?"":"DN"}>           
                <Image src="chatbox.svg" alt="" width={74.15} height={74.15} />
            </Link>

            </div>
         
            </div>
            <div className="fl-all4 w-70 prel">
                <Image src="cat2img.svg" alt="" width={700} height={633.8} className="cat2img"/>
            </div>
            </div>
            <div className="cat2-btns max">
                <Link href={FirstCat?"Logobreif":"Contestbreif"} >Start contest</Link>
                <Link href={FirstCat?"Logobreif":"1to1breif"} id="cyan">Hiring (1 to1)</Link>
            </div>
            </div>
            <Footer2/>
            <Footer/>
        </div>
    )
}
export default Categories2;