import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image'
import React, { useEffect, useState } from "react";
import PIcon from "@/public/PI.svg"
import { BASE_URL ,API_VERSION } from '@/config';
import Cookies from 'js-cookie';

const Navbar = () => {

  const [csrfToken, setCsrfToken] = useState('');

  useEffect(()=>{
    const csrfToken = Cookies.get('csrfToken');
    // setCsrfToken(csrfToken);
  },[])


  if (typeof window !== "undefined") {
    window.addEventListener('click', function(e){ 
      if(document.getElementById('icon-menu')){
        if (document.getElementById('icon-menu').contains(e.target)){
          handleClick();
        } else{
          setShowMenu(true)
        }
      }
      if(document.getElementById('actions')){
        if (document.getElementById('actions').contains(e.target)){
          handleWorkClick();
        } else{
          setShowWorkMenu(true)
        }
      }   
      
    }
    
    
    );
  }

  function removeCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }
 
    const [showMenu, setShowMenu] = useState(true);
    const [showWorkMenu, setShowWorkMenu] = useState(true);
    
    const handleClick = () => {
      setShowMenu(!showMenu);
  
    }; 
    const handleWorkClick = () => {
      setShowWorkMenu(!showWorkMenu);
  
    }; 
  

    const handleLogout=()=>{
        fetch(`${BASE_URL}/${API_VERSION}/user/logout/`, {
          credentials: 'include',
        })
        .then(response => {return response.json()})
        .then(data => {console.log(data);removeCookie("csrfToken");})
        .catch(error => console.error(error));
        
    }

    // .then(response => {
    //   if(response.ok){
    //     console.log(response);
    //     removeCookie("csrfToken")
    //     // window.location.href = '/login';

    // })

  
  return (
  <nav className="navbar">
    <div className="right2">
      <Link href="/">
      <Image src="logo1.svg" alt="Logo" className="logo" width={148} height={40} />
      </Link>
      <div className='fl fl-gap5'>
      <Link href="/categories2">
        Categories
      </Link>
      <Link href="/Discover">
        Discover
      </Link>
      <Link href="/Designers">
        Designers
      </Link>
      </div>
   
    </div>
    <div className="right2">
      <Link href="/login">
        Help
      </Link>
      <div className='action' >
    <button className='navworkbtn' id='actions'>Work</button>
    {!showWorkMenu && (
      <ul className="menu">
        <div className='p-t20 fl-col fl-gap23'>

        
        <li className="menu-item">
          <Link href="/BrowseContest" >Browse contests</Link>
        </li>
        <li className="menu-item">
          <Link href="/BrowseProjects" >Browse Projects</Link>
        </li>
        <li className="menu-item">
          <Link href="/My-work">My Work</Link>
        </li>

        </div>
      </ul>
    )}
    </div>
      

      {csrfToken?
      <div className='fl fl-gap5'>

      <Link href="/"><Image src="env.svg" className="navicon" alt='' width={25} height={25}/></Link>
      <Link href="/"><Image src="bell.svg" className="navicon" alt='' width={25} height={25}/></Link>
      
    <div className='action'>
    <i  className="icon" id='icon-menu'><Image src="PI.svg" className="navicon" alt='' width={29} height={30} /></i>
    {/* onClick={handleClick} */}
    {!showMenu && (
      <ul className="menu">
        <div className='p-t20 fl-col fl-gap23'>

        
        <li className="menu-item">
          <Link href="/AccountSettings-designer" >Account Settings</Link>
        </li>
        <li className="menu-item">
          <Link href="/profile" >Profile</Link>
        </li>
        <li className="menu-item">
          <Link href="/balance">Balance</Link>
        </li>
        <li className="menu-item">
          <button href="#" onClick={handleLogout}>Log Out</button>
        </li>
        </div>
      </ul>
    )}
    </div>

     </div>
    
    : 
      <div>
        <Link href='/login'>Login/SignUp</Link>
      </div>} 
      
      

  
    </div>
      
      
  </nav>
  );
};

export default Navbar;