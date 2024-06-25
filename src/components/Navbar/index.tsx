"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();
    return (
        <nav className="bg-transparent border-gray-200 dark:bg-transparent border-b-[1px]">
            <div className="flex flex-wrap items-center justify-between mx-auto px-[32px] py-[10px]">
                <Link href="/" className="flex items-center">
                    <Image src="../../../images/Logo.svg" width="150" height="80" className="h-8" alt="Flowbite Logo" />
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex p-4">
                        <li>
                            <Link href="/searchPage" className={`block py-2 px-[20px] rounded text-[#121826] ${pathname.includes("searchPage") ? 'bg-[#e5e7eb]' : ''}`} aria-current="page">
                                Home
                            </Link>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-[#121826]">
                                Collections
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}