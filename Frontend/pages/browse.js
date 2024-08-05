import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'



const Browse = ({cardData})=>{
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
    <div className='disc-card-cont2'>

      {currentData.map((item) => (
            <div key={item.id} className='disc-card2 ' id='h-220'><a href='#'>
                {console.log(item)}
                <Image src={item.img} id='ds-img' alt="" width={400} height={400}/>

             
             
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
export default Browse;