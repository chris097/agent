import React from "react";
import clsx from "clsx";

interface ICardProps {
    title: string;
    value: string | number;
    icon?: React.ReactNode;
    className?: string;
}

const Card = ({ title, value, icon, className }: ICardProps) => {
    return (
        <div
            className={clsx(
                "border-[0.5px] border-[#E5E7EB] h-[150px] rounded-[10px] py-5 px-6 flex justify-between items-center",
                className
            )}
        >
            <div>
                <h1 className="text-lg">{title}</h1>
                <h1 className="font-semibold text-2xl mt-9">{value}</h1>
            </div>
            {icon && <div>{icon}</div>}
        </div>
    );
};

export default Card;