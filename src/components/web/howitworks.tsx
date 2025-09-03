'use client';

import React from 'react';
import BuyHome from '../../../public/svgs/buyhome';
import Button from '../ui/button';
import SellProperty from '../../../public/svgs/sellproperty';
import RentApartment from '../../../public/svgs/rentapartment';

interface ICardProps {
    title: string;
    description: string;
    onClick: () => void;
    icon?: React.ReactNode;
}

const Card = ({
    title,
    description,
    onClick,
    icon
}: ICardProps) => (
    <div className='border flex justify-center flex-col items-center border-[#D7D7D7] bg-white rounded-[20px] px-8 py-8'>
        {icon}
        <div className='mt-6 text-center'>
            <h3 className='text-xl font-semibold text-foreground'>{title}</h3>
            <p className='text-sm text-center text-primarygray mt-2.5'>{description}</p>
            <Button onClick={onClick} className='w-full mt-8 !rounded-full h-[50px] font-medium'>Contact Agent</Button>
        </div>
    </div>
)

const HowItWorks = () => {
    return (
        <div className='lg:max-w-7xl w-[90%] mx-auto my-14'>
            <div>
                <div className='flex justify-center w-auto'>
                    <h2 className='text-black bg-[#F7F7F7] px-2 py-1 font-medium rounded-md flex border'>How it works</h2>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6 mt-14'>
                    <Card
                        title="Buy a home"
                        description="Lorem ipsum dolor sit amet consectetur. Vel sit non odio nisi urna. In etiam dapibus aliquam ut mi mauris sagittis arcu. Gravida semper iaculis tellus dapibus amet mauris vitae erat. Curabitur neque in "
                        onClick={() => { }}
                        icon={<BuyHome />}
                    />
                    <Card
                        title="Rent an apartment"
                        description="Lorem ipsum dolor sit amet consectetur. Vel sit non odio nisi urna. In etiam dapibus aliquam ut mi mauris sagittis arcu. Gravida semper iaculis tellus dapibus amet mauris vitae erat. Curabitur neque in "
                        onClick={() => { }}
                        icon={<RentApartment />}
                    />
                    <Card
                        title="Sell a propery"
                        description="Lorem ipsum dolor sit amet consectetur. Vel sit non odio nisi urna. In etiam dapibus aliquam ut mi mauris sagittis arcu. Gravida semper iaculis tellus dapibus amet mauris vitae erat. Curabitur neque in "
                        onClick={() => { }}
                        icon={<SellProperty />}
                    />
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;