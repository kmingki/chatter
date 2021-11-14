import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, List, Avatar, Modal, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { SEARCH_USER_REQUEST } from '../reducers/user';

/*
const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://joeschmoe.io/api/v1/random',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}
*/

const Room = ({ height}) => {
    //서버사이드렌더링 - pre rendering 해야할 필요가 있을까?
    const dispatch = useDispatch();
    const { searchUserResult } = useSelector((state) => state.user);
    const [visible, onChangeVisible] = useState(false);

    const showModal = () => {
        onChangeVisible(true);
    }

    const handleCancel = () => {
        onChangeVisible(false);
    }

    const handleOk = () => {
        console.log('ok');
    }

    const onSearch = (e) => {
        dispatch({
            type: SEARCH_USER_REQUEST,
            data: e
        });

    }
    const listData = searchUserResult.map((v, i) => ({ 
        uid: i,
        title: v.nickname,
        content: v.email
      }));

    return (
        <div>
        
        <div className="messageTitle" style={{height: "50px", borderBottom: "solid thin #EFEEF5", display: "flex"}}>
            <div style={{width: "600px", display:"flex"}}>
                <div style={{display:"flex", alignItems:"center", flexGrow: "1"}}>
                    <div>
                        <h2 style={{margin:"0"}}>&nbsp;&nbsp;Messages</h2>
                    </div>
                </div>
                <div style={{display:"flex", alignItems:"center", flexGrow: "0"}}>
                    <div>
                        <Button type="text" shape="circle" onClick={showModal} icon={<PlusOutlined />} style={{margin: "0 15px"}} size="large"></Button>
                    </div>
                    <Modal
                    visible={visible}
                    title="New Messages"
                    onOk={handleOk}
                    onCancel={handleCancel}
                    bodyStyle={{height: "500px"}}
                    footer={[
                        <Button key="submit" type="primary" onClick={handleOk}>
                        Next
                        </Button>,
                        ]}
                    >
                    <Input.Search placeholder="Search People" onSearch={onSearch} bordered={false}  />
                    <List
                    itemLayout="vertical"
                    dataSource={listData}
                    renderItem={item => (
                    <List.Item
                        key={item.title}>
                        <List.Item.Meta
                        avatar={<Avatar src={item.avatar} />}
                        title={<a href={item.href}>{item.title}</a>}
                        />
                    {item.content}
                    </List.Item>
                    )}
                    />
                    </Modal>
                </div>
            </div>
        </div>

        <div id="scrollableDiv" style={{height: height-50 , overflow: 'auto'}}>
        <List
        itemLayout="vertical"
        dataSource={listData}
        renderItem={item => (
        <List.Item
            key={item.title}>
            <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<a href={item.href}>{item.title}</a>}
            />
        {item.content}
      </List.Item>
      )}
      />
        </div>

        </div>
    );
}

export default Room;
