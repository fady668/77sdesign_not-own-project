import React from 'react';
import Image from 'next/image'

const Designerswork = () => {
  return (
    <div className="fl designersworkcont">
                
                    <div className="fl designersworkicon">
                        <Image src="ppicon.svg" width={64} height={64} alt="" />
                    </div>
                    <div className="fl designersworkinfo">
                        
                        <h3>Milos Zdrale</h3>
                        
                        <div>
                            <span className="bord2 blackkkk">Top Level</span>
                        </div>
                        <div className="fl jst1">
                            <button className="nobg"><Image src="heart.svg" width={30} height={30} alt="" /> </button>
                            <button>Invite</button>
                        </div>
                        <div  className="fl fl-gap2">
                            <p><span>4.97</span> stars, </p>
                            <p> <span> 158</span> reviews</p>
                        </div>
                        <div>
                            <p>Logo desgin, Logo&</p>
                            <p>Brand identity pack,</p>
                            <p>Brand guide</p>
                        </div>
                    </div>
                    <div className="fl designerswork">
                        <Image src="lifes.svg" width={180} height={180} alt="" />
                        <Image src="lifes.svg" width={180} height={180} alt=""/>
                        <Image src="lifes.svg" width={180} height={180} alt="" />
                    </div>
    </div>
  )
}

export default Designerswork;
