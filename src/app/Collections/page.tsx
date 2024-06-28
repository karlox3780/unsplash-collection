"use client";
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

        </div>
    );
}