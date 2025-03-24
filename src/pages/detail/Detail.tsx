import Tabs from "./components/Tabs";

const Detail: React.FC<{ numberParam?: string | null }> = ({ numberParam }) => {
    return (
        <div className="page flex flex-col gap-4 bg-transparent">
            <div className="flex items-center justify-center mt-5 mb-6">
                <h1 className="bg-gradient-to-r from-[#006AFF] to-[#00DBFF] bg-clip-text text-transparent font-(family-name:--font-jumbo) text-4xl">
                    Title {numberParam ?? 'N/A'}
                </h1>
            </div>
            <Tabs tabs={[
                { 
                    key: 'tab-1',
                    label: 'Tab 1',
                    isDisabled: false,
                    content: <div>Tab 1 content</div>
                },
                { 
                    key: 'tab-2',
                    label: 'Tab 2',
                    isDisabled: false,
                    content: <div>Tab 2 content</div>
                },
                { 
                    key: 'tab-3',
                    label: 'Tab 3',
                    isDisabled: false,
                    content: <div>Tab 3 content</div>
                },
                { 
                    key: 'tab-4',
                    label: 'Tab 4',
                    isDisabled: true,
                    content: <div>Tab 4 content</div>
                }
            ]}/>
        </div>
    );
}

export default Detail;