import React from 'react';
import '../../../../styles/styles.css'
import { Form, Input, Typography, Button, Modal, DatePicker, Checkbox } from 'antd';
import { CalendarOutlined, CloudUploadOutlined, FileWordOutlined, FilePdfOutlined } from '@ant-design/icons';

const { Title } = Typography;

interface Props {
    open: boolean;
    onClose: () => void;
}

const PopUpExtendContract: React.FC<Props> = ({ open, onClose }) => {
  return (
    <>
        <Modal
            open={open}
            footer={null}
            closable={false}
        >
            <div className='popup' style={{width: '908px', height: '623px'}}>
                <div className='popup-heading'>
                    <Title level={3} style={{color: 'white'}}>Gia hạn ủy quyền tác phẩm</Title>
                </div>

                <div className='content-upper' style={{ width: '0',borderBottom: 'none', margin: '10px 40px'}}>
                    <div className='content-column'>
                        <div className='form-horizon'>
                            <h2 style={{ marginRight: '10px', width: '200px' }}>Thời hạn gia hạn<i style={{color: 'red'}}>*</i></h2>
                        </div>
                        <div className='form-horizon'>
                            <p style={{ marginRight: '10px', width: '80px' }}>Từ ngày:</p>
                            <p>02/08/2021</p>
                        </div>
                        <div className='form-horizon'>
                            <p style={{ marginRight: '10px', width: '80px' }}>Đến ngày:</p>
                            <DatePicker
                                format="DD/MM/YYYY"
                                placeholder='dd/mm/yy'
                                className='form' style={{width: '150px'}}
                                suffixIcon={<CalendarOutlined style={{ color: '#F26D21' }} />}
                            />
                        </div>
                        <p style={{width: '250px', color: '#FFD0AB'}}>
                            Lưu ý: Thời gian bắt đầu gia hạn hợp đồng mới được tính sau ngày hết hạn hợp đồng cũ một ngày.
                        </p>
                    </div>

                    <div className='content-column' style={{width: '383px', height: '240px', marginLeft: '200px'}}>
                        <div className='form-horizon'>
                            <h2 style={{ marginRight: '10px', width: '200px' }}>Mức nhuận bút<i style={{color: 'red'}}>*</i></h2>
                        </div>

                        <div className='form-horizon'>
                            <Checkbox className='checkbox-custom'></Checkbox>
                            <p style={{ marginRight: '2px', width: '100px' }}>Quyền tác giả:</p>
                            <Input style={{width: '64px', height: '48px', backgroundColor: '#2B2B3F', margin: '0 8px'}} placeholder='0'></Input>
                            <p>%</p>
                        </div>

                        <div className='form-horizon'>
                            <Checkbox className='checkbox-custom'></Checkbox>
                            <p style={{ marginRight: '2px', width: '120px' }}>Quyền liên quan:</p>
                        </div>

                        <div className='form-horizon' style={{marginLeft: '15px', paddingLeft: '16px',borderLeft: '1px solid gray'}}>
                            <Checkbox className='checkbox-custom'></Checkbox>
                            <p style={{ marginRight: '2px', width: '180px' }}>Quyền của người biểu diễn:</p>
                            <Input style={{width: '64px', height: '48px', backgroundColor: '#2B2B3F', margin: '0 8px'}} placeholder='0'></Input>
                            <p>%</p>
                        </div>

                        <div className='form-horizon' style={{marginLeft: '15px', paddingLeft: '16px',borderLeft: '1px solid gray'}}>
                            <Checkbox className='checkbox-custom'></Checkbox>
                            <p style={{ marginRight: '2px', width: '180px' }}>Quyền của nhà sản xuất (bản ghi/video)</p>
                            <Input style={{width: '64px', height: '48px', backgroundColor: '#2B2B3F', margin: '0 8px'}} placeholder='0'></Input>
                            <p>%</p>
                        </div>
                    </div>
                </div>

                <div className='content-lower' style={{ width: '0', margin: '10px 40px'}}>
                    <div className='content-column'>
                        <div className='form-horizon'>
                            <p style={{ width: '100px' }}>Đính kèm tệp:</p>
                                <div className='upload-btn' style={{width: '65px'}}>
                                    <CloudUploadOutlined style={{width: '20px', height: '16px'}}/> Tải lên
                                </div>
                        </div>
                        <p className='form-horizon' style={{ width: '200px', marginLeft: '100px'}}><i><FileWordOutlined style={{ marginRight: '5px' }}/></i>Hetthuongcannho.doc</p>
                        <p className='form-horizon' style={{ width: '200px', margin: '-10px 0 0 100px'}}><i><FilePdfOutlined style={{ marginRight: '5px' }}/></i>Hetthuongcannho.doc</p>
                    </div>
                </div>

                <Form.Item className='title' style={{  justifyContent: 'center', marginTop: '40px' }}>
                    <Button className='btnCancel' style={{width: '168px', margin: '0 16px'}} onClick={onClose}>
                        Hủy
                    </Button>
                    <Button className='btnLogin' htmlType="submit" style={{width: '168px', margin: '0 16px'}} onClick={onClose}>
                        Lưu
                    </Button>
                </Form.Item>
            </div>
        </Modal>
    </>
  );
};

export default PopUpExtendContract;