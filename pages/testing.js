import React from 'react';

const Testing = () => {
    return (
        <div className="container mx-auto p-6 grid grid-cols-2 gap-4">
            <div className="col-span-1 flex flex-col bg-white border-2 p-4">
                <h2 className="mb-2 font-bold text-2xl">Card Name</h2>
                <div className="mb-4 flex flex-wrap">
                    <span className="mr-2">Link 1</span>
                    <span className="mr-2">Link 2</span>
                </div>
                <p className="text-md text-justify">Some Description</p>
                <div className="flex flex-wrap mt-auto pt-3 text-xs">
                    <p className="mr-2 mb-2">Tag #1</p>
                    <p className="mr-2 mb-2">Tag #2</p>
                </div>
            </div>
            <div className="col-span-1 flex flex-col bg-white border-2 p-4">
                <h2 className="mb-2 font-bold text-2xl">Card Name</h2>
                <div className="mb-4 flex flex-wrap">
                    <span className="mr-2">Link 1</span>
                    <span className="mr-2">Link 2</span>
                </div>
                <p className="text-md text-justify">
                    Some Description Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas vel enim lectus.
                </p>
                <div className="flex flex-wrap mt-auto pt-3 text-xs">
                    <p className="mr-2 mb-2">Tag #1</p>
                    <p className="mr-2 mb-2">Tag #2</p>
                </div>
            </div>
        </div>

    );
};

export default Testing;
