import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";



const Deliverables = () =>{
return(
<div className="settings-container  ">
        

    <div className="home_section  ">
        <div className="max">
            <Navbar/>

  
            <div className="my-workkk mt-125 mb-60">
                <h1>Deliverables</h1>
            </div>
      
        </div>
    </div>
    <div className="max">
            <span  className="Delv-span mt-22" >You will receive all files within 7 days</span>
        <div className="Deliver-content">
            <div className="Deliver-content-x">
                <h2>Logo</h2>
                <div className="fl">
                    <div className="deliver-z1">
                        <p>ai file</p>
                    </div>
                    <button className="deliver-btn">Download</button>
                    <button className="deliver-btn"> <Image src="trash.svg" alt="" width={22} height={25}  /> </button>
                </div>
            </div>
            <div className="Deliver-content-x">
                <div className="fl">
                    <div className="deliver-z1">
                        <p>eps file (cmyk)</p>
                    </div>
                    <button className="deliver-btn">Download</button>
                    <button className="deliver-btn"> <Image src="trash.svg" alt="" width={22} height={25}  /> </button>
                </div>
            </div>
            <div className="Deliver-content-x">
                <div className="fl">
                    <div className="deliver-z1">
                        <p>eps file (rgb)</p>
                    </div>
                    <button className="deliver-btn">Download</button>
                    <button className="deliver-btn"> <Image src="trash.svg" alt="" width={22} height={25}  /> </button>
                </div>
            </div>
            <div className="Deliver-content-x">
                <div className="fl">
                    <div className="deliver-z1">
                        <p>pdf file</p>
                    </div>
                    <button className="deliver-btn">Download</button>
                    <button className="deliver-btn"> <Image src="trash.svg" alt="" width={22} height={25}  /> </button>
                </div>
            </div>
            <div className="Deliver-content-x">
                <div className="fl">
                    <div className="deliver-z1">
                        <p>jpg file</p>
                    </div>
                    <button className="deliver-btn">Download</button>
                    <button className="deliver-btn"> <Image src="trash.svg" alt="" width={22} height={25}  /> </button>
                </div>
            </div>
            <div className="Deliver-content-x">
                <div className="fl">
                    <div className="deliver-z1">
                        <p>png file</p>
                    </div>
                    <button className="deliver-btn">Download</button>
                    <button className="deliver-btn"> <Image src="trash.svg" alt="" width={22} height={25}  /> </button>
                </div>
            </div>
        </div>
        <div className="Deliver-content">
            <div className="Deliver-content-x">
                <h2>Business card</h2>
                <div className="fl">
                    <div className="deliver-z1">
                        <p></p>
                    </div>
                    <button className="deliver-btn">Download</button>
                    <button className="deliver-btn"> <Image src="trash.svg" alt="" width={22} height={25}  /> </button>
                </div>
            </div>
            

        </div>
        <div className="Deliver-content">
            <div className="Deliver-content-x">
                <h2>Letterhead</h2>
                <div className="fl">
                    <div className="deliver-z1">
                        <p></p>
                    </div>
                    <button className="deliver-btn">Download</button>
                    <button className="deliver-btn"> <Image src="trash.svg" alt="" width={22} height={25}  /> </button>
                </div>
            </div>
            

        </div>
        <div className="Deliver-content">
        <div className="Deliver-content-x">
                <h2>Envelopes</h2>
                <div className="fl">
                    <div className="deliver-z1">
                        <p>Size 1</p>
                    </div>
                    <button className="deliver-btn">Download</button>
                    <button className="deliver-btn"> <Image src="trash.svg" alt="" width={22} height={25}  /> </button>
                </div>
            </div>
            
            <div className="Deliver-content-x">
                <div className="fl">
                    <div className="deliver-z1">
                        <p>Size 2</p>
                    </div>
                    <button className="deliver-btn">Download</button>
                    <button className="deliver-btn"> <Image src="trash.svg" alt="" width={22} height={25}  /> </button>
                </div>
            </div>
        </div>
        <div className="Deliver-content">
        <div className="Deliver-content-x">
                <h2>Facebook cover</h2>
                <div className="fl">
                    <div className="deliver-z1">
                        <p></p>
                    </div>
                    <button className="deliver-btn">Download</button>
                    <button className="deliver-btn"> <Image src="trash.svg" alt="" width={22} height={25}  /> </button>
                </div>
            </div>

        </div>
        <div className="Deliver-content">
        <div className="Deliver-content-x">
                <h2>Brand guide</h2>
                <div className="fl">
                    <div className="deliver-z1">
                        <p></p>
                    </div>
                    <button className="deliver-btn">Download</button>
                    <button className="deliver-btn"> <Image src="trash.svg" alt="" width={22} height={25}  /> </button>
                </div>
            </div>

        </div>
        <div className="Deliver-content">
        <div className="Deliver-content-x ">
                <h2 id="inactive">Upload another file</h2>
                <div className="fl">
                    <div className="deliver-z1">
                        <p></p>
                    </div>
                    <button id="inactive" className="deliver-btn">Download</button>
                    <button  id="inactive" className="deliver-btn"> <Image src="trash.svg" alt="" width={22} height={25}  /> </button>
                </div>
            </div>

        </div>
        <div>
            <div className="fl jst-SB ">
                <span className="Delv-span" >Please download and check all the files</span>
                <button className="Delv-btn">Download all </button>
            </div>
        </div>
        <div>
            <div className="Delv-lastpart mt-192 mb-125 padd-Delv">
                <p>The designer relinquishes all intellectual property rights to the client
                    and is prohibited from using or reselling any part of these elements.</p>
            </div>
            <button className="Delv-lastpart-btn mb-125">Release the award</button>
        </div>
    </div>    
        <Footer/>
</div> 
)}
export default Deliverables;