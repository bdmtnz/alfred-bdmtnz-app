import type React from 'react';
import InformationCircleIcon from '@public/icons/info-circle.svg';
import DetailTabLayout from './DetailTabLayout';

interface DetailTimezoneTabProps {
    timeZone: string;
    gmt: string;
    time: string;
}

const DetailTimezoneTab: React.FC<DetailTimezoneTabProps> = ({ timeZone, gmt, time }) => {
    return (
        <div className="flex flex-col gap-10">
            <DetailTabLayout content={
                <div>
                    <div className="flex items-center mb-10">
                        <InformationCircleIcon className="scale-80 ml-[-10px]"/>
                        <h2 className="ml-2 text-3xl font-(family-name:--font-jumbo) font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">Zona Horaria</h2>
                    </div>
                    <div className="text-xl space-y-4">
                        <p className="flex"><span className="font-bold w-[180px]">Zona Horaria:</span> {timeZone}</p>
                        <p className="flex"><span className="font-bold w-[180px]">GMT:</span> {gmt}</p>
                    </div>
                </div>
            }/>
            <DetailTabLayout content={
                <div>
                    <div className="flex items-center mb-10">
                        <InformationCircleIcon className="scale-80 ml-[-10px]"/>
                        <h2 className="ml-2 text-3xl font-(family-name:--font-jumbo) font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">Hora Local</h2>
                    </div>
                    <div className="text-xl space-y-4">
                        <p className="flex">{time}</p>
                    </div>
                </div>
            }/>
        </div>
    );
};

export default DetailTimezoneTab;