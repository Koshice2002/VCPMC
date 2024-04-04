import React, { useState } from 'react';

import moment from 'moment';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Form, Input, Button, Flex, DatePicker } from 'antd';
import { CameraOutlined, CalendarOutlined } from '@ant-design/icons';

const FormInfo: React.FC = () => {
    const [value, setValue] = useState<any>(null);

    const initialValues = {
        lastName: 'Nguyễn',
        firstName: 'Khoa',
        dob: '03/10/2002',
        phone: '+84 915646474',
        email: 'khoa@alta.com.vn',
        username: 'khoa@alta.com.vn',
        role: 'Admin',
    };


    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });

  return (
    <div>
        {isDesktopOrLaptop ? (
            <>
                <Form initialValues={initialValues}>
                    <Flex justify='start' align='middle' className="basic-form">
                        <div className='group-avatar-change'>
                            <div className='avatar-container'>
                                <img
                                    alt="avatar"
                                    className='avatar-change'
                                    src={process.env.PUBLIC_URL + '/Image/Avatar.jpg'}
                                />
                                <CameraOutlined className="camera-icon"/>
                            </div>
                            
                            <h2>Khoa Nguyễn</h2>
                        </div>

                        <div className='info-change'>
                            <div className='input-group'>
                                <div>
                                    <div>Họ</div>
                                    <Form.Item name="lastName">
                                        <Input className= 'form input-item'/>
                                    </Form.Item>
                                </div>

                                <div>
                                    <div>Tên</div>
                                    <Form.Item name="firstName">
                                        <Input className= 'form input-item'/>
                                    </Form.Item>
                                </div>
                            </div>

                            <div className='input-group'>
                                <div>
                                    <div>Ngày sinh</div>
                                    <Form.Item>
                                        <DatePicker
                                            className="form input-item"
                                            placeholder='Ngày sinh'
                                            defaultValue={moment('03-10-2002', 'DD-MM-YYYY')}
                                            suffixIcon={<CalendarOutlined style={{ color: '#F26D21' }} />}
                                        />
                                    </Form.Item>
                                </div>

                                <div>
                                    <div>Số điện thoại</div>
                                    <Form.Item name="phone">
                                        <Input className= 'form input-item'/>
                                    </Form.Item>
                                </div>
                            </div>
                        
                            <div>Email</div>
                            <Form.Item name="email">
                                <Input className= 'form form-readOnly' readOnly />
                            </Form.Item>

                            <div>Tên đăng nhập</div>
                            <Form.Item name="username">
                                <Input className= 'form form-readOnly' readOnly />
                            </Form.Item>

                            <div>Phân quyền</div>
                            <Form.Item name="role">
                                <Input className= 'form input-item form-readOnly' readOnly />
                            </Form.Item>

                            <Form.Item className='title' style={{marginTop: '112px'}}>
                                <Button className='btnCancel' style={{width: '168px', margin: '0 16px'}}>
                                    Hủy
                                </Button>

                                <Button className='btnLogin' htmlType="submit" style={{width: '168px', margin: '0 16px'}}>
                                    Lưu
                                </Button>
                            </Form.Item>
                        </div>
                    </Flex>
                </Form>
            </>
        ) : (
            <>
            </>
        )}
    </div>
  );
};

export default FormInfo;
