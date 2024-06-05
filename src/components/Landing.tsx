import React from 'react'
import { Bebas_Neue } from 'next/font/google'
import Image from 'next/image'
const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400' })

const Home = () => {
    return (
        <div className='max-w-[1100px] mx-4 sm:mx-[4vw] xl:mx-auto py-6 sm:py-8 md:py-12'>
            <h1 className={`${bebas.className} text-[28vw] leading-[23vw] sm:text-[29vw] md:text-[16vw] md:leading-[10vw] lg:text-[15vw] lg:leading-[9vw] lg:flex-grow xl:text-[12rem] xl:leading-[9rem] text-[#3b3834]`}>SNEHANSU BEHERA</h1>
            <div className='flex flex-col sm:flex-row sm:flex-wrap items-start justify-between py-2 sm:py-6 lg:py-6  gap-4 lg:gap-5'>
                <Image src='/portfolio-img.png' alt='portfolio-img' width={500} height={500} className='duration-1000 delay-150 w-full sm:w-[21rem] md:w-[18rem] md:h-[40vw] md:flex-grow lg:flex-grow-0 lg:w-[20rem] lg:h-auto xl:w-[23rem] rounded-lg grayscale' />
                <Image src='/vector.svg' alt='vector' width={500} height={500} className='duration-1000 delay-150 hidden sm:block w-[15rem] h-[16rem] md:w-[16rem] md:h-[30vw] md:flex-grow lg:flex-grow-0 lg:w-[11rem] lg:h-auto xl:w-[12rem] my-8' />

                <p className='duration-1000 delay-150 text-[5vw] leading-[7vw] w-full sm:w-full sm:text-[2rem] sm:leading-[6.5vw] md:text-[1.8rem] md:leading-[4.8vw] lg:text-[1.6rem] lg:w-[21rem] lg:leading-[2.3rem] xl:text-[1.5rem] xl:w-[26rem] text-[#443d34] font-bold my-4 sm:my-8 md:my-6'>A freelance front-end developer and web designer helping startups all around the world gain their unfair advantage.
                </p>
            </div>

        </div>
    )
}

export default Home
