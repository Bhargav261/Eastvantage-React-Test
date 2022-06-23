import React from 'react';

type props = {
    src: string
}

const Image = ({ src }: props) => {
    return (
        <>
            <img src={src} alt="Avatar" />
        </>
    )
}

export default Image;