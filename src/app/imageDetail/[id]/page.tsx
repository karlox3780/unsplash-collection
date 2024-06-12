"use client"
import PhotosService from "@/services/Photos.service";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
    const router = useParams();
    const { id } = router;

    useEffect(() => {
        id && PhotosService
            .getPhoto(String(id))
            .then((res) => {
                console.log(res)
            })
            .catch((err) => console.log(err));
    }, [id]);

    return (
        <>
        </>
    )
}