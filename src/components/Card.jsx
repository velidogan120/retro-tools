"use client"
import { Button, Input } from 'antd'
import React, {useState}from 'react'

const Card = ({socket}) => {
    const [message, setMessage] = useState()

    const sendMessage = async() => {
        socket.emit("message",message)
    }
  return (
    <div>
        <Input message={message} onChange={e => setMessage(e.target.value)}placeholder="Basic usage" />
        <Button onClick={sendMessage} type="primary">Primary Button</Button>
    </div>
  )
}

export default Card