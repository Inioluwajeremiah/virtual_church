'use client';
import MembersList from './membersList'
import Header from '../component/header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faCalendar, faListDots, faUserFriends, faTasks, faPlus}
from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import AddMember from './addMember'

const Admin = () => {

  const [toggle_menu, set_toggle_menu] = useState(false)
  const [active_tab, set_active_tab] = useState(1);
  const [showAddMember, setShowAddMember] = useState(false)

  const handleNavBtns = (index) => {
    set_active_tab(index)
    set_toggle_menu(!toggle_menu)
  } 

  const toggleMenu = () => {
    set_toggle_menu(!toggle_menu)
  }

  const toggleAddMember = () => {
    setShowAddMember(!showAddMember)
  }
  

  return (
    <>
      <Header/>
      <section className='container  mx-auto flex flex-col md:flex-row md:items-center mt-20'>
         {/* mobile submenu */}
         {/* version 1 */}
        {/* <div className='container mx-auto absolute w-full flex flex-row h-16 px-4 py-1 bg-gray-50 items-center md:hidden'>
          <button onClick={() => set_toggle_menu(!toggle_menu)} className='mr-4'>
            {toggle_menu ? <FontAwesomeIcon icon={faXmark}/> : <FontAwesomeIcon icon={faBars}/> }
          </button>
          <h1 className='text-black w-full flex items-center'>My Team</h1>
        </div> */}

        <button onClick={() => set_toggle_menu(!toggle_menu)} 
          className={`fixed top-20 p-4 bg-gray-100 border border-black h-16
          `}>
            {toggle_menu ? <FontAwesomeIcon icon={faXmark}/> : <FontAwesomeIcon icon={faBars}/> }
        </button>

        {/* side bar menu items */}
        {/* version 1 */}
        {/* <nav 
          className={`absolute left-auto top-36 w-[80%] border flex flex-col h-screen overflow-y-scroll
           bg-white md:top-20 md:fixed md:w-[23%]
            ${toggle_menu ? 'block justify-self-start' : 'hidden'}
          `}
        > */}

        {/* <div className='container mx-auto relative border-4  border-red-700'>       */}
          <nav 
            className={`fixed top-36 w-[80%] border flex flex-col h-screen overflow-y-scroll
            bg-white md:fixed md:w-[23%]  
              ${toggle_menu ? 'block justify-self-start' : 'hidden'}
            `}
          >
            <h1 className='text-center font-bold py-4 border-b'>Menu</h1>
            <button 
              onClick={() => handleNavBtns(1)}
              className='border-b p-2 text-left hover:text-blue-700'
            >
              <FontAwesomeIcon icon={faUserFriends} />&nbsp;&nbsp;&nbsp;Members
            </button>
            <button 
              onClick={() => handleNavBtns(2)}
              className='border-b p-2 text-left hover:text-blue-700'
            >
              <FontAwesomeIcon icon={faListDots} />&nbsp;&nbsp;&nbsp;Programs
            </button>
            <button 
              onClick={() => handleNavBtns(3)}
              className='border-b p-2 text-left hover:text-blue-700'
            >
              <FontAwesomeIcon icon={faCalendar} />&nbsp;&nbsp;&nbsp;Calendar
            </button>
            <button 
              onClick={() => handleNavBtns(4)}
              className='border-b p-2 text-left hover:text-blue-700'
            >
              <FontAwesomeIcon icon={faTasks} />&nbsp;&nbsp;&nbsp;Tasks
            </button>
            <button className="border-b p-2 text-left hover:text-blue-700"
              onClick={toggleAddMember}
            >
              <FontAwesomeIcon icon={faPlus} />&nbsp;&nbsp;&nbsp;Add Member
            </button>
          </nav>
        {/* </div> */}

        {/* <div  className={`absolute top-36 w-[20%] flex flex-col h-screen
           bg-white right-0 md:hidden 
            ${toggle_menu ? 'block justify-self-start' : 'hidden'}
          `} onClick={() => set_toggle_menu(!toggle_menu)}
        >
        </div> */}

        {/* main content */}
        <main className={` mx-auto ${toggle_menu ? 'md:ml-[24%] md:w-[76%]' : 'ml-0 w-[100%]'}`}>
          
          {
            active_tab == 1 ? <MembersList />
            : active_tab == 2 ? ""
            : active_tab == 3 ? ""
            : active_tab == 4 ? ""
            : <MembersList/>
          }

        </main>
      </section>

      {
        showAddMember  ? <AddMember toggle_menu={toggle_menu} toggleShowForm={toggleAddMember}/> : ""
      }
    </>
   
  )
}

export default Admin