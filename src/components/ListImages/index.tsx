import Image from "next/image";
type Props = {
    gallery: any
}
export default function ListImages({ gallery }: Props) {
    console.log(gallery)
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((image: any) => {
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={image.urls.full} alt="" width={80} height={80} />
                </div>
            })
            }
        </div>
    )
}