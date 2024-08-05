import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React, { useState } from 'react';
import Card from "@/components/profcard"
import Image from 'next/image'
import { FaThumbsUp } from "react-icons/fa";
import Footer2 from '@/components/footer2';
import Link from 'next/link';

const ProjectsMessage = ()=>{
    const [isOpen, setOpen] = useState(false);


  return (
    <div className="ProfilePage">
        <div className='mainscr '>
        <Navbar/>
      
        </div>
       
        <div className='mainscr  '>
        <div className=' w-101 pv-55'>


   
        
        <div className='max'>
            <div>
                <div>
                <h1>Name of the brief Name of the </h1>
                <h1>brief Name of the</h1>
                <div className='fl jst-SB w-101 hi mtop30'>
                    <div>
                        <p className='cn3'>Client Name</p>
                        <div>
                            <div className='fl fl-gapp3 cn'>
                                <button id='cn1'>Accept</button>
                                <button id='cn2'>Reject</button>
                            </div>
                            <div className='fl fl-gap10 cnn'>
                                <button id='cnn2'><Image src="Polygon1.svg" alt='' width={12} height={9} /></button>
                                <button id='cnn1'>Invite Designer</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Proposals (7)</p>
                        <div>
                        
                            <div className='fl mtop30 brrrr fl-gapp3'>
                            
                                <div className=''>
                                    <div className='messpart1 p-s20 fl jsta fl-gap25'>
                                    <label>Price</label> <span>$ 190</span>
                                    </div>
                                    <div className='messpart2 fl p-s20 jst-SB'>
                                        <div className='fl-col jst'>
                                        <Image src="vector2.svg" width={22} height={25} alt=""  />
                                        <p className='messpart-p'>Urgent</p>
                                        </div>
                                        <div  className='fl-col jst'>
                                        <Image src="vector2.svg" width={22} height={25} alt=""  />
                                        <p className='messpart-p'>Guaranteed</p>
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
            <div className='disc-head2'>
             <h1 id='cnn4'>Proposal amount must be between $ 00 to $ 000</h1>
            </div>

            </div>
            

        <div className=' p-t20 '> 
        <div>
            <div className='w-101 fl jst-SB'>
            <div className='projchat1 fl-col jst-SA'>
            <div>
                <p>Client</p>
                <div className='fl jsta fl-gap2'>
                    <Image src="circle.svg" alt='' width={46} height={46} /> <span>Name</span>
                </div>
            </div> 
            <div>
                <p>Designer</p>
                <div className='fl jsta fl-gap2'>
                    <Image src="circle2.svg" alt='' width={46} height={46} /> <span>Designer Name</span>
                </div>
            </div> 
            </div>

            <div className='projchat2 fl-col fl-gap10 jst-SB '>
                <div className='fl-col fl-gap10 chtbx'>
                <div>
                    <p>Hello, </p>
                    <p>I would like to work together for this brief</p>
               
                </div>
                <div>
                    <p>type of design you need</p>
                    <p>————</p>
                </div>
                <div>
                    <p>Describe your project</p>
                    <p>————</p>
                </div>
                <div>
                    <p>Design will be used</p>
                    <p>————</p>
                </div>
                </div>
                
                <div className='fl jstfe chtbxbtn'>
                    <button>Attach</button>
                </div>
            </div>
            
            
          

        
            </div>
            <div className='fl jstfe pgbtn'>
                    <button>SEND</button>
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

export default ProjectsMessage;




