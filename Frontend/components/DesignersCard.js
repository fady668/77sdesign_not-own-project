import React from 'react'
import Image from 'next/image'
import { Rating } from 'react-simple-star-rating'

function DesignersCard() {
  return (
    <div className='DesignersCard'>
        <div className='DesignersCard_header'>

        </div>
        <div className='DesignersCard_body'>
            <div className='fl gap5 ali-cen'>
            <Image src="cat2logo4.svg" alt="" width={32} height={32}/>
            <h3>Designer name</h3>
            </div>
            <div className='fl jst-SB ali-cen mt-6' style={{fontSize:"10px",color:"#5A5A64"}}>
            <p style={{background: "#F5F7FA",padding:"2px 5px"}}>Adv. Level</p>
            <p>Online 7 hours ago</p>
            </div>
            <Rating size={34} className='mt-12' />
            <div className='DesignersCard_bio'>

            </div>
            <div className='fl gap5 jst-SB ali-cen mt-8' >
                <button className='Portfolio'>Portfolio</button>
                <button className='favorite'>favorite <Image src="heart2.svg" width={16} height={14} alt="" /> </button>
            
            </div>
            <div className='mt-23'>
                <button className='inv_btn'>Invite</button>
            </div>
        </div>

    </div>
  )
}

export default DesignersCard