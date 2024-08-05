import React, { useEffect, useMemo, useState } from "react";
import {AllCategoriesAll} from "../components/consts";
import { useRouter } from "next/router";


function CatmenuSelector() {
    const [search, setSearch] = useState("");
    const [AllCategoriesisOpen, setAllCategoriesOpen] = useState(false);
    const [FullWord, setFullWord] = useState(false);
    const [CAT, setCAT] = useState('');
    const router = useRouter();

    const cates = useMemo(() => {
        if (!search) return AllCategoriesAll;
    
        return AllCategoriesAll.filter((Category) => {
          if (Category.text) {
            if (Category.text.toLowerCase().includes(search.toLowerCase())) {
              return Category.text.toLowerCase().includes(search.toLowerCase());
            }
          }
        });
      }, [search]);
    
      function CategoryTyping(item) {
        setSearch(item);
        
        console.log(cates);
    }

    function CategoryClick(item,cat) {
      setSearch(item);
      setFullWord(true)
      setCAT(cat)
    }
    function projectType(cat){
        if(cat==='LOGO'){

            router.push("Logobreif") 
        }else{
            const select = document.getElementById('project_type');
            const value = select.options[select.selectedIndex].value;
            console.log(value)
            if(value=='CONTEST'){
                console.log('yes')
                router.push("Contestbreif")
            }
            else if(value=='HIRING'){
                console.log('yes HIRING')
                router.push("1to1breif")
            }
            else{
                alert('unknown value of select project type')
            }
        }
 
      }
    
    useEffect(() => {
        setAllCategoriesOpen(true)
        if(search === ''){
          console.log(search.length )
          setAllCategoriesOpen(false)
        }
        if(FullWord){
          setAllCategoriesOpen(false)
        }
        setFullWord(false)
      }, [search])
    return (
    <form className="sr-div2 fl jst">
    <div className="SelectCat" id="SelectAcat"  >
      <input
        type="text"
        value={search}
        onChange={(e) => CategoryTyping(e.target.value)}
        name=""
        placeholder="Logo, Brand Identity, Packaging . . ."
      />
      <div
        className="SelectMenu"
        id={AllCategoriesisOpen ? "" : "DN"}
        
      >
        <ul id="CatesSelect">
          {cates.length > 0 ? (
            cates.map((item) => (
              <div key={item.id}>
                <h4 type="button" className="CatH4">
                  {item.header}
                </h4>
                <button
                  type="button"
                  onClick={() => CategoryClick(item.text,item.cat||'')}
                >
                  {item.text}
                </button>
              </div>
            ))
          ) : (
            <h4 type="button" className="CatH4">
              Item not found.
            </h4>
          )}
        </ul>
      </div>
    </div>
    <select name="test" id="project_type">
      <option value="CONTEST">CONTEST </option>
      <option value="HIRING">HIRING</option>
    </select>
    <button type="submit" name="" onClick={(e)=>{e.preventDefault();projectType(CAT)}}>Start</button>
  </form>
  )
}

export default CatmenuSelector