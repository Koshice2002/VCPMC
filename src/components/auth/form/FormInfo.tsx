import moment from 'moment';
import '../../../styles/styles.css'
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import MenuActionAuth from '../menu/MenuActionAuth';
import PopUpNotification from '../popup/PopUpNotification';
import { Form, Input, Button, Flex, DatePicker } from 'antd';
import PopUpChangePassword from '../popup/PopUpChangePassword';
import { CameraOutlined, CalendarOutlined } from '@ant-design/icons';

const FormInfo: React.FC = () => {
    const [showButtons, setShowButtons] = useState(false);
    const [notificationVisible, setNotificationVisible] = useState(false);
    const [changePasswordVisible, setChangePasswordVisible] = useState(false);

    const handleShowBtn = () => {
        setShowButtons(!showButtons);
    };

    const handleHideBtn = () => {
        setShowButtons(false);
    };

    const showModal = () => {
        setChangePasswordVisible(true);
    };

    const closeModal = () => {
        setChangePasswordVisible(false);
    };

    const handleSaveButtonClick = () => {
        setChangePasswordVisible(false);

        setNotificationVisible(true);
        setTimeout(() => {
            setNotificationVisible(false);
        }, 800);
    };
    
    const initialValues = {
        lastName: 'Nguyễn',
        firstName: 'Khoa',
        dob: '03-10-2002',
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
                                        <Input className={`form input-item item-change ${showButtons ? 'editable' : ''}`} readOnly={!showButtons}/>
                                    </Form.Item>
                                </div>

                                <div>
                                    <div>Tên</div>
                                    <Form.Item name="firstName">
                                        <Input className={`form input-item item-change ${showButtons ? 'editable' : ''}`} readOnly={!showButtons}/>
                                    </Form.Item>
                                </div>
                            </div>

                            <div className='input-group'>
                                <div>
                                    <div>Ngày sinh</div>
                                    {showButtons ? (
                                        <Form.Item name="dateOfBirth">
                                            <DatePicker
                                                format="DD-MM-YYYY"
                                                className={`form input-item item-change editable`}
                                                suffixIcon={<CalendarOutlined style={{ color: '#F26D21' }} />}
                                                defaultValue={moment('03-10-2002', 'DD-MM-YYYY')}
                                            />
                                        </Form.Item>
                                    ) : (
                                        <Form.Item name="dob">
                                            <Input
                                                readOnly
                                                className={`form input-item item-change readonly`}
                                                value={moment('03-10-2002', 'DD-MM-YYYY').format('DD-MM-YYYY')}
                                            />
                                        </Form.Item>
                                    )}
                                </div>

                                <div>
                                    <div>Số điện thoại</div>
                                    <Form.Item name="phone">
                                        <Input className={`form input-item item-change ${showButtons ? 'editable' : ''}`} readOnly={!showButtons}/>
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
                                {showButtons && (
                                    <>
                                        <Button className='btnCancel' style={{width: '168px', margin: '0 16px'}} onClick={handleHideBtn}>
                                            Hủy
                                        </Button>
                                        <Button className='btnLogin' htmlType="submit" style={{width: '168px', margin: '0 16px'}} onClick={handleHideBtn}>
                                            Lưu
                                        </Button>
                                    </>
                                )}
                            </Form.Item>
                        </div>
                    </Flex>
                </Form>

                <PopUpNotification open={notificationVisible} /> 
                <MenuActionAuth handleChangeInfo={handleShowBtn} handleChangePassword={showModal} />
                <PopUpChangePassword open={changePasswordVisible} onClose={closeModal} onSave={handleSaveButtonClick}></PopUpChangePassword>
            </>
        ) : (
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
                                        <Input className={`form input-item item-change ${showButtons ? 'editable' : ''}`} readOnly={!showButtons}/>
                                    </Form.Item>
                                </div>

                                <div>
                                    <div>Tên</div>
                                    <Form.Item name="firstName">
                                        <Input className={`form input-item item-change ${showButtons ? 'editable' : ''}`} readOnly={!showButtons}/>
                                    </Form.Item>
                                </div>
                            </div>

                            <div className='input-group'>
                                <div>
                                    <div>Ngày sinh</div>
                                    {showButtons ? (
                                        <Form.Item name="dateOfBirth">
                                            <DatePicker
                                                format="DD-MM-YYYY"
                                                className={`form input-item item-change editable`}
                                                defaultValue={moment('03-10-2002', 'DD-MM-YYYY').format('DD-MM-YYYY')}
                                                suffixIcon={<CalendarOutlined style={{ color: '#F26D21' }} />}
                                            />
                                        </Form.Item>
                                    ) : (
                                        <Form.Item name="dob">
                                            <Input
                                                className={`form input-item item-change readonly`}
                                                value={moment('03-10-2002', 'DD-MM-YYYY').format('DD-MM-YYYY')}
                                                readOnly
                                            />
                                        </Form.Item>
                                    )}
                                </div>

                                <div>
                                    <div>Số điện thoại</div>
                                    <Form.Item name="phone">
                                        <Input className={`form input-item item-change ${showButtons ? 'editable' : ''}`} readOnly={!showButtons}/>
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
                                {showButtons && (
                                    <>
                                        <Button className='btnCancel' style={{width: '168px', margin: '0 16px'}} onClick={handleHideBtn}>
                                            Hủy
                                        </Button>
                                        <Button className='btnLogin' htmlType="submit" style={{width: '168px', margin: '0 16px'}} onClick={handleHideBtn}>
                                            Lưu
                                        </Button>
                                    </>
                                )}
                            </Form.Item>
                        </div>
                    </Flex>
                </Form>

                <PopUpNotification open={notificationVisible} /> 
                <MenuActionAuth handleChangeInfo={handleShowBtn} handleChangePassword={showModal} />
                <PopUpChangePassword open={changePasswordVisible} onClose={closeModal} onSave={handleSaveButtonClick}></PopUpChangePassword>
            </>
        )}
    </div>
  );
};

export default FormInfo;
