"use client";
import React, { useState } from 'react'
import Room from './Room'
import io from "socket.io-client";
import Card from './Card';

const socket = io.connect("http://localhost:5000");

const Main = () => {
    const [username, setUsername] = useState("")
    const [room, setRoom] = useState("")
    const [chatScreen, setChatScreen] = useState(false)
  return (
    <div>
        {
            !chatScreen 
                ? 
                <Room username={username} setUsername={setUsername} room={room} setRoom={setRoom} setChatScreen={setChatScreen} socket={socket}></Room>
                :
                <Card socket={socket}></Card>
        }
    </div>
  )
}

export default Main