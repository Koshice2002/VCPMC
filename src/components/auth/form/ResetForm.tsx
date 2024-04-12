import '../../../styles/auth.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { useMediaQuery } from 'react-responsive';

const ResetForm: React.FC = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });

  return (
    <div>
        {isDesktopOrLaptop ? (
            <>
                <h1 className='title'>
                    Đặt lại mật khẩu
                </h1>
                <Form
                    name="reset_password"
                    className="login-form"
                >
                    <div>Mật khẩu mới</div>
                    <Form.Item
                        name="password"
                    >
                        <Input.Password
                            className='form'
                            type="password"
                        />
                    </Form.Item>

                    <div>Nhập lại mật khẩu mới</div>
                    <Form.Item
                        name="confirmPassword"
                    >
                        <Input.Password
                            className='form'
                            type="password"
                        />
                    </Form.Item>

                    <Form.Item className='title'>
                        <Button className='btnLogin' htmlType="submit">
                            Lưu mật khẩu
                        </Button>
                    </Form.Item>
                </Form>
            </>
        ) : (
            <>
                <h1 className='title'>
                    Đặt lại mật khẩu
                </h1>
                <Form
                    name="reset_password"
                    className="login-form"
                >
                    <div>Mật khẩu mới</div>
                    <Form.Item
                        name="password"
                    >
                        <Input.Password
                            className='form'
                            type="password"
                        />
                    </Form.Item>

                    <div>Nhập lại mật khẩu mới</div>
                    <Form.Item
                        name="confirmPassword"
                    >
                        <Input.Password
                            className='form'
                            type="password"
                        />
                    </Form.Item>

                    <Form.Item className='title'>
                        <Button className='btnLogin' htmlType="submit">
                            Lưu mật khẩu
                        </Button>
                    </Form.Item>
                </Form>
            </>
        )}
    </div>
  );
};

export default ResetForm;
