import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React, { useState } from 'react';
import Card from "@/components/profcard"
import Image from 'next/image'
import { FaThumbsUp } from "react-icons/fa";
import Footer2 from '@/components/footer2';
import Link from 'next/link';
import {cardData2} from "../components/consts"
// import Browse from './browse';
// import ProjectsMessage3comp from '@/components/ProjectsMessage3comp';
import Nameinfo from '@/components/contest/Nameinfo';
import OtherNote from '@/components/contest/OtherNote';
import Reference from '@/components/contest/Reference';
import BrandStyle from '@/components/contest/BrandStyle';



const Contest = ()=>{
    const [isOpen, setOpen] = useState(false);
    const [activeComponent, setActiveComponent] = useState("Brief");
    const [navactiveComponent, setnavActiveComponent] = useState("Nameinfo");
  return (
    <div className="ProfilePage">
        <div className='mainscr '>
        <Navbar/>
      
        </div>
       
        <div className='mainscr  '>
        <div className=' w-101 pt-96'>


   
        
        <div className='max '>
            <div>
                <div>
                <h1>Name of the brief Name of the </h1>
                <h1>brief Name of the</h1>
                <div className='fl jst-SB w-101 hi mtop30'>
                    <div>
                        <p className='cn3'>Client Name</p>
                        <div className='fl-col jst-FE h-90'>
                            <div className='fl fl-gapp3 cpm'>
                                <button >Go To Final Round</button>
                                <button id='cpm2'>...</button>
                                {/* <select>
                                    <option>...</option>
                                    <option>Invite Designer</option>
                                </select> */}
                            </div>

                        </div>
                    </div>
                    <div>
                        <p>Watch(7)</p>
                        <div>
                        
                            <div className='fl mtop30  fl-gapp3'>
                            
                                <div className=''>
                                    <div className='messpart1 p-s20 fl jsta fl-gap25 ' id='w-300'>
                                    <label>Price</label> <span>$ 190</span>
                                    </div>
                                    <div className='messpart2 fl p-s20 jst-SB ' id='w-300'>
                                        <div className='fl-col jst blind '>
                                        <Image src="blind.svg" width={22} height={25} alt=""  />
                                        <p className='messpart-p'>Blind</p>
                                        </div>
                                        <div  className='fl-col jst'>
                                        <Image src="dollar.svg" width={22} height={25} alt=""  />
                                        <p className='messpart-p'>Guaranteed</p>
                                        </div>
                                        <div className='fl-col jst'>
                                        <Image src="clock.svg" width={22} height={25} alt=""  />
                                        <p className='messpart-p'>Urgent</p>
                                        </div>
                                        <div className='fl-col jst'>
                                        <Image src="vector2.svg" width={22} height={25} alt=""  />
                                        <p className='messpart-p'>NDA</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='fl-col jst-SB messpart'>
                                    <button>Brief</button>
                                    <button>Messages</button>
                                    <button>Designs</button>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
                
                </div>
            <div className='disc-head3 fl jst-SB'>
                <div id='SD-header' className='fl'>
                    <h1 >Please submit logo design only (4 days)</h1>
                </div> 
                <div id='SD-header' className='fl'>
                    <h1 >Selection ofqualified designers (4 days)</h1>
                </div> 
                <div id='SD-header' className='fl'>
                    <h1 >Finalists (3 days)</h1>
                </div> 
                <div id='SD-header' className='fl'>
                    <h1 >Winner selection (7 days)</h1>
                </div> 
            </div>
            <div className='disc-head4 fl jst-SB contestnav'>
            <Link href="#Nameinfo"
            className={` ${navactiveComponent === "Nameinfo" ? "active" : "bn"}`}
            onClick={() => setnavActiveComponent("Nameinfo")}
            >Name & Info </Link>                      
            <Link href="#BrandStyle"
            className={` ${navactiveComponent === "BrandStyle" ? "active" : "bn"}`}
            onClick={() => setnavActiveComponent("BrandStyle")}
            >Brand Style </Link> 
            <Link href="#Reference"
                className={` ${navactiveComponent === "Reference" ? "active" : "bn"}`}
                onClick={() => setnavActiveComponent("Reference")}
                >Reference & Inspiration
            </Link> 
            <Link href="#OtherNote"
                className={` ${navactiveComponent === "OtherNote" ? "active" : "bn"}`}
                onClick={() => setnavActiveComponent("OtherNote")}
                >Other Note
            </Link> 


            </div>

            <div className='contest-cont'> 

                <Nameinfo/>             
                <BrandStyle/>
                <Reference/>
                <OtherNote/> 
            </div>


                  
    </div>
      
</div>





</div>

       
      </div>

      <Footer/>
    </div>
  );
}

export default Contest;




