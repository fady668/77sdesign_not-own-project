import {listItems,listItems2,listItems3,listItems4,listItems5} from "./consts"
import {Logoidentity,Webdesign,ClothingMerchandise,Businessadvertising,ArtIllustration} from "./consts"


const  Catmenu = ({setCateg,Categ}) => {
    function handleclick(e){
      setCateg(e)
    }
    return(
        <div>

        <div className='fl-all '> 
        <div>
            <div>
            <h3 className='cat-menu-h'>Logo & identity</h3>
            <ul>
          {Logoidentity.map((item) => (
            <li key={item.id} className="cat-menu-links" id={Categ===item.text?"pinkbackground":""}><button onClick={()=>handleclick(item.text)}>{item.text}</button></li>
          ))}
        </ul>
            </div>
        </div>
        <div>
            <div>
            <h3 className='cat-menu-h'>Web - UI/UX design</h3>
            <ul>
          {Webdesign.map((item) => (
            <li key={item.id} className="cat-menu-links" id={Categ===item.text?"pinkbackground":""}><button onClick={()=>handleclick(item.text)}>{item.text}</button></li>
          ))}
        </ul>
            </div>
        </div>
        <div>
            <div>
            <h3 className='cat-menu-h'>Clothing & Merchandise</h3>
            <ul>
          {ClothingMerchandise.map((item) => (
            <li key={item.id} className="cat-menu-links" id={Categ===item.text?"pinkbackground":""}><button onClick={()=>handleclick(item.text)}>{item.text}</button></li>
            ))}
          <h3 className='cat-menu-h'>Art & Illustration</h3>
             {ArtIllustration.map((item) => (
            <li key={item.id} className="cat-menu-links" id={Categ===item.text?"pinkbackground":""}><button onClick={()=>handleclick(item.text)}>{item.text}</button></li>
            ))}
        </ul>
            </div>
        </div>
        <div>
            <div>
            <h3 className='cat-menu-h'>Business & advertising</h3>
            <ul>
          {Businessadvertising.map((item) => (
            <li key={item.id} className="cat-menu-links" id={Categ===item.text?"pinkbackground":""}><button onClick={()=>handleclick(item.text)}>{item.text}</button></li>
            ))}
        </ul>
            </div>
        </div>
     
     
        </div>
        <div className='cat-menu-btn'>
            <button>Others</button>
        </div> 
    </div>
    )
}

export default Catmenu