import React from 'react'

const Button = ({ button, filtered }) => {
    return (
        <div>
            {/* {
                button.map((cat, i) => {
                    return <button type="button" onClick={() => filtered(cat)}>{cat}</button>
                })
            } */}
            <button type="button" onClick={() => filtered("gin")}>GIN</button>
        </div>
    )
}

export default Button
