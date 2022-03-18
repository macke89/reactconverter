import React from 'react';

const ContainerMeasures = ({children}) => {
    return (
        <main className="flex flex-col justify-center w-full p-4 gap-10 sm:flex-row">
            {children}
        </main>
    );
};

export default ContainerMeasures;
