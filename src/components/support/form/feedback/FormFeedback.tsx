import React, { useState }  from 'react';
import '../../../../styles/styles.css'
import { Button, Input, Select } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import PopUpFeedback from '../../popup/feedback/PopUpFeedback';

const { Option } = Select

const FormFeedback: React.FC = () => {
    const [notificationVisible, setNotificationVisible] = useState(false);

    const handleSaveButtonClick = () => {
        setNotificationVisible(true);
        setTimeout(() => {
            setNotificationVisible(false);
        }, 800);
    };

    return ( 
        <>
            <div className='group-item'>
                <div className='form-feedback'>
                    <div className='feedback-content'>
                        <div style={{ marginTop: '-20px'}}>
                            <h3 style={{margin: '10px 0'}}>Tên người dùng</h3>
                            <Input className='form'/>
                        </div>

                        <div style={{ margin: '24px 0'}}>
                            <h3 style={{margin: '10px 0'}}>Bạn muốn được hỗ trợ vấn đề gì?</h3>
                            <Select className='form-dropdown' placeholder="Chọn vấn đề bạn cần hỗ trợ" style={{width: '100%'}} suffixIcon={<DownOutlined style={{ color: 'orange' }} />}>
                                <Option key='1' value='1' className='form-option'>Tài khoản</Option>
                                <Option key='2' value='2' className='form-option'>Quản lý doanh thu</Option>
                                <Option key='3' value='3' className='form-option'>Vấn đề bản quyền</Option>
                                <Option key='4' value='4' className='form-option'>Khác</Option>
                            </Select>
                        </div>

                         <div>
                            <h3 style={{margin: '10px 0'}}>Nội dung</h3>
                            <Input.TextArea style={{ height: '300px'}} className='form'/>
                        </div>
                    </div>
                </div>

                <div>
                    <Button className='btnLogin' onClick={handleSaveButtonClick}>Gửi</Button>
                </div>
            </div>
            <PopUpFeedback open={notificationVisible}></PopUpFeedback>
        </>
    )
}

export default FormFeedback;
