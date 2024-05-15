"use client"
import "./page.css";
import { useEffect } from "react";
import PhotosService from "../../services/Photos.service";

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

        </div>
    );
}