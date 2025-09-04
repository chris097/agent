import React, { ReactNode } from 'react';

interface WithoutSidebarLayoutProps {
    children: ReactNode;
}

const WithoutSidebarLayout: React.FC<WithoutSidebarLayoutProps> = ({ children }) => {
    return (
        <main>
            {children}
        </main>
    );
};

export default WithoutSidebarLayout;