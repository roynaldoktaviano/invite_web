import React from 'react'

export default function footerNav() {
  return (
    <footer className='relative w-full h-auto'>
    <div className='bg-emas w-3/4 mx-auto py-[2vh] md:py-[6vh] text-center rounded-md relative z-20'>
      <h2 className='text-white text-[5vw] md:text-[4.5vw]'><span className='text-brown italic'> Create Your </span> Digital Invitation </h2>
      <p className='text-white mt-[1] md:mt-[2vh] mb-[1vh] md:mb-[5vh] text-[2vw] md:text-[1.1vw]'>Hubungi kami  & konsultasikan kebutuhan undangan digital Anda!</p>
      <button  className='linkButton text-[2.5vw] md:text-[1.5vw] py-[0.5vh] md:py-[2vh] px-[3vw] hover:bg-brown transition-colors rounded-[2.4vw] border-[0.2vw] text-white border-white '> Whatsapp Kami</button>
    </div>

    <div className='bg-cream w-full h-full pt-[13vh] md:pt-[30vh] pb-[6vh] px-[20vw] text-center mt-[-9vh] md:mt-[-23vh]'>
      <img src="./logo.png" alt="Invite You - Jasa Pembuatan Undangan Digital" className='w-[24vw] mb-[2vh] md:mb-[4vh] mx-auto' />
      <p className='text-[2.5vw] md:text-[1.1vw]'>Invite You menyediakan layanan pembuatan undangan digital untuk berbagai acara spesial anda, seperti pernikahan, tunangan, ulang tahun, dan acara-acara lainnya.</p>
      <div className='flex mt-[3vh] md:mt-[6vh] gap-[1.6vw] justify-center'>
        <a href="">
          <img src="./ig.png" alt="Instagram Invite You" className='w-[4vw] md:w-[3vw]' />
        </a>
        <a href="">
          <img src="./Tiktok.png" alt="Instagram Invite You" className='w-[4vw] md:w-[3vw]' />
        </a>
        <a href="">
          <img src="./WA.png" alt="Instagram Invite You" className='w-[4vw] md:w-[3vw]' />
        </a>
        <a href="">
          <img src="./Email.png" alt="Instagram Invite You" className='w-[4vw] md:w-[3vw]' />
        </a>
      
      </div>
    </div>
  </footer>
  )
}
