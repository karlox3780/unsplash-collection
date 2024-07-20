import Image from "next/image";
import Link from "next/link";

type Props = {
    src: any[],
    title: string,
    id: string,
    total: number;
};

export default function GridCollections({ id, src, title, total = 0 }: Props) {
    return (
        <div className="w-full h-full flex flex-col">
            <Link href={'/collections/' + id} className="w-full h-4/5 hover:scale-105 hover:opacity-80 active:opacity-90 active:scale-100 transition-all">
                {src.length < 1 && <div className="w-full h-full bg-secondaryGray dark:bg-secondaryBlack" />}
                {src.length === 1 && <Image className="w-full h-full object-cover select-none" width={400} height={400} src={src[0].urls.small} alt={title + ' Collection'} />}
                {src.length === 2 && <div className="w-full h-full flex overflow-hidden">
                    <Image className="h-full w-1/2 pr-1 object-cover select-none" width={400} height={400} src={src[0].urls.small} alt={title + ' Collection (img1)'} />
                    <Image className="h-full w-1/2 pl-1 object-cover select-none" width={400} height={400} src={src[1].urls.small} alt={title + ' Collection (img2)'} />
                </div>}
                {src.length >= 3 && <div className="w-full h-full flex overflow-hidden">
                    <Image className="h-full w-1/2 pr-1 object-cover select-none" width={400} height={400} src={src[0].urls.small} alt={title + ' Collection (img1)'} />
                    <div className="flex flex-col w-1/2 pl-1 h-full">
                        <Image className="h-1/2 pb-1 w-full object-cover select-none" width={400} height={400} src={src[1].urls.small} alt={title + ' Collection (img2)'} />
                        <Image className="h-1/2 pt-1 w-full object-cover select-none" width={400} height={400} src={src[2].urls.small} alt={title + ' Collection (img3)'} />
                    </div>
                </div>}
            </Link>
            <div>
                <h1 className="max-w-full overflow-hidden text-ellipsis whitespace-nowrap font-medium text-[16px] text-[#121826]">{title}</h1>
                <h2 className="font-medium text-[12px] text-[#121826] mt-[5px]">{total} {total === 1 ? 'photo' : 'photos'}</h2>
            </div>
        </div>
    )
}