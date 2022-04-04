import React from 'react';

const MyComponent = ({letterClass, strArray, idx}) => {
    return (
        <span>
            {
                strArray.map((char, i)=>(
                    <span key={char+1} className={`${letterClass} text-animate-hover _${i + idx}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    );
};

export default MyComponent;
