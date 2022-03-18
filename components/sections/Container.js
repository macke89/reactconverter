import React from 'react';

const Container = ({children}) => {
    return (
        <div data-theme="corporate" className="min-h-screen flex flex-col justify-between">
            {children}
        </div>
    );
};

export default Container;
