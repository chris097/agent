'use client';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Button from '@/components/custom/button';
import { OfinEkoCarousel } from '@/components/auth/carousel';
import { Form, Formik } from 'formik';
import { Input } from '@/components/ui/Input';
import GoogleIcon from '../../../public/svgs/google';

const Login = () => {
    const router = useRouter();


    const handleCreateAccount = () => {
        router.push('/account-created');
    };

    return (
        <div>
            <div className='flex lg:h-screen justify-center items-center overflow-hidden font-inter'>
                <OfinEkoCarousel />
                <div className='2xl:w-[493px] xl:w-[35%] lg:w-[45%] md:w-[60%] w-[90%] lg:ml-8'>
                    <div onClick={() => router.back()} className='flex lg:hidden cursor-pointer gap-2 items-center mt-8'>
                        <ArrowLeft className="w-6 h-6" />
                        <div className='flex gap-1 text-base-darkblue font-semibold'>Back</div>
                    </div>
                    <div className='flex justify-center lg:hidden mt-4 mb-7'>
                        {/* <Image src={logo} alt='ofia_eko' /> */}
                        payAgentt
                    </div>
                    <div className='font-semibold lg:text-3xl md:text-2xl text-2xl font-montserrat lg:leading-[48px] leading-[36px] text-foreground'>Welcome Back!</div>
                    <div className='text-left text-[#69707D] lg:text-lg text-sm font-inter lg:leading-[28px] leading-[14px]'>Login to access and listen to your saved laws</div>
                    <div
                        className='lg:mt-6 mt-6 lg:bg-transparent bg-[#F3F3F3] lg:p-0 p-5 rounded-[20px]'
                        aria-label='Create Account Form'
                    >
                        <div className=' overflow-y-auto custom-scrollbar'>
                            <div className='space-y-4'>
                                <Formik
                                    initialValues={{ email: "" }}
                                    // validationSchema={validationSchema}
                                    onSubmit={(values) => {
                                        console.log("Form submitted", values)
                                    }}
                                >
                                    <Form>
                                        <Input name="email" type="email" label="Email Address" placeholder="Enter your email" />
                                        <Input name="password" type="password" label="Password" placeholder="Enter your password" />
                                        <div className='-mt-3 flex justify-end'>
                                            <Link
                                                href='/forgot-password'
                                                aria-label='Forgot Password?'
                                                className='underline cursor-pointer text-sm -pt-10'
                                            >
                                                Forgot Password?
                                            </Link>
                                        </div>
                                        <Button
                                            className='w-full lg:h-16 h-14 mt-6 !rounded-full font-medium'
                                            type="submit"
                                            aria-label="Create Account"
                                        >
                                            Login
                                        </Button>
                                        <h1 className='text-center mt-10 font-poppins font-medium'>OR</h1>
                                        <Button
                                            className='w-full lg:h-16 h-14 mt-6 !rounded-full bg-white border border-[#cccccc]/40 !text-foreground font-medium hover:bg-white/5'
                                            type="submit"
                                            aria-label="Create Account"
                                        >
                                            <div className='flex justify-center gap-2'>
                                                <GoogleIcon />
                                                <p className='font-medium'> Login with Google</p>
                                            </div>
                                        </Button>
                                        <p className='text-center mt-10'>Don’t Have an Account? <span onClick={() => router.push('/register')} className='font-medium cursor-pointer'>Create account</span></p>
                                    </Form>
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;
