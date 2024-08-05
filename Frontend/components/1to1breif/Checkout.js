import Image from 'next/image'
import ReactFlagsSelect from "react-flags-select";
import React, { useState } from "react";
import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'

const Checkout= ({handleDataCheckout})=>{
    const [selected, setSelected] = useState("");
    const [value, setValue] = useState()
    return(
        <div className="checkout-cont">
            <div className="fl jstfe">
                <select>
                    <option>  Egp</option>
                    <option>  $</option>
                </select>
            </div>
            <div className="checkout-firstpart">
                <h4>Review your brief</h4>
                <p>Name your project</p>
                <p>————</p>
                <p>type of design you need</p>
                <p>————</p>
                <p>Describe your project</p>
                <p>————</p>
                <p>Design will be used</p>
                <p>————</p>
                <p>Your time & budget</p>
                <p>————</p>
                <p>Size</p>
                <p>—cm x —cm</p>
            </div>
            <div className="checkout-secpart">
                <p>T-shirt design (Project)</p>
                <div className="fl jst-SB chk">
                    <span>Total </span>
                    <span> $00.00</span>
                </div>
            </div>
            <div className="checkout-thirdpart">
                <h2>Project Features</h2>
                <div className="fl jst-SB">
                    <div className="fl gap15">
                        <input type='checkbox'/>
                        <label>Promote your project: Push your contest to the top of the list</label>
                    </div>
                    <label>$39</label>
                </div>
                <div className="fl jst-SB">
                    <div className="fl gap15">
                        <input type='checkbox'/>
                        <label> Private project: The contest won’t be visible in google and the
                            search result requires designers to sign a confidentiality 
                            agreement NDA 
                        </label>
                    </div>
                    <label>$39</label>
                </div>

            </div>
            <div className="checkout-fourthpart">
                <p><span>Note: You can end or extend the contest any time</span> if you want that ($49 for an additional 1 day)
                          
                </p>
            </div>

            <div className="checkout-fifthpart mb-92">
                <div className='fl fl-gap10 mb-14'>
                    <input type="checkbox" />
                    <label>Guaranteed</label>
                </div>
                <p>You will have more designers participating and receive <span>50% more proposal around your budget </span></p>
                <div className='fl fl-gap10 mt-11 mb-32'>
                    <Image src="Line357.svg" alt='' width={29} height={21} />
                    <p><span>If not guaranteed.</span> The minimum payment is $20 for publishing your project as a website fee <span>(Not active now)</span> </p>
                </div>
                <div>
                    <label>JUST REMEMBER…NO REFUND</label>
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

                    <div className='fl-col fl-gap10'>
                            <label>Phone number</label>
                       
                    <PhoneInput
                        placeholder="Enter phone number"
                        value={value}
                        onChange={setValue}
                        inputClass="mobileFlag"
                        country='us'
                        />
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
                                {/* <select>
                                    <option></option>
                                </select> */}
                                 <ReactFlagsSelect
                                    selected={selected}
                                    onSelect={(code) => setSelected(code)}
                                    selectButtonClassName='SelectCountry'
                                    searchable
                                />
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
                <div className='fl-col checkout-9thpar'>
                <button onClick={handleDataCheckout}>add</button>
                </div>
            </div>
        </div>
    )
}

export default Checkout;