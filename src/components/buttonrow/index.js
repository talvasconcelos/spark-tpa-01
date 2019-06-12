import React from 'react'

import { Button } from 'antd'

const Buttonrow = ({cancel, confirm}) => {

    const buttonrow = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '10px',
        padding: '10px 10px 20px 10px'
    }

    return (
        <div style={buttonrow}>
            <Button className='button' style={{height: '100%'}} onClick={cancel}>Cancel</Button>
            <Button className='button' style={{height: '100%'}} onClick={confirm}>Ok</Button>
        </div>
    )
}

export default Buttonrow