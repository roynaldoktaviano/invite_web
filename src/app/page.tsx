"use client"

import React from 'react'
import headNav from './component/headNav'

export default function page() {
  return (
    <section>
      {headNav()}

      <section className='hero w-full h-screen  flex  relative over '>
        <div className='w-full h-screen bg-cream absolute half-round'></div>
        <div className='m-auto x` z-20 flex w-full h-screen'>
          <div className='text-center mt-44'>
            <h1 className='text-prim text-6xl px-64 text-center mb-14'>Create <span className='italic text-emas'> Special </span> Invitation for Your <span className='italic text-emas'> Special </span> Day</h1>

            <a href="" className='linkButton text-lg py-4 px-12 rounded-3xl border-2 text-emas border-emas '> Order Now</a>

            <div className='grid grid-cols-3 px-11 gap-9 mt-10 w-full h-full'>
              <div className='w-full relative'>
                <img src="./img_1.png" alt="Undangan Acara Wedding" className='  w-80 ml-auto' />
                <img src="./flower.png" alt="Flower Vector" className='w-44 absolute bottom-10 z-[-1]' />
              </div>

              <div className='w-full relative pt-24'>
                <img src="./img_2.png" alt="Undangan Acara Wedding" className=' z-20 w-80 mx-auto' />
              </div>

              <div className='w-full relative'>
                <img src="./img_3.png" alt="Undangan Acara Wedding" className=' z-20 w-80 mr-auto' />
                <img src="./flower_2.png" alt="Flower Vector" className='w-44 absolute top-[-80px] z-[-1] right-0' />
              </div>

            </div>

          </div>
        </div>
      </section>

      <section className='mt-[100vh] relative text-center px-60'>
        <h2 className='text-6xl'>About <span className='text-emas italic'> Invite You </span> </h2>
        <p className='text-sm text-center mt-11 leading-7'>Invite You hadir memberikan solusi untuk membantu & memudahkan anda dalam membagikan undangan ke para kerabat terdekat dengan cara yang lebih simple, kekinian & fleksibel dalam bentuk undangan digital.</p>

        <p className='text-sm text-center mt-10 leading-7'>Invite You menyediakan layanan pembuatan undangan digital untuk berbagai acara spesial anda, seperti pernikahan, tunangan, ulang tahun, dan acara-acara lainnya.</p>

        <div className='flex justify-between items-center gap-20 mt-14'>' '
          <div className='text-center'>
            <div className='w-24 h-24 bg-emas rounded-full mx-auto'></div>
            <p className='mt-6 text-sm'>Desain Premium & Ekslusif</p>
          </div>

          <div>
            <div className='w-24 h-24 bg-emas rounded-full mx-auto'></div>
            <p className='mt-6 text-sm'>Tema yang Beragam</p>
          </div>

          <div>
            <div className='w-24 h-24 bg-emas rounded-full mx-auto'></div>
            <p className='mt-6 text-sm'>Fitur Undangan Lengkap</p>
          </div>
        
          
        </div>
      </section>  
    </section>
  )
}
