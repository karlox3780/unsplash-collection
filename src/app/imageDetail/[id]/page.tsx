"use client"
import './page.css';
import PhotosService from "@/services/Photos.service";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
    const router = useParams();
    const { id } = router;
    const [photo, setPhoto]: any = useState(null);

    useEffect(() => {
        id && PhotosService
            .getPhoto(String(id))
            .then((res) => {
                console.log(res)
                setPhoto(res);
            })
            .catch((err) => console.log(err));
    }, [id]);

    return (
        photo !== null && <div className="imageDetail_container flex items-start justify-center py-[52px] mx-[60px]">
            <Image className="rounded w-[50%] max-h-full" src={photo.urls.full} alt="Mobile background left image" height={500} width={500} />
            <div className='w-[50%]'>
                <Image className="rounded-full" src={photo.user.profile_image.medium} height={50} width={50} alt="" /><span>{photo.user.name}</span>
            </div>
        </div>
    )
}