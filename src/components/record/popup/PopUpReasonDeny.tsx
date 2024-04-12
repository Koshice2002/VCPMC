import React from 'react';
import '../../../styles/styles.css'
import { IAuthorizedContract } from '../../../types';
import { Form, Typography, Button, Modal } from 'antd';

const { Title } = Typography;

interface Props {
    open: boolean;
    onClose: () => void;
}

const PopUpReasonDeny: React.FC<Props> = ({ open, onClose }) => {
  return (
    <>
        <Modal
            open={open}
            footer={null}
            closable={false}
        >
            <div className='popup' style={{width: '720px', height: '432px'}}>
                <div className='popup-heading'>
                    <Title level={3} style={{color: 'white'}}>Lý do từ chối phê duyệt</Title>
                </div>
                <div className='popup-content'>
                    <div 
                        className='popup-input' 
                        style={{ 
                            width: '640px', 
                            height: '220px', 
                            display: 'flex', 
                            borderRadius: '8px',
                            alignItems: 'center', 
                            border: '1px solid gray', 
                            justifyContent: 'center',
                        }}
                    >
                        Cho chúng tôi biết lý do bạn muốn từ chối phê duyệt bản ghi này...
                    </div>
                </div>

                <Form.Item className='title' style={{  justifyContent: 'center' }}>
                    <Button className='btnCancel' htmlType="submit" style={{width: '168px', margin: '0 16px'}} onClick={onClose}>
                        Hủy
                    </Button>
                    <Button className='btnLogin' htmlType="submit" style={{width: '168px', margin: '0 16px'}} onClick={onClose}>
                        Từ chối
                    </Button>
                </Form.Item>
            </div>
        </Modal>
    </>
  );
};

export default PopUpReasonDeny;