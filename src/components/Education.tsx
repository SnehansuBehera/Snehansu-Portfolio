import React from 'react'
import { Bebas_Neue } from 'next/font/google'
const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400' })

const Education = () => {
    return (
        <div className='px-32'>
            <h1 className={`${bebas.className} text-[2rem] w-[6.6rem] pt-4 leading-5 border-t-2 border-gray-400`}>EDUCATION</h1>
            <div>

            </div>

        </div>
    )
}

export default Education
