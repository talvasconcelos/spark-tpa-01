import React from 'react'

import { Button } from 'antd'

const pad = ['1','2','3','4','5','6','7','8','9','C','0','.']

const Keypad = ({click, cancel, confirm}) => {
    return (
        <div className='keypad'>
            {pad.map((v, k) => {
                return (<Button key={k} onClick={() => click(v)} style={{height: '100%'}}>
                    {v}
                </Button>)
                }) }
        </div>
        
    )
}

export default Keypad