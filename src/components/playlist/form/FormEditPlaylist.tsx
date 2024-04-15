import '../../../styles/styles.css'
import React, { useState } from 'react';
import { IPlaylist } from '../../../types';
import FormTableDetail from './FormTableDetail';
import { useMediaQuery } from 'react-responsive';
import { GlobalOutlined, SyncOutlined, SwapOutlined, MoreOutlined } from '@ant-design/icons';
import { Button, Input, Switch } from 'antd';
import { Link } from 'react-router-dom';

interface Props {
    playlist: IPlaylist | null;
}

const FormEditPlaylist: React.FC<Props> = ({ playlist }) => {
    const totalSongs = playlist ? (playlist.songs ? playlist.songs.length : 0) : 0;

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
                                <div style={{ height: '274px'}}>
                                    <div className='card-img'>
                                        <img src={process.env.PUBLIC_URL + '/Image/thumbnail.jpg'} alt="" className='img-detail img-thumb' />
                                        <i className='cover-icon'>
                                            <MoreOutlined className='more-icon'/>
                                        </i>
                                    </div>
                                </div>
                                <div className='form-column' style={{margin: '15px 0'}}>
                                    <h4 style={{margin: '2px 0'}}>Tiêu đề: <i style={{color: 'red'}}>*</i></h4>
                                    <Input className='form' value={playlist?.name}></Input>
                                </div>
                                <div className='form-info-detail'>
                                    <div className='form-horizon item-more' style={{margin: '-15px 0'}}>
                                        <h3>Người tạo:</h3>
                                        <p>{playlist?.person_create}</p>
                                    </div>
                                    <div className='form-horizon item-more' style={{margin: '-15px 0'}}>
                                        <h3>Tổng số:</h3>
                                        <p>{totalSongs} Bản ghi</p> 
                                    </div>
                                    <div className='form-horizon item-more' style={{margin: '-15px 0'}}>
                                        <h3>Tổng thời lượng:</h3>
                                        <p>{playlist?.duration}</p>
                                    </div>
                                </div>
                                <div className='form-info-detail'>
                                    <h4 style={{margin: '5px 0'}}>Mô tả: <i style={{color: 'red'}}>*</i></h4>
                                    <Input.TextArea className='form' style={{height: '100px'}}
                                        value={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.'}>
                                    </Input.TextArea>
                                </div>
                                <div className='form-info-detail'>
                                    <div className='form-horizon'>
                                        <Switch defaultChecked ></Switch>
                                        <p style={{marginLeft: '5px'}}>Hiện ở chế độ công khai</p>
                                    </div>
                                </div>

                                <div style={{ marginTop: '10px'}}>
                                    <i style={{color: 'red'}}>*</i> là những trường thông tin bắt buộc
                                </div>
                            </div>
                        </div>
                        <div className='form-detail-right'>
                            {playlist?.id && <FormTableDetail playlistId={playlist?.id} />}
                        </div>
                    </div>

                    <div className='title' style={{margin: '20px 0'}}>
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

export default FormEditPlaylist;
