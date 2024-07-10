import React, { useEffect, useState } from 'react'
import { BaggageClaim, ClipboardPenLine, UserPlus, Users } from 'lucide-react'
import axios from 'axios'

const Home = () => {

  const [allCust , setAllCust] = useState()
  const [allOrder , setAllOrder] = useState()
  const [allEmployee,setAllEmployee]=useState()
  const [allInventory,setAllInventory]=useState()
  const [alltailor,setAllTailor] =useState()

  useEffect(() => {
var token = localStorage.getItem('token');

    axios.get('https://api.darzi.tech/api/admin/allCustomer',{headers:{"Authorization":token}})
      // axios.get('http://localhost:3000/api/admin/allCustomer')

      .then((response) => {
        setAllCust(response.data.data.length);
        setLoading(false)

      })
      .catch((err) => {
        console.log(err);
      }),
      axios.get('https://api.darzi.tech/api/admin/allOrder',{headers:{"Authorization":token}})
      // axios.get('http://localhost:3000/api/admin/allOrder')

      .then((response) => {
        setAllOrder(response.data.data.length);
        setLoading(false)

      })
      .catch((err) => {
        console.log(err);
      }),
      axios.get('https://api.darzi.tech/api/admin/allemployee',{headers:{"Authorization":token}})
      // axios.get('http://localhost:3000/api/admin/allemployee')

      .then((response) => {
        setAllEmployee(response.data.data.length);
        setLoading(false)

      })
      .catch((err) => {
        console.log(err);
      }),
      axios.get('https://api.darzi.tech/api/admin/allinventory',{headers:{"Authorization":token}})
      // axios.get('http://localhost:3000/api/admin/allinventory')

      .then((response) => {
        setAllInventory(response.data.data.length);
        setLoading(false)

      })
      .catch((err) => {
        console.log(err);
      }),
      axios.get('https://api.darzi.tech/api/admin/alltailor',{headers:{"Authorization":token}})
      // axios.get('http://localhost:3000/api/admin/alltailor')

      .then((response) => {
        setAllTailor(response.data.data.length);
        setLoading(false)

      })
      .catch((err) => {
        console.log(err);
      })
      
  },
  [])
  const [loading,setLoading]=useState(true)


  const count_data = [
    {
      name: "Total Tailors",
      count: alltailor,
      icon: <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
        <svg
          aria-hidden="true"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>

      </div>
    },
    {
      name: "Total Customer",
      count: allCust,
      icon: <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
        <UserPlus />
      </div>
    },
    {
      name: "Employee",
      count: allEmployee,
      icon: <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-yellow-600 bg-yellow-100 rounded-full mr-6">
        <Users />
      </div>
    },
    {
      name: "Inventory",
      count: allInventory,
      icon: <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
        <ClipboardPenLine />
      </div>
    },
    {
      name: "Order",
      count: allOrder,
      icon: <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-gray-600 bg-gray-100 rounded-full mr-6">
        <BaggageClaim />
      </div>
    },
  ]

  return (
   
    loading ? <div className='m-5 font-1xl text-center font-extrabold'>Loading...</div>:

    <>
    
      <div className='my-4 text-center overflow-y-auto'>
        <section className="relative w-full overflow-hidden ">
          <div className="relative mx-auto px-4">
            <div className="mx-auto ">
              <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {count_data?.map((item, idx) => {
                  return <div key={idx} className="flex items-center justify-start p-5 bg-white shadow rounded-lg">
                    {item?.icon}
                    <div>
                      <span className="block text-2xl text-start font-bold">{item?.count}</span>
                      <span className="block text-gray-500">{item?.name}</span>
                    </div>
                  </div>
                })}

              </section>

              {/* <Chart1 /> */}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home

