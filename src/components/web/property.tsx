'use client';
import React, { useState } from 'react'
import { landTypes, nigeriaStates, propertyCategories, propertyListings, propertyPrice, propertySize, propertyTypes } from '@/helper/data';
import Card from './card';
import Select from '../ui/select';
import { useRouter } from 'next/navigation';

const Property = () => {
    // router
    const router = useRouter();

    // Main states
    const [category, setCategory] = useState("all");
    const [location, setLocation] = useState("all");

    // Sub states
    const [bedrooms, setBedrooms] = useState("all");
    const [houseType, setHouseType] = useState("all");
    const [landType, setLandType] = useState("all");

    // Price states
    const [minPrice, setMinPrice] = useState("all");
    const [maxPrice, setMaxPrice] = useState("all");

    return (
        <div className="bg-basepink/5 pt-12 pb-24 text-foreground font-montserrat">
            <div className="lg:max-w-7xl w-[90%] mx-auto">
                <div className="flex md:flex-row flex-col justify-between items-center">
                    {/* Left section */}
                    <div className="font-montserrat">
                        <h1 className="uppercase leading-5 text-3xl font-medium">Recent Openings</h1>
                        <p className="leading-5 mt-3.5 font-semibold text-[#1A1A11]">
                            You can now connect directly with genuine Owner
                        </p>
                    </div>

                    {/* Filters */}
                    <div className="w-auto bg-white md:h-16 border-[0.5px] border-[#cccccc]/40 h-auto flex flex-wrap items-center p-3 gap-3 md:mt-0 mt-4">
                        {/* Category */}
                        <Select
                            value={category}
                            onChange={setCategory}
                            options={[{ label: "Categories", value: "all" }, ...propertyCategories]}
                            className="w-40 h-10 rounded-md"
                        />

                        {/* Sub Filters based on category */}
                        {category === 'flat/apartment' && (
                            <Select
                                value={bedrooms}
                                onChange={setBedrooms}
                                options={[{ label: "Bedrooms", value: "all" }, ...propertySize]}
                                className="w-32 h-10 rounded-md"
                            />
                        )}

                        {category === 'house' && (
                            <Select
                                value={houseType}
                                onChange={setHouseType}
                                options={propertyTypes}
                                className="w-auto h-10 rounded-md"
                            />
                        )}

                        {category === 'land' && (
                            <Select
                                value={landType}
                                onChange={setLandType}
                                options={landTypes}
                                className="w-auto h-10 rounded-md"
                            />
                        )}

                        {/* Locations */}
                        <Select
                            value={location}
                            onChange={setLocation}
                            options={[{ label: "Locations", value: "all" }, ...nigeriaStates]}
                            className="w-auto h-10 rounded-md"
                        />

                        {/* Min & Max Price */}
                        <Select
                            value={minPrice}
                            onChange={setMinPrice}
                            options={[{ label: "Min", value: "all" }, ...propertyPrice]}
                            className="w-24 h-10 rounded-md"
                        />

                        <Select
                            value={maxPrice}
                            onChange={setMaxPrice}
                            options={[{ label: "Max", value: "all" }, ...propertyPrice]}
                            className="w-24 h-10 rounded-md"
                        />
                    </div>
                </div>
                <div className='mt-8'>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 items-center gap-4'>
                        {propertyListings?.slice(0, 6)?.map((property, index) => (
                            <Card
                                title={property.label}
                                location={property.location}
                                size={property.size}
                                price={property.price}
                                beds={property.beds}
                                baths={property.baths}
                                status={property.status}
                                cardImg={property.mainImage}
                                key={index}
                                onClick={() => router.push(`/property/${index}`)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Property;