'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Button from '@/components/ui/button';
import { OfinEkoCarousel } from '@/components/auth/carousel';
import { Form, Formik } from 'formik';
import { Input } from '@/components/ui/Input';
import Select from '@/components/ui/select';
import { cn } from '@/lib/utils';

const Register = () => {
    const router = useRouter();


    // const handleCreateAccount = () => {
    //     router.push('/account-created');
    // };

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
                    <div className='font-semibold lg:text-3xl md:text-2xl text-2xl font-montserrat lg:leading-[48px] leading-[36px] text-foreground'>Welcome to payAgentt</div>
                    <div className='text-left text-[#69707D] lg:text-lg text-sm font-inter lg:leading-[28px] leading-[14px]'>Sign up to access the laws of Lagos state, Nigeria</div>
                    <div
                        className='lg:mt-6 mt-6 lg:bg-transparent bg-[#F3F3F3] lg:p-0 p-5 rounded-[20px]'
                        aria-label='Create Account Form'
                    >
                        <div className='overflow-y-auto custom-scrollbar'>
                            <div className='space-y-4'>
                                <Formik
                                    initialValues={{ email: "" }}
                                    // validationSchema={validationSchema}
                                    onSubmit={(values) => {
                                        console.log("Form submitted", values)
                                    }}
                                >
                                    <Form>
                                        <Input name="fullname" type="text" label="Full Name" placeholder="Enter your name" />
                                        <Input name="email" type="email" label="Email Address" placeholder="Enter your email" />
                                        <div className='mb-4'>
                                            <label
                                                htmlFor=''
                                                className={cn(
                                                    "block font-montserrat text-sm font-medium mb-1 text-foreground leading-5",

                                                )}
                                            >
                                                Account Type
                                            </label>
                                            <Select
                                                value={''}
                                                onChange={() => { }}
                                                options={[
                                                    { label: "Select", value: "all" },
                                                    { label: "Property Owner", value: "property_owner" },
                                                    { label: "Property Agent", value: "property_agent" },
                                                    { label: "Individual", value: "individual" },
                                                ]}
                                                className="w-full h-12 rounded-md bg-white border border-[#cccccc]/40 !font-normal"
                                            />
                                        </div>
                                        <Input name="password" type="password" label="Password" placeholder="Enter your password" />
                                        <Input name="confirm-password" type="password" label="Confirm Password" placeholder="Enter your password" />
                                        <Button
                                            className='w-full lg:h-16 h-14 mt-2 !rounded-full font-medium'
                                            type="submit"
                                            aria-label="Create Account"
                                        >
                                            Create Account
                                        </Button>

                                        <p className='text-center text-sm mt-4'>By signing up, you accept payAgentt Terms of Use and Privacy Policy.</p>
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

export default Register;
