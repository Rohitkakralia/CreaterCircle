import React from 'react'

const username = ({params}) => {
  return (
    <>
      <div className="cover relative text-white flex items-center justify-center">
        <img src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/18.gif?token-time=1738627200&token-hash=lS0NhLOEyVqoSVCna8FFf-JTFrFIjaH1WsQXofV0ddA%3D" alt="" />
        <div className='absolute md:-bottom-16 -bottom-12 border-white border-2 rounded-full flex items-center justify-center'>
          <img className='rounded-full md:w-32 md:h-32 h-20 w-20'  src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/aa52624d1cef47ba91c357da4a7859cf/eyJoIjoxMDgwLCJ3IjoxMDgwfQ%3D%3D/4.gif?token-time=1739577600&token-hash=xtJzl1f1YE6azgCRLlHzk1wqkRfQXphNn9QjUBIpuLw%3D" alt="" />
        </div>
      </div>
      <div className='info flex justify-center items-center md:my-20 my-16 text-white flex-col gap-2'>
        <div className='font-bold text-xl'>@{params.username}</div>
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
          <input type="text" className='w-full rounded-lg p-3 bg-slate-800' placeholder='Enter Name'/>
          <input type="text" className='w-full rounded-lg p-3 bg-slate-800' placeholder='Enter Message'/>
            <input type="text" className='w-full rounded-lg p-3 bg-slate-800' placeholder='Enter Amount'/>
            
            <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Pay</button>
            
          </div>
          <div className='mt-5 flex gap-2'>
              <button className="rounded-lg p-3 bg-slate-800">pay $10</button>
              <button className="rounded-lg p-3 bg-slate-800">pay $10</button>
              <button className="rounded-lg p-3 bg-slate-800">pay $10</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default username
