"use client"
import React from 'react'
import Script from 'next/script'
import { useState } from 'react'
import { initiate } from '../actions/useractions'
import { useSession } from 'next-auth/react'

const PaymentPage = ({username}) => {
    const {data: session} = useSession();

    const [paymentform, setPaymentform] = useState({})

    const handleChange = (e) => {
        setPaymentform({...paymentform, [e.target.name]: e.target.value})
        console.log(paymentform)
    }

    const pay = async (amount) => {
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id
        var options = {
            "key": process.env.NEXT_PUBLIC_KEY_ID, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Creater Circle", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`, //Pass the `callback_url` obtained in the response of Step 1
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }

        var rzp1 = new Razorpay(options);
        rzp1.open();
    }
  return (
    <>
        <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>


<div className="cover relative text-white flex items-center justify-center">
        <img src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/18.gif?token-time=1738627200&token-hash=lS0NhLOEyVqoSVCna8FFf-JTFrFIjaH1WsQXofV0ddA%3D" alt="" />
        <div className='absolute md:-bottom-16 -bottom-12 border-white border-2 rounded-full flex items-center justify-center'>
          <img className='rounded-full md:w-32 md:h-32 h-20 w-20'  src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/aa52624d1cef47ba91c357da4a7859cf/eyJoIjoxMDgwLCJ3IjoxMDgwfQ%3D%3D/4.gif?token-time=1739577600&token-hash=xtJzl1f1YE6azgCRLlHzk1wqkRfQXphNn9QjUBIpuLw%3D" alt="" />
        </div>
      </div>
      <div className='info flex justify-center items-center md:my-20 my-16 text-white flex-col gap-2'>
        <div className='font-bold text-xl'>@{username}</div>
        <div>Creating animated art for VTT's</div>
        <div className='flex gap-2 flex-col'>
          <ul className='flex gap-4 text-slate-400'>
            <li>16,172 </li>
            <li>members94</li>
            <li>posts$16,510/release</li>
          </ul>
        </div>

        <div className="payment flex gap-3 w-[80%] mb-72 mt-9">
          <div className="supporter w-1/2 bg-slate-900 rounded-xl p-10">
          <h2 className="text-lg font-bold text-center my-6">SUPPORTERS</h2>
            <ul>
              <li className='my-3'>Rohit donated <span>$10</span> with message ""</li>
              <li className='my-3'>Rohit donated <span>$20</span> with message ""</li>
              <li className='my-3'>Rohit donated <span>$30</span> with message ""</li>
              <li className='my-3'>Rohit donated <span>$40</span> with message ""</li>
              <li className='my-3'>Rohit donated <span>$50</span> with message ""</li>
              <li className='my-3'>Rohit donated <span>$60</span> with message ""</li>
            </ul>
          </div>
          <div className="supporter w-1/2 bg-slate-900 rounded-xl p-10">
          <h2 className="text-lg font-bold text-center my-6">MAKE A PAYMENT</h2>
          <div className="flex gap-3 flex-col">
          <input type="text" className='w-full rounded-lg p-3 bg-slate-800' placeholder='Enter Name' onChange={handleChange} value={paymentform.name} name='name'/>
          <input type="text" className='w-full rounded-lg p-3 bg-slate-800' placeholder='Enter Message' onChange={handleChange} value={paymentform.message} name='message'/>
            <input type="text" className='w-full rounded-lg p-3 bg-slate-800' placeholder='Enter Amount' onChange={handleChange} value={paymentform.amount} name='amount'/>
            
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Pay</button>
            
          </div>
          <div className='mt-5 flex gap-2'>
              <button className="rounded-lg p-3 bg-slate-800" onClick={()=> pay(1000)}>pay ₹10</button>
              <button className="rounded-lg p-3 bg-slate-800" onClick={()=> pay(1000)}>pay ₹10</button>
              <button className="rounded-lg p-3 bg-slate-800" onClick={()=> pay(1000)}>pay ₹10</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentPage
