import React from 'react';
import '../../../styles/styles.css'
import { Form, Typography, Button, Modal, Checkbox } from 'antd';

const { Title } = Typography;

interface Props {
    open: boolean;
    onClose: () => void;
}

const DeletePopUp: React.FC<Props> = ({ open, onClose }) => {
  return (
    <>
        <Modal
            open={open}
            footer={null}
            closable={false}
        >
            <>
                <div className='popup' style={{width: '418px', height: '265px'}}>
                    <div className='popup-heading'>
                        <Title level={3} style={{color: 'white'}}>Xóa lịch phát</Title>
                    </div>
                    <div className='popup-content'>
                        <p style={{margin: '0 0 20px 0'}}>
                            Xóa tất cả lịch phát trong ngày
                        </p>
                        <div className='popup-input' style={{ marginLeft: '100px'}}>
                            <Checkbox className='checkbox-custom' style={{color: 'white'}}> Thứ hai </Checkbox>
                        </div>

                        <div className='title' style={{  justifyContent: 'center', marginTop: '-30px' }}>
                            <Button className='btnCancel' htmlType="submit" style={{width: '168px', margin: '0 16px'}} onClick={onClose}>
                                Hủy
                            </Button><Button className='btnLogin' htmlType="submit" style={{width: '168px', margin: '0 16px'}} onClick={onClose}>
                                Lưu
                            </Button>
                        </div>
                    </div>

                </div>
            </>
        </Modal>
    </>
  );
};

export default DeletePopUp;