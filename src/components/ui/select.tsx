import React from "react";
import clsx from "clsx";

interface Option {
    label: string;
    value: string;
}

interface SelectProps {
    options: Option[];
    value: string;
    onChange: (value: string) => void;
    className?: string; // allow height/width/bg overrides
}

const Select: React.FC<SelectProps> = ({
    options,
    value,
    onChange,
    className,
}) => {
    return (
        <div
            className={clsx(
                "flex items-center px-1.5 text-foreground bg-basegray/20 relative",
                className
            )}
        >
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="bg-transparent outline-none border-none text-sm w-full appearance-none cursor-pointer pr-6"
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

            {/* Custom dropdown icon */}
            <svg
                className="absolute right-2 pointer-events-none"
                width="10"
                height="5"
                viewBox="0 0 10 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M5 4.5C4.77732 4.49928 4.5641 4.43054 4.40711 4.30887L0.202219 1.06934C0.0644448 0.945395 -0.00754809 0.785961 0.000627186 0.622899C0.00880247 0.459837 0.0965436 0.305156 0.246317 0.189768C0.396091 0.0743791 0.596865 0.00678159 0.808519 0.000483196C1.02017 -0.00581519 1.22712 0.0496495 1.388 0.155793L5 2.93531L8.612 0.155793C8.77288 0.0496495 8.97983 -0.00581519 9.19148 0.000483196C9.40313 0.00678159 9.60391 0.0743791 9.75368 0.189768C9.90346 0.305156 9.9912 0.459837 9.99937 0.622899C10.0075 0.785961 9.93556 0.945395 9.79778 1.06934L5.59289 4.30887C5.4359 4.43054 5.22268 4.49928 5 4.5Z"
                    fill="#1A1A1A"
                    fillOpacity="0.6"
                />
            </svg>
        </div>
    );
};

export default Select;