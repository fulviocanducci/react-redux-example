import React from 'react';

export default function ChangeNameInput({value, input, onChangeInput, onClickButton}) {
    return (
        <>
            <div>
                {value}
            </div>
            <div>
                <input value={input} onChange={onChangeInput} />
            </div>
            <div>
                <button onClick={onClickButton}>Alterar Nome</button>
            </div>      
        </>
    )
}