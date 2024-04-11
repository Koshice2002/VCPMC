import React, { useState } from 'react';

import '../styles/styles.css';
import { IAuthorizedContract } from '../types';
import { useMediaQuery } from 'react-responsive';
import { ExclamationCircleOutlined, FileWordOutlined } from '@ant-design/icons';

interface Props {
    contract: IAuthorizedContract[];
}

const FormInfoAuthorizedContract: React.FC<Props> = ({ contract }) => {


    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });

    return (
        <div>
            {isDesktopOrLaptop ? (
                <div className='add-contract-content'>
                    {contract.map((contractItem, index) => (
                        <>
                            <div className='content-upper' style={{ borderBottom: 'none'}}>
                                <div className='content-column' style={{width: '454px'}}>
                                    <div className='form-horizon form-info'>
                                        <h3 style={{ marginRight: '10px', width: '200px' }}>Số hợp đồng:</h3>
                                        <p>{contractItem.number}</p>
                                    </div>

                                    <div className='form-horizon form-info'>
                                        <h3 style={{ marginRight: '10px', width: '200px' }}>Tên hợp đồng:</h3>
                                        <p>{contractItem.name}</p>
                                    </div>

                                    <div className='form-horizon form-info'>
                                        <h3 style={{ marginRight: '10px', width: '200px' }}>Ngày hiệu lực:</h3>
                                        <p>01/05/2021</p>
                                    </div>

                                    <div className='form-horizon form-info'>
                                        <h3 style={{ marginRight: '10px', width: '200px' }}>Ngày hết hạn:</h3>
                                        <p>01/12/2021</p>
                                    </div>

                                    <div className='form-horizon form-info'>
                                        <h3 style={{ marginRight: '10px', width: '200px' }}>Tình trạng:</h3>
                                        <p>
                                            {contractItem.validity === 1 ? (
                                                <>
                                                    <div style={{ display: 'inline-flex', marginRight: '6px', width: '8px', height: '8px', borderRadius: '100%', border: '1px solid green', backgroundColor: 'green' }}></div>
                                                    Mới
                                                </>
                                            ) : contractItem.validity === 2 ? (
                                                <>
                                                    <div style={{ display: 'inline-flex', marginRight: '6px', width: '8px', height: '8px', borderRadius: '100%', border: '1px solid blue', backgroundColor: 'blue' }}></div>
                                                    Còn thời hạn
                                                </>
                                            ) : contractItem.validity === 3 ? (
                                                <>
                                                    <i style={{ display: 'inline-flex', marginRight: '6px', width: '8px', height: '8px', borderRadius: '100%', border: '1px solid red', backgroundColor: 'red' }}></i>
                                                    Đã hết hạn
                                                </>
                                            ) : (
                                                <>
                                                    <i style={{ display: 'inline-flex', marginRight: '6px', width: '8px', height: '8px', borderRadius: '100%', border: '1px solid gray', backgroundColor: 'gray' }}></i>
                                                    Đã hủy
                                                </>
                                            )}
                                        </p>
                                    </div>
                                </div>

                                <div style={{ marginLeft: '175px' }}>
                                    <div className='form-horizon'>
                                        <h3 style={{ marginRight: '10px', width: '200px' }}>Đính kèm tệp:</h3>
                                        <p><i><FileWordOutlined style={{ marginRight: '5px' }}/></i>Hetthuongcannho.doc</p>
                                    </div>
                                </div>

                                <div style={{ marginLeft: '283px', width: '273px' }}>
                                    <p className='form-horizon' style={{ width: '100%', color: '#FFAC69' }}>
                                        <i><ExclamationCircleOutlined style={{ marginRight: '5px' }} /></i> <strong>Mức nhuận bút</strong>
                                    </p>

                                    <div className='form-horizon' style={{ width: '100%', display: 'flex', justifyContent: 'space-between', margin: '16px 0' }}>
                                        <strong>Quyền tác giả:</strong>
                                        <p style={{ margin: '0' }}>0%</p>
                                    </div>

                                    <div className='form-horizon' style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                                        <strong>Quyền liên quan:</strong>
                                    </div>
                                    <div className='form-horizon' style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                                        <>Quyền của người biểu diễn:</>
                                        <p style={{ margin: '0' }}>50%</p>
                                    </div>
                                    <div className='form-horizon' style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                                        <>Quyền của nhà sản xuất:</>
                                        <p style={{ margin: '0' }}>50%</p>
                                    </div>
                                    <div className='form-horizon' style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                                        <>(Bản ghi/video)</>
                                    </div>
                                </div>
                            </div>
                            <div className='content-lower'>
                                <div className='content-column'>
                                    <h3 style={{ color: '#FFAC69'}}>Thông tin pháp nhân ủy quyền</h3>

                                    <div className='form-horizon'>
                                        <h3 style={{ marginRight: '10px', width: '200px' }}>Pháp nhân ủy quyền:</h3>
                                        <p>Cá nhân</p>
                                    </div>

                                    {/* Cá nhân */}
                                    <div className='form-horizon'>
                                        <h3 style={{ marginRight: '10px', width: '200px' }}>Tên người ủy quyền:</h3>
                                        <p>{contractItem.person}</p>
                                    </div>
                                    <div className='form-horizon'>
                                        <h3 style={{ marginRight: '10px', width: '200px' }}>Giới tính:</h3>
                                        <p>Nam</p>
                                    </div>
                                    <div className='form-horizon'>
                                        <h3 style={{ marginRight: '10px', width: '200px' }}>Ngày sinh:</h3>
                                        <p>10/01/1984</p>
                                    </div>
                                    <div className='form-horizon'>
                                        <h3 style={{ marginRight: '10px', width: '200px' }}>Quốc tịch:</h3>
                                        <p>Việt Nam</p>
                                    </div>
                                    <div className='form-horizon'>
                                        <h3 style={{ marginRight: '10px', width: '200px' }}>Số điện thoại:</h3>
                                        <p>(+84) 345 678 901</p>
                                    </div>
                                </div>

                                <div style={{margin: '65px 0 0 290px'}}>
                                    <div className='form-horizon'>
                                        <h3 style={{ marginRight: '10px', width: '200px' }}>CMND/CCCD:</h3>
                                        <p>123456789012</p>
                                    </div>
                                    <div className='form-horizon'>
                                        <h3 style={{ marginRight: '10px', width: '200px' }}>Ngày cấp:</h3>
                                        <p>10/07/2011</p>
                                    </div>
                                    <div className='form-horizon'>
                                        <h3 style={{ marginRight: '10px', width: '200px' }}>Nơi cấp:</h3>
                                        <p>Tp.HCM, Việt Nam</p>
                                    </div>
                                    <div className='form-horizon'>
                                        <h3 style={{ marginRight: '10px', width: '200px' }}>Mã số thuế:</h3>
                                        <p>92387489</p>
                                    </div>
                                    <div className='form-horizon' >
                                        <h3 style={{ marginRight: '10px', width: '200px' }}>Nơi cư trú:</h3>
                                        <p style={{width: '293px'}}>69/53, Nguyễn Gia Trí, Phường 25, Quận Bình Thạnh, Thành phố Hồ Chí Minh</p>
                                    </div>
                                </div>

                                <div style={{margin: '65px 0 0 170px'}}>
                                    {/* Cá nhân */}
                                    <div className='form-horizon'>
                                        <h3 style={{ marginRight: '10px', width: '200px' }}>Email:</h3>
                                        <p>nguyenvana@gmail.com</p>
                                    </div>

                                    <div className='form-horizon'>
                                        <h3 style={{ marginRight: '10px', width: '200px' }}>Tên đăng nhập:</h3>
                                        <p>nguyenvana@gmail.com</p>
                                    </div>
                                    
                                    <div className='form-horizon'>
                                        <h3 style={{ marginRight: '10px', width: '200px' }}>Mật khẩu:</h3>
                                        <p>******</p>
                                    </div>

                                    <div className='form-horizon'>
                                        <h3 style={{ marginRight: '10px', width: '200px' }}>Số tài khoản:</h3>
                                        <p>1231123312211223</p>
                                    </div>

                                    <div className='form-horizon'>
                                        <h3 style={{ marginRight: '10px', width: '200px' }}>Ngân hàng:</h3>
                                        <p>ACB - Ngân hàng Á Châu</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            ) : (
                <div className='add-contract-content'>
                    {contract.map((contractItem, index) => (
                        <>
                            <div className='content-upper' style={{ borderBottom: 'none'}}>
                                <div className='content-column' style={{width: '454px'}}>
                                    <div className='form-horizon form-info'>
                                        <h3 style={{ marginRight: '10px', width: '200px' }}>Số hợp đồng:</h3>
                                        <p>{contractItem.number}</p>
                                    </div>

                                    <div className='form-horizon form-info'>
                                        <h3 style={{ marginRight: '10px', width: '200px' }}>Tên hợp đồng:</h3>
                                        <p>{contractItem.name}</p>
                                    </div>

                                    <div className='form-horizon form-info'>
                                        <h3 style={{ marginRight: '10px', width: '200px' }}>Ngày hiệu lực:</h3>
                                        <p>01/05/2021</p>
                                    </div>

                                    <div className='form-horizon form-info'>
                                        <h3 style={{ marginRight: '10px', width: '200px' }}>Ngày hết hạn:</h3>
                                        <p>01/12/2021</p>
                                    </div>

                                    <div className='form-horizon form-info'>
                                        <h3 style={{ marginRight: '10px', width: '200px' }}>Tình trạng:</h3>
                                        <p>
                                            {contractItem.validity ? (
                                                <>
                                                    <div style={{ display: 'inline-flex', marginRight: '6px', width: '8px', height: '8px', borderRadius: '100%', border: '1px solid blue', backgroundColor: 'blue' }}></div>
                                                    Còn thời hạn
                                                </>
                                            ) : (
                                                <>
                                                    <i style={{ display: 'inline-flex', marginRight: '6px', width: '8px', height: '8px', borderRadius: '100%', border: '1px solid red', backgroundColor: 'red' }}></i>
                                                    Đã hủy
                                                </>
                                            )}
                                        </p>
                                    </div>
                                </div>

                                <div style={{ marginLeft: '175px' }}>
                                    <div className='form-horizon'>
                                        <h3 style={{ marginRight: '10px', width: '200px' }}>Đính kèm tệp:</h3>
                                        <p><i><FileWordOutlined style={{ marginRight: '5px' }}/></i>Hetthuongcannho.doc</p>
                                    </div>
                                </div>

                                <div style={{ marginLeft: '283px', width: '273px' }}>
                                    <p className='form-horizon' style={{ width: '100%', color: '#FFAC69' }}>
                                        <i><ExclamationCircleOutlined style={{ marginRight: '5px' }} /></i> <strong>Mức nhuận bút</strong>
                                    </p>

                                    <div className='form-horizon' style={{ width: '100%', display: 'flex', justifyContent: 'space-between', margin: '16px 0' }}>
                                        <strong>Quyền tác giả:</strong>
                                        <p style={{ margin: '0' }}>0%</p>
                                    </div>

                                    <div className='form-horizon' style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                                        <strong>Quyền liên quan:</strong>
                                    </div>
                                    <div className='form-horizon' style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                                        <>Quyền của người biểu diễn:</>
                                        <p style={{ margin: '0' }}>50%</p>
                                    </div>
                                    <div className='form-horizon' style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                                        <>Quyền của nhà sản xuất:</>
                                        <p style={{ margin: '0' }}>50%</p>
                                    </div>
                                    <div className='form-horizon' style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                                        <>(Bản ghi/video)</>
                                    </div>
                                </div>
                            </div>
                            <div className='content-lower'>
                                <div className='content-column'>
                                    <h3 style={{ color: '#FFAC69'}}>Thông tin pháp nhân ủy quyền</h3>

                                    <div className='form-horizon'>
                                        <h3 style={{ marginRight: '10px', width: '200px' }}>Pháp nhân ủy quyền:</h3>
                                        <p>Cá nhân</p>
                                    </div>

                                    {/* Cá nhân */}
                                    <div className='form-horizon'>
                                        <h3 style={{ marginRight: '10px', width: '200px' }}>Tên người ủy quyền:</h3>
                                        <p>{contractItem.person}</p>
                                    </div>
                                    <div className='form-horizon'>
                                        <h3 style={{ marginRight: '10px', width: '200px' }}>Giới tính:</h3>
                                        <p>Nam</p>
                                    </div>
                                    <div className='form-horizon'>
                                        <h3 style={{ marginRight: '10px', width: '200px' }}>Ngày sinh:</h3>
                                        <p>10/01/1984</p>
                                    </div>
                                    <div className='form-horizon'>
                                        <h3 style={{ marginRight: '10px', width: '200px' }}>Quốc tịch:</h3>
                                        <p>Việt Nam</p>
                                    </div>
                                    <div className='form-horizon'>
                                        <h3 style={{ marginRight: '10px', width: '200px' }}>Số điện thoại:</h3>
                                        <p>(+84) 345 678 901</p>
                                    </div>
                                </div>

                                <div style={{margin: '65px 0 0 290px'}}>
                                    <div className='form-horizon'>
                                        <h3 style={{ marginRight: '10px', width: '200px' }}>CMND/CCCD:</h3>
                                        <p>123456789012</p>
                                    </div>
                                    <div className='form-horizon'>
                                        <h3 style={{ marginRight: '10px', width: '200px' }}>Ngày cấp:</h3>
                                        <p>10/07/2011</p>
                                    </div>
                                    <div className='form-horizon'>
                                        <h3 style={{ marginRight: '10px', width: '200px' }}>Nơi cấp:</h3>
                                        <p>Tp.HCM, Việt Nam</p>
                                    </div>
                                    <div className='form-horizon'>
                                        <h3 style={{ marginRight: '10px', width: '200px' }}>Mã số thuế:</h3>
                                        <p>92387489</p>
                                    </div>
                                    <div className='form-horizon' >
                                        <h3 style={{ marginRight: '10px', width: '200px' }}>Nơi cư trú:</h3>
                                        <p style={{width: '293px'}}>69/53, Nguyễn Gia Trí, Phường 25, Quận Bình Thạnh, Thành phố Hồ Chí Minh</p>
                                    </div>
                                </div>

                                <div style={{margin: '65px 0 0 170px'}}>
                                    {/* Cá nhân */}
                                    <div className='form-horizon'>
                                        <h3 style={{ marginRight: '10px', width: '200px' }}>Email:</h3>
                                        <p>nguyenvana@gmail.com</p>
                                    </div>

                                    <div className='form-horizon'>
                                        <h3 style={{ marginRight: '10px', width: '200px' }}>Tên đăng nhập:</h3>
                                        <p>nguyenvana@gmail.com</p>
                                    </div>
                                    
                                    <div className='form-horizon'>
                                        <h3 style={{ marginRight: '10px', width: '200px' }}>Mật khẩu:</h3>
                                        <p>******</p>
                                    </div>

                                    <div className='form-horizon'>
                                        <h3 style={{ marginRight: '10px', width: '200px' }}>Số tài khoản:</h3>
                                        <p>1231123312211223</p>
                                    </div>

                                    <div className='form-horizon'>
                                        <h3 style={{ marginRight: '10px', width: '200px' }}>Ngân hàng:</h3>
                                        <p>ACB - Ngân hàng Á Châu</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            )}
        </div>
    )
}

export default FormInfoAuthorizedContract