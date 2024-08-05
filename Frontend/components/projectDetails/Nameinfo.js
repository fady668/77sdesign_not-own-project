import Image from 'next/image'



const Nameinfo = ({ApiData})=>{

return(
    <div className='contest-cont-content fl jst-SB' id="Nameinfo">
    <div>
    <h2>Name & Info </h2>
    {/* <Image src="contestex1.svg" alt="" width={587} height={339} /> */}
    <div>
        <div>
        <h3>Name to incorporate in logo</h3>
        <p>{ApiData.name}</p>
        </div>
        <div>
            <h3>Description</h3>
            <p>{ApiData.description}</p>
        </div>
    </div>
    </div>
    <div className='fl-col jstfe xyz'>
        <input/>
        <button>Translate</button>
    </div>
</div>

    )};
export default Nameinfo;