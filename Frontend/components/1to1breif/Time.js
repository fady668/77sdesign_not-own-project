import Image from "next/image";

const Time= ({cosn,setBudget_from,setBudget_to,setTimeline,setPortfolio_allowed})=>{
    function Budget_fromOnchange(e){
        setBudget_from(e)
        setBudget_to(e)
    }
    function TimelineOnchange(e){
        setTimeline(e)
    }
   

    const Portfolio_allowedOnchange = event => {
        console.log(event.target.value);
        console.log(Boolean(event.target.value));
        setPortfolio_allowed(Boolean(event.target.value));
      };
    return(
        <div className="oneto1 fl-col gap fl-gap32 ">
            <div className="fl fl-gap47">
                <label>Your timeline:</label>
                <select onChange={e => TimelineOnchange(e.target.value)}>
                    <option>48 hours</option>
                    <option>1 week</option>
                    <option>2 weeks</option>
                    <option>Not sure. I’d like to chat with my designer</option>
                </select>
            </div>
            <div className="fl fl-gap47">
                <label>Your budget:</label>
                <div className="fl-col w-101 fl-gap8">
                    <div className="fl budget">
                        <input id="w-100" placeholder="Guide: $199 - $799 " onChange={e => TimelineOnchange(e.target.value)} />
                        <select>
                            <option>EGP</option>
                            <option>$</option>
                        </select>
                    </div>
                    <span>Designer will provide a quote</span>
                </div>
            </div>
            <div className="fl-col yoyoy jst-SB">
            <div className="fl jst-SB">
                <p className="timep">
                Can your designer showcase the finished
                designs in their 77S design portfolio? 
                </p>
                <div className="fl gap60 ali-end">
                    <div className="fl fl-gap10">
                        <input type="radio"  name="Portfolio_allowed" value={true} id="yes" onChange={Portfolio_allowedOnchange} />
                        <span htmlFor="yes" id="timespan">Yes</span>
                    </div>
                    <div className="fl fl-gap10">
                        <input type="radio" name="Portfolio_allowed" id="no" value={null} onChange={Portfolio_allowedOnchange} />
                        <span htmlFor="no" id="timespan">No</span>
                    </div>
                </div>
            </div>

            </div>


            <div className="mt-340 mb-50">
                <button onClick={cosn} >Continue</button>
            </div>
        </div>
    )
}
export default Time;