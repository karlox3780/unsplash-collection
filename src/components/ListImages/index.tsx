import Image from "next/image";
type Props = {
    gallery: any
}
export default function ListImages({ gallery }: Props) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((image: any) => (
                <div key={image.id}>
                    <Image className="h-auto max-w-full rounded-lg" src={image.urls.full} alt={image.alt_description} width={80} height={80} />
                </div>))
            }
        </div>
    )
}