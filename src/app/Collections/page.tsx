"use client";
import './page.css';
import { useEffect, useState } from "react";
import UsersService from "@/services/Users.service";
import ModalAddCollection from '@/components/ModalAddCollection';
import GridCollections from '@/components/GridCollections';

export default function Page() {
    const [collections, setCollections] = useState<any[]>([]);
    const [showModalAddCollection, setShowModalAddCollection] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        UsersService
            .getCollections()
            .then((res) => {
                setCollections(res);
            })
            .catch((err) => console.log(err))
            .finally(() => { setLoading(false) });
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
            {
                !loading && collections !== undefined ?
                    <main className="w-full mt-4 grid gap-4 justify-center items-center grid-cols-[repeat(auto-fill,min(25rem,100%))] auto-rows-[18rem]">
                        {collections.map((collection, index) => <GridCollections id={collection.id} src={collection.preview_photos} title={collection.title} total={collection.total} key={collection.id + index} />)}
                    </main>

                    :
                    <h1 className="text-center text-[#121826] text-4xl font-bold animate-pulse mt-8">Loading...</h1>
            }
            <div id="modal-root"></div>
            {showModalAddCollection && <ModalAddCollection onClose={() => setShowModalAddCollection(false)} />}
        </div>
    );
}