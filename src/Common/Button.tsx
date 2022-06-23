import React,{memo} from 'react';

type props = {
    onClick: () => void,
    value : string
}


const Button = ({onClick, value} : props) => {
    return (
        <>
            <button onClick={onClick} className="nextButton">{value}</button>
        </>
    )
}

export default  memo(Button);