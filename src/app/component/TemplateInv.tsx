import Image from 'next/image'
import React from 'react'

export default function TemplateInv(props:any) {
  return (
    <div className='text-center'>
        <Image
        src={props.link}
        width={400}
        height={500}
        alt={props.alt}
        className='mb-5 mt-4'
        />
        <h2 className='mb-6 text-2xl text-emas italic'>{props.name}</h2>

        <a href={props.button} target='_blank' className='px-6 py-2 bg-prim text-white text-sm hover:bg-emas hover:text-prim  transition-colors'>Preview Website </a>


    </div>
  )
}
