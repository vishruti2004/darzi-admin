import {useEffect,useState} from 'react';
import axios from 'axios';
import React from 'react';

const Employee = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [EmployeeData, setAllTailor] = useState([])
  useEffect(() => {
    var token = localStorage.getItem('token')

    axios.get('https://api.darzi.tech/api/admin/employeefind',{headers:{"Authorization":token}})
    // axios.get('http://localhost:3000/api/admin/employeefind')

    .then((response) => {
        console.log("AllEmployee",response.data);
        setAllTailor(response.data.data);
        setLoading(false)

        console.log(EmployeeData);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])
  const [loading,setLoading]=useState(true)

  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentEmployeeData = EmployeeData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    loading ? <div className='m-5 font-1xl text-center font-extrabold'>Loading...</div>:

    <>
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4  md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
          <h2 className="text-lg font-semibold">Total Employee - {EmployeeData.length}</h2>
          </div>
          <div>
          </div>
        </div>
        <div className="mt-5 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-8 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        <span className='font-bold'>Tailor Name</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        <span className='font-bold'>EMP Name</span>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        <span className='font-bold'>Email</span>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        <span className='font-bold'>Mobile</span>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        <span className='font-bold'>Adress</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                  
                    {
                      currentEmployeeData.map((item) => (
                      <tr key={item._id}>
                      <td className="whitespace-nowrap px-6 py-4">
                      <div className="text-sm  text-gray-800 font-semibold ">{item.tailor_id.shop_name}</div>
                    </td>
                        <td className="whitespace-nowrap px-14 py-4">
                          <div className="text-sm  text-gray-800 font-semibold 0 ">{item.emp_name}</div>
                        </td>
                        <td className="whitespace-nowrap px-0 py-4">
                          <div className="text-sm  text-gray-800 font-semibold ">{item.email}</div>
                        </td>
                        <td className="whitespace-nowrap px-2 py-4">
                            <div className="text-sm  text-gray-800 font-semibold ">{item.mobile}</div>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                            <div className="text-sm  text-gray-800 font-semibold ">{item.address}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end pt-6">
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="mx-1 cursor-pointer text-sm font-semibold text-gray-900"
              >
                &larr; Previous
              </button>
              {/* Render page numbers dynamically */}
              {Array.from({ length: Math.ceil(EmployeeData.length / itemsPerPage) }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`mx-1 flex items-center rounded-md border ${
                    currentPage === index + 1 ? 'bg-[#8CC187] text-white' : 'border-gray-400'
                  } px-3 py-1 text-gray-900 hover:scale-105`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === Math.ceil(EmployeeData.length / itemsPerPage)}
                className="mx-2 text-sm font-semibold text-gray-900"
              >
                Next &rarr;
              </button>
            </div>
      </section>
    </>
  )
}

export default Employee
