import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React, { useState,useEffect } from 'react';
import Portfolio from '@/components/portfolio';
import Reviews from '@/components/Reviews';
import Image from 'next/image';
import axiosInstance from "@/helpers/axios";
import { BASE_URL, API_VERSION } from "@/config";
import { useRouter } from 'next/router';

function ProfilePage() {
  const [selectedTab, setSelectedTab] = useState('portfolio');
  

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  const router = useRouter();
  const[userProfile,setUserProfile]=useState(null);
  useEffect(() => {
    if(router.isReady){
      const { user_id } = router.query;
    
    axiosInstance
    .get(`${BASE_URL}/${API_VERSION}/user/profile/client/${user_id}`, {
    })
    .then((res) => {
      const data = res.data;
      console.log('res:',res);
      console.log('data:',data);
      setUserProfile(data);
    
    })
    .catch((err) => {
      console.error(err);
    });

  }
},[router.isReady]);

  const [activeComponent, setActiveComponent] = useState("Portfolio");
  return (
    <div className="ProfilePage">
        <div className='mainscr'>
        <Navbar />
        </div>
        <div className=' prof fl-col fl-gap'>
        

        <div className='max'>
        <div className='pos-prof fl fl-gap31 '>
        
          <div>
            <img src={userProfile?userProfile.avatar:'/profileicon.png'}  className='prof-img' alt="" width={86} height={88}/>

          </div>
           
        
        <div className='prof-nav'>

        <div className='fl fl-gapp16 pp'> 
          <p>{userProfile?userProfile.firstname+" "+userProfile.lastname:''}</p>
          <span>online 15 minutes ago</span>
        </div>
       
        <button>Adv. Level</button>
        </div>
        </div>
        </div>
        <div className='mainscr'>
        <div className="fl fl-gap50 max ">
        <button
          className={` ${activeComponent === "Portfolio" ? "active nav-btn2" : "nav-btn2"}`}
          onClick={() => setActiveComponent("Portfolio")}
        >
          Portfolio
        </button>
        
        <button
          className={` ${activeComponent === "Reviews" ? "active nav-btn2" : "nav-btn2"}`}
          onClick={() => setActiveComponent("Reviews")}
        >
          Reviews
        </button>
        </div>
        </div>
        </div>

   
       <div className='max'>
       {activeComponent === "Portfolio" && <Portfolio userProfile={userProfile} />}
       {activeComponent === "Reviews" && <Reviews />}
       </div>
 
      <Footer/>
    </div>
  );
}

export default ProfilePage;




