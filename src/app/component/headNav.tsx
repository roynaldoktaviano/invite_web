import React from 'react'
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export default function headNav() {
    
    const [iseMenuOpen, setMenuOpen] = React.useState(false);
    const menuItems = [
        'Home',
        'Services'
    ]
    
    return (
        <Navbar onMenuOpenChange={setMenuOpen} className='absolute w-96 mx-auto bg-cream'>
            <NavbarContent className='hidden sm:flex gap-4' justify='center'>
                <NavbarMenuToggle aria-label={iseMenuOpen ? "Close Menu" : "Open Menu"} className='sm:hidden'/>
                    <NavbarItem>
                        <Link href='/' aria-current="page" className='uppercase text-sm tracking-widest text-prim'>
                            Home
                        </Link>
                    </NavbarItem>
            </NavbarContent>

            <NavbarContent className='' justify='center'>
                <NavbarBrand>
                    <img src="./logo.png" alt="Logo Invite You" className='w-32'/>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className='hidden sm:flex gap-4' justify='center'>
                    <NavbarItem>
                        <Link href='/service' aria-current="page" className='uppercase text-sm tracking-widest text-prim'>
                            Service
                        </Link>
                    </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}
