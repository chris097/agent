import React from 'react';
import Header from './header';
import Image from 'next/image';
import banner from '../../../public/images/web-banner.png';
import SearchIcon from '../../../public/svgs/searchIcon';

const Banner = () => {
    return (
        <div className="h-[451px] overscroll-none relative z-50">
            <div className='fixed z-[999] top-0 left-0 w-full'>
                <Header />
            </div>
            <div className='flex h-full flex-col items-center relative z-50 justify-center text-white'>
                <h1 className='text-4xl font-semibold leading-14'>Find the Perfect Home Just for You</h1>
                <p className='text-center w-2xl leading-5'>Looking to rent, buy, or invest in land? You can now connect directly with genuine property owners — no agents, no stress.</p>
                <div className='h-16 w-4xl bg-basegray rounded-full mt-8 flex gap-2 items-center px-4'>
                    <SearchIcon />
                    <input
                        placeholder='Search for locations'
                        className='placeholder:text-primarygray w-full h-full outline-none bg-transparent border-none text-primarygray'
                    />
                </div>
            </div>
            <div className='h-full absolute top-0 left-0 z-30'>
                <Image className='w-full h-full object-cover' src={banner} alt='agent banner' />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-40" />
        </div>
    )
}

export default Banner