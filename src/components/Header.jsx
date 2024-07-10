import React from 'react'
import { Home, Link } from 'lucide-react'
import { useLocation } from 'react-router-dom'
const Header = () => {
  const location = useLocation()
  let curruntLink = ''
  const crumps = location.pathname.split('/')
    .filter(crumb => crumb !== '')
    .map(Linkcrumb => {
      console.log(">>", curruntLink, Linkcrumb);
      curruntLink += `/${Linkcrumb}`
      console.log(curruntLink);
      return (
        <li className="inline-flex items-center" key={Linkcrumb}>
          <span className='text-sm'>/</span> <a href={curruntLink} className="align-middle inline-flex text-sm font-medium text-gray-800 hover:underline md:ml-2" >{Linkcrumb}</a>
        </li>
      )
    })
  console.log(crumps);
  return (
    <nav className="flex w-full sticky top-0 z-30 items-center bg-white justify-between  p-4" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3 p-2 rounded-md bg-gray-100">
        <li className="inline-flex items-center">
          <a
            href="/"
            className="align-middle inline-flex text-sm font-medium text-gray-800 hover:underline md:ml-2"
          >
            <Home className="mr-4 mt-0.5 h-4 w-4" />
            home
          </a>
        </li>
        {
          crumps
        }
      </ol>
      <div className="flex items-center space-x-2 cursor-pointer">
        <span className="flex flex-col">
          <span className="text-sm font-medium text-green-950">@AdminDarzi</span>
        </span>
        <div className='border rounded-full'>
          <img
            className="shadow-lg h-10 w-10 border rounded-full"
            src="logo.png"
            alt="Dan_Abromov"
          />
        </div>
      </div>
    </nav>
  )
}

export default Header