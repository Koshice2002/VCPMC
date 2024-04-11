import '../../styles/auth.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Form, Input, Button, Checkbox } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const LoginForm: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const onFinish = async ({ username, password }: { username: string, password: string }) => {
        try {
            if (!username || !password) {
                setError('Hãy nhập tài khoản và mật khẩu.');
                return;
            }

            if (username !== 'alta@gmail.com' || password !== '123123') {
                setError('Sai tên đăng nhập hoặc mật khẩu.');
                return;
            }

        } catch (error) {
            setError('Đã xảy ra lỗi khi đăng nhập.');
        }
    };

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });

  return (
    <div>
        {isDesktopOrLaptop ? (
            <>
                <h1 className='title'>
                    Đăng nhập
                </h1>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <div>Tên đăng nhập</div>
                    <Form.Item
                        name="username"
                        validateStatus={error ? 'error' : ''}
                    >
                        <Input
                            className={error ? 'form error' : 'form'}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Form.Item>
                
                    <div>Password</div>
                    <Form.Item
                        name="password"
                        validateStatus={error ? 'error' : ''}
                    >
                        <Input.Password
                            className={error ? 'form error' : 'form'}
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Item>

                    {error && (
                        <div style={{ color: 'red', margin: '-15px 0 25px 0'}}>
                            <ExclamationCircleOutlined style={{ marginRight: '5px' }}/>
                            <span>{error}</span>
                        </div>
                    )}

                    <Form.Item style={{ marginTop: '-20px'}}>
                        <Form.Item name="remember"noStyle>
                            <Checkbox
                                className='check-remember'
                                style={{color: 'white'}}
                            >
                                Ghi nhớ đăng nhập
                            </Checkbox>
                        </Form.Item>
                    </Form.Item>

                    <Form.Item className='title'>
                        <Button className='btnLogin' htmlType="submit">
                            Đăng nhập
                        </Button>
                    </Form.Item>
                </Form>
            </>
        ) : (
            <>
                <h1 className='title'>
                    Đăng nhập
                </h1>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <div>Tên đăng nhập</div>
                    <Form.Item
                        name="username"
                        validateStatus={error ? 'error' : ''}
                    >
                        <Input
                        className={error ? 'form error' : 'form'}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        />
                    </Form.Item>
                
                    <div>Password</div>
                    <Form.Item
                        name="password"
                        validateStatus={error ? 'error' : ''}
                    >
                        <Input.Password
                            className='form'
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Item>

                    {error && (
                        <div style={{ color: 'red', margin: '-15px 0 25px 0'}}>
                            <ExclamationCircleOutlined style={{ marginRight: '5px' }}/>
                            <span>{error}</span>
                        </div>
                    )}


                    <Form.Item style={{ marginTop: '-20px'}}>
                        <Form.Item name="remember"noStyle>
                            <Checkbox
                                className='check-remember'
                                style={{color: 'white'}}
                            >
                                Ghi nhớ đăng nhập
                            </Checkbox>
                        </Form.Item>
                    </Form.Item>

                    <Form.Item className='title'>
                        <Button className='btnLogin' htmlType="submit">
                            Đăng nhập
                        </Button>
                    </Form.Item>
                </Form>
            </>
        )}
    </div>
  );
};

export default LoginForm;
