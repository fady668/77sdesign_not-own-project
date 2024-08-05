


const WorkCard = ({Data})=>{


    return(
        <div className="mywork-ex">
     {/* <Image src="/ex1.png" alt="" width={669} height={125}/> */}
     <div className="work-cont">
      <div className="work-w2">
      {/* <Image src="/ex12.png" alt="" width={100} height={112}/> */}
      </div>
     
     <div className="work-w work-text">
      {/* <h3>Mkoba-Design Eye</h3> */}
      <h3>{Data.name}</h3>

      {/* <p>mkoba is mobile app mkoba is mobile app mkoba is mobile app mkoba is mobile app</p> */}
      <p className="WORKCARD_DESCR">{Data.description}</p>

      <span>by xmokla</span>

        <div className="workflex">
        <span className="bord gold">Gold</span>
        <span className="bord red"> GUARANTEED</span>
        <span className="bord blackkkk">Logo & social media pack</span>
        <span className="bord blackkkk">Accounting & Financial</span>
        </div>
     </div>
     <div className="work-w3">
      <div> <span>3D designs</span></div>
      <div> <span>3 Days, 13 hours</span></div>
      <div> <span>7% feedback(1)</span></div>
      <div><button>Watch</button></div>
     </div>
     </div>
     
 </div>
    )
}
export default WorkCard;