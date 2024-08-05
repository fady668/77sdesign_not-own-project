import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Cookies from 'js-cookie';
import Image from 'next/image';
import { BASE_URL ,API_VERSION } from '@/config';




const Login = () => {

  // const [csrfToken, setScrf] = useState("");
  // const history = useHistory(); 

 
  useEffect(()=>{

    // // const csrfToken = Cookies.get('csrfToken');
    // console.log(csrfToken);



    fetch("http://ec2-54-146-11-112.compute-1.amazonaws.com/v1.0/user/csrf/",
    {credentials:"include",})
    .then((res)=>{
      console.log(res)
      console.log(console.log(Cookies.get('csrftoken')))
      })
    .catch((err)=>{
      console.log(err)
    })
  },[])
    
  // const csrfToken1 = Cookies.get('csrftoken');
  
  // function generateCsrfToken() {
  //   let token = '';
  //   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  //   for (let i = 0; i < 32; i++) {
  //     token += characters.charAt(Math.floor(Math.random() * characters.length));
  //   }
  //   return token;
  // }
  // function getExpirationDate(token) {
  //   if (!token || typeof token !== 'string') {
  //     return null;
  //   }
    
  //   const tokenParts = token.split('.');
    
  //   if (tokenParts.length !== 3) {
  //     return null;
  //   }
    
  //   const encodedPayload = tokenParts[1];
  //   const payload = JSON.parse(atob(encodedPayload));
    
  //   if (!payload || !payload.exp) {
  //     return null;
  //   }
    
  //   const expirationDate = new Date(payload.exp * 1000);
  //   return expirationDate;
  // }
  
  const handleSubmit= (e)=>{
      e.preventDefault();
      
    
      const email = document.getElementById('email1').value;
      const password = document.getElementById('password1').value;
      
      const formData = { email,password  };
      console.log(formData)
      console.log(console.log(Cookies.get('csrftoken')))
      
      fetch(`${BASE_URL}/${API_VERSION}/user/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': Cookies.get('csrftoken'),
        },
        credentials:"include",
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => 
        {
          console.log(data);
          // const csrfToken = generateCsrfToken();
          // document.cookie = `csrfToken=${csrfToken}; expires=${getExpirationDate()}; path=/`;
          // window.location.href = '/';
        })
      .catch(error => console.error(error));
      
    };


    


  return (
    <form onSubmit={handleSubmit} className="form-container jst-SB " id="myForm2">
            <div className=" gap64 sm-btn bottom-row3 row2-mb mt-159">

  <button><div className="fl-sm"><Image src="google.svg" alt=""  width={57} height={44}/><p className="socialSUP">Sign in with Google</p></div></button>
<button><div className="fl-sm"><Image src="facebook.svg" id="fb-btn" alt="" width={57} height={44}/> <p className="socialSUP">Sign in with Facebook</p></div> </button>
</div>
<div>
  <div>

  </div>


</div>
<div className="bottom-row3 fl-gap32">
<div className="fl nntr">
  <p id="Fs-16">or Login with your 77S design account</p>
</div>
<div  className="bottom-row3 ">
      <input type="text" placeholder="Email" id="email1"/>
      <input type="password" placeholder="Password" id="password1"/>
      </div>
      <div className="bottom-row4">
        <div>
        <input type="checkbox" id="remember" />
        <label htmlFor="remember" className="pdleft8">Remember Me</label>
        </div>
        <Link href="#">Forgot Password?</Link>
      </div>
      <button type="submit">Log in</button>
</div>


      {/* <div className="social-group ">
        <p>Or login with</p>
        <div>
        <FaFacebook style={styles.footerIcon} />
        <FaTwitter style={styles.footerIcon} />
        <FaInstagram style={styles.footerIcon} />
        <FaLinkedin style={styles.footerIcon} />
        </div>
      </div> */}

      
      
    </form>
  );
};


const SignUp = () => {


    
    
    const handleSignup= (e)=>{
      e.preventDefault();

    
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      
      const formData = { email,password  };
      
      fetch('http://ec2-54-146-11-112.compute-1.amazonaws.com/v1.0/user/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          
        },
        
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
    };
    




  return (
    <form className="form-container jst-SB" id="myForm" onSubmit={handleSignup}>
      
      <div className="bottom-row2 row2-mtb gap15"> 
        <div className="fl fl-gap99 ali">
        <input type="radio" id="remember" name="accounttype" className="radioinp"/>
        <label htmlFor="remember">Need design</label>
        </div>
        <div className="fl fl-gap99 ali">
        <input type="radio" id="remember2" name="accounttype" className="radioinp" />
        <label htmlFor="remember2">Designer</label>
        </div>
    
      </div>
      

 
      <div className=" fl-gap31 sm-btn bottom-row2 row2-mb">

        <button><div className="fl-sm"><Image src="google.svg" alt=""  width={57} height={44}/><p className="socialSUP">Sign Up with Google</p></div></button>
        <button><div className="fl-sm"><Image src="facebook.svg" id="fb-btn" alt="" width={57} height={44}/> <p className="socialSUP">Sign Up with Facebook</p></div> </button>
      </div>
      <div>
      <div className="fl nntr"><p>Or, Create an account with email.</p></div>
      <div className="fl fl-gap99">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
      </div>
      
      <input type="email" placeholder="Email" id="email" />
      <input type="password" placeholder="Password" id="password" />
     
      <div className="lldiv">
      <p id="ll" className="mb-11">Use 8 or more characters with a mix of letters, numbers and symbols</p>
      <p id="ll2" className="mb-61">By signing up, you agree to our Terms and Privacy</p>
      </div>
      </div>
      <div className="fl jst-SB">
      <button className="w-40 signupbtn">Sign Up</button>
      <button className="w-40 signupbtn bg-wh">Log in</button>
{/* <div className="bottom-row12">
      <p>
        Already have an account?{" "}
        <Link href="/login" >
          Login
        </Link>

        </p>
        </div> */}
        </div>
        {/* <div className="social-group mdl">
        <p>Or SignUp with</p>
        <div>
        <FaFacebook style={styles.footerIcon} />
        <FaTwitter style={styles.footerIcon} />
        <FaInstagram style={styles.footerIcon} />
        <FaLinkedin style={styles.footerIcon} />
        </div>
      </div> */}
    </form>
  );
};











const LoginSignUp = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [activeComponent, setActiveComponent] = useState("login");

  return (
    <div className="page1">
   
        <div className="page-container max2">
      
            <div className="img-part">
              
              <Link href="/" id="lg" > <Image src="logo1.svg" className="logimg" alt="" width={149} height={40}/></Link>
            <div className="img-part2">
                
            <Image src="loginbulb.svg" alt="" width={105.34} height={167.75} />
            <h1>Discover</h1>
            <h3>the world’s best</h3>
            <h3>community of </h3>
            <h1>Talented</h1>
            <h3>and</h3>
            <h3>business owners</h3>
              </div>
            
            </div>
            <div className="form-part">
            <div className="switch-container">
            <button onClick={() => {
          setShowLogin(false);
          setActiveComponent("signup")}
        } className='btn-switch' id={`${activeComponent==="signup"? "logactive2":""}`}>Sign Up</button>
        <button onClick={() => {
          setShowLogin(true);
          setActiveComponent("login")}} className='btn-switch' id={`${activeComponent==="login"? "logactive":""}`} >Log in</button>
        



     


      </div>
            {showLogin ? <Login /> : <SignUp />}
            </div>
    
     
    </div>
    
    </div>
    
  );
};

export default LoginSignUp;




const styles = {
    footerContainer: {
      borderTop:"2px solid white",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "4% 0",
      color: "#000"
    },
    footerLogo: {
      width: "100px"
    },
    footerLinks: {
      display: "flex",
      alignItems: "center"
    },
    footerLink: {
      marginRight: "20px",
      color: "#fff"
    },
    footerSeparator: {
      margin: "0 10px"
    },
    footerIcons: {
      display: "flex",
      alignItems: "center"
    },
    footerIcon: {
      marginRight: "10px",
      fontSize: "20px",
      color: "#000"
    }
  };