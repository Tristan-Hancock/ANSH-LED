import Navbar from '@/page-components/Navbar'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <>
    <Navbar/>
    <div className='flex flex-col md:flex-row p-10 md:p-20'>
      <div>
        <Image src='/sample.png' alt='Sample Image' width={500} height={500}></Image>
      </div>
      <div>
        <h1>24 Watt LED Street Light With Lens</h1>


          <h2 className="font-bold text-xl mt-6">Wattage</h2>
          <div className="grid grid-cols-5 gap-6 mt-5">
            <button className="border border-black p-2 font-semibold">
              3W
            </button>
            <button className="border border-black p-2 font-semibold">5W</button>
            <button className="border border-black p-2 font-semibold">7W</button>
            <button className="border border-black p-2 font-semibold">9W</button>
            <button className="border border-black p-2 font-semibold">12W</button>
            <button className="border border-black p-2 font-semibold">15W</button>
            <button className="border border-black p-2 font-semibold">18W</button>
          </div>
      </div>
    </div>
    </>
  )
}

export default page