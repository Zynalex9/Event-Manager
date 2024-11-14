import React from 'react'

const Banner = () => {
  return (
    <div className='h-screen bg-[url("https://images.pexels.com/photos/10771000/pexels-photo-10771000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")] bg-cover bg-center bg-no-repeat' >
      <div className="top-section h-[50vh]  w-full flex items-center justify-start pl-8">
        <div className="content mt-10" >
          <h2 className='bg-white text-black px-2 py-1 rounded-lg my-2'>A</h2>
          <h2 className='bg-white text-black px-2 py-1 rounded-lg my-2'>A</h2>
          <h2 className='bg-white text-black px-2 py-1 rounded-lg my-2'>A</h2>
        </div>
      </div>
        <div className="lower-section h-[50vh] bg-red-200 w-full">
          <div className="section-1 w-1/2">
            <div className="top-part flex items-center justify-center bg-red">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, illum?</p>
              <h2 className='border rounded-xl py-1 px-2'>i</h2>
            </div>
            <div className="middle-part">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            <div className="buttom-part"></div>
          </div>
          <div className="section-2 w-1/2 bg-purple-500"></div>
        </div>6
        </div>
  )
}

export default Banner
