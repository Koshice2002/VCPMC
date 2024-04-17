import React from 'react';
import '../../../../styles/styles.css'
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
                <div className='popup' style={{width: '418px', height: '258px'}}>
                    <div className='popup-heading'>
                        <Title level={3} style={{color: 'white'}}>Xóa thiết bị</Title>
                    </div>
                    <div className='popup-content'>
                        <p style={{margin: '0 33px'}}>
                            Bạn có chắc chắn muốn xoá các thiết bị này? Hành động này không thể hoàn tác.
                        </p>

                        <div className='title' style={{  justifyContent: 'center', marginTop: '50px' }}>
                            <Button className='btnCancel' htmlType="submit" style={{width: '168px', margin: '0 16px'}} onClick={onClose}>
                                Hủy
                            </Button><Button className='btnLogin' htmlType="submit" style={{width: '168px', margin: '0 16px'}} onClick={onClose}>
                                Xóa
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