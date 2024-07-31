"use client"
import React from "react";
import { Button , Form, Input } from "antd";


const Room = ({username,setUsername,room,setRoom,setChatScreen,socket}) => {
    const onFinish = (values) => {
        console.log("Success:", values);
        sendRoom();
    };
    const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    };
    const sendRoom = () => {
        socket.emit("room", room);
        setChatScreen(true);
    }

  return <>
    <Form name="basic" labelCol={{span: 8,}} wrapperCol={{span: 16,}} style={{maxWidth: 600,}} initialValues={{remember: true,}} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
        <Form.Item label="Username" name="username">
        <Input value={username} onChange={e => setUsername(e.target.value)} />
        </Form.Item>

        <Form.Item label="Room Id" name="roomId">
        <Input value={room} onChange={e => setRoom(e.target.value)} />
        </Form.Item>

        <Form.Item
        wrapperCol={{
            offset: 8,
            span: 16,
        }}>
        <Button type="primary" htmlType="submit">
            Submit
        </Button>
        </Form.Item>
    </Form></>

    };
export default Room;
