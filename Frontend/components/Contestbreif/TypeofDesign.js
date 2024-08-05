import Image from 'next/image';
import React from 'react';

const TypeofDesign = ({ formData, handleContinue , handleChange , currency , selectedPackage, customPackage, promoteProject, blindContest ,privateProject , urgentContest , guaranteed}) => {
    const handlePackageSelect = (packageType) => {
        handleChange('selectedPackage', packageType);
    };

    return (
        <div className="checkout-cont">
            <div className="fl jstfe fl-gap10">
                <div className='fl jst'>
                    <label>Currency</label>
                </div>
                <select value={currency} onChange={(e) => handleChange('currency', e.target.value)}>
                    <option value="EGP">Egp</option>
                    <option value="USD">$</option>
                </select>
            </div>

            <div className="typeDesign-secpart fl fl-gap32 jst-SB">
                <div className={selectedPackage === "silver" ? 'firstcol ActivePackage' : "firstcol"}>
                    <div className='typesec-part1'>
                        <h3>SILVER</h3>
                        <h4>$ 299</h4>
                    </div>
                    <div className='typesec-part2 fl-col fl-gap6'>
                        <ol className='fl-col fl-gap6'>
                            <li>80 designs expected</li>
                            <li>Available for all designers</li>
                            <li>Larger prize</li>
                            <li>%100 guarantee</li>
                        </ol>
                        <div className='fl jst'>
                            <button className={selectedPackage === "silver" ? '' : "packageDef"} onClick={() => handlePackageSelect("silver")}>Select</button>
                        </div>
                    </div>
                </div>
                <div className={selectedPackage === "gold" ? 'seccol ActivePackage' : "seccol"}>
                    <div className='typesec-part1'>
                        <h3>GOLD</h3>
                        <h4>$ 599</h4>
                    </div>
                    <div className='typesec-part2 fl-col fl-gap6'>
                        <ol className='fl-col fl-gap6'>
                            <li>60 designs expected</li>
                            <li>Pro. and Adv. level designers only</li>
                            <li>Dedicated director</li>
                            <li>%100 guarantee</li>
                        </ol>
                        <div className='fl jst'>
                            <button className={selectedPackage === "gold" ? '' : "packageDef"} onClick={() => handlePackageSelect("gold")}>Select</button>
                        </div>
                    </div>
                </div>
                <div className={selectedPackage === "platinum" ? 'thirdcol ActivePackage' : "thirdcol"}>
                    <div className='typesec-part1'>
                        <h3>PLATINUM</h3>
                        <h4>$ 999</h4>
                    </div>
                    <div className='typesec-part2 fl-col fl-gap6'>
                        <ol className='fl-col fl-gap6'>
                            <li>40 designs expected</li>
                            <li>Advance level designers only</li>
                            <li>Priority support</li>
                            <li>Dedicated director</li>
                            <li>%100 guarantee</li>
                        </ol>
                        <div className='fl jst'>
                            <button className={selectedPackage === "platinum" ? '' : "packageDef"} onClick={() => handlePackageSelect("platinum")}>Select</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='typesec3'>
                <label>Custom Package:</label>
                <input value={customPackage} onChange={(e) => handleChange('customPackage', e.target.value)} />
                <span>Start from $ 299</span>
            </div>
            <div className="checkout-thirdpart">
                <h2>Project Features</h2>
                <div className="fl jst-SB">
                    <div className="fl gap15">
                        <input type='checkbox' checked={promoteProject} onChange={(e) => handleChange('promoteProject', e.target.checked)} />
                        <label>Promote your project: Push your contest to the top of the list</label>
                    </div>
                    <label>$39</label>
                </div>
                <div className="fl jst-SB">
                    <div className="fl gap15">
                        <input type='checkbox' checked={blindContest} onChange={(e) => handleChange('blindContest', e.target.checked)} />
                        <label>Blind contest: The designers cannot see each other&apos;s designs</label>
                    </div>
                    <label>FREE</label>
                </div>
                <div className="fl jst-SB">
                    <div className="fl gap15">
                        <input type='checkbox' checked={privateProject} onChange={(e) => handleChange('privateProject', e.target.checked)} />
                        <label>Private project: The contest won&apos;t be visible on Google and the<br />
                            <span>search result requires designers to sign a confidentiality agreement NDA</span>
                        </label>
                    </div>
                    <label>$49</label>
                </div>
                <div className="fl jst-SB">
                    <div className="fl gap15">
                        <input type='checkbox' checked={urgentContest} onChange={(e) => handleChange('urgentContest', e.target.checked)} />
                        <label>Urgent contest: Duration of the contest will be 4 days<br />
                            <span>(standard contest duration is 7 days/2 rounds) </span>
                        </label>
                    </div>
                    <label>$39</label>
                </div>
            </div>
            <div className="checkout-fourthpart">
                <p><span>Note: You can end or extend the contest any time</span> if you want that ($49 for an additional 1 day)</p>
            </div>
            <div className="checkout-fifthpart mb-92">
                <div className='fl fl-gap10 mb-14'>
                    <input type="checkbox" checked={guaranteed} onChange={(e) => handleChange('guaranteed', e.target.checked)} />
                    <label>Guaranteed</label>
                </div>
                <p>You will have more designers participating and receive <span>50% more proposals around your budget </span></p>
                <div className='fl fl-gap10 mt-11 mb-32'>
                    <p><span>If not guaranteed.</span> 77S design charges an administration fee of $20 to process the refund (this will be deducted from the receivable).</p>
                </div>
                <div>
                    <label>JUST REMEMBER…NO REFUND</label>
                </div>
            </div>
            <div className='fl jstfe but'>
            <button onClick={handleContinue}>Continue</button>
            </div>
        </div>
    );
};

export default TypeofDesign;
