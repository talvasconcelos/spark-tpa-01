import React from 'react'

const Display = ({ value, fontSize }) => {
    const displayStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        height: '25vh', 
        overflow: 'hidden'
    }

    const size = {
        fontSize: fontSize
    }

    return (
        <div style={displayStyle}>
            <span id='display' style={size}>
                <small className='curr'>{value && `€${value}`}</small>
            </span>
        </div>
    )
}

export default Display