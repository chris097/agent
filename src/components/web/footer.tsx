import React from 'react'
import TwitterIcon from '../../../public/svgs/twitter';
import clsx from "clsx";
import Link from 'next/link';
import { links, privacyLinks } from '@/helper/data';

interface IconButtonProps {
    children: React.ReactNode; // The icon
    size?: number; // size in px (default 28)
    bgColor?: string; // background color (default #232323)
    className?: string; // extra tailwind classes
}

const IconButton: React.FC<IconButtonProps> = ({
    children,
    size = 28,
    bgColor = "#232323",
    className,
}) => {
    return (
        <div
            className={clsx(
                "flex justify-center items-center rounded-full",
                className
            )}
            style={{
                width: size,
                height: size,
                backgroundColor: bgColor,
            }}
        >
            {children}
        </div>
    );
};

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='bg-black h-auto text-white py-14'>
            <div className='lg:max-w-7xl w-[90%] mx-auto'>
                <div className='flex md:flex-row flex-col h-full md:items-center'>
                    <div className='flex-1'>
                        <h1 className="text-2xl text-white font-medium">payAgentt</h1>
                        <p className='md:w-1/2 mt-3'>Lorem ipsum dolor sit amet consectetur. Vel sit non odio nisi urna. In etiam dapibus aliquam ut mi mauris sagittis arcu. Gravida semper iaculis tellus dapibus  </p>
                        <div className='md:flex hidden gap-3 mt-5'>
                            <IconButton>
                                <TwitterIcon />
                            </IconButton>
                        </div>
                    </div>
                    <div>
                        <div className='flex gap-12 md:mt-0 mt-6'>
                            <ul className="space-y-2 text-white">
                                {links.map((link) => (
                                    <li key={link.url}>
                                        <Link
                                            href={link.url}
                                            className="hover:text-primary transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <ul className="space-y-2 text-white">
                                {privacyLinks.map((link) => (
                                    <li key={link.url}>
                                        <Link
                                            href={link.url}
                                            className="hover:text-primary transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='md:hidden flex gap-3 mt-6'>
                            <IconButton>
                                <TwitterIcon />
                            </IconButton>
                            <IconButton>
                                <TwitterIcon />
                            </IconButton>
                            <IconButton>
                                <TwitterIcon />
                            </IconButton>
                        </div>
                    </div>
                </div>
                <p className='text-center text-xs mt-16'>Copyright © {year}. All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;