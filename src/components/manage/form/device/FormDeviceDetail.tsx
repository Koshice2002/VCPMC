import React from 'react';
import '../../../../styles/styles.css'
import { IDevice } from '../../../../types';

interface Props {
    device: IDevice
}
const FormDeviceDetail: React.FC<Props> = ({device}) => {
    const formatDate = (date: Date) => {
        const day = date.getDate().toString().padStart(2, '0'); // Lấy ngày và thêm số 0 nếu cần
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Lấy tháng và thêm số 0 nếu cần
        const year = date.getFullYear(); // Lấy năm

        return `${day}/${month}/${year}`; // Kết hợp lại thành chuỗi "dd/mm/yyyy"
    };

    return ( 
        <div className='form-device-detail'>
            <div className='device-detail-inner'>
                <div className='form-column' style={{width: '340px'}}>
                    <h2 style={{color: 'orange'}}>Thông tin thiết bị</h2>
                    <img className='device-img' src={device?.image} alt="" />
                    <div style={{marginTop: '20px'}}>
                        <span>
                            {device?.status && 
                                <div>
                                    <div className='status-dot' style={{
                                        borderColor: device?.status ? 'green' : 'red',
                                        backgroundColor: device?.status ? 'green' : 'red',
                                    }}></div>
                                    {device?.status ? 'Hoạt động' : 'Ngừng kích hoạt'}
                                </div>
                            }
                        </span>
                        <div className='form-horizon' style={{marginTop: '30px'}}>
                            <h4 style={{width: '150px', marginRight: '39px'}}>Ghi chú</h4>
                            <span>Văn bản này không những đã tồn tại năm thế kỉ, 
                                mà khi được áp dụng vào tin học
                            </span>
                        </div>
                    </div>
                </div>

                <div className='form-column' style={{width: '280px', marginLeft: '200px'}}>
                    <h2 style={{color: 'orange'}}>{device?.name}</h2>

                    <div className='form-column'>
                        <div className='form-horizon item-more' style={{marginBottom: '25px'}}>
                            <strong>SKU/ID</strong>
                            <span>{device?.skuID}</span>
                        </div>
                        <div className='form-horizon item-more' style={{marginBottom: '25px'}}>
                            <strong>Địa chỉ Mac</strong>
                            <span>{device?.macAddress}</span>
                        </div>
                        <div className='form-horizon item-more' style={{marginBottom: '25px'}}>
                            <strong>Tên đăng nhập</strong>
                            <span>{device?.username}</span>
                        </div>
                        <div className='form-horizon item-more' style={{marginBottom: '25px'}}>
                            <strong>Định dạng</strong>
                            <span>Displayable</span>
                        </div>
                        <div className='form-horizon item-more' style={{marginBottom: '25px'}}>
                            <strong>Vị trí</strong>
                            <span>Ho Chi Minh</span>
                        </div>
                        <div className='form-horizon item-more' style={{marginBottom: '25px'}}>
                            <strong>Thời hạn bảo hành</strong>
                            <span>{device?.expire_at ? formatDate(device.expire_at.toDate()) : '-'}</span>
                        </div>
                        <div className='form-horizon item-more' style={{marginBottom: '25px'}}>
                            <strong>Trạng thái thiết bị</strong>
                            <span>
                                {device?.status && 
                                    <div>
                                        {device?.status ? 'Activated' : 'Deactivated'}
                                    </div>
                                }
                            </span>
                        </div>
                    </div>  
                </div>

                <div className='form-column' style={{width: '337px', marginLeft: '209px'}}>
                    <div className='form-column'>
                        <h2 style={{color: 'orange'}}>Thông tin phiên bản</h2>
                        <div className='form-horizon item-more'>
                            <strong>Phiên bản cũ nhất:</strong>
                            <span>12.3 (20/2/2024)</span>
                        </div>
                    </div>
                    
                    <div className='form-column' style={{marginTop: '160px'}}>
                        <h2 style={{color: 'orange'}}>Dung lượng bộ nhớ</h2>
                        <div className='form-horizon item-more' style={{marginBottom: '25px'}}>
                            <strong>Dung lượng:</strong>
                            <span>512 GB</span>
                        </div>
                        <div className='form-horizon item-more' style={{marginBottom: '25px'}}>
                            <strong>Còn trống</strong>
                            <span>123 GB</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormDeviceDetail;
