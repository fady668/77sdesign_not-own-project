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
const ProjectsMessage3 = ()=>{
    const [isOpen, setOpen] = useState(false);
    const [activeComponent, setActiveComponent] = useState("Brief");

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
                        
                            <div className='fl mtop30 brrrr fl-gapp3'>
                            
                                <div className=''>
                                    <div className='messpart1 p-s20 fl jsta fl-gap25 ' id='w-300'>
                                    <label>Price</label> <span>$ 190</span>
                                    </div>
                                    <div className='messpart2 fl p-s20 jst-SB ' id='w-300'>
                                        <div className='fl-col jst'>
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
            <div className='disc-head3 fl jst-SB mb-79'>
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


            <div className=' p-t20  mb-159'> 
        <div>
            <div className='w-101 fl jst-SB'>
            <div className='projchat1 fl-col '>
            <div className='chatnames'>
                <p>Client</p>
                <div className='fl jsta fl-gap2'>
                    <Image src="circle.svg" alt='' width={46} height={46} /> <span>Name</span>
                </div>
            </div> 
            <div className='chatnames'>
                <p>Designer</p>
                <div className='fl jsta fl-gap2'>
                    <Image src="circle2.svg" alt='' width={46} height={46} /> <span>Designer Name</span>
                </div>
            </div> 
            </div>

            <div className='projchat2 fl-col fl-gap10 jst-SB '>
                <div className='fl-col fl-gap10 chtbx'>

                <div>
                    <p>Designers should be prepared to make updates and changes
                    to their designs as needed throughout the design process. </p>
                </div>

                </div>
                
           
            </div>
            
            
          

        
            </div>

        </div>


    
        </div>                


                  
    </div>
      
</div>





</div>

       
      </div>

      <Footer/>
    </div>
  );
}

export default ProjectsMessage3;




