"use client"
import "./page.css";
import { useEffect, useState } from "react";
import SearchService from "../../services/Search.service";
import Image from "next/image";
import ListImages from "../../components/ListImages";

export default function Page() {
    const [searchImageState, setSearchImageState] = useState("");
    const [gallery, setGallery] = useState([]);
    const [search, setSearch] = useState(false);
    const handleSubmit = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        SearchService
            .getPhotos(searchImageState)
            .then((res) => {
                console.log(res.results)
                setGallery(res.results);
            })
            .catch((err) => console.log(err))
            .finally(() => { setSearch(true); });
    }
    const handleChange = (e: any) => {
        setSearchImageState(e.target.value);
    }
    return (
        <div className={`${search ? "!bg-none " : ""}searchPage overflow-x-hidden`}>
            <div className={`searchPage_title flex flex-col items-center ${search ? "mt-[50px] " : "mt-[240px]"}`}>
                <div className={`searchPage_imageTop absolute top-0 w-full h-[100px] z-[-1] ${search ? "block " : "hidden"}`}></div>
                <Image className="searchPage_background_left_mobile" src='/images/hero-left.png' alt="Mobile background left image" height={797} width={537} />
                <Image className="searchPage_background_right_mobile" src='/images/hero-right.png' alt="Mobile background right image" height={797} width={537} />
                <div className={`${search ? "hidden " : ""}text-center`}>
                    <h1 className="text-[#121826] text-[36px] font-semibold">Search</h1>
                    <h2 className="text-[#121826] text-[16px] font-medium mt-[8px]">Search high-resolution images from Unsplash</h2>
                </div>
                <form className="mb-[48px]" onSubmit={handleSubmit}>
                    <input className="searchPage_input text-[#E5E7EB] text-[16px] font-medium bg-[#FFFFFF] focus:bg-[#FFFFFF]" type="text" name="name" placeholder="Enter your keywords..." onChange={handleChange} />
                </form>
                {
                    gallery.length > 0 && <ListImages gallery={gallery} />
                }
            </div>
        </div >
    );
}