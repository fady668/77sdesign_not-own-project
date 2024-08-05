import Image from 'next/image'



const Nameinfo = ()=>{
return(
    <div className='contest-cont-content fl jst-SB' id="Nameinfo">
    <div>
    <h2>Name & Info </h2>
    <Image src="contestex1.svg" alt="" width={587} height={339} />
    </div>
    <div className='fl-col jstfe xyz'>
        <input/>
        <button>Translate</button>
    </div>
</div>

    )};
export default Nameinfo;