import React from 'react';
import '../../../../styles/styles.css'
import { Form, Typography, Button, Modal, Input, Radio } from 'antd';
import { IDevice } from '../../../../types';

const { Title } = Typography;

interface Props {
    open: boolean;
    device: IDevice;
    onClose: () => void;
}

const EditPopUp: React.FC<Props> = ({ open, onClose, device }) => {
  return (
    <>
        <Modal
            open={open}
            footer={null}
            closable={false}
        >
            <div className='popup' style={{width: '623px', height: '720px', marginTop: '200px'}}>
                <div className='popup-heading'>
                    <Title level={3} style={{color: 'white'}}>Chỉnh sửa thông tin thiết bị</Title>
                </div>
                <div className='form-content' style={{width: '543px', margin: '0 40px'}}>
                    <div className='form-column' style={{margin: '15px 0'}}>
                        <h4 style={{margin: '2px 0'}}>Tên thiết bị: <i style={{color: 'red'}}>*</i></h4>
                        <Input className='form' style={{width: '100%'}} value={device?.name}></Input>
                    </div>
                    <div className='form-column' style={{margin: '15px 0'}}>
                        <h4 style={{margin: '2px 0'}}>SKU/ID: <i style={{color: 'red'}}>*</i></h4>
                        <Input className='form' style={{width: '100%'}} value={device?.skuID}></Input>
                    </div>
                    <div className='form-column' style={{margin: '15px 0'}}>
                        <h4 style={{margin: '2px 0'}}>Địa chỉ Mac: <i style={{color: 'red'}}>*</i></h4>
                        <Input className='form' style={{width: '100%'}} value={device?.macAddress}></Input>
                    </div>
                    <div className='form-column' style={{margin: '15px 0'}}>
                        <h4 style={{margin: '2px 0'}}>Tên đăng nhập: <i style={{color: 'red'}}>*</i></h4>
                        <Input className='form' style={{width: '100%'}} value={device?.username}></Input>
                    </div>
                    <div className='form-column' style={{margin: '15px 0'}}>
                        <h4 style={{margin: '2px 0'}}>Vị trí: <i style={{color: 'red'}}>*</i></h4>
                        <Input className='form' style={{width: '100%'}} value={device?.address}></Input>
                    </div>
                    <div className='form-horizon' style={{margin: '30px 0'}}>
                        <h4 style={{margin: '2px 0'}}>Trạng thái thiết bị: <i style={{color: 'red'}}>*</i></h4>
                        <Radio.Group value={device?.status ? 1 : 2} style={{marginLeft: '27px'}}>
                            <Radio value={1} style={{color: 'white'}}>Đã kích hoạt</Radio>
                            <Radio value={2} style={{color: 'white'}}>Ngưng kích hoạt</Radio>
                        </Radio.Group>
                    </div>
                </div>
                <div className='title' style={{  justifyContent: 'center', marginTop: '40px' }}>
                    <Button className='btnCancel' htmlType="submit" style={{width: '168px', margin: '0 16px'}} onClick={onClose}>
                        Hủy
                    </Button><Button className='btnLogin' htmlType="submit" style={{width: '168px', margin: '0 16px'}} onClick={onClose}>
                        Lưu
                    </Button>
                </div>
            </div>
        </Modal>
    </>
  );
};

export default EditPopUp;