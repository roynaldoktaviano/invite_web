import React from 'react'

export default function TestimonyBox(props:any) {
  return (
    <div className='border border-emas px-[3.6vw] py-[2vh] md:py-[4vh] min-w-[48%] h-fit rounded-[1.6vw]'>
              <div className='grid grid-cols-3 items-center'> 
                  <div className='text-left'>
                    <img src="./dummy.png" alt="Testimony Image" className='w-[4.8vw]' />
                  </div>

                  <div className='col-span-2 text-right'>
                      <h3 className='text-[1.2vw]'>{props.name}</h3>
                  </div>
              </div>

              <p className='mt-[1vh] md:mt-[2vh] text-[1vw] leading-relaxed'>{props.pesan}</p>

              <img src="./star.png" alt="Bintang" className='w-[8vw] h-auto mt-[1vh] md:mt-[3vh]' />
            </div>
  )
}
