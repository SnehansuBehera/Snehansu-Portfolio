'use client'

import React, { useEffect } from 'react'
import { useState } from 'react'
import { Bebas_Neue } from 'next/font/google'
import Image from 'next/image'
import { PiLinkLight } from "react-icons/pi";
import { PiGithubLogoThin } from "react-icons/pi";
import Link from 'next/link';
import axios from 'axios'
import Loader from './Loader'

const STATUS = {
    LOADING: "LOADING",
    SUCCESS: "SUCCESS",
    ERROR: "ERROR"
}

const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400' })
const Projects = () => {

    const [query, setQuery] = useState('');
    const [result, setResult] = useState([]);
    const [status, setStatus] = useState(STATUS.LOADING);


    useEffect(() => {
        const abortController = new AbortController();
        const { signal } = abortController;
        const fetchProject = async () => {
            try {
                setStatus(STATUS.LOADING);
                const { data } = await axios.post('api/projects', { query }, { signal });
                setStatus(STATUS.SUCCESS);
                setResult(data);
            } catch (error) {
                console.log(error);
                setStatus(STATUS.ERROR);
            }
        }
        const timeId = setTimeout(fetchProject, 1000);
        return () => {
            clearTimeout(timeId);
            abortController.abort();
        }

    }, [query])


    return (
        <div id='projects' className='max-w-[1100px] mx-[4vw] lg:mx-auto pb-20'>
            <div className='flex flex-col gap-8 sm:flex-row items-center sm:justify-center sm:gap-[20vw] lg:justify-evenly'>
                <h1 className={`${bebas.className} text-center w-[11rem] text-[3.5rem] border-b-2 border-gray-500`}>Projects</h1>

                {/* SEARCH BAR */}
                <div className='relative'>
                    <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} className='bg-transparent focus:bg-none py-3 px-5 rounded-2xl shadow-md shadow-zinc-200 focus:outline-none' placeholder='Search Tech Stacks' />
                </div>
            </div>

            <ul className='flex flex-wrap gap-4 items-center justify-center xl:justify-start my-6'>

                {status === STATUS.LOADING &&
                    <div className='flex justify-center items-center w-full'>
                        <Loader />
                    </div>
                }
                {status === STATUS.ERROR && <div className='px-5 py-2 text-red-500 ring-1 ring-red-400'>ERROR.</div>}
                {status === STATUS.SUCCESS &&
                    result.map((product: any) => {
                        return <div key={product.id} className='duration-1000 delay-150 w-full sm:w-[18rem] md:w-auto flex flex-col gap-4 justify-center rounded-md shadow-md shadow-gray-200 px-4 py-6'>
                            <Image src={product.img} alt='project-img' width={500} height={500} className='w-full sm:w-[20rem] rounded-md hover:contrast-50 hover:transform hover:ease-in' />
                            <div className='flex items-center justify-between'>
                                <p className='text-[1rem] font-semibold text-black'>{product.name} <span className='font-light'>{product.subname}</span></p>
                                <div className='flex gap-4 items-center pr-1'>
                                    {product.website && <Link href={product.website}><PiLinkLight size={26} /></Link>}
                                    <Link href={product.github}><PiGithubLogoThin size={26} /></Link>
                                </div>
                            </div>
                            <div className='flex justify-start items-center gap-2 flex-wrap w-[16.5rem] sm:w-[20rem]'>
                                {product.techStack.map((tech: any) => (
                                    <p className='text-[0.85rem] text-zinc-500 leading-[0.85rem]'>{tech}</p>
                                ))}
                            </div>

                        </div>
                    })}
                {result.length === 0 && query.length > 0 &&
                    <div className='flex justify-center items-center w-full h-full'>
                        <h1 className='text-lg font-semibold text-gray-800'>No Projects Found</h1>
                    </div>
                }

            </ul>

        </div>
    )
}

export default Projects
