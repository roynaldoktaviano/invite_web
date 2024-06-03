"use client"

import React from 'react'
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export default function headNav() {
    
    const [iseMenuOpen, setMenuOpen] = React.useState(false);
    const menuItems = [
        'Home',
        'Services'
    ]
    
    return (
        <Navbar onMenuOpenChange={setMenuOpen} className='absolute w-full md:w-[40vw] py-[1vh] md:py-[3vh] mx-auto bg-cream'>
            <NavbarContent className='hidden sm:flex gap-[1.6vw]' justify='center'>
                <NavbarMenuToggle aria-label={iseMenuOpen ? "Close Menu" : "Open Menu"} className='sm:hidden'/>
                    <NavbarItem>
                        <Link href='/' aria-current="page" className='uppercase text-[1.1vw] tracking-[0.3vw] text-prim'>
                            Home
                        </Link>
                    </NavbarItem>
            </NavbarContent>

            <NavbarContent className='' justify='center'>
                <NavbarBrand>
                    <img src="./logo.png" alt="Logo Invite You" className='w-[20vw] md:w-[15vw]'/>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className='flex gap-[1.6vw]' justify='center'>
                    <NavbarItem>
                        <Link href='/service' aria-current="page" className='uppercase text-[3vw] md:text-[1.1vw] tracking-[0.3vw] text-prim'>
                            Service
                        </Link>
                    </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}
