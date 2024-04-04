import '../styles/auth.css';
import { Button } from 'antd';

import React, { ReactNode } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';


interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
    const location = useLocation();

    return (
        <>
            <div style={{display: 'flex' ,justifyContent: 'end'}}>
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
            </div>

            <div className='content'>
                <div style={{marginBottom: '20px'}}>
                    <img
                        alt="logo"
                        style={{ height: '240px'}}
                        src={process.env.PUBLIC_URL + '/Image/logo.svg'}
                    />
                </div>

                <div>
                    <div style={{width: '500px'}}>
                        {children}
                    </div>
                </div>
            </div>

            <footer className="footer">
                {location.pathname === '/login' ? (
                    <Link className="footer-content" to={'/forgot-password'}>Quên mật khẩu</Link>
                ) : (
                    <Link className="footer-content" to={'/login'}>Quay lại đăng nhập</Link>
                )}
            </footer>
        </>
    );
};

export default AuthLayout;
