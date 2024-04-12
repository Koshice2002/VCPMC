import '../../../styles/styles.css'
import React, { useState } from 'react';
import { IAuthorizedSong } from '../../../types';
import { useMediaQuery } from 'react-responsive';
import { CameraOutlined } from '@ant-design/icons';
import { Timestamp } from 'firebase/firestore';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

interface Props {
    song: IAuthorizedSong | null;
}

const FormEditRecord: React.FC<Props> = ({ song }) => {

    const createDate = song && song.downloadDate ? new Date(song.downloadDate.seconds * 1000) : null;

    const convertToFileName = (name: any) => {
        // Kiểm tra xem name có tồn tại không trước khi thực hiện chuyển đổi
        if (!name) {
            return ''; // Trả về chuỗi rỗng nếu name không tồn tại
        }
        
        // Thực hiện chuyển đổi tên bài hát thành dạng không dấu và chữ thường
        const formattedName = name.toLowerCase().replace(/\s+/g, '');
        
        // Thêm phần đuôi mở rộng .mp3
        return `${formattedName}.mp3`;
    };

    // Sử dụng hàm convertToFileName để chuyển đổi tên bài hát
    const fileName = convertToFileName(song?.name);

        let statusText = '';
        let color = '';
        switch (song?.status) {
            case 1:
                statusText = 'Mới';
                color = 'green';
                break;
            case 2:
                statusText = 'Còn thời hạn';
                color = 'blue';
                break;
            case 3:
                statusText = 'Đã hết hạn';
                color = 'gray';
                break;
            default:
                statusText = 'Không xác định';
                color = 'black';
                break;
        }

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });

    return ( 
        <>
            {isDesktopOrLaptop ? (
                <div className='form-edit'>
                    <div className='content-column'>
                        <div className='form-horizon'>
                            <div className='content-column'>
                                <div className='form-record-info'>
                                    <div className='content-column'>
                                        <h2 className='group-avatar-change' style={{color: '#FF7506', marginBottom: '-15px'}}>Thông tin bản ghi</h2>
                                        <div className='group-avatar-change'>
                                            <div className='avatar-container'>
                                                <img
                                                    alt="avatar"
                                                    src={song?.image}
                                                    className='avatar-change'
                                                    style={{width: '130px', height: '130px'}}
                                                />
                                                <CameraOutlined className="camera-icon" style={{marginRight: '10px'}}/>
                                            </div>
                                            <h4>{fileName}</h4>
                                        </div>

                                        <div className='content-column' style={{width: '524px'}}>
                                            <div className='item-more' style={{margin: '12px 0'}}>
                                                <strong>Ngày thêm:</strong> 
                                                <div>{createDate ? 
                                                        `${createDate.toLocaleDateString()} ${createDate.toLocaleTimeString()}` : 
                                                        ''
                                                    }
                                                </div>
                                            </div>
                                            <div className='item-more' style={{margin: '12px 0'}}>
                                                <strong>Người tải lên:</strong> 
                                                <div>Admin</div>
                                            </div>
                                            <div className='item-more' style={{margin: '12px 0'}}>
                                                <strong>Người duyệt</strong> 
                                                <div>Hệ thống</div>
                                            </div>
                                            <div className='item-more' style={{margin: '12px 0'}}>
                                                <strong>Ngày phê duyệt</strong> 
                                                <div>{createDate ? 
                                                        `${createDate.toLocaleDateString()} ${createDate.toLocaleTimeString()}` : 
                                                        ''
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='form-authorized-info'>
                                    <div className='content-column' style={{width: '524px'}}>
                                        <h2 className='group-avatar-change' style={{color: '#FF7506'}}>Thông tin ủy quyền</h2>

                                        <div className='item-more' style={{margin: '12px 0'}}>
                                            <strong>Số hợp đồng:</strong> 
                                            <div>{ song?.code }</div>
                                        </div>
                                        <div className='item-more' style={{margin: '12px 0'}}>
                                            <strong>Ngày nhận ủy quyền:</strong> 
                                            <div>01/05/2022</div>
                                        </div>
                                        <div className='item-more' style={{margin: '12px 0'}}>
                                            <strong>Ngày hết hạn</strong> 
                                            <div>01/08/2025</div>
                                        </div>
                                        <div className='item-more' style={{margin: '12px 0'}}>
                                            <strong>Trạng thái</strong> 
                                            <div><div style={{ display: 'inline-flex', marginRight: '6px', width: '8px', height: '8px', borderRadius: '100%', border: `1px solid ${color}`, backgroundColor: color }}></div>
                                            {statusText}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='form-edit-record'>
                                <div className='content-column' style={{width: '695px'}}>
                                    <h2 className='group-avatar-change' style={{color: '#FF7506'}}>Chỉnh sửa thông tin</h2>

                                    <div style={{width: '100%'}}>
                                        <div>Tên bản ghi</div>
                                        <Input className={'form'} style={{width: '100%', margin: '20px 0'}} value={song?.name}/>

                                        <div>Mã ISRC</div>
                                        <Input className={'form'} style={{width: '100%', margin: '20px 0'}} value={song?.code}/>

                                        <div>Ca sĩ</div>
                                        <Input className={'form'} style={{width: '100%', margin: '20px 0'}} value={song?.singer}/>

                                        <div>Tác giả</div>
                                        <Input className={'form'} style={{width: '100%', margin: '20px 0'}} value={song?.artist}/>

                                        <div>Nhà sản xuất</div>
                                        <Input className={'form'} style={{width: '100%', margin: '20px 0'}} value={'Koshice Nguyễn'}/>

                                        <div>Thể loại</div>
                                        <Input className={'form'} style={{width: '100%', margin: '20px 0'}} value={song?.type}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Form.Item className='title' style={{marginTop: '40px'}}>
                            <Link to={'/record-store'}>
                                <Button className='btnCancel' style={{width: '168px', margin: '0 16px'}} >
                                    Hủy
                                </Button>
                            </Link>
                            <Link to={'/record-store'}>
                                <Button className='btnLogin' htmlType="submit" style={{width: '168px', margin: '0 16px'}}>
                                    Lưu
                                </Button>
                            </Link>
                        </Form.Item>
                    </div>
                </div>
            ) : (
                <>

                </>
            )}
        </>
    )
}

export default FormEditRecord;
