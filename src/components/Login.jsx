// import React, { useEffect, useState } from 'react';
// import { ArrowRight } from 'lucide-react';
// import toast, { Toaster } from 'react-hot-toast';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');

//   const handleSubmit = () => {
//     setLoading(true);
//     if (!email || !password) {
//       setEmailError(email ? '' : 'Email is required');
//       setPasswordError(password ? '' : 'Password is required');
//       setLoading(false);
//       return;
//     }

//     try {
//       axios.post('http://localhost:3000/api/admin/login', {
//         // axios.post('https://api/darzi.tech/api/admin/login', {

//         email,
//         password
//       }).then((response) => {
//         localStorage.setItem('token', response.data.accessToken)
//         toast.success('Login success!');
//         navigate('/');
//       }).catch((error) => {
//         console.log(error);
//         toast.error('Login failed. Please check your credentials.');
//       });
//     } catch (error) {
//       console.log(error);
//       toast.error('Login failed. Please check your credentials.');
//     }
//   };

//   return (
//     <section className='border border-gray-300'>
//       <Toaster />
//       <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
//         <div className="xl:mx-auto xl:w-[300px] xl:max-w-sm 2xl:max-w-md">
//           <div className="mb-2 flex justify-center">
//             <img src="logo.png" alt="*logo" width={100} height={100} />
//           </div>
//           <h2 className="text-center text-2xl font-bold leading-tight text-green-900">
//             Sign in to Darzi
//           </h2>

//           <form className="mt-8">
//             <div className="space-y-5">
//               <div>
//                 <label className="text-base font-medium text-gray-900">
//                   Email address
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     value={email}
//                     className={`flex h-10 w-full rounded-md border ${
//                       emailError ? 'border-red-500' : 'border-gray-300'
//                     } bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50`}
//                     type="email"
//                     placeholder="Email"
//                     onChange={(e) => {
//                       setEmail(e.target.value);
//                       setEmailError('');
//                     }}
//                     required
//                   />
//                   {emailError && (
//                     <p className="text-red-500 text-xs mt-1">{emailError}</p>
//                   )}
//                 </div>
//               </div>
//               <div>
//                 <div className="flex items-center justify-between">
//                   <label className="text-base font-medium text-gray-900">
//                     Password
//                   </label>
//                 </div>
//                 <div className="mt-2">
//                   <input
//                     value={password}
//                     className={`flex h-10 w-full rounded-md border ${
//                       passwordError ? 'border-red-500' : 'border-gray-300'
//                     } bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50`}
//                     type="password"
//                     placeholder="Password"
//                     onChange={(e) => {
//                       setPassword(e.target.value);
//                       setPasswordError('');
//                     }}
//                     required
//                   />
//                   {passwordError && (
//                     <p className="text-red-500 text-xs mt-1">{passwordError}</p>
//                   )}
//                 </div>
//               </div>
//               <div>
//                 <button
//                   type="button"
//                   className="inline-flex w-full items-center justify-center rounded-md hover:bg-[#8CC187] bg-[#274624] px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
//                   onClick={handleSubmit}
//                 >
//                   {loading ? 'Logging in...' : 'Get Started'}<ArrowRight className="ml-2" size={16} />
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Login;


import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    setLoading(true);
    if (!email || !password) {
      setEmailError(email ? '' : 'Email is required');
      setPasswordError(password ? '' : 'Password is required');
      setLoading(false);
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Invalid email format');
      setLoading(false);
      return;
    }

    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      setLoading(false);
      return;
    }

    try {
      // axios.post('http://localhost:3000/api/admin/login', {
      axios.post('https://api.darzi.tech/api/admin/login', {
        email,
        password
      }).then((response) => {
        localStorage.setItem('token', response.data.accessToken)
        toast.success('Login success!');
        navigate('/');
      }).catch((error) => {
        console.log(error);
        toast.error('Login failed. Please check your credentials.');
      });
    } catch (error) {
      console.log(error);
      toast.error('Login failed. Please check your credentials.');
    }
  };

  return (
    <section className='border border-gray-300'>
      <Toaster />
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-[300px] xl:max-w-sm 2xl:max-w-md">
          <div className="mb-2 flex justify-center">
            <img src="logo.png" alt="*logo" width={100} height={100} />
          </div>
          <h2 className="text-center text-2xl font-bold leading-tight text-green-900">
            Sign in to Darzi
          </h2>

          <form className="mt-8">
            <div className="space-y-5">
              <div>
                <label className="text-base font-medium text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    value={email}
                    className={`flex h-10 w-full rounded-md border ${emailError ? 'border-red-500' : 'border-gray-300'
                      } bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50`}
                    type="email"
                    placeholder="Email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError('');
                    }}
                    required
                  />
                  {emailError && (
                    <p className="text-red-500 text-xs mt-1">{emailError}</p>
                  )}
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label className="text-base font-medium text-gray-900">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    value={password}
                    className={`flex h-10 w-full rounded-md border ${passwordError ? 'border-red-500' : 'border-gray-300'
                      } bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50`}
                    type="password"
                    placeholder="Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setPasswordError('');
                    }}
                    required
                  />
                  {passwordError && (
                    <p className="text-red-500 text-xs mt-1">{passwordError}</p>
                  )}
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-md hover:bg-[#8CC187] bg-[#274624] px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  onClick={handleSubmit}
                >
                  {loading ? 'Logging' : 'Get Started'}<ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
