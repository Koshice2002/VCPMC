import '../../../styles/styles.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { FormOutlined, LockOutlined, LogoutOutlined } from '@ant-design/icons';

interface SubMenuProps {
  handleChangeInfo: () => void;
  handleChangePassword: () => void;
}

const MenuActionAuth: React.FC<SubMenuProps> = ({ handleChangeInfo, handleChangePassword }) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });

  return (
    <div>
        {isDesktopOrLaptop ? (
            <div className="subMenu">
                <div className='container'>
                    <div className='item-action' onClick={handleChangeInfo}>
                        <i className='icon-container'>
                            <FormOutlined className='action-icon' />
                        </i>
                        <p className='action-name'>
                            Sửa thông tin
                        </p>
                    </div>

                    <div className='item-action' onClick={handleChangePassword}>
                        <i className='icon-container'>
                            <LockOutlined className='action-icon' />
                        </i>
                        <p className='action-name'>
                            Đổi mật khẩu
                        </p>
                    </div>

                    <Link to={'/login'} className='custom-link item-action'>
                        <i className='icon-container'>
                            <LogoutOutlined className='action-icon' />
                        </i>
                        <p className='action-name'>
                            Đăng xuất
                        </p>
                    </Link>
                </div>
            </div>
        ) : (
            <div className="subMenu">
                <div className='container'>
                    <div className='item-action'>
                        <i className='icon-container'>
                            <FormOutlined className='action-icon' />
                        </i>
                        <p className='action-name'>
                            Sửa thông tin
                        </p>
                    </div>

                    <div className='item-action'>
                        <i className='icon-container'>
                            <LockOutlined className='action-icon' />
                        </i>
                        <p className='action-name'>
                            Đổi mật khẩu
                        </p>
                    </div>

                    <div className='item-action'>
                        <i className='icon-container'>
                            <LogoutOutlined className='action-icon' />
                        </i>
                        <p className='action-name'>
                            Đăng xuất
                        </p>
                    </div>
                </div>
            </div>
        )}
    </div>
  );
};

export default MenuActionAuth;
