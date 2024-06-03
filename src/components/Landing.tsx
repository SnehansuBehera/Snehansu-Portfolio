import React from 'react'
import { Bebas_Neue } from 'next/font/google'
import Image from 'next/image'
const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400' })

const Home = () => {
    return (
        <div className='max-w-[1100px] mx-auto py-8'>
            <h1 className={`${bebas.className} text-[12rem] leading-[9rem] text-[#3b3834]`}>SNEHANSU BEHERA</h1>
            <div className='flex items-start justify-between py-6 gap-4'>
                <Image src='/portfolio-img.png' alt='portfolio-img' width={500} height={500} className='w-[23rem] rounded-lg grayscale' />
                <Image src='/vector.svg' alt='vector' width={500} height={500} className='w-[12rem] my-8' />
                <p className='text-[1.5rem] w-[26rem] text-[#443d34] font-bold my-8'>A freelance front-end developer and web designer helping startups all around the world gain their unfair advantage.
                </p>
            </div>

        </div>
    )
}

export default Home
