import { NavLink,useNavigate } from "react-router-dom"


const CTA = () => {
  const navigate = useNavigate()

  const handleCreate = (e) => {
   localStorage.setItem('accountname', e)
   navigate('/signup')
  }
  return (
   
    <div className="bg-gradient-to-br from-teal-200 to-teal-500 py-16 md:bg-gradient-to-r">
    <div className="container m-auto px-6 text-center md:px-12 lg:px-20">
      <h2 className="mb-8 text-4xl font-bold text-white md:text-4xl">
        Your money in your hands, but safe.
      </h2>
      <a onClick={()=> handleCreate("Checking")} 
        className="relative flex h-12 w-full mx-auto items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
        <span className="relative text-base font-semibold text-purple-600">Create an Account now</span>
      </a>
    </div>
  </div>
    
  )
}

export default CTA