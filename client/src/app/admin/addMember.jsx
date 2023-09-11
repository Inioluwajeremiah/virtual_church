'use client'

import { useEffect, useRef } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddMember = ({toggle_menu, toggleShowForm}) => {

  const showDialogRef = useRef(null);
  
  useEffect(() => {
    // Add a click event listener to the document
    document.addEventListener('click', handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
    document.removeEventListener('click', handleClickOutside);
    };
  });

  const handleClickOutside = (event) => {
  // Check if the click event occurred outside of the dropdown component
  if (showDialogRef.current && !showDialogRef.current.contains(event.target)) {
    toggleShowForm();
  }
  };



  const handleSubmit = () => {
    toggleShowForm()
  }

  return (
    <div  className="w-[100%] md:w-[77%] mx-auto container fixed top-20 left-0 md:left-[23%] right-0 bottom-0">
      <div ref={showDialogRef} className={`relative w-[80%] mx-auto  px-8 lg:max-w-[50%] flex flex-col
       bg-white shadow border mt-24 rounded-lg`}>

          <button className="absolute right-0 top-0 p-4" onClick={toggleShowForm}>
            <FontAwesomeIcon icon={faXmark} color="red" size="xl" />
          </button>
          
          <h1 className="text-center mt-4 font-bold">Add Member</h1>
          <label htmlFor="" className="my-2">Fullname</label>
          <input type="text" 
            placeholder="Firstname Middlename Fullname" 
            className="p-2 outline-none border"
          />
          <label htmlFor="age" className="my-2">Age</label>
          <input type="number" placeholder="Age"
            className="p-2 outline-none border"
          />
          <button 
            className="w-[50%] mx-auto bg-green-700 text-white px-4 py-2 rounded-md my-4"
            onClick={() => handleSubmit() }
          >Submit</button>

      </div>
    </div>
   
  )
}

export default AddMember