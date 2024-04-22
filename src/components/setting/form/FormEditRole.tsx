import React  from 'react';
import '../../../styles/styles.css'
import { Button, Input, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import TableRole from './TableRole';
import { IRole } from '../../../types';

interface Props {
    role: IRole;
}

const FormEditRole: React.FC<Props> = ({role}) => {
    return ( 
        <>
            <div className='content-upper' style={{border: 'none', marginTop: '50px'}}>
                <div className='content-column'>
                    <div className='form-horizon'>
                        <p style={{ marginRight: '10px', width: '200px' }}>Tên vai trò<i style={{color: 'red'}}>*</i></p>
                        <Input className='form' style={{width: '325px'}} value={role?.name}></Input>
                    </div>
                    <div className='form-horizon'>
                        <p style={{ marginRight: '10px', width: '200px' }}>Mô tả: <i style={{color: 'red'}}>*</i></p>
                        <Input.TextArea className='form' style={{width: '325px', height: '120px'}}
                            value={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                        ></Input.TextArea>
                    </div>
                </div>

                <div className='form-column' style={{marginLeft: '300px'}}>
                    <span>Phân quyền chức năng:</span>

                    <div className='form-column'>
                        <div style={{backgroundColor: '#2F2F41', width: '1063px', height: '558px', border: '1px solid transparent', borderRadius: '8px', overflow: 'auto'}}>
                            <div style={{margin: '16px 70px 24px 24px'}}>
                                <TableRole></TableRole>
                            </div>
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

export default FormEditRole;
