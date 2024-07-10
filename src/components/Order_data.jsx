import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Order_data = () => {
  const [orderData, setOrderData] = useState()
  const query = new URLSearchParams(useLocation().search)
  const id = query.get('id')

  useEffect(() => {
    axios.get(`http://localhost:3000/api/admin/order/customer?id=${id}`)
      .then((response) => {
        console.log("-<", response.data.data);
        setOrderData(response.data.data)
        console.log(orderData.customer.customer_name);
      })
  }, [])

  return (

    <>
      <div className='mx-auto max-w-7xl px-4 py-4'>
        <div className="mt-8 p-8 overflow-hidden sm:w-full lg:w-1/2 mx-auto text-md  rounded-lg shadow-lg bg-white border-gray-300 md:flex-row">
          <h2>Order Details</h2>
          <div className="pb-8">
            <div className="mb-5 py-5 flex flex-col gap-5 text-left justify-between w-full rounded-md  flex-wrap overflow-hidden lg:flex-col lg:text-left">
              <div className='flex justify-evenly'>
                <div>
                  <div className="grid mb-4 grid-cols-2 sm:grid-cols-4 md:grid-cols-1">
                    <div className="text-sm font-medium mb-1 text-gray-700">Customer Email</div>
                    <div className="text-md font-semibold">{orderData?.customer?.email}</div>
                  </div>
                  <div className="grid mb-4 grid-cols-2 sm:grid-cols-4 md:grid-cols-1">
                    <div className="text-sm font-medium mb-1 text-gray-700">Customer Mobile</div>
                    <div className="text-md font-semibold">{orderData?.customer?.mobile}</div>
                  </div>
                  <div className="grid mb-4 grid-cols-2 sm:grid-cols-4 md:grid-cols-1">
                    <div className="text-sm font-medium mb-1 text-gray-700">status</div>
                    <div className="text-md font-semibold">{orderData?.order?.status}</div>
                  </div>
                </div>

                <div>
                  <div className="grid mb-4 grid-cols-2 sm:grid-cols-4 md:grid-cols-1">
                    <div className="text-sm font-medium mb-1 text-gray-700">Order Date</div>
                    <div className="text-md font-semibold">{orderData?.order?.order_date.substr(0, 10)}</div>
                  </div>
                  <div className="grid mb-4 grid-cols-2 sm:grid-cols-4 md:grid-cols-1">
                    <div className="text-sm font-medium mb-1 text-gray-700">Due Date</div>
                    <div className="text-md font-semibold">{orderData?.order?.due_date.substr(0, 10)}</div>
                  </div>
                  <div className="grid mb-4 grid-cols-2 sm:grid-cols-4 md:grid-cols-1">
                    <div className="text-sm font-medium mb-1 text-gray-700">payment_value</div>
                    <div className="text-md font-semibold">{orderData?.order?.payment_value}</div>
                  </div>
                </div>
              </div>



              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1">
                <div className="text-sm text-center font-medium mb-1 text-gray-700">orders</div>
                <div className='flex-row justify-center flex gap-3 p-3'>
                  {
                    orderData?.order?.orders.map((item) => (
                      <>
                        <div className='p-4 bg-gray-200 shadow-lg rounded-md'>
                          <div>type : {item.type}</div>
                          <div>qty : {item.qty}</div>
                          <div>price : {item.price}</div>
                          <div>description : {item.description}</div>
                        </div>
                      </>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Order_data
