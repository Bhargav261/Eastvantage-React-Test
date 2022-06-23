import React from 'react';

type props = {
    label?: string,
    value: string,
    clName?: string
}

const Details = ({ label, value, clName }: props) => {
    return (
        <>
            <div className={clName}>
                {
                    label && <label>{label}</label>
                }
                <div>{value}</div>
            </div>
        </>
    )
}

export default Details;