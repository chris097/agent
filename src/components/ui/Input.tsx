"use client"

import * as React from "react"
import { ReactNode } from "react"
import { useField } from "formik"
import { cn } from "@/lib/utils"

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string | ReactNode
    icon?: ReactNode
    hint?: string
    parentClassName?: string
    labelClassName?: string
    className?: string
    name: string
}

const Input: React.FC<InputProps> = ({
    label,
    icon,
    parentClassName,
    className,
    hint,
    name,
    labelClassName,
    type = "text",
    ...rest
}) => {
    const [field, meta] = useField({ name, type })
    const hasError = meta.touched && !!meta.error

    return (
        <div className={cn("mb-4", parentClassName)}>
            {label && (
                <label
                    htmlFor={name}
                    className={cn(
                        "block font-montserrat text-sm font-medium mb-1 text-foreground leading-5",
                        labelClassName
                    )}
                >
                    {label}
                </label>
            )}

            <div className="relative">
                {icon && <span className="absolute left-2 top-[10px]">{icon}</span>}

                <input
                    id={name}
                    type={type}
                    {...field}
                    {...rest}
                    className={cn(
                        "flex h-12 w-full rounded-[8px] border border-[#CCCCCC]/40 bg-[#FFFFFF] px-3 py-2 text-base font-montserrat placeholder:text-zinc-500 disabled:cursor-not-allowed disabled:bg-neutral-100 md:text-sm",
                        hasError ? "border-error-100 bg-error-50" : "",
                        icon ? "pl-8" : "",
                        className
                    )}
                    // prevent browser default focus styles
                    style={{
                        outline: "none",
                        boxShadow: "none",
                        WebkitBoxShadow: "none",
                        WebkitAppearance: "none",
                        MozAppearance: "none",
                    }}
                />
            </div>

            {hasError && (
                <small className="block text-[11px] mt-1 text-error-100 font-montserrat">
                    {meta.error}
                </small>
            )}
            {hint && (
                <small className="block text-[11px] mt-1 text-neutral-500 font-montserrat">
                    {hint}
                </small>
            )}
        </div>
    )
}

export { Input }