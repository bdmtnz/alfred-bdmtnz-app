import CardImage from "@public/pictures/card-avion.png";
import Image from "next/image";

interface DetailTabLayoutProps {
    content: React.ReactNode;
}

const DetailTabLayout: React.FC<DetailTabLayoutProps> = ({ content }) => {
    return (
        <div
            className="rounded-sm flex overflow-hidden shadow-lg bg-gray-800 text-white border border-gray-400 h-auto min-h-[235px] bg-gradient-to-r from-[#3F495F] to-[#0E1934]"
        >
            <div className="p-8 w-[65%] flex flex-col justify-between">
                {content}
            </div>
            <div className="relative w-[35%]">
                <Image
                    src={CardImage}
                    alt='airport-img'
                    layout="fill"
                    objectFit="cover"
                    className="opacity-6"
                />
            </div>          
        </div>
    );
}

export default DetailTabLayout;