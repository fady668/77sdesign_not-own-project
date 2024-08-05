import React from "react";
import Link from 'next/link'
import Image from "next/image";
const Footer2 = () => {
  return (
    <section className="bg-b   mainscr">
    <div className='foot-links section-fot'>
    <div>
    
    <ul>
      <li><h2 id="footercatTitle">Design Services</h2></li>
      <li><Link href="#" icon="check" text="Link 2" >Design Contest</Link></li>
      <li><Link href="#" icon="check" text="Link 3" >Hiring 1 to 1</Link></li>
      <li><Link href="#" icon="check" text="Link 4" >Agencies 360</Link></li>
      <li><Link href="/categories" icon="check" text="Link 5" >77S design Studio</Link></li>
      <li><Link href="#" icon="check" text="Link 6" >Find a Designer</Link></li>
      <li><Link href="#" icon="check" text="Link 7" >Discover Designs</Link></li>
    </ul>
    </div>
    <div>
    
    <ul>
      <li><h2 id="footercatTitle">Category</h2></li>
      <li><Link href="#" icon="check" text="Link 2" >Logo / brand identity</Link></li>
      <li><Link href="#" icon="check" text="Link 3" >T-shirt</Link></li>
      <li><Link href="#" icon="check" text="Link 4" >Label - packaging</Link></li>
      <li><Link href="#" icon="check" text="Link 6" >Illustration - graphics</Link></li>
      <li><Link href="#" icon="check" text="Link 7" >Web - App design</Link></li>
      <li><Link href="#" icon="check" text="Link 7" >All categories</Link></li>
    </ul>
    </div>
    <div>
    
    <ul id="fl-gap30">
      {/* <li><Link href="#" icon="check" text="Link 1" ><Image src="footerSearch.svg" alt="" width={23} height={24} />&nbsp;&nbsp;&nbsp;Find Work</Link></li> */}
      <li><Link href="/pricing" icon="check" text="Link 2" ><Image src="footerPricing.svg" alt="" width={23} height={24} />&nbsp;&nbsp;&nbsp; Pricing</Link></li>
      <li><Link href="#" icon="check" text="Link 3" ><Image src="footerEnv.svg" alt="" width={23} height={24} />&nbsp;&nbsp;&nbsp; Join to 77S design</Link></li>
      <li><Link href="#" icon="check" text="Link 4" ><Image src="footerHelp.svg" alt="" width={23} height={24} />&nbsp;&nbsp;&nbsp; Help</Link></li>
      <li><Link href="#" icon="check" text="Link 5" ><Image src="footerAbout.svg" alt="" width={23} height={24} />&nbsp;&nbsp;&nbsp; About</Link></li>
      <li><Link href="#" icon="check" text="Link 6" ><Image src="footerContact.svg" alt="" width={23} height={24} />&nbsp;&nbsp;&nbsp; Contact</Link></li>
    </ul>
    </div>
    
    </div>
    </section>
    )
  }
export default Footer2;

