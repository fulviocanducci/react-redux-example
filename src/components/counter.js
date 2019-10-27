import React from 'react';

export default function Counter({counter, onClickButton}) {
    return (
        <>
            <div>
                {counter}
            </div>
            <div>
                <button onClick={onClickButton}>Acrescenter</button>
            </div>
        </>
    )
}