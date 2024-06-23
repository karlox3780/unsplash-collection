"use client"
import './page.css';
import moment from 'moment';
import PhotosService from "@/services/Photos.service";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from 'next/link';

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
            <div className='w-[50%] h-[100%] flex justify-end'>
                <Image className="rounded h-auto w-auto max-h-full" src={photo.urls.regular} alt="Mobile background left image" height={500} width={500} />
            </div>
            <div className='w-[50%] ml-[30px]'>
                <div className='flex items-center'>
                    <Image className="rounded-full" src={photo.user.profile_image.medium} height={40} width={40} alt={photo.user.name} />
                    <label className='ml-[10px] text-[#121826] text-[14px] font-medium'>{photo.user.name}</label>
                </div>
                <div className='mt-[10px]'>
                    <label className='text-[#121826] text-[12px] font-medium'>{`Published on ${moment(photo.created_at).format('LL')}`}</label>
                </div>
                <div className='mt-[15px]'>
                    <button type="button" className="text-[#121826] text-[14px] bg-[#E5E7EB] hover:bg-[#E5E7EB] font-medium rounded otext-sm px-5 py-2.5 mb-2 mr-[20px]">Add to Collection</button>
                    <Link href={`${photo.links.download}&force=true`} rel='nofollow' download target='_blank'>
                        <button type="button" className="text-[#121826] text-[14px] bg-[#E5E7EB] hover:bg-[#E5E7EB] font-medium rounded text-sm px-5 py-2.5 me-2 mb-2">
                            Download</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}