import React from 'react';
import '../../../styles/styles.css'
import { Form, Typography, Button, Modal } from 'antd';
import { Link } from 'react-router-dom';

const { Title } = Typography;

interface Props {
    open: boolean;
    onClose: () => void;
}

const PopUpAccept: React.FC<Props> = ({ open, onClose }) => {
  return (
    <>
        <Modal
            open={open}
            footer={null}
            closable={false}
        >
            <div className='popup' style={{width: '629px', height: '338px'}}>
                <div className='popup-heading'>
                    <Title level={3} style={{color: 'white'}}>Chốt doanh thu</Title>
                </div>
                <div className='popup-content' style={{marginBottom: '60px'}}>
                    <div className='popup-input form-column'>
                        <div style={{marginBottom: '40px'}}>
                            Doanh thu sẽ được chốt từ ngày 01/05/2021 đến ngày 14/05/2021 trên
                            tất cả các hợp đồng sử dụng. 
                        </div>
                        <div>
                            Nhấn 'Tiếp tục' để chốt doanh thu. <br></br>
                            Nhấn 'Hủy' để hủy bỏ và không chốt doanh thu
                        </div>
                    </div>
                </div>

                <Form.Item className='title' style={{  justifyContent: 'center' }}>
                    <Button className='btnCancel' htmlType="submit" style={{width: '168px', margin: '0 16px'}} onClick={onClose}>
                        Hủy
                    </Button>
                    <Link to={'/revenue-report'}>
                        <Button className='btnLogin' htmlType="submit" style={{width: '168px', margin: '0 16px'}} onClick={onClose}>
                            Tiếp tục
                        </Button>
                    </Link>
                </Form.Item>
            </div>
        </Modal>
    </>
  );
};

export default PopUpAccept;