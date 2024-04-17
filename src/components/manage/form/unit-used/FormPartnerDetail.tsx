import React from 'react';
import '../../../../styles/styles.css'
import { IPartner } from '../../../../types';

interface Props {
    partner: IPartner | null;
}

const FormPartnerDetail: React.FC<Props> = ({ partner }) => {
    
    return ( 
        <>
            <div className='content-upper' style={{border: 'none'}}>
                <div className='content-column'>
                    <div className='form-horizon'>
                        <p style={{ marginRight: '10px', width: '200px' }}>Tên người dùng </p>
                        <p>{partner?.name}</p>
                    </div>
                    <div className='form-horizon'>
                        <p style={{ marginRight: '10px', width: '200px' }}>Vai trò </p>
                        <p>{partner?.role}</p>
                    </div>
                    <div className='form-horizon'>
                        <p style={{ marginRight: '10px', width: '200px' }}>Email </p>
                        <p>{partner?.email}</p>
                    </div>
                </div>

                <div style={{marginLeft: '495px'}}>
                    <div className='content-column'>
                        <div className='form-horizon'>
                            <p style={{ marginRight: '10px', width: '200px' }}>Tên đăng nhập </p>
                            <p>{partner?.email}</p> 
                        </div>
                        <div className='form-horizon'>
                            <p style={{ marginRight: '10px', width: '200px' }}>Mật khẩu </p>
                            <p>******</p>
                        </div>
                        <div className='form-horizon' style={{marginTop: '5px'}}>
                            <p style={{ marginRight: '10px', width: '200px' }}>Trạng thái </p>
                            <p>{partner?.status ? 'Đã kích hoạt' : 'Ngừng kích hoạt'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormPartnerDetail;
