import React, { useState, useEffect } from 'react'
import Layout from '@theme/Layout';
import { useHistory, useLocation } from '@docusaurus/router';

const ApiReference = ({ children }) => {
    const history = useHistory();
    const location = useLocation();
    const [selectedApi, setSelectedApi] = useState('rpc');

    const apiOptions = [
        { value: 'rpc', label: 'RPC', path: '/api-reference/rpc' },
        { value: 'rest', label: 'REST API', path: '/api-reference/rest' },
        { value: 'junction', label: 'Junction API', path: '/api-reference/junction' },
        { value: 'wasm', label: 'WASM API', path: '/api-reference/wasm' }
    ];

    // Redirect to RPC page if we're on the base API reference page
    useEffect(() => {
        if (location.pathname === '/api-reference') {
            history.replace('/api-reference/rpc');
            return;
        }

        const currentPath = location.pathname;
        const currentApi = apiOptions.find(option => option.path === currentPath);
        if (currentApi) {
            setSelectedApi(currentApi.value);
        }
    }, [location.pathname, history]);

    const handleApiChange = (e) => {
        const newApi = e.target.value;
        setSelectedApi(newApi);
        const selectedOption = apiOptions.find(option => option.value === newApi);
        if (selectedOption) {
            history.push(selectedOption.path);
        }
    };

    return (
        <Layout>
            <div className='h-screen'>
                <div className="flex justify-between items-center px-6 py-4 border-y border-gray-800/50 backdrop-blur-sm">
                    <div className="flex-1">
                        <h1 className="text-2xl font-semibold text-white/90 m-0 tracking-wide">
                            Airchains <span className="text-primary/90 font-medium ml-1">{selectedApi.toUpperCase()}</span> endpoint
                        </h1>
                    </div>
                    <div className="ml-6">
                        <select
                            value={selectedApi}
                            onChange={handleApiChange}
                            className="bg-[#1b1b1d] text-white/90 py-2 px-4 border border-gray-700/50 rounded-lg text-sm font-medium 
                                 hover:border-gray-600/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 
                                 transition-all duration-200 cursor-pointer min-w-[160px] appearance-none"
                        >
                            {apiOptions.map((option) => (
                                <option
                                    key={option.value}
                                    value={option.value}
                                    className="bg-[#1b1b1d] text-white/90 py-2"
                                >
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <main className='h-full'>{children}</main>
            </div>
        </Layout>
    );
}

export default ApiReference;
