
export default function Home() {
  return (
    <>
    
    <div className=" flex justify-center gap-4 flex-col items-center text-white h-[44vh]">
      <div className="font-bold flex gap-3 text-3xl">Welcome To CreatorCircle <span><img src="/padreon.gif" width={40} className="bg-blue-500" alt="" /></span></div>
      <p>A Crowdfundong plateform for creaters. Get funded by your fans and followers.</p>
      <div>
      <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
      <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>

      </div>
    </div>
    <div>
      <div className="bg-white h-1 opacity-10"></div>
    </div>

    <div className="text-white container mx-auto">
        <h1 className="text-2xl text-center font-bold my-14">Your Fans can Donate you here!</h1>
        <div className="flex justify-around gap-5">
          <div className="item space-y-3 flex flex-col items-center">
            <img src="/person.gif" alt="" className="w-20 h-20 items-center p-2"/>
            <p className="font-bold items-center">FUND YOURSELF</p>
            <p>Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center">
            <img src="/coin.gif" alt="" className="w-20 h-20 items-center p-2"/>
            <p className="font-bold items-center">FUND YOURSELF</p>
            <p>Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center">
            <img src="/follow.gif" alt="" className="w-20 h-20 items-center p-2"/>
            <p className="font-bold items-center">FAN WANT TO HELP</p>
            <p>Your fans are available for you to help you</p>
          </div>
        </div>
    </div>
    </>
  );
}
