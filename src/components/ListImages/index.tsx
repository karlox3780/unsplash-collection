import Image from "next/image";
type Props = {
    gallery: any
}
export default function ListImages({ gallery }: Props) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[24px] w-[90vw] mb-[48px]">
            {gallery.map((image: any) => (
                <div key={image.id}>
                    <Image className="h-auto max-w-full rounded-lg w-[100%]" src={image.urls.full} alt={image.alt_description} width={500} height={500} />
                </div>))
            }
        </div>
    )
}