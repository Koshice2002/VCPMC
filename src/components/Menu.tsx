import '../styles/styles.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { InboxOutlined, UnorderedListOutlined, CalendarOutlined, FileTextOutlined, MoneyCollectOutlined, SettingOutlined, QuestionCircleOutlined, MoreOutlined } from '@ant-design/icons';

const Menu: React.FC = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });

  return (
    <div>
        {isDesktopOrLaptop ? (
            <div className="menu">
                <div className="logo">
                    <img
                        alt="logo"
                        style={{ height: '96px'}}
                        src={process.env.PUBLIC_URL + '/Image/logo.svg'}
                    />
                </div>

                <div className="items">
                    <div className="item">
                        <i className='icon-item'>
                            <InboxOutlined />
                        </i>
                        <span>Kho bản ghi</span>
                    </div>

                    <div className="item">
                        <i className='icon-item'>
                            <UnorderedListOutlined />
                        </i>
                        <span>Playlist</span>
                    </div>
                    
                    <div className="item">
                        <i className='icon-item'>
                            <CalendarOutlined />
                        </i>
                        <span>Lập lịch phát</span>
                    </div>

                    <div className="item">
                        <i className='icon-item'>
                            <FileTextOutlined />
                        </i>
                        <span>Quản lý</span>
                    </div>

                    <div className="item">
                        <i className='icon-item'>
                            <MoneyCollectOutlined />
                        </i>
                        <span>Doanh thu</span>
                    </div>

                    <div className="item">
                        <i className='icon-item'>
                            <SettingOutlined />
                        </i>
                        <span>Cài đặt</span>
                    </div>

                    <div className="item">
                        <i className='icon-item'>
                            <QuestionCircleOutlined />
                        </i>
                        <span>Hỗ trợ</span>
                    </div>
                </div>
            </div>
        ) : (
            <div className="menu">
                <div className="logo">
                    <img
                        alt="logo"
                        style={{ height: '96px'}}
                        src={process.env.PUBLIC_URL + '/Image/logo.svg'}
                    />
                </div>

                <div className="items">
                    <div className="item">
                        <i className='icon-item'>
                            <InboxOutlined />
                        </i>
                        <span>Kho bản ghi</span>
                    </div>

                    <div className="item">
                        <i className='icon-item'>
                            <UnorderedListOutlined />
                        </i>
                        <span>Playlist</span>
                    </div>
                    
                    <div className="item">
                        <i className='icon-item'>
                            <CalendarOutlined />
                        </i>
                        <span>Lập lịch phát</span>
                    </div>

                    <div className="item">
                        <i className='icon-item'>
                            <FileTextOutlined />
                        </i>
                        <span>Quản lý</span>
                    </div>

                    <div className="item">
                        <i className='icon-item'>
                            <MoneyCollectOutlined />
                        </i>
                        <span>Doanh thu</span>
                    </div>

                    <div className="item">
                        <i className='icon-item'>
                            <SettingOutlined />
                        </i>
                        <span>Cài đặt</span>
                    </div>

                    <div className="item">
                        <i className='icon-item'>
                            <QuestionCircleOutlined />
                        </i>
                        <span>Hỗ trợ</span>
                    </div>
                </div>
            </div>
        )}
    </div>
  );
};

export default Menu;
