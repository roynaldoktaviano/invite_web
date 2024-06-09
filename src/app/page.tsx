"use client"

import React from 'react'
import ButtonGold from './component/ButtonGold'
import TestimonyBox from './component/TestimonyBox'
import HeadNav from './component/headNav'

export default function page() {
  return (
    <section>
      <section className='hero w-full h-fit md:h-screen  flex  relative over '>
        <div className='w-full h-[37vh] md:h-screen absolute bg-half-round bg-cover md:bg-contain bg-no-repeat md:bg-repeat-round'></div>
        <div className='md:m-auto z-20 flex w-full h-fit md:h-screen'>
          <div className='text-center mt-[11vh] md:mt-[18vh] h-fit'>
            <h1 className='text-prim text-[7vw] md:text-[4.5vw] px-[12vw] md:px-[26vw] text-center mb-[2vh] md:mb-[6vh] leading-tight'>Create <span className='italic text-emas'> Special </span> Invitation for Your <span className='italic text-emas'> Special </span> Day</h1>        

            <ButtonGold link='https://api.whatsapp.com/send/?phone=%2B6285235622445&text&type=phone_number&app_absent=0' label='Order Now' />

            <div className='grid grid-cols-3 px-[4.5vw] gap-[3.6vw] mt-[4vh] w-full h-full'>
              <div className='w-full relative h-fit'>
                <img src="./img_1.webp" alt="Undangan Acara Wedding" className='w-[25vw] ml-auto' />
                <img src="./flower.webp" alt="Flower Vector" className='w-[12vw] absolute bottom-[72vh] md:bottom-[-9vh] z-[-1]' />
              </div>

              <div className='w-full relative pt-[5vh] md:pt-[9.6vh] h-fit'>
                <img src="./img_2.webp" alt="Undangan Acara Wedding" className=' z-20 w-[25vw] mx-auto' />
              </div>

              <div className='w-full relative h-fit'>
                <img src="./img_3.webp" alt="Undangan Acara Wedding" className=' z-20 w-[25vw] mr-auto' />
                <img src="./flower_2.webp" alt="Flower Vector" className='w-[12vw] absolute top-[-2.5vh] md:top-[-12vh] z-[-1] right-0' />
              </div>

            </div>

          </div>
        </div>
      </section>

      <section className='mt-[10vh] lg:mt-[50vh] relative text-center px-[10vw] md:px-[20vw]'>
        <h2 className='text-[9vw] md:text-[4.5vw]'>About <span className='text-emas italic'> Invite You </span> </h2>
        <p className='text-[3vw] md:text-[1.1vw] text-center mt-[2vh] md:mt-[4.4vh] leading-[2.5vh] md:leading-[4vh]'>Invite You hadir memberikan solusi untuk membantu & memudahkan anda dalam membagikan undangan ke para kerabat terdekat dengan cara yang lebih simple, kekinian & fleksibel dalam bentuk undangan digital.</p>

        <p className='text-[3vw] md:text-[1.1vw] text-center mt-[2vh] md:mt-[4.4vh] leading-[2.5vh] md:leading-[4vh]'>Invite You menyediakan layanan pembuatan undangan digital untuk berbagai acara spesial anda, seperti pernikahan, tunangan, ulang tahun, dan acara-acara lainnya.</p>

        <div className='flex items-center justify-between mt-[5.6vh]'>
          <div className='text-center'>
            <div className='w-[10vw] h-[10vw] md:w-[9vw] md:h-[9vw] bg-emas rounded-full mx-auto flex'>
              <img src="./icon1.png" alt="Desain Premium dan Eksklusif" className='w-[4.4vw] m-auto' />
            </div>
            <p className='mt-6 text-[3vw] md:text-[1.1vw]'>Desain Premium & Eksklusif</p>
          </div>

          <div>
            <div className='w-[10vw] h-[10vw] md:w-[9vw] md:h-[9vw] bg-emas rounded-full mx-auto flex'>
              <img src="./icon2.png" alt="Desain Premium dan Eksklusif" className='w-[4.4vw] m-auto' />
            </div>
            <p className='mt-6 text-[3vw] md:text-[1.1vw]'>Tema yang Beragam</p>
          </div>

          <div>
            <div className='w-[10vw] h-[10vw] md:w-[9vw] md:h-[9vw] bg-emas rounded-full mx-auto flex'>
              <img src="./icon3.png" alt="Desain Premium dan Eksklusif" className='w-[4.4vw] m-auto' />
            </div>
            <p className='mt-6 text-[3vw] md:text-[1.1vw]'>Fitur Undangan Lengkap</p>
          </div>
        </div>
      </section>  

      <section className='bg-half-round bg-cover md:bg-contain bg-repeat-round w-full mt-[9.6vh] text-center py-[4vh] md:py-[10vh] px-[10vw] md:px-[20vw]'>
        <h2 className='text-[9vw]  md:text-[4.5vw]'><span className='text-emas italic'> Our </span> Services </h2>
        <p className='text-[3vw] md:text-[1.1vw] text-center mt-[1.2vw] leading-[2.5vh] md:leading-[4.4vh]'>Berbagai pilihan desain website yang dapat disesuaikan dengan kebutuhan acara dan tema.</p>
        
        <div className='grid grid-cols-4 mb-[3vh] md:mb-[7.5vh] mt-[3vh] md:mt-[2vw]'>
          <div>
            <img src="./phone1.png" alt="Contoh Undangan" />
          </div>

          <div className='pt-[3.5vh]'>
            <img src="./phone2.png" alt="Contoh Undangan" />
          </div>

          <div className='pt-[3.5vh]'>
            <img src="./phone3.png" alt="Contoh Undangan" />
          </div>

          <div>
            <img src="./phone4.png" alt="Contoh Undangan" />
          </div>
        </div>
        <ButtonGold link='/services' label='See More Services' />
      </section>

      <section className='mt-[5vh] md:mt-[9vh] grid grid-cols-3 px-[10vw] md:px-[15vw]'>
        <div className=''>
          <img src="./couples.png" alt="Our Testimony" className='w-[29vw]' />
        </div>

        <div className='grid grid-cols-4 items-center h-fit col-span-2'> 
          <div className='flex justify-between items-center w-[8vw]'>
              <button className=' p-[1vw]  w-fit h-fit rounded-full border border-emas'>
                <img src="./arrow_l.png" alt="Testimony Arrow" className='w-[1vw] h-auto' />
              </button>
              <button className=' p-[1vw] border border-emas w-fit h-fit rounded-full'>
                <img src="./arrow_r.png" alt="Testimony Arrow" className='w-[1vw] h-auto' />
              </button>
          </div>

          <div className='text-right col-span-3'>
            <h2 className='text-[5vw] md:text-[4.5vw]'><span className='text-emas italic'> Our </span> Testimony </h2>
          </div>

          <div className='col-span-4 flex justify-between w-full h-full overflow-hidden mt-[3.6vw] gap-[1.6vw]'>

            <TestimonyBox name='Untitled Name' pesan='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor venenatis sodales. Morbi vulputate eget velit ac viverra.' />

            <TestimonyBox name='Untitled Name' pesan='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor venenatis sodales. Morbi vulputate eget velit ac viverra.' />

          </div>
        </div>
      </section>

  
    </section>
  )
}
