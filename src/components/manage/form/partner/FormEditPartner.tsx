import '../../../../styles/styles.css'
import { IPartner } from '../../../../types';
import { DownOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { Button, Input, Radio, Select } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const { Option } = Select;

interface Props {
    partner: IPartner | null;
}

const FormEditPartner: React.FC<Props> = ({ partner }) => {
    const location = useLocation();
    const [page, setPage] = useState('');

    useEffect(() => {
        const path = location.pathname;

        if ( path.startsWith('/partner-add/') )
            { setPage('Add') }
        else if ( path.startsWith('/partner-edit/') )
            { setPage('Edit1') }
        else if ( path.startsWith('/edit-partner-authorized/'))
            { setPage('Edit2') }
    }, [location]);

    return ( 
        <>
            <div className='content-upper' style={{border: 'none'}}>
                <div className='content-column'>
                    <div className='form-horizon'>
                        <p style={{ marginRight: '10px', width: '200px' }}>Tên người dùng <i style={{color: 'red'}}>*</i></p>
                        <Input className='form' style={{width: '325px'}} value={partner?.name}></Input>
                    </div>
                    <div className='form-horizon'>
                        <p style={{ marginRight: '10px', width: '200px' }}>Email <i style={{color: 'red'}}>*</i></p>
                        <Input className='form' style={{width: '325px'}} value={partner?.email}></Input>
                    </div>
                    <div className='form-horizon' style={{display: page === 'Edit2' ? 'flex' : 'none'}}>
                        <p style={{ marginRight: '10px', width: '200px' }}>Số điện thoại <i style={{color: 'red'}}>*</i></p>
                        <Input className='form' style={{width: '325px'}} value={partner?.phone}></Input>
                    </div>
                    <div className='form-horizon'>
                        <p style={{ marginRight: '10px', width: '200px' }}>Vai trò <i style={{color: 'red'}}>*</i></p>
                        <Select className='form' style={{width: '325px'}} suffixIcon={<DownOutlined style={{ color: 'orange' }} />} value={partner?.role}>
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
                            <p style={{ marginRight: '10px', width: '200px' }}>Tên đăng nhập <i style={{color: 'red'}}>*</i></p>
                            <Input className='form' style={{width: '325px'}} value={partner?.email}></Input> 
                        </div>
                        <div className='form-horizon'>
                            <p style={{ marginRight: '10px', width: '200px' }}>Mật khẩu <i style={{color: 'red'}}>*</i></p>
                            <Input type='password' className='form' style={{width: '325px'}} value={'123456'}></Input>
                        </div>
                        <div className='form-horizon'>
                            <p style={{ marginRight: '10px', width: '200px' }}>Nhập lại mật khẩu <i style={{color: 'red'}}>*</i></p>
                            <Input type='password' className='form' style={{width: '325px'}} value={'123456'}></Input>
                        </div>
                        <div className='form-horizon' style={{marginTop: '5px', display: page === 'Add' ? 'none' : 'flex'}}>
                            <p style={{ marginRight: '10px', width: '200px' }}>Trạng thái <i style={{color: 'red'}}>*</i></p>
                            <Radio.Group style={{color: 'white'}} value={partner?.status}>
                                <Radio value={true} style={{color: 'white'}}>Đã kích hoạt</Radio>
                                <Radio value={false} style={{color: 'white'}}>Ngưng kích hoạt</Radio>
                            </Radio.Group>
                        </div>
                    </div>
                </div>
            </div>

            <div className='title' style={{margin: '20px 0'}}>
                <Link to={'/partner-authorized-manage'}>
                    <Button className='btnCancel' style={{width: '168px', margin: '0 16px'}}>
                            Hủy
                    </Button>
                </Link>
                <Link to={page === 'Edit1' || page === 'Add' ? '/unit-used-manage' : page === 'Edit2' ? '/partner-authorized-manage' : ''}>
                    <Button className='btnLogin' htmlType="submit" style={{width: '168px', margin: '0 16px'}}>
                        Lưu
                    </Button>
                </Link>
            </div>
        </>
    )
}

export default FormEditPartner;
