import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BaggageClaim, ClipboardPenLine, UserPlus, Users } from 'lucide-react';
import axios from 'axios';

const Tailor_data = () => {
  const [totalCustomers, setTotalCustomers] = useState(0);
  const [totalEmployees, setTotalEmployees] = useState(0);
  const [totalInventorys, setTotalInventorys] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);

  const params = useParams();

  useEffect(() => {
    var token = localStorage.getItem('token')
    axios.get(`https://api.darzi.tech/api/admin/tailor/${params.id}/customers`,{headers:{"Authorization":token}})
    // axios.get(`http://localhost:3000/api/admin/tailor/${params.id}/customers`)

      .then((response) => {
        setTotalCustomers(response.data.customers.length)
        setLoading(false)

      }).catch((error) => {
        console.log(error);
      })
    axios.get(`https://api.darzi.tech/api/admin/tailor/${params.id}/employee`,{headers:{"Authorization":token}})
    // axios.get(`http://localhost:3000/api/admin/tailor/${params.id}/employee`)

      .then((response) => {
        setTotalEmployees(response.data.employees.length)
        setLoading(false)

      }).catch((error) => {
        console.log(error);
      })

    axios.get(`https://api.darzi.tech/api/admin/tailor/${params.id}/inventory`,{headers:{"Authorization":token}})
    // axios.get(`http://localhost:3000/api/admin/tailor/${params.id}/inventory`)

      .then((response) => {
        setTotalInventorys(response.data.inventory.length)
        setLoading(false)

      }).catch((error) => {
        console.log(error);
      })

    axios.get(`https://api.darzi.tech/api/admin/tailor/${params.id}/order`,{headers:{"Authorization":token}})
    // axios.get(`http://localhost:3000/api/admin/tailor/${params.id}/order`)

      .then((response) => {
        setTotalOrders(response.data.order.length)
        setLoading(false)

      }).catch((error) => {
        console.log(error);
      })
  }, []);
  const [loading,setLoading]=useState(true)


  const count_data = [
    {
      name: "Total customers",
      count: totalCustomers,
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
      name: "Total Employees",
      count: totalEmployees,
      icon: <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-yellow-600 bg-yellow-100 rounded-full mr-6">
        <Users />
      </div>
    },
    {
      name: "Total Inventory",
      count: totalInventorys,
      icon: <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
        <ClipboardPenLine />
      </div>
    },
    {
      name: "Total Orders",
      count: totalOrders,
      icon: <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-gray-600 bg-gray-100 rounded-full mr-6">
        <BaggageClaim />
      </div>
    },
  ];

  return (
    loading ? <div className='m-5 font-1xl text-center font-extrabold'>Loading...</div>:

    <>
      <div className='my-4 text-center overflow-y-auto'>
        <section className="relative w-full overflow-hidden ">
          <div className="relative mx-auto px-4">
            <div className="mx-auto ">
              <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {count_data?.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-start p-5 bg-white shadow rounded-lg">
                    {item?.icon}
                    <div>
                      <span className="block text-2xl text-start font-bold">{item?.count}</span>
                      <span className="block text-gray-500">{item?.name}</span>
                    </div>
                  </div>
                ))}
              </section>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Tailor_data;
