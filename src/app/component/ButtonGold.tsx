import React from 'react'

export default function ButtonGold(props:any) {
  return (
    <a href={props.link} target='_blank' className='linkButton text-[3vw] md:text-[1.5vw] py-[1vh] md:py-[2vh] px-[3vw] rounded-[2.5vw] border-[0.2vw] text-emas border-emas hover:bg-brown hover:text-white transition-colors '> {props.label}</a>
  )
}
