import React from 'react';

export default function ListOf({lists, onClickButton}) {
    return (
        <>
            <div>
                <ul>
                    {lists.map((l, i) => (
                        <li key={i}>{l}</li>
                    ))}
                </ul>
            </div>
            <div>
                <button onClick={onClickButton}>Novo Item</button>
            </div>            
        </>
    )
}