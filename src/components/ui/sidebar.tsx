import React from "react";
import {
    ActiveApartmentIcon,
    ActiveCaretakerIcon,
    ActiveDashboardIcon,
    ActiveTenantIcon,
    ApartmentIcon,
    CaretakerIcon,
    DashboardIcon,
    TenantIcon,
} from "../../../public/svgs/sidebarIcon";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Avatar from "../../../public/svgs/avatar";

// Define icons separately for active/inactive
const links = [
    {
        name: "Dashboard",
        href: "/property-owner/dashboard",
        activeIcon: <ActiveDashboardIcon />,
        inactiveIcon: <DashboardIcon />,
    },
    {
        name: "Apartment",
        href: "/property-owner/apartment",
        activeIcon: <ActiveApartmentIcon />,
        inactiveIcon: <ApartmentIcon />,
    },
    {
        name: "Tenant",
        href: "/property-owner/tenant",
        activeIcon: <ActiveTenantIcon />,
        inactiveIcon: <TenantIcon />,
    },
    {
        name: "Caretaker",
        href: "/property-owner/caretaker",
        activeIcon: <ActiveCaretakerIcon />,
        inactiveIcon: <CaretakerIcon />,
    },
];

const Sidebar = () => {
    const pathname = usePathname();
    const router = useRouter();

    return (
        <div className="w-[262px] flex flex-col justify-between h-full">
            {/* Top Logo */}
            <div>
                <div className="flex justify-center border-b border-[#E5E7EB] py-5">
                    <h1 className="">payAgentt</h1>
                </div>

                {/* Links */}
                <div className="flex flex-col gap-3 pt-8 pr-4">
                    {links.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="w-full flex items-center"
                            >
                                {isActive && (
                                    <div className="bg-black h-5 w-1 rounded-r-md" />
                                )}
                                <div
                                    className={`p-2 w-full rounded-lg cursor-pointer transition flex items-center ml-3 gap-2 ${isActive
                                        ? "bg-[#D9D9D9]/40 text-foreground font-semibold"
                                        : "hover:bg-[#D9D9D9]/70 font-normal"
                                        }`}
                                >
                                    {/* Swap icons */}
                                    {isActive ? link.activeIcon : link.inactiveIcon}
                                    <p className="text-sm">{link.name}</p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Bottom Branding */}
            <div onClick={() => router.push('/property/settings')} className="flex px-3 border-t border-[#E5E7EB] pt-5 pb-3 hover:bg-[#D9D9D9]/15 cursor-pointer">
                <div className="flex justify-between items-center w-full">
                    <div className="flex gap-2">
                        <div className="!w-[45px] !h-[45px] rounded-full"><Avatar width="45" height="45" /></div>
                        <div>
                            <h1 className="text-sm font-medium truncate overflow-hidden w-38">Christian Chiemela</h1>
                            <p className="text-xs text-[#525866]">Owner</p>
                        </div>
                    </div>

                    <svg width="10" height="14" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6 15.8273L10.5448 11.0637C10.7068 10.8997 10.9237 10.809 11.1488 10.8111C11.3739 10.8131 11.5893 10.9078 11.7485 11.0746C11.9077 11.2415 11.998 11.4672 12 11.7032C12.0019 11.9392 11.9154 12.1665 11.759 12.3362L6.60706 17.7361C6.52739 17.8198 6.43277 17.8861 6.3286 17.9314C6.22443 17.9767 6.11277 18 6 18C5.88723 18 5.77557 17.9767 5.6714 17.9314C5.56723 17.8861 5.47261 17.8198 5.39293 17.7361L0.241034 12.3362C0.0846236 12.1665 -0.00192391 11.9392 3.24591e-05 11.7032C0.00198882 11.4672 0.0922924 11.2415 0.251493 11.0746C0.410694 10.9078 0.626054 10.8131 0.851189 10.8111C1.07632 10.809 1.29322 10.8997 1.45516 11.0637L6 15.8273ZM6 2.17274L1.45516 6.93634C1.29322 7.10028 1.07632 7.19099 0.851189 7.18894C0.626054 7.18689 0.410694 7.09224 0.251493 6.92538C0.0922924 6.75851 0.00198882 6.53279 3.24591e-05 6.29682C-0.00192391 6.06084 0.0846236 5.83351 0.241034 5.66377L5.39293 0.263876C5.47261 0.180226 5.56723 0.113863 5.6714 0.0685847C5.77557 0.023306 5.88723 0 6 0C6.11277 0 6.22443 0.023306 6.3286 0.0685847C6.43277 0.113863 6.52739 0.180226 6.60706 0.263876L11.759 5.66377C11.9154 5.83351 12.0019 6.06084 12 6.29682C11.998 6.53279 11.9077 6.75851 11.7485 6.92538C11.5893 7.09224 11.3739 7.18689 11.1488 7.18894C10.9237 7.19099 10.7068 7.10028 10.5448 6.93634L6 2.17274Z" fill="#1A1A1A" fillOpacity="0.6" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;