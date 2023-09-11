'use client'

import { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faShare, faUser} from "@fortawesome/free-solid-svg-icons";

const MemberCard = ({profileImage, name, phone, email }) => {  

    const [isDropdown, setIsDropdown] = useState(false)

  return (
    <article className="w-[100%] md:w-1/4 h-48 shadow-sm p-4 border-[#ddd] bg-white border rounded-lg">
        <div className="relative">
            <button 
                className="absolute right-0 -top-4 font-bold p-2" 
                aria-label="Open context menu"
                aria-haspopup="true" 
                aria-expanded={isDropdown}  
                onClick={() => setIsDropdown(!isDropdown)}>
                ...
            </button>
            {isDropdown && <div className="absolute w-32 bg-white p-4 rounded-sm transition-all 
                duration-300 ease-in shadow right-0 top-4 list-none" role="menu">
                <li className="py-1"><FontAwesomeIcon icon={faEdit}  color="orange"/> Edit</li>
                <li className="py-1"><FontAwesomeIcon icon={faTrash} color="red"/> Delete</li>
                <li className="py-1"><FontAwesomeIcon icon={faShare} color="blue"/> Share</li>
            </div>
        }
        </div>

        {/* profile pics */}
        <div role="img" aria-label="Profile picture of Jane Doe" 
            className='mx-auto w-20 h-20  
            rounded-full bg-[#cac0b3]'
            >
            {
                profileImage ? 
                <img src={profileImage} alt="Profile picture of Jane Doe" className="w-20 h-20 rounded-full"/> :
                <FontAwesomeIcon icon={faUser} size='lg'/>
            }
            
        </div>
        <h2 className="max-w-[80%] mt-1 overflow-hidden 
            whitespace-nowrap text-ellipsis font-bold text-[14px] text-center">
                {name.title} {name.first} {name.last}
        </h2>
        <h2 className="text-[14px] text-center overflow-wrap break-words">{email}</h2>
        <h2 className="text-[14px] text-center">{phone}</h2>

    </article>
  )
}

export default MemberCard