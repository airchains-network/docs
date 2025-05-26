import ApiReference from ".";
import { useState } from 'react';
import ApiView from "../../components/api-reference/api.view";


const sidebarItems = [
    { id: 'mainnet', label: 'Mainnet', url: 'https://rpc.airchains.io' },
    { id: 'testnet', label: 'Testnet', url: 'https://rpc.testnet.airchains.io' },
    { id: 'devnet', label: 'Devnet', url: 'https://rpc.devnet.airchains.io' }
];

export default function RpcApi() {
    const [activeItem, setActiveItem] = useState('overview');

    return (
        <ApiReference>
            <div className="flex gap-8 h-full">
                <aside className="w-1/5 h-full bg-black/10 border-r border-gray-800 flex flex-col py-4 pl-12 gap-6">
                    <h4 className="px-4 text-white/90 text-sm font-medium">
                        Airchains Tendermint RPC
                    </h4>
                    <span className="pl-4 text-white/70 text-sm font-medium">
                        Overview
                    </span>
                    <div className="flex flex-col w-full">
                        <div className="pl-4 text-white text-sm font-medium">
                            Endpoint
                        </div>
                        {sidebarItems.map((item) => (
                            <span
                                key={item.id}
                                onClick={() => setActiveItem(item.id)}
                                className={`px-4 py-3 text-white/80 text-sm font-medium duration-400 ease-in-out
                                    ${activeItem === item.id ?
                                        'bg-purple-950 border-r-4 border-purple-800' :
                                        'hover:bg-black/10'}
                                    `}>
                                {item.label}
                            </span>
                        ))}
                    </div>
                </aside>
                <main className="w-4/5 py-8 px-8">
                    <ApiView />
                </main>
            </div>
        </ApiReference>
    );
}
