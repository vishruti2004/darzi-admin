import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Tailor = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const navigate = useNavigate()
  const [tailorData, setAllTailor] = useState([])

  useEffect(() => {
    var token = localStorage.getItem('token')
    axios.get('https://api.darzi.tech/api/admin/alltailor',{headers:{"Authorization":token}})
    // axios.get('http://localhost:3000/api/admin/alltailor')

      .then((response) => {
        console.log("Alltailor", response.data.data);
        setAllTailor(response.data.data);
        setLoading(false)

        console.log(tailorData);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])
  const [loading,setLoading]=useState(true)


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTailorData = tailorData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    loading ? <div className='m-5 font-1xl text-center font-extrabold'>Loading...</div>:

    <>
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4  md:flex-row md:items-center md:justify-between md:space-y-0">
          <div className='ps-2'>
            <h2 className="text-lg font-semibold">Total Tailors - {tailorData.length}</h2>
          </div>
          <div>

          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        <span className='font-bold'>Owner Name</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        <span className='font-bold'>Shop Name</span>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        <span className='font-bold'>Adress</span>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        <span className='font-bold'>Mobile</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {
                      currentTailorData.map((item) => (
                        <tr key={item._id} onClick={() => navigate(`/tailor/tailor_data/${item._id}`)}>
                          <td className="whitespace-nowrap px-4 py-4">
                            <div className="flex items-center">
                              <div className="h-10 w-10 flex-shrink-0">
                                <img
                                  className="h-10 w-10 rounded-full object-cover"
                                  src={item.image}
                                  alt=""
                                />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-800">{item.owner_name}</div>
                                <div className="text-sm text-gray-800">{item.email}</div>
                              </div>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-12 py-4">
                            <div className="text-sm text-gray-800 ">{item.shop_name}</div>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            <div className="text-sm text-gray-800">{item.address}</div>
                          </td>
                          <td className="whitespace-nowrap px-2 py-4">
                            <div className="text-sm text-gray-800 ">{item.mobile}</div>
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
          {Array.from({ length: Math.ceil(tailorData.length / itemsPerPage) }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={`mx-1 flex items-center rounded-md border ${currentPage === index + 1 ? 'bg-[#8CC187] text-white' : 'border-gray-400'
                } px-3 py-1 text-gray-900 hover:scale-105`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === Math.ceil(tailorData.length / itemsPerPage)}
            className="mx-2 text-sm font-semibold text-gray-900"
          >
            Next &rarr;
          </button>
        </div>
      </section>
    </>
  )
}

export default Tailor

//Purvesh@darzi123
//8 character