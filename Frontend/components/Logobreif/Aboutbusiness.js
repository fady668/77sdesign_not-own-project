import Image from "next/image";

const Aboutbusiness= ({setName, setLanguages, setIndustry, setDescription, setUrl, setReference,setLogo})=>{

    return(
        <div className="oneto1 fl-col gap fl-gap32">
            <div className="fl fl-gap47">
                <label>Language:</label>
                <input onChange={setName}/>
            </div>
            <div className="fl fl-gap47">
                <label>Name in the logo:</label>
                <input  onChange={setName}/>
            </div>
            <div className="fl fl-gap47">
                <label>Slogan:</label>
                <input onChange={setName}/>
            </div>
            <div className="fl fl-gap47">
                <label>About your organization and target audience: </label>
                <textarea onChange={setName}/>
            </div>
            <div className="fl fl-gap47">
                <label>Industry:</label>
                <input onChange={setName}/>
            </div>
            <div className="fl fl-gap47">
                <label>Other requirements:</label>
                <textarea onChange={setName}/>
            </div>
            <div className="fl fl-gap47 ">
                <label>Reference and/or sketch: </label>
                <div className="fl-col fl-gap32 w-80">
                    <input onChange={setName} id="w-100"/>
                    <div className="fl fl-gap10 ">
                        <div className="plusabout">
                            <Image src="+.svg" alt="" width={27} height={27} />
                            <p>Please attach</p>
                        </div>
                        <div className="plusabout">
                            <Image src="+.svg" alt="" width={27} height={27} />
                        </div>
                        <div className="plusabout">
                            <Image src="+.svg" alt="" width={27} height={27} />
                        </div>
                    </div>
                </div>
            </div>
     
   
            <div className="mt-159 mb-350">
                <button>Continue</button>
            </div>
            
        </div>
    )
}
export default Aboutbusiness;