"use client"
import "./page.css";
import { useEffect } from "react";
import PhotosService from "../../services/Photos.service";
import Image from "next/image";

export default function Page() {
    useEffect(() => {
        PhotosService
            .getPhotos()
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err))
            .finally(() => { });
    }, [])

    return (
        <div className="searchPage">
            <div className="searchPage_title flex flex-col items-center mt-[240px]">
                <Image className="searchPage_background_left_mobile" src='/images/hero-left.png' alt="Mobile background left image" height={100} width={100} />
                <Image className="searchPage_background_right_mobile" src='/images/hero-right.png' alt="Mobile background right image" height={100} width={100} />
                <h1 className="text-[#121826] text-[36px] font-semibold">Search</h1>
                <h2 className="text-[#121826] text-[16px] font-medium mt-[8px]">Search high-resolution images from Unsplash</h2>
                <form>
                    <input className="searchPage_input text-[#E5E7EB] text-[16px] font-medium" type="text" name="name" placeholder="Enter your keywords..." />
                </form>
            </div>
        </div>
    );
}