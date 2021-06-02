import React, { useState } from 'react'

const DropDown = ({ title, items = [], multiSelect = false }) => {
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState(false);
    const toggle = () => setOpen(!open);

    const handleOnClick = (item) => {}

    return (
        <>
        <div 
            onClick={() => toggle(!open)}
            onKeyPress={() => toggle(!open)}
        >
            <p>{title}</p>
        </div>
        <div>
            <p>{open ? 'Close' : 'Open'}</p>
        </div>
        {open && (
        <ul>
            {items.map(item => (
                <li key={item.id}>
                    <button onClick={() => handleOnClick(item)}>
                        <span>{item.value}</span>
                        <span>Selected...</span>
                    </button>
                </li>
            ))}
        </ul>
        )}
        </>
    )
}

export default DropDown
