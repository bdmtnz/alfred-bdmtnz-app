'use client'

import type React from 'react';
import { useState } from 'react';
import CardImage from "@public/pictures/card-avion.png";
import FlightIcon from "@public/icons/flight.svg";
import Image from "next/image";

interface Tab {
    key: string;
    label: string;
    isDisabled: boolean;
    content: React.ReactNode;
}

interface TabsProps {
    tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className='flex flex-col gap-8'>
            <div className="flex bg-[#3F495F] p-2 rounded-sm">
                {tabs.map((tab, index) => (
                    <button
                        type="button"
                        key={`tab-option-${tab.key}`}
                        onClick={() => setActiveTab(index)}
                        className={`px-4 py-2 focus:outline-none rounded-sm w-full
                            ${activeTab === index ? 'bg-blue-600 text-white' : 'transparent text-gray-400'}
                            ${tab.isDisabled ? 'cursor-not-allowed' : 'cursor-pointer hover:bg-blue-700 hover:text-white hover:opacity-40'}
                        `}
                        disabled={tab.isDisabled}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div
                className="rounded-xl flex overflow-hidden shadow-lg bg-gray-800 text-white border border-gray-400 h-auto min-h-[235px] bg-gradient-to-r from-[#3F495F] to-[#0E1934] cursor-pointer"
            >
                <div className="p-8 w-[65%] flex flex-col justify-between">
                    {tabs[activeTab].content}
                </div>
                <div className="relative h-full w-[35%]">
                    <Image
                        src={CardImage}
                        alt='airport-img'
                        layout="fill"
                        objectFit="cover"
                        className="opacity-6"
                    />
                    <div className="absolute top-0 right-0 m-4 rounded-full w-[55px] h-[55px]">
                        <FlightIcon />
                    </div>
                </div>          
            </div>
        </div>
    );
};

export default Tabs;