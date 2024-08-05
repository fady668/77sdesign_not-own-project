import React from "react";
import Image from 'next/image'
import Link from "next/link"; 
const Footer = () => {
  return (
    <footer className="mainscr bg-db" >
    <div style={styles.footerContainer} >
      <div style={styles.footerLinks}>
      <Image src="logo3.svg"  alt="" width={122.51} height={32.83} id="footerlogo" /> 
      <span style={styles.footerSeparator}></span>
        <a href="#" style={styles.footerLink} className="slash">
          Terms
        </a>
        <span style={styles.footerSeparator}></span>
        <a href="#" style={styles.footerLink} className="slash">
          Privacy
        </a>
      </div>
      <div style={styles.footerIcons}>
        <Link href="#"><Image src="Be.svg" alt="" width={21.55} height={13.45} /></Link>
        <Link href="#"><Image src="FB.svg" alt="" width={12.51} height={23.5} /></Link>
        <Link href="#"><Image src="Instgram.svg" alt="" width={19.19} height={19.19} /></Link>
        <Link href="#"><Image src="twitterFooter.svg" alt="" width={20.35} height={16.76} /></Link>
        
        
      </div>
   
    </div>
    </footer>
  );
};

const styles = {
  footerContainer: {
    
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "130px",
    color: "#fff",
    maxWidth:"1024px",
    margin:"auto",
  },
 
  footerLinks: {
    display: "flex",
    alignItems: "center"
  },
  footerLink: {
    // marginRight: "20px",
    color: "#fff"
  },
  footerSeparator: {
    height:"20px",
    margin: "0 10px"
  },
  footerIcons: {
    display: "flex",
    alignItems: "center",
    gap:"17.3px",
    color:"#fff",
  },
  footerIcon: {
    marginRight: "10px",
    fontSize: "20px",
    color: "#fff"
  }
};

export default Footer;
