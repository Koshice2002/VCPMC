import '../../styles/auth.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { useMediaQuery } from 'react-responsive';

const ForgotForm: React.FC = () => {
    const [showConfirmation, setShowConfirmation] = useState(false);

    const onFinish = (values: any) => {
        setShowConfirmation(true);
    };

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });

  return (
    <div>
        {isDesktopOrLaptop ? (
            <>
                <h1 className='title'>
                    Khôi phục mật khẩu
                </h1>
                {!showConfirmation ? (
                    <>
                        <p className='title'>
                            Vui lòng nhập địa chỉ email đã đăng ký để yêu cầu khôi phục mật khẩu
                        </p>
                        <Form
                            name="forgot_password"
                            className="login-form"
                            onFinish={onFinish}
                        >
                            <div>Email</div>
                            <Form.Item
                                name="email"
                            >
                                <Input className='form'/>
                            </Form.Item>

                            <Form.Item className='title'>
                                <Button className='btnLogin' htmlType="submit">
                                    Xác nhận
                                </Button>
                            </Form.Item>
                        </Form>
                    </>
                ) : (
                    <div style={{ textAlign: 'center' }}>
                        <p>Link khôi phục mật khẩu đã được gửi vào mail của bạn. Vui lòng kiểm tra mail.</p>
                        <p>Click vào đường link được đính kèm trong mail để chuyển đến trang đặt lại mật khẩu.</p>
                    </div>
                )}
            </>
        ) : (
            <>
                <h1 className='title'>
                    Khôi phục mật khẩu
                </h1>
                {!showConfirmation ? (
                    <>
                        <p className='title'>
                            Vui lòng nhập địa chỉ email đã đăng ký để yêu cầu khôi phục mật khẩu
                        </p>
                        <Form
                            name="forgot_password"
                            className="login-form"
                            onFinish={onFinish}
                        >
                            <div>Email</div>
                            <Form.Item
                                name="email"
                            >
                                <Input className='form'/>
                            </Form.Item>

                            <Form.Item className='title'>
                                <Button className='btnLogin' htmlType="submit">
                                    Xác nhận
                                </Button>
                            </Form.Item>
                        </Form>
                    </>
                ) : (
                    <div style={{ textAlign: 'center' }}>
                        <p>Link khôi phục mật khẩu đã được gửi vào mail của bạn. Vui lòng kiểm tra mail.</p>
                        <p>Click vào đường link được đính kèm trong mail để chuyển đến trang đặt lại mật khẩu.</p>
                    </div>
                )}
            </>
        )}
    </div>
  );
};

export default ForgotForm;
