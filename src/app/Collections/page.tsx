"use client";
import './page.css';
import { useEffect, useState } from "react";
import UsersService from "@/services/Users.service";

export default function Page() {
    const [collections, setCollections] = useState([]);
    useEffect(() => {
        UsersService
            .getCollections()
            .then((res) => {
                console.log(res)
                setCollections(res);
            })
            .catch((err) => console.log(err));
    }, [])

    return (
        <div className="collections_container">
            <div className="flex flex-col items-center mt-[36px]">
                <h1 className="collections_title w-fit text-[36px] font-semibold bg-[size:100%_100%] bg-center">Collections</h1>
                <p className='text-[#121826] text-center mt-[8px] text-[16px] font-medium'>Explore the world through collections of beautiful <br />photos free to use under the <u>Unsplash License</u>.</p>
            </div>
        </div>
    );
}