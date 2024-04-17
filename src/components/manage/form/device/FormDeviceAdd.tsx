import React from 'react';
import '../../../../styles/styles.css'
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Button, DatePicker, Input, Select } from 'antd';
import { CalendarOutlined, DownOutlined } from '@ant-design/icons';

const FormDeviceAdd: React.FC = () => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });

    return ( 
        <>
            {isDesktopOrLaptop ? (
                <>
                    <div className='content-upper' style={{border: 'none'}}>
                        <div className='form-column' style={{padding: '5px', marginLeft: '10px'}}>
                            <div className='form-horizon' style={{margin: '15px 0'}}>
                                <h4 style={{margin: '2px 0',  width: '200px'}}>Tên thiết bị: <i style={{color: 'red'}}>*</i></h4>
                                <Input className='form' style={{width: '365px'}}></Input>
                            </div>
                            <div className='form-horizon' style={{margin: '15px 0'}}>
                                <h4 style={{margin: '2px 0',  width: '200px'}}>SKU/ID: <i style={{color: 'red'}}>*</i></h4>
                                <Input className='form' style={{width: '365px'}}></Input>
                            </div>
                            <div className='form-horizon' style={{margin: '15px 0'}}>
                                <h4 style={{margin: '2px 0',  width: '200px'}}>Địa chỉ MAC: <i style={{color: 'red'}}>*</i></h4>
                                <Input className='form' style={{width: '365px'}}></Input>
                            </div>
                            <div className='form-horizon' style={{margin: '15px 0'}}>
                                <h4 style={{margin: '2px 0',  width: '200px'}}>Thời hạn bảo hành: <i style={{color: 'red'}}>*</i></h4>
                                <DatePicker 
                                    className='form' 
                                    format="DD/MM/YYYY"
                                    placeholder='dd/mm/yy'
                                    style={{width: '365px'}}
                                    suffixIcon={<CalendarOutlined style={{ color: '#F26D21' }} />}
                                ></DatePicker>
                            </div>
                            <div className='form-horizon' style={{margin: '15px 0'}}>
                                <h4 style={{margin: '2px 0',  width: '200px'}}>Label: <i style={{color: 'red'}}>*</i></h4>
                                <Select className='form' style={{width: '365px'}} suffixIcon={<DownOutlined style={{ color: 'orange' }} />}></Select>
                            </div>
                            <div className='form-horizon' style={{margin: '15px 0'}}>
                                <h4 style={{margin: '2px 0',  width: '200px'}}>Thông tin: <i style={{color: 'red'}}>*</i></h4>
                                <Select className='form' style={{width: '365px'}} suffixIcon={<DownOutlined style={{ color: 'orange' }} />}></Select>
                            </div>
                            <div className='form-horizon' style={{margin: '15px 0'}}>
                                <h4 style={{margin: '2px 0',  width: '200px'}}>Ghi chú:</h4>
                                <Input.TextArea className='form' style={{width: '365px', height: '120px'}}></Input.TextArea>
                            </div>

                            <div style={{ marginTop: '24px'}}>
                                <i style={{color: 'red'}}>*</i> là những trường thông tin bắt buộc
                            </div>
                        </div>

                        <div className='form-column' style={{marginLeft: '470px'}}>
                            <div className='form-horizon' style={{margin: '15px 0'}}>
                                <h4 style={{margin: '2px 0',  width: '200px'}}>Tên đăng nhập: <i style={{color: 'red'}}>*</i></h4>
                                <Input className='form' style={{width: '365px'}}></Input>
                            </div>
                            <div className='form-horizon' style={{margin: '15px 0'}}>
                                <h4 style={{margin: '2px 0',  width: '200px'}}>Mật khẩu: <i style={{color: 'red'}}>*</i></h4>
                                <Input type='password' className='form' style={{width: '365px'}}></Input>
                            </div>
                            <div className='form-horizon' style={{margin: '15px 0'}}>
                                <h4 style={{margin: '2px 0',  width: '200px'}}>Nhập lại mật khẩu: <i style={{color: 'red'}}>*</i></h4>
                                <Input type='password' className='form' style={{width: '365px'}}></Input>
                            </div>
                            <div className='form-horizon' style={{margin: '15px 0'}}>
                                <h4 style={{margin: '2px 0',  width: '200px'}}>Vị trí: <i style={{color: 'red'}}>*</i></h4>
                                <Input className='form' style={{width: '365px'}}></Input>
                            </div>
                        </div>
                    </div>
                    <div className='title' style={{margin: '40px 0'}}>
                        <Button className='btnCancel' style={{width: '168px', margin: '0 16px'}}>
                            Hủy
                        </Button>
                        <Link to={'/device-manage'}>
                            <Button className='btnLogin' htmlType="submit" style={{width: '168px', margin: '0 16px'}}>
                                Lưu
                            </Button>
                        </Link>
                    </div>
                </>
            ) : (
                <>

                </>
            )}
        </>
    )
}

export default FormDeviceAdd;
