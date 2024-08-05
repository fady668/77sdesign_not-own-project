import Image from 'next/image'


const Checkout= ()=>{
    return(
        <div className="checkout-cont">
            <div className="fl jstfe">
                <select>
                    <option>  Egp</option>
                    <option>  $</option>
                </select>
            </div>
            <div className="checkout-firstpart ">
                <h4>Summary</h4>
                <div className='fl fl-gap23 mt-22'>
                    <label>Cash Back code</label>
                    <input/>
                </div>
            </div>
            <div className="checkout-secpart mb-200">
                <p>T-shirt design (Project)</p>
                <div className="fl jst-SB chk">
                    <span>Total </span>
                    <span> $00.00</span>
                </div>
            </div>

     

            <div>
                <div className="checkout-sixthpart mb-64">
                    <div className='fl jst-SB'>
                        <div className='fl-col fl-gap10 w-40'>
                            <label>First Name</label>
                            <input placeholder='' className='inptw' />
                        </div>
                        <div className='fl-col fl-gap10 w-40'>
                            <label>Last Name</label>
                            <input placeholder='' className='inptw' />
                        </div>
                    </div>
                    <div className='mobsec'>
                        <select>
                            <option>Country code</option>
                        </select>
                        <input className='mobinpt' id='bodernone'/>
                    </div>
                    <div className='fl jst-SB'>
                        <div className='fl-col fl-gap10 w-40'>
                            <label>Company Name (opt.)</label>
                            <input placeholder='' />
                        </div>
                        <div className='fl-col fl-gap10 w-40'>
                            <label>Tax ID</label>
                            <input placeholder='' />
                        </div>
                    </div>
                </div>
                <div className="checkout-seventhpart fl-col jst-SB ">
                    <div className='fl-col fl-gap10'>
                        <label>How did you hear about 77S design?</label>
                        <select>
                            <option></option>
                        </select>
                    </div>
                    <div>
                        <p>Refer new Clients and get cash back code $25 promotion. </p>
                    </div>
                        <div>
                            <span>Add Email addresses</span>
                            <div className='fl jst-SB'>
                            <input />
                            <button>Invite Client</button>
                            </div>
                            
                        </div>
                    
                </div>
                <div className="checkout-8thpart ">
                    <div className='e8thheader'>
                        <h1>Payment Method</h1>
                    </div>
                    <div className='fl-col fl-gap33'>
                        <h2>Billing info</h2>
                        <div className='fl-col gap5'>
                            <label>Bnilling Name</label>
                            <input />
                        </div>
                        <div className='fl-col gap5'>
                            <label>Address</label>
                            <input />
                        </div>
                        <div className='fl jst-SB'>
                            <div className='fl-col gap5 w-40'>
                                <label>City</label>
                                <input />
                            </div>
                            <div className='fl-col gap5 w-40'>
                                <label>State</label>
                                <input />
                            </div>
                        </div>
                        <div className='fl jst-SB'>
                            <div className='fl-col gap5 w-40'>
                                <label>Country </label>
                                <select>
                                    <option></option>
                                </select>
                            </div>
                            <div className='fl-col gap5 w-40'>
                                <label>Zip code</label>
                                <input />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="checkout-9thpart fl ">
                    <div className='fl-col chkout-9thsec'>
                        <p>Paypal</p>
                        <div className='mb-22'>
                        <Image src="paypal.svg" alt='' width={44.31} height={34.47} />
                        </div>
                        
                        <button>Continue</button>
                    </div>
                    <div className='fl-col chkout-9thsec'>
                        <p>Credit card</p>
                        <div className='fl gap5 mb-22'>
                        <Image src="visa.svg" alt='' width={44.31} height={34.47} />
                        <Image src="master.svg" alt='' width={44.31} height={34.47} />
                        </div>
                    
                        <button>Continue</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Checkout;