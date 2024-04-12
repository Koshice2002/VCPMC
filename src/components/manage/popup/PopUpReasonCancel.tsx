import React from 'react';
import '../../../styles/styles.css'
import { IAuthorizedContract } from '../../../types';
import { Form, Typography, Button, Modal } from 'antd';

const { Title } = Typography;

interface Props {
    open: boolean;
    onClose: () => void;
    contract: IAuthorizedContract | null;
}

const PopUpReasonCancel: React.FC<Props> = ({ open, onClose, contract }) => {
  return (
    <>
        <Modal
            open={open}
            footer={null}
            closable={false}
        >
            {contract && (
                <>
                    <div className='popup' style={{width: '720px', height: '432px'}}>
                        <div className='popup-heading'>
                            <Title level={3} style={{color: 'white'}}>Lý do hủy hợp đồng uỷ quyền {contract.number}</Title>
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
                                Hủy hợp đồng để tạo hợp đồng mới với giá trị và thời hạn lâu hơn.
                            </div>
                        </div>

                        <Form.Item className='title' style={{  justifyContent: 'center' }}>
                            <Button className='btnLogin' htmlType="submit" style={{width: '168px', margin: '0 16px'}} onClick={onClose}>
                                Đóng
                            </Button>
                        </Form.Item>
                    </div>
                </>
            )}
        </Modal>
    </>
  );
};

export default PopUpReasonCancel;