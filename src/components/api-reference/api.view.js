import React from 'react'

const ApiView = () => {
    return (
        <div className='w-full h-full flex flex-col gap-4' >
            <h1 className='text-3xl font-bold'>Api label name</h1>
            <div className='bg-gray-800 p-4 rounded-lg w-fit flex gap-4 items-center'>
                <div className='text-lg text-white/90 font-bold uppercase bg-[#0f6c47] px-3 py-1 rounded-md'>GET</div>
                <div className='flex flex-col gap-1'>
                    <span className='text-lg  text-white/90'>
                        <span className='text-gray-400'>
                            https://api.base.url
                        </span>
                        /api/label/name
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ApiView