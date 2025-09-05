'use client';
import Header from '@/components/web/header';
import React from 'react';
import BackArrow from '../../../../public/svgs/backArrow';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import img1 from '../../../../public/images/web-card5.png';
import LocationIcon from '../../../../public/svgs/locationIcon';
import LeftArrow from '../../../../public/svgs/leftArrow';
import RightArrow from '../../../../public/svgs/rightArrow';
import Button from '@/components/ui/button';
import Avatar from '../../../../public/svgs/avatar';
import Map from '../../../../public/svgs/map';
import { propertyListings } from '@/helper/data';
import PropertyGallery from '@/components/web/propertygallary';
import Rating from '../../../../public/svgs/rating';


const PropertyDetailPage = () => {
    const router = useRouter();
    const { id } = useParams();

    const property = propertyListings[Number(id)];

    return (
        <div>
            <div className='h-10'>
                <Header isTextColor={false} />
            </div>
            <div className='lg:max-w-7xl w-[90%] mx-auto my-12 bg-white border border-[#CCCCCC]/40 md:p-8 p-4 rounded-lg overflow-x-hidden'>
                <div className='flex md:flex-row flex-col justify-between md:items-center'>
                    <div onClick={() => router.back()} className='flex gap-2 items-center cursor-pointer'>
                        <BackArrow />
                        <h1 className='md:text-2xl text-lg'>{property?.label}</h1>
                    </div>
                    <p className='text-red-700 text-xs font-semibold font-montserrat whitespace-nowrap md:ml-0 md:mt-0 ml-2 mt-2'>Ref Number: 123456</p>
                </div>
                <div className='flex md:flex-row flex-col gap-6 mt-5'>
                    <div className='flex-1'>
                        <PropertyGallery images={property?.images} />
                        <div className='mt-8 flex md:flex-row flex-col justify-between'>
                            <div className='md:w-[70%]'>
                                <div className='flex items-center gap-2'>
                                    <h1 className='md:text-2xl text-lg whitespace-normal font-medium leading-[18px]'>{property?.label}</h1>
                                    <div className='bg-basegreen/20 p-2 rounded-full h-[15px] flex justify-center items-center mr-5'>
                                        <p className='uppercase text-[9px] font-medium text-basegreen'>{property?.status}</p>
                                    </div>
                                </div>
                                <p className='font-montserrat text-sm font-medium leading-[18px] mt-3'>Lorem ipsum dolor sit amet consectetur. Vel sit non odio nisi urna. In etiam dapibus aliquam ut mi mauris sagittis arcu. Gravida semper iaculis tellus dapibus amet mauris vitae erat.</p>
                                <div className='flex md:flex-row flex-col gap-2 justify-between md:items-center mt-3'>
                                    <div className='flex gap-2 items-center'>
                                        <LocationIcon />
                                        <p className='text-sm text-primarygray'>{property?.location}</p>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-sm text-primarygray'>{`${property?.beds} Beds • ${property?.baths} Baths • ${property?.size}`}</p>
                                    </div>
                                </div>
                            </div>
                            <p className='text-xl font-montserrat font-semibold text-foreground mr-5 md:mt-6 mt-2'>{property?.price}</p>
                        </div>
                        <h2 className='mt-5 text-lg font-medium'>{`${property?.label} near you`}</h2>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-8'>
                                <LeftArrow />
                                <div className='flex items-center gap-4 mt-4'>
                                    <div className='md:w-[137px] w-[90px] h-[80px] relative'>
                                        <Image className='bg-cover object-cover bg-no-repeat rounded-[10px] h-full' src={img1} alt='property detail' />
                                        <div className='bg-black/30 absolute top-0 left-0 z-40 w-full h-full rounded-[10px]' />
                                    </div>
                                    <div className='md:w-[137px] w-[90px] h-[80px] relative'>
                                        <Image className='bg-cover object-cover bg-no-repeat rounded-[10px] h-full' src={img1} alt='property detail' />
                                        <div className='bg-black/30 absolute top-0 left-0 z-40 w-full h-full rounded-[10px]' />
                                    </div>
                                    <div className='md:w-[137px] w-[90px] h-[80px] relative'>
                                        <Image className='bg-cover object-cover bg-no-repeat rounded-[10px] h-full' src={img1} alt='property detail' />
                                        <div className='bg-black/30 absolute top-0 left-0 z-40 w-full h-full rounded-[10px]' />
                                    </div>
                                    <div className='md:w-[137px] w-[90px] h-[80px] relative'>
                                        <Image className='bg-cover object-cover bg-no-repeat rounded-[10px] h-full' src={img1} alt='property detail' />
                                        <div className='bg-black/30 absolute top-0 left-0 z-40 w-full h-full rounded-[10px]' />
                                    </div>
                                    <div className='md:w-[137px] w-[90px] h-[80px] relative'>
                                        <Image className='bg-cover object-cover bg-no-repeat rounded-[10px] h-full' src={img1} alt='property detail' />
                                        <div className='bg-black/30 absolute top-0 left-0 z-40 w-full h-full rounded-[10px]' />
                                    </div>
                                </div>
                            </div>
                            <div className='ml-5'>
                                <RightArrow />
                            </div>
                        </div>
                    </div>
                    <div className='md:w-[30%] mt-10 md:mt-0'>
                        <div className='bg-baseblue/2 h-auto border-[0.5px] border-[#E2E4E9] rounded-[10px] p-5'>
                            <div className='flex gap-3'>
                                <div className='w-[80px] h-[80px] rounded-full'>
                                    <Avatar />
                                </div>
                                <div>
                                    <h1 className='md:text-xl text-base whitespace-nowrap font-medium'>Christian Chiemela</h1>
                                    <p className='text-baseblue font-montserrat font-medium text-xs'>Agent</p>
                                    <div className='flex gap-2 items-center mt-1'>
                                        <LocationIcon />
                                        <p className='text-sm text-primarygray'>Victoria Island, Lagos</p>
                                    </div>
                                    <Rating />
                                </div>
                            </div>
                            <Button className='w-full mt-5 h-12 font-medium'>
                                Contact with Agent
                            </Button>
                        </div>
                        <div className='mt-4'>
                            <Map />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetailPage;