"use client";
import './page.css';
import { useEffect, useState } from "react";
import UsersService from "@/services/Users.service";
import ModalAddCollection from '@/components/ModalAddCollection';

export default function Page() {
    const [collections, setCollections] = useState([]);
    const [showModalAddCollection, setShowModalAddCollection] = useState(false);
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
                <button className="px-4 py-2 w-fit text-[#121826] outline-[#121826] rounded outline outline-2 outline-primaryGray text-primaryGray dark:outline-secondaryGray dark:text-secondaryGray my-6 hover:bg-[#121826] hover:text-white dark:hover:bg-secondaryGray hover:active:opacity-80 transition-all"
                    onClick={() => { setShowModalAddCollection(true) }}>
                    Add collection
                </button>
            </div>
            <div id="modal-root"></div>
            {showModalAddCollection && <ModalAddCollection onClose={() => setShowModalAddCollection(false)} />}
        </div>
    );
}