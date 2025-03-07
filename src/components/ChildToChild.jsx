import React from 'react'
import './ChildStyle.css'

function ChildToChild(props) {
    return (
        <h2 className='child'>Hola {props.userName}</h2>
    )
}

export default ChildToChild