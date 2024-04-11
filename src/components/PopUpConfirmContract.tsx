import React, { useState } from 'react';
import '../styles/styles.css';
import { IAuthorizedContract } from '../types';
import { CheckCircleFilled } from '@ant-design/icons';
import { Form, Input, Typography, Button, Modal } from 'antd';
import PopUpAddSong from './PopUpAddSong';

const { Title } = Typography;

interface Props {
    open: boolean;
    onClose: () => void;
}

const PopUpConfirmContract: React.FC<Props> = ({ open, onClose }) => {
    const [addSong, setAddSong] = useState(false);

    const showModalAddSong = () => {
        setAddSong(true);
        onClose();
    };

    const closeModalAddSong = () => {
        setAddSong(false);
    };

  return (
    <>
        <Modal
            open={open}
            footer={null}
            closable={false}
        >
            <div className='popup' style={{width: '670px', height: '548px'}}>
                <div className='popup-heading' style={{ width: '590px', borderBottom: '1px solid gray', margin: '0 40px' }}>
                    <Title level={2} style={{color: 'white'}}><i><CheckCircleFilled style={{marginRight: '5px', color: '#0FBF00'}}/></i>Hợp đồng đã được tạo thành công</Title>    
                </div>
                <div style={{width: '590px', margin: '0 40px'}}>
                    <h3>Có 2 cách để tạo bản ghi</h3>

                    <div>
                        <div className='form-horizon' style={{margin: '-20px 0 -20px 25px'}}>
                            <h5 style={{color: 'orange', marginRight: '5px'}}>Cách 1:</h5> Upload bản ghi trực tiếp
                        </div>
                        <div style={{marginLeft: '82px'}}>
                            <p>Bạn có thể thực hiện thêm bản ghi ngay trên website</p>
                            <Button className='btnLogin' htmlType="submit" style={{width: '237px'}} onClick={showModalAddSong}>
                                Thêm bản ghi trực tiếp
                            </Button>
                        </div>
                    </div>

                    <div style={{margin: '56px 0'}}>
                        <div className='form-horizon' style={{margin: '-20px 0 -20px 25px'}}>
                            <h5 style={{color: 'orange', marginRight: '5px'}}>Cách 2:</h5> Upload bản ghi qua phần mềm
                        </div>
                        <div style={{marginLeft: '82px'}}>
                            <p>Bạn có thể thêm bản ghi bằng tool</p>
                            <Button className='btnCancel' htmlType="submit" style={{width: '237px'}}>
                                Thêm bản ghi bằng tool
                            </Button>
                        </div>
                    </div>

                    <p style={{ color: '#FF4747', fontSize: '18px', marginLeft: '25px'}}>
                        Lưu ý: Hợp đồng chỉ có hiệu lực khi thêm bản ghi thành công.
                    </p>
                </div>
            </div>
        </Modal>
        
        <PopUpAddSong open={addSong} onClose={closeModalAddSong}></PopUpAddSong>
    </>
  );
};

export default PopUpConfirmContract;