
import './App.css'
import Home from './components/Home'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet, redirect, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

// import { useNavigate } from "react-router-dom";


function App() {
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token==null){
      localStorage.setItem('token','')
      navigate('/login')
    }else{
      if(token==''){
        navigate('/login')
      }
    }
  }, [])

  return (
    <>
      <div className="flex">
        <aside className='h-screen sticky top-0'>
          <Sidebar />
        </aside>
        <div className='w-full '>
          <Header />
          <div className="m-4 h-auto border bg-gray-100 overflow-y-auto  rounded-xl pb-5 mb-5">
            <Outlet />
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    </>
  )
}

export default App


// import './App.css';
// import Home from './components/Home';
// import Sidebar from './components/Sidebar';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import { Outlet, useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { useEffect } from 'react';

// function App() {
//   const navigate = useNavigate();
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

//   useEffect(() => {
//     if (!isAuthenticated) {
//       navigate('/login');
//     }
//   }, [isAuthenticated, navigate]);

//   // Redirect to the main page after successful login
//   useEffect(() => {
//     if (isAuthenticated) {
//       navigate('/');
//     }
//   }, [isAuthenticated, navigate]);

//   return (
//     <>
//       <div className="flex">
//         <aside className='h-screen sticky top-0'>
//           <Sidebar />
//         </aside>
//         <div className='w-full '>
//           <Header />
//           <div className="m-4 h-[75vh] border bg-gray-100 overflow-y-auto  rounded-xl pb-5 mb-5">
//             <Outlet />
//           </div>
//           <Footer />
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
