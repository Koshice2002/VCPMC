import React from 'react';
import '../../../../styles/styles.css'
import { Form, Input, Typography, Button, Modal } from 'antd';

const { Title } = Typography;

interface Props {
    open: boolean;
    onClose: () => void;
}

const PopUpCancelContract: React.FC<Props> = ({ open, onClose }) => {
  return (
    <>
        <Modal
            open={open}
            footer={null}
            closable={false}
        >
            <div className='popup' style={{width: '720px', height: '432px'}}>
                <div className='popup-heading'>
                    <Title level={3} style={{color: 'white'}}>Hủy hợp đồng ủy quyền</Title>
                </div>
                <div className='popup-content'>
                    <div className='popup-input' style={{width: '640px', height: '220px'}}>
                        <Input.TextArea 
                            className='form' 
                            style={{width: '100%', height: '100%'}}
                        />
                    </div>
                </div>

                <Form.Item className='title' style={{  justifyContent: 'center' }}>
                    <Button className='btnCancel' style={{width: '168px', margin: '0 16px'}} onClick={onClose}>
                        Quay lại
                    </Button>
                    <Button className='btnLogin' htmlType="submit" style={{width: '168px', margin: '0 16px'}} onClick={onClose}>
                        Hủy hợp đồng
                    </Button>
                </Form.Item>
            </div>
        </Modal>
    </>
  );
};

export default PopUpCancelContract;