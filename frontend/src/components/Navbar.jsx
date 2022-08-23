import { NavLink,useNavigate } from "react-router-dom"
const Navbar = () => {
  const navigate= useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem("token");
    navigate('/login')
  }
  return (
    <div>
      <div className="h-20 flex justify-between px-6 items-center bg-slate-200">
        <NavLink className='text-xl font-bold' to="/">Notebook</NavLink>
      {!localStorage.getItem('token')?  <ul className="flex">
          <li className='px-6'><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="signup">SignUp</NavLink></li>
        </ul>:
        <li className="list-none cursor-pointer" onClick={handleLogout}>logout</li>}
      </div>
    </div>
  )
}

export default Navbar