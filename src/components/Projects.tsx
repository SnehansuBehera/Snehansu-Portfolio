'use client'

import React from 'react'
import { Bebas_Neue } from 'next/font/google'
import Image from 'next/image'
import { PiLinkLight } from "react-icons/pi";
import { PiGithubLogoThin } from "react-icons/pi";
import Link from 'next/link';


const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400' })
const Projects = () => {

    // const staticData: any = [
    //     "apple", "banana", "cherry", "orange", "watermelon", "berry", "peach"
    // ]

    // const fetchSuggestions = async (query: any) => {
    //     const response = await fetch(`https://dummyjson.com/recipes/search?q=${query}`);
    //     if (response.ok) {
    //         const result = await response.json();
    //         return result.recipes;
    //     } else {
    //         throw new Error('Network Error');
    //     }
    // }
    return (
        <div id='projects' className='max-w-[1100px] mx-[4vw] lg:mx-auto pb-20'>
            <div className='flex flex-col gap-8 sm:flex-row items-center sm:justify-center sm:gap-[20vw] lg:justify-evenly'>
                <h1 className={`${bebas.className} text-center w-[11rem] text-[3.5rem] border-b-2 border-gray-500`}>Projects</h1>
                {/* <AutoComplete placeholder={"Enter Recipe"} staticData={staticData} fetchSuggestions={fetchSuggestions} dataKey={"name"} onSelect={(e: any) => console.log(e)} onChange={(input: any) => { }} customLoading={''} /> */}
                {/* onSelect={(res) => console.log(res)} */}
            </div>

            <div className='flex flex-wrap gap-4 items-center justify-center my-6 '>
                <div className='duration-1000 delay-150 w-full sm:w-[18rem] md:w-auto flex flex-col gap-4 justify-center rounded-md shadow-md shadow-gray-200 px-4 py-6'>
                    <Image src='/project1.png' alt='project-img' width={500} height={500} className='w-full sm:w-[20rem] rounded-md hover:contrast-50 hover:transform hover:ease-in' />
                    <div className='flex items-center justify-between'>
                        <p className='text-[1rem] font-semibold text-black'>BMI <span className='font-light'>CALCULATOR</span></p>
                        <div className='flex gap-4 items-center pr-1'>
                            <Link href='https://snehansubehera.github.io/BMI-CALCULATOR/'><PiLinkLight size={26} /></Link>
                            <Link href='https://github.com/SnehansuBehera/BMI-CALCULATOR'><PiGithubLogoThin size={26} /></Link>
                        </div>
                    </div>
                    <p className='text-[0.85rem] text-gray-400'>HTML CSS JAVASCRIPT</p>
                </div>
                <div className='duration-1000 delay-150 w-full sm:w-[18rem] md:w-auto flex flex-col gap-4 justify-center rounded-md shadow-md shadow-gray-200 px-4 py-6'>
                    <Image src='/project2.png' alt='project-img' width={500} height={500} className='w-full sm:w-[19rem] rounded-md hover:contrast-50' />
                    <div className='flex items-center justify-between'>
                        <p className='text-[1rem] font-bold text-black'>FORECAST <span className='font-light'>PRO</span></p>
                        <div className='flex gap-4 items-center pr-1'>
                            <Link href='https://snehansubehera.github.io/ForecastPro/'><PiLinkLight size={26} /></Link>
                            <Link href='https://github.com/SnehansuBehera/ForecastPro'><PiGithubLogoThin size={26} /></Link>
                        </div>
                    </div>
                    <p className='text-[0.85rem] text-gray-400'>HTML CSS JAVASCRIPT</p>

                </div>
                <div className='duration-1000 delay-150 w-full sm:w-[18rem] md:w-auto flex flex-col gap-4 justify-center rounded-md shadow-md shadow-gray-200 px-4 py-4'>
                    <Image src='/project3.png' alt='project-img' width={500} height={500} className='w-[60vw] mx-auto sm:w-[15rem] h-[50vw] sm:h-[9rem] md:h-[9rem] rounded-md hover:contrast-50' />
                    <div className='flex items-center justify-between gap-4'>
                        <p className='text-[1rem] font-bold text-black'>NEXTjs <br /><span className='font-light'>AUTHENTICATION</span></p>
                        <div className='flex gap-4 items-center pr-1'>
                            <Link href='https://authentication-using-nextjs.vercel.app'><PiLinkLight size={26} /></Link>
                            <Link href='https://github.com/SnehansuBehera/Authentication-using-Nextjs'><PiGithubLogoThin size={26} /></Link>
                        </div>
                    </div>
                    <p className='text-[0.85rem] text-gray-400 text-wrap'>NEXTjs TAILWIND TYPESCRIPT<br />MONGODB NODEMAILER </p>

                </div>
                <div className='duration-1000 delay-150 w-full sm:w-[18rem] md:w-auto flex flex-col gap-4 justify-center rounded-md shadow-md shadow-gray-200 px-4 py-4'>
                    <Image src='/project6.png' alt='project-img' width={500} height={500} className='w-[60vw] mx-auto sm:w-[15rem] h-[50vw] sm:h-[9rem] md:h-[9rem] rounded-md hover:contrast-50' />
                    <div className='flex items-center justify-between gap-4'>
                        <p className='text-[1rem] font-bold text-black'>RAG <br /><span className='font-light'>Chatbot</span></p>
                        <div className='flex gap-4 items-center pr-1'>
                            <Link href='https://chatrag.vercel.app'><PiLinkLight size={26} /></Link>
                            <Link href='https://github.com/SnehansuBehera/RAG-Chatbot'><PiGithubLogoThin size={26} /></Link>
                        </div>
                    </div>
                    <p className='text-[0.85rem] text-gray-400 text-wrap'>NEXTjs TAILWIND <br />SUPABASE VERCEL AI SDK </p>

                </div>
                <div className='duration-1000 delay-150 w-full sm:w-[18rem] md:w-auto flex flex-col gap-4 justify-center rounded-md shadow-md shadow-gray-200 px-4 py-4'>
                    <Image src='/project5.png' alt='project-img' width={500} height={500} className='w-full sm:w-[19rem] rounded-md hover:contrast-50' />
                    <div className='flex items-center justify-between gap-4'>
                        <p className='text-[1rem] font-bold text-black'>bookyourMeal <br /><span className='font-light'>MEALS APP</span></p>
                        <div className='flex gap-4 items-center pr-1'>
                            {/* <Link href='https://authentication-using-nextjs.vercel.app'><PiLinkLight size={26} /></Link> */}
                            <Link href='https://github.com/SnehansuBehera/bookyourMeal'><PiGithubLogoThin size={26} /></Link>
                        </div>
                    </div>
                    <p className='text-[0.85rem] text-gray-400 text-wrap'>REACTjs TAILWIND NODEjs<br />MONGODB EXPRESSjs REDUX TOOLKIT </p>

                </div>
                <div className='duration-1000 delay-150 w-full sm:w-[18rem] md:w-auto flex flex-col gap-4 justify-center rounded-md shadow-md shadow-gray-200 px-4 py-4'>
                    <Image src='/project4.png' alt='project-img' width={500} height={500} className='w-full sm:w-[19rem] rounded-md hover:contrast-50' />
                    <div className='flex items-center justify-between gap-4'>
                        <p className='text-[1rem] font-bold text-black'>QUICKY <br /><span className='font-light'>CHAT APP</span></p>
                        <div className='flex gap-4 items-center pr-1'>
                            {/* <Link href='https://authentication-using-nextjs.vercel.app'><PiLinkLight size={26} /></Link> */}
                            <Link href='https://github.com/SnehansuBehera/Quicky'><PiGithubLogoThin size={26} /></Link>
                        </div>
                    </div>
                    <p className='text-[0.85rem] text-gray-400 text-wrap'>NEXTjs TAILWIND TYPESCRIPT<br />MONGODB NEXTAUTH.js PUSHER PRISMA ORM </p>

                </div>

            </div>
        </div>
    )
}

export default Projects
