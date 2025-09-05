'use client';
import React from 'react';
import Card from '@/components/ui/card';
import Table, { Row } from '@/components/ui/table';

const columns = [
    { key: "name", label: "Name" },
    { key: "location", label: "Location" },
    { key: "count", label: "Count" },
    { key: "type", label: "Type" },
    { key: "datePosted", label: "Date Posted" },
    { key: "status", label: "Status" },
];

const data = [
    {
        name: "Apartment A",
        location: "Lagos",
        count: 12,
        type: "Land",
        datePosted: "2025-09-01",
        status: "Active",
    },
    {
        name: "Apartment B",
        location: "Abuja",
        count: 8,
        type: "Apartment",
        datePosted: "2025-08-20",
        status: "Inactive",
    },
];

const PropertyOwnerDashboard = () => {
    const handleRowClick = (row: Row) => {
        console.log(`You clicked on ${row.name}`);
    };
    return (
        <div className='pt-6 px-10'>
            <h1 className='font-montserrat text-xl font-semibold'>Welcome back, Christain</h1>
            <h2 className='font-montserrat text-lg font-medium mt-8'>Dashboard</h2>
            {/* Cards */}
            <div className='grid grid-cols-3 items-center mt-8 gap-4'>
                <Card
                    title='Total Property'
                    value={300}
                    className='bg-[#0000FF]/1'
                />
                <Card
                    title='Rented Out'
                    value={300}
                    className='bg-[#FFFF00]/2'
                />
                <Card
                    title='Sold Out'
                    value={300}
                    className='bg-[#FF0000]/2'
                />
            </div>
            {/* Table */}
            <div className='mt-3.5 border-[0.5px] rounded-[10px] p-4 border-[#E5E7EB]'>
                <div className='font-montserrat text-lg font-semibold'>
                    <h1 className=''>Recent Properties</h1>
                </div>
                <div className='mt-2'>
                    <Table columns={columns} data={data} onRowClick={handleRowClick} />
                </div>
            </div>
        </div>
    );
};

export default PropertyOwnerDashboard;