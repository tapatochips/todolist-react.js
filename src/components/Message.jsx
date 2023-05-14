import React from 'react'
import { useMessage } from '../context/MessageContext'

export default function Message({ color, text, index }) {

    
    const { removeMessage } = useMessage()

    return (
        <div class={`alert alert-${color} alert-dismissible fade show`} >
           { text }
            <button type="button" class="btn-close" onClick={()=>{removeMessage(index)}}></button>
        </div>
    )
}