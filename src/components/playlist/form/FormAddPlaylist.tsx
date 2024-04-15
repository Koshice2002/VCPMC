import '../../../styles/styles.css'
import TableAdd from './TableAdd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, Switch } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { CloudUploadOutlined } from '@ant-design/icons';


const FormAddPlaylist: React.FC= () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });

    return ( 
        <>
            {isDesktopOrLaptop ? (
                <>
                    <div className='form-detail-playlist form-horizon'>
                        <div className='form-detail-left'>
                            <div className='form-column'>
                                <div className='form-column'>
                                    <h4 style={{margin: '10px 0'}}>Ảnh bìa:</h4>
                                    <div className='upload-btn' style={{width: '80px'}}>
                                        <CloudUploadOutlined style={{width: '20px', height: '16px'}}/> Tải lên
                                    </div>
                                </div>
                                <div className='form-info-detail' style={{paddingTop: '20px', marginTop: '35px'}}>
                                    <h4 style={{margin: '2px 0'}}>Tiêu đề: <i style={{color: 'red'}}>*</i></h4>
                                    <Input className='form'></Input>
                                </div>
                                <div className='form-info-detail' style={{paddingTop: '20px', marginTop: '35px'}}>
                                    <div className='form-horizon item-more' style={{margin: '-15px 0'}}>
                                        <h3>Tổng số:</h3>
                                        <p>0 Bản ghi</p> 
                                    </div>
                                    <div className='form-horizon item-more' style={{margin: '-15px 0'}}>
                                        <h3>Tổng thời lượng:</h3>
                                        <p>--:--:--</p>
                                    </div>
                                </div>
                                <div className='form-info-detail' style={{paddingTop: '20px', marginTop: '35px'}}>
                                    <h4 style={{margin: '5px 0'}}>Mô tả: <i style={{color: 'red'}}>*</i></h4>
                                    <Input.TextArea className='form' style={{height: '112px'}}>
                                    </Input.TextArea>
                                </div>
                                <div className='form-info-detail' style={{paddingTop: '20px', marginTop: '35px'}}>
                                    <div className='form-horizon'>
                                        <Switch defaultChecked ></Switch>
                                        <p style={{marginLeft: '5px'}}>Hiện ở chế độ công khai</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='form-detail-right'>
                            <TableAdd></TableAdd>
                            
                            <div style={{margin: '10px'}}>
                                <i style={{color: 'red'}}>*</i> là những trường thông tin bắt buộc
                            </div>
                        </div>
                    </div>
                    
                    <div className='title' style={{margin: '-25px 0'}}>
                        <Link to={'/contract-manage'}>
                            <Button className='btnCancel' style={{width: '168px', margin: '0 16px'}}>
                                    Hủy
                            </Button>
                        </Link>
                        <Button className='btnLogin' htmlType="submit" style={{width: '168px', margin: '0 16px'}}>
                            Tạo
                        </Button>
                    </div>
                </>
                
            ) : (
                <>

                </>
            )}
        </>
    )
}

export default FormAddPlaylist;
