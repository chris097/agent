'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Button from '@/components/ui/button';
import { OfinEkoCarousel } from '@/components/auth/carousel';
import { Form, Formik } from 'formik';
import { Input } from '@/components/ui/Input';

const ForgotPassword = () => {
    const router = useRouter();

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
                    <div className='font-semibold lg:text-3xl md:text-2xl text-2xl font-montserrat lg:leading-[48px] leading-[36px] text-foreground'>Forgot Password</div>
                    <div className='text-left text-[#69707D] lg:text-lg text-sm font-inter lg:leading-[28px] leading-[14px]'>Login to access and listen to your saved laws</div>
                    <div
                        className='lg:mt-6 mt-6 lg:bg-transparent bg-[#F3F3F3] lg:p-0 p-5 rounded-[20px]'
                        aria-label='Forgot Password Form'
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

                                        <Button
                                            className='w-full lg:h-16 h-14 mt-8 !rounded-full font-medium'
                                            type="submit"
                                            aria-label="Create Account"
                                        >
                                            Continue
                                        </Button>

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

export default ForgotPassword;
