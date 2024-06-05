import Image from 'next/image'
import React from 'react'

export default function FeatureBarRight(props: any) {
  return (
    <div className='grid grid-cols-3 gap-x-[2.3vw] gap-y-[1.8vh] items-center'>
        
        <div>
            <Image
            src={props.gambar}
            width={50}
            height={50}
            alt={props.namafitur}
            className='mr-auto w-[4vw] '
            />
        </div>

        <div className='col-span-2 text-left'>
            <h3 className='text-[2vw] md:text-[1.6vw]'>{props.namafitur}</h3>
        </div>
        
        <div className='col-span-3'>
            <p className='text-justify text-[2vw] md:text-[1.1vw] md:leading-[4vh]'>{props.deskripsi}</p>
        </div>
    </div>
  )
}
