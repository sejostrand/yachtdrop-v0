import React from 'react'

const Button = ({ filtered }) => {
    return (
        <div>
            <button type="button" onClick={() => filtered('Coca Cola 33cl')}>Coca Cola</button>
        </div>
    )
}

export default Button
