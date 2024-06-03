import React from 'react'
import { Bebas_Neue } from 'next/font/google'
import Link from 'next/link'
const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400' })
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className='max-w-[1100px] mx-4 sm:mx-[4vw] xl:mx-auto mt-6 pb-2 sm:pt-3 sm:mt-8 md:pb-4 md:pt-5 lg:mt-10  border-b-2 sm:border-y-2 border-gray-500 flex justify-between'>
            <div className='flex items-center justify-center gap-1 sm:gap-2'>
                <h1 className={`${bebas.className} text-[2rem] sm:text-[2.5rem] md:text-[2.8rem] xl:text-[3.5rem] leading-[2rem]`}><Link href='/'>portfolio</Link></h1>
                <p className=' text-[0.8rem] sm:text-[1rem] xl:text-[1.2rem] leading-[0.7rem] sm:leading-[0.8rem] xl:leading-[1rem] font-semibold'>code.<br /><span>believe</span></p>
            </div>
            <div className='flex gap-4 items-center justify-center'>
                <ul className=' list-none hidden sm:flex items-center justify-center gap-8'>
                    <li className={`${bebas.className} text-[1.2rem] md:text-[1.3rem] xl:text-[1.4rem] leading-[1.3rem] hover:text-slate-500`}><Link href='/'>ABOUT</Link></li>
                    <li className={`${bebas.className} text-[1.2rem] md:text-[1.3rem] xl:text-[1.4rem] leading-[1.3rem] hover:text-slate-500`}><Link href='/'>EDUCATION</Link></li>
                    <li className={`${bebas.className} text-[1.2rem] md:text-[1.3rem] xl:text-[1.4rem] leading-[1.3rem] hover:text-slate-500`}><Link href='/'>PROJECTS</Link></li>


                </ul>

                <Image src='/navbar-img.png' alt='navbar-img' width={500} height={500} className='hidden xl:block w-[7rem] mt-[-7rem] grayscale' />
            </div>


        </div>
    )
}

export default Navbar
