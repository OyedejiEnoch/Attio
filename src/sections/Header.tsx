import Image from 'next/image'
import React from 'react'
import logo from '@/assets/logo.svg'
import Button from '@/components/Button'
import { SidebarMenu } from '@/components/SidebarMenu'

const Header = () => {

    const navLinks =[
        {
            id:1,
            title:'Product',
            link:'#product'
        },
        {
            id:1,
            title:'Resources',
            link:'#resources'
        },
        {
            id:1,
            title:'Customers',
            link:'#customers'
        },
        {
            id:1,
            title:'Pricing',
            link:'#pricing'
        },
    ]

  return (
    <section className='py-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center px-4'>
        
            <div className='flex items-center gap-12'>
                <div>
                    <Image src={logo} alt='attio-logo' />
                </div>

                <nav className='hidden md:flex items-center gap-10'>
                   {navLinks.map((link)=>(
                    <a href={link.link} key={link.id} className=''>
                        <span>{link.title}</span>
                    </a>
                   ))} 
                </nav>
            </div>

            <div className='hidden lg:flex items-center gap-4'>
                <Button variant='secondary' >Sign In</Button>
                <Button variant='primary' >Start for free</Button>
            </div>

            <div className='flex lg:hidden'>
                <SidebarMenu />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Header
