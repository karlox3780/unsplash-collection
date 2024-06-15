import Image from "next/image";
import Link from "next/link";
type Props = {
    gallery: any
}
export default function ListImages({ gallery }: Props) {

    return (
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-[24px] w-[90vw] mb-[48px]">
            {
                gallery.map((image: any, index: any) => {
                    return (
                        <div key={image.id} className="mb-[24px] break-inside-avoid">
                            <Link href={`/imageDetail/${image.id}`}><Image className="h-auto max-w-full rounded-lg w-[100%]" src={image.urls.regular} alt={image.alt_description} width={500} height={500} /></Link>
                        </div>
                    )
                })
            }
        </div>
    )
}