"use client";

import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-50">
            <h1 className="text-6xl font-bold text-gray-800">404</h1>
            <p className="mt-4 text-lg text-gray-600">
                Oops! The page you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link
                href="/"
                className="mt-6 px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
                Go Home
            </Link>
        </div>
    );
}