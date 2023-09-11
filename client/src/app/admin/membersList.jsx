
'use client'

import { useEffect, useState } from "react";
import MemberCard from "../component/membserCard"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlus, faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";

const MembersList = () => {

   // pagination variables
   const [data, setData] = useState([])
   const [current_page, set_current_page] = useState(1);
   const [items_per_page, set_items_per_page] = useState(10);
   const index_of_last_item = current_page * items_per_page;
   const index_of_first_item = index_of_last_item - items_per_page;
   const current_data = data.slice(index_of_first_item, index_of_last_item);
   const total_page_no = Math.ceil(data.length/items_per_page)
 
   const [page_no_limit, set_page_no_limit] = useState(3)
   const [max_page_no_limit, set_max_page_no_limit] = useState(3)
   const [min_page_no_limit, set_min_page_no_limit] = useState(0)
 
   const array_of_pages = [...Array(total_page_no).keys()].map(i => i + 1);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=1000')
    .then((response) => response.json())
    .then((data) => {
      console.log("data => ", data);
      setData(data.results);
    }).catch(err => {
      console.log(err);
    })
    // setData(json)   
  }, [])

  // handle next button
  const nextButton = () => {

    if (current_page+1  <= total_page_no) {
      set_current_page(current_page + 1) 
    }

    if (current_page + 1 > max_page_no_limit) {
      set_max_page_no_limit(max_page_no_limit + page_no_limit);
      set_min_page_no_limit(min_page_no_limit + page_no_limit);
    }
  }

  // handle previous button
  const previousButton = () => {

    if (current_page -1  >= 1) {
      set_current_page(current_page - 1 )
      
    }

    if ((current_page - 1) % page_no_limit == 0) {
      set_max_page_no_limit(max_page_no_limit - page_no_limit);
      set_min_page_no_limit(min_page_no_limit - page_no_limit);
    }
  }

  return (
    <section className="container w-full mx-auto p-4">
      <h2 className="text-center font-bold mt-8 text-2xl">Teams</h2>

      <div className={`w-[100%] min-h-[70vh] mx-auto p-4 rounded-md shadow border
         transition-all duration-300 ease-in-out my-8 `}>

          {/* header */}
          <div className="flex flex-col gap-2 md:flex-row items-center justify-around border-b py-2 mb-8">
            <div className=" border rounded-lg p-2">
              <input type="text" className=" outline-none" />
              <button><FontAwesomeIcon icon={faSearch} /></button>
            </div>

            <div className="flex flex-row items-center">
              <label htmlFor="sort">Sort by:</label>
              <select name="sort" id="sort" className="ml-2 mr-8 border rounded outline-none p-2 cursor-pointer">
                <option value="">Name</option>
                <option value="">Date</option>
                <option value="">Time</option>
                <option value="">Position</option>
              </select>
              
            </div>
          </div>
          <div className=" flex flex-row flex-wrap gap-4 justify-center ">
              {
                current_data.map((item, index) => <MemberCard key={index}
                  profileImage={item.picture.thumbnail} 
                  name={item.name} 
                  phone={item.phone} 
                  email={item.email}
                />)
              }
          </div>
        
      </div>

      {/* pagination */}
      <div className="w-[100%] mx-auto flex flex-col mini:flex-row justify-between items-center my-4" aria-label="Pagination navigation">

        {/* 1/3 */}
        <p className="mb-2 w-12 h-12 rounded-full bg-[#001233] text-white flex flex-row items-center justify-center font-bold text-[12px]"
          role="status" aria-label={`Page ${current_page} of ${total_page_no}`}>
          <span className="text-[#FF595A]">{current_page}&nbsp;</span>/&nbsp;{total_page_no}
        </p>

        <div className="mb-2 flex flex-row rounded-full bg-[#001233] px-2 border-[#001233] border-2">
          <button className="w-8 h-8 mini:w-10 mini:h-10 border-r border-white"
            onClick={previousButton} disabled={current_page == 1 ? true : false}>
            <FontAwesomeIcon icon={faChevronLeft} color="#FF595A"  size="2xl"/>
          </button>

          {/* left ellipses */}
          { min_page_no_limit >= 1  ? 
            <button className="w-8 h-8 mini:w-10 mini:h-10 flex border-r border-white flex-row items-center justify-center font-bold text-white"
            onClick={previousButton}>...</button>
          : ""
          }

          {          
            array_of_pages.map((item, index) => (
            item < max_page_no_limit + 1 && item > min_page_no_limit ? (
              <button key={index} aria-label={`Go to page ${item}`}
                onClick={() => set_current_page(item)} aria-pressed={current_page == item ? 'true' : 'false'}
                className={`w-8 h-8 mini:w-10 mini:h-10 border-r border-white text-center
                  flex flex-row items-center justify-center font-bold text-[14px] 
                  ${current_page === item ? 'text-[#FF595A]' : 'text-white'}
                  `}   
                >{item}</button>  ) 
              : ""
            )
            )                 
          }

          {/* right ellipse */}
          { array_of_pages.length > max_page_no_limit ?
            <button 
            className="w-8 h-8 mini:w-10 mini:h-10 border-r border-white flex flex-row items-center justify-center font-bold text-white"
            onClick={nextButton}>...</button>
          : null
          }
          <button className="w-8 h-8 mini:w-10 mini:h-10 font-bold text-[14px]"
            onClick={nextButton} disabled={current_page == total_page_no ? true : false} >
            <FontAwesomeIcon icon={faChevronRight} color="#FF595A" size="2xl"/>
          </button>
        </div>

      </div>
    </section>
  )
}

export default MembersList