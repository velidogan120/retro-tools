"use client"
import { Button, Input } from 'antd'
import React, {useEffect, useState}from 'react'

const Card = ({socket,room,username}) => {
    const [message, setMessage] = useState("")
    const [messageList, setMessageList] = useState([]);

    useEffect(() => {
      socket.on("messageReturn",(data) => {
        setMessageList(prev => [...prev,data])
      })
    }, [socket])
    

    const sendMessage = async() => {
      const messageContent = {
        username:username,
        message:message,
        room:room,
        date: new Date().getHours() + " : " + new Date().getMinutes()
      }
        socket.emit("message",messageContent);
        setMessageList(prev => [...prev,messageContent])
        setMessage("")
    }
    console.log(messageList);
  return (
    <div>
        {
          messageList && messageList.map((msg,i)=>(
            <div key={i}>
              <div >{msg.message}</div>
              <p>{msg.username}</p>
            </div>
          ))
        }
        <Input message={message} onChange={e => setMessage(e.target.value)}placeholder="Basic usage" />
        <Button onClick={sendMessage} type="primary">Primary Button</Button>
    </div>
  )
}

export default Card