import React from 'react';
import Image, { StaticImageData } from 'next/image';
import LocationIcon from '../../../public/svgs/locationIcon';
import Button from '../ui/button';

interface ICardPros {
    title?: string;
    location?: string;
    size?: string;
    price?: string;
    beds?: number;
    baths?: number;
    status?: string;
    cardImg: StaticImageData | string;
    onClick?: () => void;
}

const Card = ({
    title,
    location,
    size,
    price,
    beds,
    baths,
    status,
    cardImg,
    onClick
}: ICardPros) => {
    return (
        <div className='border border-[#cccccc]/40 bg-white rounded-[20px] p-4 shadow-xs'>
            <div className='w-full h-[310px] relative'>
                <div className='h-full w-full absolute top-0 left-0 z-30'>
                    <Image
                        className='w-full h-full object-cover'
                        src={cardImg}
                        alt='payAgent property card'
                        width={400}
                        height={310}
                    />
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-foreground/5 z-40" />
            </div>
            <div className='mt-4 flex justify-between items-center'>
                <div>
                    <h2 className='text-lg font-semibold text-foreground'>{title ?? '--'}</h2>
                    <div className='flex gap-2 items-center'>
                        <LocationIcon />
                        <p className='text-sm text-primarygray'>{location ?? '--'}</p>
                    </div>
                </div>
                {status && <div className='bg-basegreen/20 p-2 rounded-full h-[15px] flex justify-center items-center'>
                    <p className='uppercase text-[9px] font-medium text-basegreen'>{status}</p>
                </div>}
            </div>
            <div className='mt-3 flex justify-between items-center'>
                <p className='text-sm text-primarygray'>{beds && `${beds} Beds •`} {baths && `${baths} Baths •`} {size && `${size}`}</p>
                <p className='text-base font-semibold text-foreground'>{price}</p>
            </div>
            <div className='w-full mt-6'>
                <Button onClick={onClick} className='w-full !rounded-full h-[56px]'>
                    Contact Agent
                </Button>
            </div>
        </div>
    );
};

export default Card;

