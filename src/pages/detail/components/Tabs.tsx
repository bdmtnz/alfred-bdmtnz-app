'use client'

import type React from 'react';
import { useState } from 'react';

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
        <div className='flex flex-col gap-7 sm:gap-14'>
            <div className="flex bg-[#3F495F] p-2 rounded-sm">
                {tabs.map((tab, index) => (
                    <button
                        type="button"
                        key={`tab-option-${tab.key}`}
                        onClick={() => setActiveTab(index)}
                        className={`px-0 py-3 focus:outline-none rounded-sm w-full
                            ${activeTab === index ? 'bg-blue-600 text-white' : 'transparent text-gray-400'}
                            ${tab.isDisabled ? 'cursor-not-allowed' : 'cursor-pointer hover:bg-blue-700 hover:text-white hover:opacity-40'}
                        `}
                        disabled={tab.isDisabled}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className='tab-portal overflow-y-auto'>
                {tabs[activeTab].content}
            </div>
        </div>
    );
};

export default Tabs;