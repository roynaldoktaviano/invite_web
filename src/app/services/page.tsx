import React from 'react'
import Image from 'next/image'
import ButtonGold from '../component/ButtonGold'

export default function page() {
    return (
        <section className='mb-[10vh]'>

            {/* Hero Section */}
            <section className='hero w-full h-fit md:h-screen  flex  relative  '>
                <div className='w-full h-[37vh] md:h-screen absolute bg-half-round bg-cover md:bg-contain bg-no-repeat md:bg-repeat-round grid grid-cols-2 items-center px-[10vh]'>
                    <div>
                        <Image 
                            src='/services.png'
                            width={400}
                            height={300}
                            alt='Digital Invitation Services'
                            className='mx-auto'
                        />
                    </div>
                    <div>
                        <h1 className='text-prim text-[7vw] md:text-[4.5vw] text-left mb-[2vh] md:mb-[6vh] leading-tight'> <span className='italic text-emas'>Our</span> Services </h1>

                        <p className='text-[3vw] md:text-[1.1vw] text-left mt-[2vh] md:mt-[4.4vh] leading-[2.5vh] md:leading-[4vh]'>Invite You hadir memberikan solusi untuk membantu & memudahkan anda dalam membagikan undangan ke para kerabat terdekat dengan cara yang lebih simple, kekinian & fleksibel dalam bentuk undangan digital.</p>

                        <p className='text-[3vw] md:text-[1.1vw] text-left mt-[2vh] md:mt-[4.4vh] leading-[2.5vh] md:leading-[4vh] mb-[5vh]'>Invite You menyediakan layanan pembuatan undangan digital untuk berbagai acara spesial, seperti pernikahan, tunangan, ulang tahun, dan acara-acara lainnya.</p>
                        
                        <ButtonGold link='/' label='Order Now' />
                    </div>
                </div>
            </section>

            {/* USP Section */}
            <div className='px-[40vh] mt-[-15vh] relative z-20'>
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
            </div>

            {/* Invitation Section */}
            <section className='mt-[15vh]'>
                <div className='px-[10vw] mb-[15vh]'>
                    <h2 className='text-[9vw] text-center md:text-[4.5vw]'> <span className='text-emas italic'> Choose</span> Invitation </h2>
                    <p className='text-[3vw] md:text-[1.1vw] text-center mt-[2vh] md:mt-[2vh] leading-[2.5vh] md:leading-[4vh]'>Invite You hadir memberikan solusi untuk membantu & memudahkan anda dalam membagikan undangan ke para kerabat terdekat dengan cara yang lebih simple, kekinian & fleksibel dalam bentuk undangan digital.</p>
                </div>

                <div className='grid grid-cols-3 px-[4.5vw] gap-[3.6vw] mt-[1vh] w-full h-full'>
                <div className='w-full relative h-fit'>
                    <img src="./img_1.png" alt="Undangan Acara Wedding" className='w-[25vw] ml-auto' />
                    <img src="./flower.png" alt="Flower Vector" className='w-[12vw] absolute bottom-[72vh] md:bottom-[-9vh] z-[-1]' />
                </div>

                <div className='w-full relative pt-[5vh] md:pt-[9.6vh] h-fit'>
                    <img src="./img_2.png" alt="Undangan Acara Wedding" className=' z-20 w-[25vw] mx-auto' />
                </div>

                <div className='w-full relative h-fit'>
                    <img src="./img_3.png" alt="Undangan Acara Wedding" className=' z-20 w-[25vw] mr-auto' />
                    <img src="./flower_2.png" alt="Flower Vector" className='w-[12vw] absolute top-[-2.5vh] md:top-[-12vh] z-[-1] right-0' />
                </div>

                </div>
            </section>

            {/* Special Feature */}
            <section className='mt-[10vh]'>
                <div className='px-[10vw] mb-[15vh]'>
                    <h2 className='text-[9vw] text-center md:text-[4.5vw]'> <span className='text-emas italic'> Special</span> Feature </h2>
                    <p className='text-[3vw] md:text-[1.1vw] text-center mt-[2vh] md:mt-[2vh] leading-[2.5vh] md:leading-[4vh]'>Invite You hadir memberikan solusi untuk membantu & memudahkan anda dalam membagikan undangan ke para kerabat terdekat dengan cara yang lebih simple, kekinian & fleksibel dalam bentuk undangan digital.</p>
                </div>

                <div className='flex gap-[4vw] justify-between items-center px-[10vw]'>
                    <div>
                        <p>Test</p>
                    </div>
                    <div>
                        <Image
                        src ='/phone.png'
                        width={300}
                        height={600}
                        alt='Invite You Special Feature'
                        />
                    </div>
                    <div>
                        <p>Test</p>
                    </div>
                </div>
            </section>
        </section>
    )
}
