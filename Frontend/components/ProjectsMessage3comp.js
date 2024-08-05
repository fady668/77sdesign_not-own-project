import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'



const ProjectsMessage3comp = ({cardData})=>{
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
 
  useEffect(() => {
    const fetchData = async () => {
      setData(cardData.cardData2);
      console.log(data)
    };
    fetchData();
  });

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
//   const currentData = [0,1,2,3,4];
  const currentData = data.slice(startIndex, endIndex);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
<div>
    <div className='disc-card-cont2 gap3-5'>
    <div className='fl-col PMC '>
        <div className='w-101'>
        <button>Eliminate</button>
        </div>
            
            <Image src="greycircle.svg" width={78.65} height={78.65} alt="" />
            <p>Designer name</p>
            <span>Local time</span>
            <div className='fl ali-cen gap3'>
            <input type="checkbox"/>
            <label>Select for final round</label>
            </div>
            
        </div>
      {currentData.map((item) => (
            <div key={item.id} className='disc-card3 ' id=''><a href='#'>
                {console.log(item)}
                <div className='fl jst-SB cc'>
                <p>#34</p>
                <button>Decline</button>
                </div>
                
                <Image src={item.img} id='ds-img2' alt="" width={400} height={400}/>

             
             
             </a>
            </div>
      ))}

    </div>
    <div className="pagenumb">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button key={index} onClick={() => handlePageClick(index + 1)}>
            {index + 1}
          </button>
        ))}
    </div>
</div>
  );
}
export default ProjectsMessage3comp;