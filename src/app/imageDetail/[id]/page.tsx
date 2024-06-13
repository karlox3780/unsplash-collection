"use client"
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
                setPhoto(res);
            })
            .catch((err) => console.log(err));
    }, [id]);

    return (
        photo !== null && <div className="flex">
            <div>
                <Image className="" src={photo.urls.full} alt="Mobile background left image" height={500} width={500} />
            </div>
        </div>
    )
}