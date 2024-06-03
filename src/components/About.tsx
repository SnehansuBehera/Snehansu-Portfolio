import React from 'react'
import { SlSocialLinkedin } from "react-icons/sl";
import { IoMailOutline } from "react-icons/io5";
import { Bebas_Neue } from 'next/font/google'
const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400' })
import Image from 'next/image'
import Link from 'next/link';
import Education from './Education'


const About = () => {
    return (
        <div className='max-w-[1100px] mx-auto my-6 pb-4'>
            <h1 className={`${bebas.className} text-center text-[3.5rem]`}>ABOUT</h1>
            <p className=' font-light w-[22.6rem] mx-auto border-t-2 border-gray-500 pt-2'>KOLKATA BASED TECH + SPORTS ENTHUSIAST</p>
            <div className='py-8 flex items-center justify-center gap-6'>
                <Image src='/about-img.png' alt='about-img' width={500} height={500} className='w-[26rem] grayscale rounded-lg duration-1000 delay-150
                scale-x hover:scale-x-[-1] hover:grayscale-0' />
                <div className='px-10'>
                    <div className='flex flex-col justify-center items-start gap-6 w-[20rem] mx-auto'>
                        <h1 className='text-[2rem] font-bold'>Hi, I'm Snehansu.</h1>
                        <p className='text-[0.85rem]'>I'm a freelance content writer and editor living in Atlanta. I write about tech, culture, and food. I also work as a freelance content strategist and product marketing writer for B2B SaaS startup clients, marketing agencies, and tech companies.</p>
                        <p className='text-[0.85rem]'>I have bylines at Delta Sky Magazine, DWELL, Apartment Therapy, Eater, The Atlanta Journal-Constitution, The Washington Post, Atlanta Magazine, The Bitter Southerner, Outside Magazine, and others.</p>
                        <p className='text-[0.85rem]'>During the day, I work as a product manager—and I’m looking for my next opportunity. Previously, I was the managing editor at Hypepotamus — a news publication covering technology and innovation in the Southeast.</p>
                        <p className='text-[0.85rem]'>Find me on LinkedIn, where I often share a little insight into my product management process.</p>
                        <p className='text-[0.85rem] font-semibold'>Let's chat!</p>
                        <div className='flex items-center justify-start gap-4'>
                            <Link href='/'><SlSocialLinkedin size={26} className='w-[1rem]' /></Link>
                            <Link href='/'><IoMailOutline size={26} className='w-[1rem]' /></Link>
                        </div>
                    </div>

                </div>

            </div>
            <Education />
        </div>
    )
}

export default About
