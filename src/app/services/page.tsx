import React from 'react'
import Image from 'next/image'
import ButtonGold from '../component/ButtonGold'
import FeatureBar from '../component/FeatureBar'
import FeatureBarRight from '../component/FeatureBarRight'
import TemplateInv from '../component/TemplateInv'

export default function page() {
    return (
        <section className='mb-[10vh] w-full'>

            {/* Hero Section */}
            <section className='hero w-full h-fit md:h-screen  flex  relative  '>
                <div className='w-full h-screen md:h-screen md:absolute bg-half-round bg-cover md:bg-contain bg-no-repeat md:bg-repeat-round grid grid-cols-1 md:grid-cols-2 md:items-center px-[2vh] md:px-[10vh] py-[8vh] md:py-0'>
                    <div className='pt-8 md:pt-0'>
                        <Image  
                            src='/service.png'
                            width={400}
                            height={300}
                            alt='Digital Invitation Services'
                            className='mx-auto'
                        />
                    </div>
                    <div>
                        <h1 className='text-prim text-[8vw] md:text-[4.5vw] text-left mb-[2vh] md:mb-[6vh] leading-tight'> <span className='italic text-emas'>Our</span> Services </h1>

                        <p className='text-[3vw] md:text-[1.1vw] text-left mt-[2vh] md:mt-[4.4vh] leading-[2.5vh] md:leading-[4vh]'>Invite You hadir memberikan solusi untuk membantu & memudahkan anda dalam membagikan undangan ke para kerabat terdekat dengan cara yang lebih simple, kekinian & fleksibel dalam bentuk undangan digital.</p>

                        <p className='text-[3vw] md:text-[1.1vw] text-left mt-[2vh] md:mt-[4.4vh] leading-[2.5vh] md:leading-[4vh] mb-[5vh]'>Invite You menyediakan layanan pembuatan undangan digital untuk berbagai acara spesial, seperti pernikahan, tunangan, ulang tahun, dan acara-acara lainnya.</p>
                        
                        <ButtonGold link='/' label='Order Now' />
                    </div>
                </div>
            </section>

            {/* USP Section */}
            <div className='px-[5vw] md:px-[40vh] w-full mt-[-15vh] relative z-20'>
                <div className='grid grid-cols-2 gap-[7vh] md:flex items-center justify-between mt-[5.6vh]'>
                    <div className='text-center'>
                        <div className='w-[14vw] h-[14vw] md:w-[9vw] md:h-[9vw] bg-emas rounded-full mx-auto flex'>
                        <img src="./icon1.png" alt="Desain Premium dan Eksklusif" className='w-[7vw] md:w-[4.4vw] m-auto' />
                        </div>
                        <p className='mt-6 text-[3vw] md:text-[1.1vw]'>Desain Premium & Eksklusif</p>
                    </div>

                    <div className='text-center'>
                        <div className='w-[14vw] h-[14vw] md:w-[9vw] md:h-[9vw] bg-emas rounded-full mx-auto flex'>
                        <img src="./icon2.png" alt="Desain Premium dan Eksklusif" className='w-[7vw] md:w-[4.4vw] m-auto' />
                        </div>
                        <p className='mt-6 text-[3vw] md:text-[1.1vw]'>Tema yang Beragam</p>
                    </div>

                    <div className='text-center col-span-2 md:col-span-1'>
                        <div className='w-[14vw] h-[14vw] md:w-[9vw] md:h-[9vw] bg-emas rounded-full mx-auto flex'>
                        <img src="./icon3.png" alt="Desain Premium dan Eksklusif" className='w-[7vw] md:w-[4.4vw] m-auto' />
                        </div>
                        <p className='mt-6 text-[3vw] md:text-[1.1vw]'>Fitur Undangan Lengkap</p>
                    </div>
                </div>
            </div>

            {/* Invitation Section */}
            <section className='mt-[7vh] md:mt-[15vh]'>
                <div className='px-[10vw] mb-[7vh] md:mb-[15vh]'>
                    <h2 className='text-[9vw] text-center md:text-[4.5vw]'> <span className='text-emas italic'> Choose</span> Invitation </h2>
                    <p className='text-[3vw] md:text-[1.1vw] text-center mt-[2vh] md:mt-[2vh] leading-[2.5vh] md:leading-[4vh]'>Invite You hadir memberikan solusi untuk membantu & memudahkan anda dalam membagikan undangan ke para kerabat terdekat dengan cara yang lebih simple, kekinian & fleksibel dalam bentuk undangan digital.</p>
                </div>

                <div className='grid grid-cols-3 px-[4.5vw] gap-[3.6vw] mt-[1vh] w-full h-full'>
                <div className='w-full relative h-fit'>
                    <img src="./img_4.webp" alt="Undangan Acara Wedding" className='w-[25vw] ml-auto' />
                    <img src="./flower.webp" alt="Flower Vector" className='w-[12vw] absolute bottom-[-2vh] md:bottom-[-9vh] z-[-1]' />
                </div>

                <div className='w-full relative pt-[5vh] md:pt-[9.6vh] h-fit'>
                    <img src="./img_5.webp" alt="Undangan Acara Wedding" className=' z-20 w-[25vw] mx-auto' />
                </div>

                <div className='w-full relative h-fit'>
                    <img src="./img_6.webp" alt="Undangan Acara Wedding" className=' z-20 w-[25vw] mr-auto' />
                    <img src="./flower_2.webp" alt="Flower Vector" className='w-[12vw] absolute top-[-2.5vh] md:top-[-12vh] z-[-1] right-0' />
                </div>

                </div>
            </section>

            {/* Template List */}
            <section className='mt-[16vh] md:mt-[10vh]'>
                <div className='px-[10vw] mb-[15vh]'>
                    <h2 className='text-[9vw] text-center md:text-[4.5vw] mb-6'> <span className='text-emas italic'> Invitation</span> Template </h2>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        <TemplateInv link='/temp1.webp' name='Elegant Inv.' alt='Template Wedding Invitation' button='https://wedding-daniel-stefani.netlify.app/'/>

                        <TemplateInv link='/temp2.webp' name='Classic Inv.' alt='Template Wedding Invitation' button='https://roynaldoktaviano.github.io/template1/'/>


                        <TemplateInv link='/temp3.webp' name='Classic Cyan Inv.' alt='Template Wedding Invitation' button='https://roynaldoktaviano.github.io/template-cyan/'/>

                        <TemplateInv link='/temp4.webp' name='Classic Violet Inv.' alt='Template Wedding Invitation' button='https://roynaldoktaviano.github.io/template-violet/'/>

                        <TemplateInv link='/temp5.webp' name='Lovely Inv.' alt='Template Wedding Invitation' button='https://roynaldoktaviano.github.io/lovely-template/'/>
                        

                        <TemplateInv link='/temp6.png' name='Lovely Basic Inv.' alt='Template Wedding Invitation' button='https://roynaldoktaviano.github.io/lovely-2/'/>
                    </div>
                </div>
            </section>

            {/* Special Feature */}
            <section className='mt-[16vh] md:mt-[10vh]'>
                <div className='px-[10vw] mb-[15vh]'>
                    <h2 className='text-[9vw] text-center md:text-[4.5vw]'> <span className='text-emas italic'> Special</span> Feature </h2>
                    <p className='text-[3vw] md:text-[1.1vw] text-center mt-[2vh] md:mt-[2vh] leading-[2.5vh] md:leading-[4vh]'>Invite You hadir memberikan solusi untuk membantu & memudahkan anda dalam membagikan undangan ke para kerabat terdekat dengan cara yang lebih simple, kekinian & fleksibel dalam bentuk undangan digital.</p>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-3 gap-[9vw] md:gap-[4vw] h-fit md:h-screen md:justify-between items-start md:items-center px-[10vw]'>
                    <div className='flex flex-col gap-y-[6vh] md:gap-y-0 md:justify-between h-fit md:h-screen'>
                        <FeatureBar 
                        namafitur='Custom Nama Tamu'
                        gambar='/fitur_1.png'
                        deskripsi='Cantumkan nama tamu yang akan diundang
                        pada halaman depan undangan'
                        />
                        <FeatureBar 
                        namafitur='Countdown Timer'
                        gambar='/fitur_2.png'
                        deskripsi='Hitung mundur acara spesialmu sebagai
                        pengingat kepada para tamu undangan'
                        />

                        <FeatureBar 
                        namafitur='Galeri'
                        gambar='/fitur_3.png'
                        deskripsi='Anda dapat menambahkan foto atau video
                        terbaik pada desain undangan'
                        />
                        
                        <FeatureBar 
                        namafitur='Rekening/E-wallet'
                        gambar='/fitur_4.png'
                        deskripsi='Mudahkan tamu undangan mengirimkan
                        tanda kasih via transfer bank/ E-wallet'
                        />


                    </div>
                    <div className='h-fit hidden md:block'>
                        <Image
                        src ='/phone.png'
                        width={300}
                        height={600}
                        alt='Invite You Special Feature'
                        className='w-[30vw] mx-auto'
                        />
                    </div>
                    <div className='flex flex-col gap-y-[6vh] md:gap-y-0 md:justify-between h-fit md:h-screen '>
                        <FeatureBarRight
                        namafitur='Reservasi'
                        gambar='/fitur_5.png'
                        deskripsi='Tamu undangan dapat memberikan
                        konfirmasi kehadirannya dalam acara anda'
                        />
                        <FeatureBarRight
                        namafitur='Integrasi Kalender'
                        gambar='/fitur_6.png'
                        deskripsi='Tamu dapat menyimpan tanggal acara di
                        calendar supaya tidak melewatkan acaramu'
                        />

                        <FeatureBarRight 
                        namafitur='Lagu / Instrumen'
                        gambar='/fitur_7.png'
                        deskripsi='Jadikan undangan lebih emosional dengan
                        lagu atau instrumen favorit anda'
                        />
                        
                        <FeatureBarRight
                        namafitur='Fitur Ucapan'
                        gambar='/fitur_8.png'
                        deskripsi='Tamu undangan dapat memberikan ucapan
                        dan doa terbaik secara langsung di dalam
                        undangan'
                        />


                    </div>
                </div>
            </section>
        </section>
    )
}
