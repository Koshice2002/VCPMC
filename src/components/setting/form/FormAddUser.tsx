import React  from 'react';
import '../../../styles/styles.css'
import { Link } from 'react-router-dom';
import { Button, DatePicker, Input, Select } from 'antd';
import { DownOutlined, CalendarOutlined } from '@ant-design/icons';

const { Option } = Select;

const FormAddUser: React.FC = () => {
    return ( 
        <>
            <div className='content-upper' style={{border: 'none'}}>
                <div className='content-column'>
                    <div className='form-horizon'>
                        <p style={{ marginRight: '10px', width: '200px' }}>Tên người dùng <i style={{color: 'red'}}>*</i></p>
                        <Input className='form' style={{width: '325px'}}></Input>
                    </div>
                    <div className='form-horizon'>
                        <p style={{ marginRight: '10px', width: '200px' }}>Số điện thoại <i style={{color: 'red'}}>*</i></p>
                        <Input className='form' style={{width: '325px'}}></Input>
                    </div>
                    <div className='form-horizon'>
                        <p style={{ marginRight: '10px', width: '200px' }}>Ngày hết hạn <i style={{color: 'red'}}>*</i></p>
                        <DatePicker
                            format="DD-MM-YYYY"
                            style={{width: '325px'}}
                            className={`form input-item item-change editable`}
                            suffixIcon={<CalendarOutlined style={{ color: '#F26D21' }} />}
                        />
                    </div>
                    
                    <div className='form-horizon'>
                        <p style={{ marginRight: '10px', width: '200px' }}>Vai trò <i style={{color: 'red'}}>*</i></p>
                        <Select className='form' style={{width: '325px'}} suffixIcon={<DownOutlined style={{ color: 'orange' }} />}>
                            <Option key='1' value='1' className='form-option'>QA</Option>
                            <Option key='2' value='2' className='form-option'>Admin</Option>
                        </Select>
                    </div>
                    <div style={{ marginTop: '24px'}}>
                        <i style={{color: 'red'}}>*</i> là những trường thông tin bắt buộc
                    </div>
                </div>

                <div style={{marginLeft: '172px'}}>
                    <div className='content-column'>
                        <div className='form-horizon'>
                            <p style={{ marginRight: '10px', width: '200px' }}>Email <i style={{color: 'red'}}>*</i></p>
                            <Input className='form' style={{width: '325px'}}></Input>
                        </div>
                        <div className='form-horizon'>
                            <p style={{ marginRight: '10px', width: '200px' }}>Tên đăng nhập <i style={{color: 'red'}}>*</i></p>
                            <Input className='form' style={{width: '325px'}}></Input> 
                        </div>
                        <div className='form-horizon'>
                            <p style={{ marginRight: '10px', width: '200px' }}>Mật khẩu <i style={{color: 'red'}}>*</i></p>
                            <Input type='password' className='form' style={{width: '325px'}}></Input>
                        </div>
                    </div>
                </div>
            </div>

            <div className='title' style={{margin: '20px 0'}}>
                <Link to={'/user-authorization-manage'}>
                    <Button className='btnCancel' style={{width: '168px', margin: '0 16px'}}>
                            Hủy
                    </Button>
                </Link>
                <Link to={'/user-authorization-manage'}>
                    <Button className='btnLogin' htmlType="submit" style={{width: '168px', margin: '0 16px'}}>
                        Lưu
                    </Button>
                </Link>
            </div>
        </>
    )
}

export default FormAddUser;
