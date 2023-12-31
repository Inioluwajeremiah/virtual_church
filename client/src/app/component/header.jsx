'use client'

import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faUser, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
// import logo from '/logo.jpg'

const Header = () => {

    const [toggle_menu, set_toggle_menu] = useState(false)
    const [isDropdownProfile, setIsDropdownProfile] = useState(false);
    const [isDropdownDepartment, setIsDropdownDepartment] = useState(false);

    const navItem = [
        {
            title: "Children",
            link: "/children"
        },
        {
            title: "Men",
            link: "/men"
        },
        {
            title: "Women",
            link: "/women"
        },
        {
            title: "Ushering",
            link: "/ushering"
        },
        {
            title: "Protocol",
            link: "/protocol"
        },
        {
            title: "Welfare",
            link: "/welfare"
        },
        {
            title: "Transport & Mobilization",
            link: "/transport"
        },
        {
            title: "Choir",
            link: "/choir"
        },
        // {
        //     title: "",
        //     link: "/"
        // },
        // {
        //     title: "",
        //     link: "/"
        // },
        {
            title: "Ambassador's Youth Fellowship",
            link: "/ayf"
        },
        {
            title: "Outreach/Prayer",
            link: "/outreach"
        },
        {
            title: "Sanctuary",
            link: "/sanctuary"
        },
        {
            title: "Media/Publication",
            link: "/media_publication"
        },
        {
            title: "Testimony",
            link: "/testimony"
        },
        {
            title: "Drama",
            link: "/drama"
        }
    ]

    const NavLink = () => {
        return <ul>
            {
                navItem.map((item, index) =>
                    <li className=' hover:text-blue-500 cursor-pointer h-12 border-b flex items-center'
                        key={index}
                    >
                        <Link href={`${item.link}`} className='underline px-4'>{item.title}</Link>
                    </li>
                )
            }
            
        </ul>
    }

    const toggleMenu = () => {
        set_toggle_menu(!toggle_menu)
    }

    const profileDropDown = () => {
        setIsDropdownProfile(!isDropdownProfile)
    }

    const departmentDropdown = () => {
        setIsDropdownDepartment(!isDropdownDepartment);
      
      }
    
    
  return (
    <header className='container mx-auto fixed top-0 right-0 left-0 w-full h-20 z-10' >
        <div className='container mx-auto w-full h-full px-4 flex flex-row items-center justify-between bg-black'>
            <Link role='logo' href={'/'} className='text-white px-2'>
                <img src={'/logo.jpg'} alt="Men of Power Are Feared Ambassador" 
                    className=' w-14 h-14 rounded-full' 
                />
            </Link>

            {/* profile pic and dropdown */}
            <div className=' flex flex-row justify-between items-center '>

                <div role="region" aria-label="User Profile" className='flex flex-row items-center mr-2'>  

                    {/* dropdown */}
                    <button onClick={()=> setIsDropdownDepartment(!isDropdownDepartment)}
                        className='p-4 rounded-full text-white items-center'
                    >Departments&nbsp;
                        {isDropdownDepartment ? <FontAwesomeIcon icon={faCaretUp}/> : <FontAwesomeIcon icon={faCaretDown}/>}
                    </button>
                     {/* profile pics */}
                     <div role="img" aria-label="Profile picture of Jane Doe" 
                        className='flex flex-row justify-center items-center w-12 h-12  
                        rounded-full bg-[#cac0b3] mr-1'
                        >
                        <FontAwesomeIcon icon={faUser} size='lg'/>
                        {/* <img src="" alt="Profile picture of Jane Doe"/> */}
                    </div>
                </div>

                {/* { isDropdownDepartment ? */}
                <nav className={` absolute w-[70%] md:w-[25%] h-[100vh]  flex flex-col bg-white 
                    right-0 -z-50 shadow-md border transition-all duration-200 ease-linear 
                    ${isDropdownDepartment ? 'top-20 overflow-y-scroll' : '-top-[100vh]'}`}>
                    <NavLink/>
                </nav>
                
                <div 
                    className={`absolute w-[30%] md:w-[75%] h-[100vh]  ${isDropdownDepartment ? 'left-0' : '-left-[100%]'}`}
                    onClick={()=> setIsDropdownDepartment(!isDropdownDepartment)}
                >

                </div>

            </div>

            {/* menu icon */}
            {/* <button className='md:hidden' onClick={toggleMenu}>{toggle_menu? <FontAwesomeIcon icon={faXmark} color='#CAC0B3'/> : <FontAwesomeIcon icon={faBars} color='#CAC0B3'/>}</button>  */}
        </div>
    </header>
  )
}

export default Header