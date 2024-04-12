import '../../../styles/auth.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { useMediaQuery } from 'react-responsive';

const ErrorForm: React.FC = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1080px)'
    });

  return (
    <div>
        {isDesktopOrLaptop ? (
            <>
                <h1 className='title' style={{color: 'red'}}>
                    Không thể kết nối !!
                </h1>
                <p className='title'>
                    Dường như đã có chút trục trặc hoặc link này đã hết hạn. 
                    Vui lòng thử lại hoặc yêu cầu gửi lại link để đặt lại mật khẩu của bạn.
                </p>

                <div className='title' style={{ marginTop: '50px' }}>
                    <Button className='btnLogin'>
                        Yêu cầu gửi lại link
                    </Button>
                </div>
            </>
        ) : (
            <>
                <h1 className='title' style={{color: 'red'}}>
                    Không thể kết nối !!
                </h1>
                <p className='title'>
                    Dường như đã có chút trục trặc hoặc link này đã hết hạn. 
                    Vui lòng thử lại hoặc yêu cầu gửi lại link để đặt lại mật khẩu của bạn.
                </p>

                <div className='title' style={{ marginTop: '50px' }}>
                    <Button className='btnLogin'>
                        Yêu cầu gửi lại link
                    </Button>
                </div>
            </>
        )}
    </div>
  );
};

export default ErrorForm;
