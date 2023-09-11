'use client'

const AddMember = ({toggle_menu, toggleShowForm}) => {

  const handleSubmit = () => {
    toggleShowForm()
  }

  return (
    <div className=" container absolute top-20 left-0 right-0 bottom-0 bg-gray-50">
      <div className={`w-full px-8 lg:max-w-[40%] mx-auto flex flex-col
       bg-white shadow border mt-24 rounded-lg`}>
          
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
            className="w-[20%] mx-auto bg-green-700 text-white p-4 rounded-md my-4"
            onClick={() => handleSubmit() }
          >Submit</button>

      </div>
    </div>
   
  )
}

export default AddMember