import React from 'react';
import '../styles/styles.css';
import { Form, Input, Typography, Button, Modal } from 'antd';

const { Title } = Typography;

interface Props {
    open: boolean;
    onClose: () => void;
    onSave: () => void;
}

const PopUpChangePassword: React.FC<Props> = ({ open, onClose, onSave }) => {
  return (
    <>
        <Modal
            open={open}
            footer={null}
            closable={false}
        >
            <div className='popup'>
                <div className='popup-heading'>
                    <Title level={3} style={{color: 'white'}}>Thay đổi mật khẩu</Title>
                </div>
                <div className='popup-content'>
                    <div className='popup-input'>
                        <div style={{fontSize: '16px'}}>Mật khẩu hiện tại</div>
                        <Form name="password">
                            <Input.Password className='form' type="password"/>
                        </Form>
                    </div>

                    <div className='popup-input'>
                        <div style={{fontSize: '16px'}}>Mật khẩu mới</div>
                        <Form.Item name="password">
                            <Input.Password className='form'type="password"/>
                        </Form.Item>
                    </div>
                    
                    <div className='popup-input'>
                        <div style={{fontSize: '16px'}}>Nhập lại mật khẩu mới</div>
                        <Form.Item name="password">
                            <Input.Password className='form' type="password"/>
                        </Form.Item>
                    </div>
                </div>

                <Form.Item className='title'>
                    <Button className='btnCancel' style={{width: '168px', margin: '0 16px'}} onClick={onClose}>
                        Hủy
                    </Button>
                    <Button className='btnLogin' htmlType="submit" style={{width: '168px', margin: '0 16px'}} onClick={onSave}>
                        Lưu
                    </Button>
                </Form.Item>
            </div>
        </Modal>
    </>
  );
};

export default PopUpChangePassword;