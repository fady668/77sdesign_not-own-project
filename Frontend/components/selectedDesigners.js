import React from 'react'
import Image from 'next/image'
const SelectedDesigners=()=> {
  return (
    <div className="InvDes_header">
                
        <div className="max InvDes_body ">
            <div className="InvDes_img">
                <Image src="cat2logo2.svg" alt="" width={64} height={64}/>
                <button className="InvDes_btn">X</button>
            </div>
            <button>Confirm Designers<br/> and continue</button>
        </div>
    </div>
  )
}

export default SelectedDesigners