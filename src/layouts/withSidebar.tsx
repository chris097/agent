import Sidebar from '@/components/ui/sidebar';
import React, { ReactNode } from 'react'
// import withAuth from '@/hocs/withAuth';


interface IWithSidebarLayoutProps {
    children: ReactNode
}

const WithSidebarLayout: React.FC<IWithSidebarLayoutProps> = ({ children }) => {
    return (
        <div className='relative overflow-hidden flex 2xl:max-w-7xl mx-auto'>
            <div className='relative flex'>
                <div >
                    <Sidebar />
                </div>
            </div>
            <div className='bg-white border border-[#E5E7EB] w-full h-[97vh] mt-3 mr-3 rounded-[10px] overflow-hidden'>{children}</div>
        </div>
    );
};

export default WithSidebarLayout;
