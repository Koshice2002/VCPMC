import React, { ReactNode } from 'react';

import '../styles/styles.css';
import { Flex, Button } from 'antd';
import Menu from '../components/Menu';
import { DownOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {

    return (
        <>
            <div style={{display: 'flex', justifyContent: 'end'}}>
                <Button className='select-language'>
                    <div>
                        Tiếng Việt
                    </div>

                    <i style={{display: 'flex', justifyContent: 'center', marginLeft: '8px'}}>
                        <img
                            alt="vietnamese"
                            style={{ height: '24px', marginRight: '4px'}}
                            src={process.env.PUBLIC_URL + '/Image/vietnam 1.svg'}
                        />
                        <DownOutlined style={{width: '10px'}}/>
                    </i>
                </Button>
                <Flex justify='start' align='middle' className='account'>
                    <img
                        alt="avatar"
                        className='account-img'
                        src={process.env.PUBLIC_URL + '/Image/Avatar.jpg'}
                    />
                    <div style={{marginLeft: '5px'}}>
                        <h4 style={{ color: 'white', margin: '0' }}>Ng.Khoa</h4>
                        <p style={{ color: '#B65100', margin: '0' }}>Admin</p>
                    </div>
                </Flex>
            </div>

            <Menu></Menu>   

            <div className='basic'>
                {children}
            </div>
        </>
    );
};

export default MainLayout;
