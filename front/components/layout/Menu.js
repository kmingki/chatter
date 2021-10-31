import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'antd';
import { HomeOutlined, SearchOutlined, MailOutlined, StarOutlined} from '@ant-design/icons';

const menuStyle={
    display:"flex",
    height:"50px",
    position: "fixed",
    bottom:"0",
    zIndex:"99",
    background:"white",
    width:"100%",
    borderTop: "solid thin #EFEEF5",
}

const Menu = () => {
    const router = useRouter();

    const onClickHome = useCallback(()=>{
        return router.push('/main');
    }, []);

    const onClickSearch = useCallback(()=>{
        return router.push('/search');
    }, []);
    const onClickMessages = useCallback(()=>{
        return router.push('/messages');
    }, []);
    const onClickNotification = useCallback(()=>{
        return router.push('/notification');
    }, []);

    return(
        <>
        <div style={{menuStyle}}>
            <Button type="text" shape="circle" icon={<HomeOutlined style={{color: "#2C2C2C", fontSize: "23px"}}/>} onClick={onClickHome}></Button>
            <Button type="text" shape="circle" icon={<SearchOutlined style={{color: "#2C2C2C", fontSize: "23px"}}/>} onClick={onClickSearch}></Button>
            <Button type="text" shape="circle" icon={<MailOutlined style={{color: "#2C2C2C", fontSize: "23px"}}/>} onClick={onClickMessages}></Button>
            <Button type="text" shape="circle" icon={<StarOutlined style={{color: "#2C2C2C", fontSize: "23px"}}/>} onClick={onClickNotification}></Button>
        </div>
        </>
    );
};

export default Menu;