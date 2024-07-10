import React from 'react'
import { BarChart, BookOpen, Newspaper, LogOut, BaggageClaim, ClipboardPenLine, UsersRound, UserPlus, CircleUserRound, LayoutDashboard } from 'lucide-react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../app/authSlice';
import toast, { Toaster } from 'react-hot-toast';

const Sidebar = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.setItem('token', '')
    navigate('/login');
  }
  return (
    <aside className="flex h-screen w-52 flex-col overflow-x-auto border-r bg-white px-5 py-8">
      <Toaster />
      <div className="inline-flex items-center space-x-2">
        <span>
          <img src="logo.png" alt="*logo" width={50} height={50} />
        </span>
        <span className="font-bold text-2xl text-green-950">Darzi</span>
      </div>
      <div className="mt-6 flex flex-1 flex-col justify-between">
        <nav className="-mx-3 space-y-6 ">
          <div className="space-y-3 ">

            {/* //home */}
            <NavLink
              className={({ isActive }) => isActive ? "flex bg-[#8CC187] text-white transform items-center rounded-lg px-3 py-2 transition-colors duration-300 hover:bg-[#8CC187] hover:text-gray-100" : "flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"}
              to="/"
            >
              <LayoutDashboard className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Dashboard</span>
            </NavLink>

            <NavLink
              className={({ isActive }) => isActive ? "flex bg-[#8CC187] text-white transform items-center rounded-lg px-3 py-2 transition-colors duration-300 hover:bg-[#8CC187] hover:text-gray-100" : "flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"}
              to="/tailor"
            >
              <CircleUserRound className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Tailor</span>
            </NavLink>

            <NavLink
              className={({ isActive }) => isActive ? "flex bg-[#8CC187] text-white transform items-center rounded-lg px-3 py-2 transition-colors duration-300 hover:bg-[#8CC187] hover:text-gray-100" : "flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"}
              to="/customer"
            >
              <UserPlus className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Customer</span>
            </NavLink>

            <NavLink
              className={({ isActive }) => isActive ? "flex bg-[#8CC187] text-white transform items-center rounded-lg px-3 py-2 transition-colors duration-300 hover:bg-[#8CC187] hover:text-gray-100" : "flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"}
              to="/employee"
            >
              <UsersRound className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Employees</span>
            </NavLink>

            <NavLink
              className={({ isActive }) => isActive ? "flex bg-[#8CC187] text-white transform items-center rounded-lg px-3 py-2 transition-colors duration-300 hover:bg-[#8CC187] hover:text-gray-100" : "flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"}
              to="/inventory"
            >
              <ClipboardPenLine className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Inventory</span>
            </NavLink>

            <NavLink
              className={({ isActive }) => isActive ? "flex bg-[#8CC187] text-white transform items-center rounded-lg px-3 py-2 transition-colors duration-300 hover:bg-[#8CC187] hover:text-gray-100" : "flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"}
              to="/order"
            >
              <BaggageClaim className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Order</span>
            </NavLink>

            {/* <NavLink
              className={({ isActive }) => isActive ? "flex bg-[#8CC187] text-white transform items-center rounded-lg px-3 py-2 transition-colors duration-300 hover:bg-[#8CC187] hover:text-gray-100" : "flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"}
              to="/orderdata/:id"
            >
              <BaggageClaim className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Order Data</span>
            </NavLink> */}

          </div>
        </nav>
      </div>
      <div>
        <button
          className='inline-flex w-full items-center justify-center rounded-md hover:bg-[#8CC187] bg-[#8CC187] px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-[#8CC187]'
          onClick={() => { handleLogout() }}
        >
          Logout
          <LogOut className="ml-2" size={16} />
        </button>
      </div>
    </aside>
  )
}

export default Sidebar;