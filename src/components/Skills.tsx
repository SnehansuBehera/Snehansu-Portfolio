import React from 'react'
import { Bebas_Neue } from 'next/font/google'
const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400' })
import Image from 'next/image'

const Skills = () => {
    return (
        <div className='bg-gray-800 max-w-[1100px] flex flex-col gap-8 mx-auto my-10 rounded-lg py-10 px-[4.3rem] text-white'>
            <h1 className={`${bebas.className} mx-auto text-[2rem] border-t-2 border-white w-[6.7rem]`}>TOP SKILLS</h1>
            <div className='flex items-center justify-center gap-6'>
                <Image src='/skills/CSS3_logo.png' alt='skills' width={500} height={500} className='w-[4rem]' />
                <Image src='/skills/javascript-logo.webp' alt='skills' width={500} height={500} className='w-[4rem]' />
                <Image src='/skills/typescript-icon.svg' alt='skills' width={500} height={500} className='w-[4rem]' />
                <Image src='/skills/tailwind-logo.svg' alt='skills' width={500} height={500} className='w-[6rem]' />
                <Image src='/skills/React-logo.svg' alt='skills' width={500} height={500} className='w-[4rem]' />
                <Image src='/skills/Next-logo.webp' alt='skills' width={500} height={500} className='w-[4rem]' />
                <Image src='/skills/Notion-logo.webp' alt='skills' width={500} height={500} className='w-[4rem]' />
                <Image src='/skills/node-logo.webp' alt='skills' width={500} height={500} className='w-[4rem]' />
                <Image src='/skills/expressjs.png' alt='skills' width={500} height={500} className='w-[4rem]' />
                <Image src='/skills/mongodb-icon.svg' alt='skills' width={500} height={500} className='w-[2rem]' />


            </div>
        </div>
    )
}

export default Skills
