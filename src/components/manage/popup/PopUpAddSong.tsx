import React from 'react';
import '../../../styles/styles.css'
import { Link } from 'react-router-dom';
import { Form, Input, Typography, Modal, Select, Button } from 'antd';
import { DownOutlined, CloudUploadOutlined } from '@ant-design/icons';

const { Option } = Select;
const { Title } = Typography;

interface Props {
    open: boolean;
    onClose: () => void;
}

const PopUpAddSong: React.FC<Props> = ({ open, onClose }) => {
  return (
    <>
        <Modal
            open={open}
            footer={null}
            closable={false}
        >
            <div className='popup' style={{width: '800px', height: '824px', marginTop: '200px'}}>
                <div className='popup-heading' style={{ width: '250px', margin: '0 285px' }}>
                    <Title level={2} style={{color: 'white'}}>Thêm bản ghi mới</Title>    
                </div>

                <div style={{ width: '720px', height: '600px', margin: '40px'}}>
                    <div>Tên bản ghi:<i style={{color: 'red'}}>*</i></div>
                    <Form.Item name="email">
                        <Input className= 'form form-readOnly'/>
                    </Form.Item>

                    <div>Mã ISRC:</div>
                    <Form.Item name="email">
                        <Input className= 'form form-readOnly'/>
                    </Form.Item>

                    <div>Tác giả:<i style={{color: 'red'}}>*</i></div>
                    <Form.Item name="email">
                        <Input className= 'form form-readOnly'/>
                    </Form.Item>

                    <div>Ca sĩ/Nhóm nhạc:<i style={{color: 'red'}}>*</i></div>
                    <Form.Item name="email">
                        <Input className= 'form form-readOnly'/>
                    </Form.Item>

                    <div className='form-horizon' style={{marginTop: '32px'}} >
                        <div style={{ width: '347px', marginTop: '-25px'}}>
                            <div>Thể loại:<i style={{color: 'red'}}>*</i></div>
                            <Select className='form form-readOnly' placeholder="Tất cả" style={{width: '100%', borderRadius: '8px'}} suffixIcon={<DownOutlined style={{ color: 'orange' }} />}>
                                <Option key='1' value='1' className='form-option'>Rap</Option>
                                <Option key='2' value='2' className='form-option'>Ballad</Option>
                                <Option key='3' value='3' className='form-option'>Rock n Roll</Option>
                                <Option key='4' value='4' className='form-option'>R&B</Option>
                            </Select>
                        </div>

                        <div style={{ width: '347px', marginLeft: '26px'}}>
                            <div>Nhà sản xuất:<i style={{color: 'red'}}>*</i></div>
                            <Form.Item name="email">
                                <Input className= 'form form-readOnly'/>
                            </Form.Item>
                        </div>
                    </div>

                    <div className='form-horizon' style={{marginTop: '32px'}} >
                        <div style={{ width: '296px' }}>
                            <div className='form-horizon'>
                                <p style={{ width: '164px' }}>Đính kèm bản ghi:<i style={{color: 'red'}}>*</i></p>
                                <div className='upload-btn' >
                                    <CloudUploadOutlined style={{width: '20px', height: '16px'}}/> Tải lên
                                </div>
                            </div>
                        </div>

                        <div style={{ width: '305px', marginLeft: '80px' }}>
                            <div className='form-horizon'>
                                <p style={{ width: '173px' }}>Đính kèm lời bài hát:</p>
                                <div className='upload-btn' >
                                    <CloudUploadOutlined style={{width: '20px', height: '16px'}}/> Tải lên
                                </div>
                            </div>
                        </div>
                    </div>

                    <Form.Item className='title' style={{marginTop: '40px'}}>
                        <Button className='btnCancel' style={{width: '168px', margin: '0 16px'}} onClick={onClose}>
                            Hủy
                        </Button>
                        <Link to={'/contract-manage'}>
                            <Button className='btnLogin' htmlType="submit" style={{width: '168px', margin: '0 16px'}}>
                                Tải lên
                            </Button>
                        </Link>
                    </Form.Item>
                </div>
            </div>
        </Modal>
    </>
  );
};

export default PopUpAddSong;