'use client';

import React from "react";

interface Column {
    key: string;
    label: string;
}

export interface Row {
    [key: string]: string | number;
}

interface TableProps {
    columns: Column[];
    data: Row[];
    onRowClick?: (row: Row) => void;
}

const Table: React.FC<TableProps> = ({ columns, data, onRowClick }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
                {/* Table Head */}
                <thead>
                    <tr className="text-xs font-medium text-foreground font-montserrat">
                        {columns.map((col) => (
                            <th key={col.key} className="px-4 py-3 text-left">
                                {col.label}
                            </th>
                        ))}
                    </tr>
                </thead>

                {/* Table Body */}
                <tbody className="text-xs font-normal text-foreground font-montserrat">
                    {data.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className="hover:bg-gray-50 cursor-pointer transition"
                            onClick={() => onRowClick?.(row)}
                        >
                            {columns.map((col) => (
                                <td key={col.key} className="px-4 py-3 border-t-[0.5px] border-[#E5E7EB]">
                                    {row[col.key] ?? "-"}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;