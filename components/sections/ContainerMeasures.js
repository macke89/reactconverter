import React from 'react';

const ContainerMeasures = ({children}) => {
    return (
        <main className="flex flex-col w-full p-4 gap-10 sm:flex-row xl:w-4/5 mx-auto justify-center items-center">
            {children}
        </main>
    );
};

export default ContainerMeasures;
