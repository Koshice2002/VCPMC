import '../../../styles/styles.css'
import React, { useState } from 'react';
import { IPlaylist } from '../../../types';
import FormTableDetail from './FormTableDetail';
import { useMediaQuery } from 'react-responsive';
import { GlobalOutlined, SyncOutlined, SwapOutlined } from '@ant-design/icons';

interface Props {
    playlist: IPlaylist | null;
}

const FormDetailPlaylist: React.FC<Props> = ({ playlist }) => {
    const totalSongs = playlist ? (playlist.songs ? playlist.songs.length : 0) : 0;

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });

    return ( 
        <>
            {isDesktopOrLaptop ? (
                <div className='form-detail-playlist form-horizon'>
                    <div className='form-detail-left'>
                        <div className='form-column'>
                            <img src={process.env.PUBLIC_URL + '/Image/thumbnail.jpg'} alt="" className='img-detail' />
                            <h2 style={{margin: '8px 0'}}>{playlist?.name}</h2>
                            <div className='form-info-detail'>
                                <div className='form-horizon item-more' style={{margin: '-10px 0'}}>
                                    <h3>Người tạo:</h3>
                                    <p>{playlist?.person_create}</p>
                                </div>
                                <div className='form-horizon item-more' style={{margin: '-10px 0'}}>
                                    <h3>Tổng số:</h3>
                                    <p>{totalSongs} Bản ghi</p> 
                                </div>
                                <div className='form-horizon item-more' style={{margin: '-10px 0'}}>
                                    <h3>Tổng thời lượng:</h3>
                                    <p>{playlist?.duration}</p>
                                </div>
                            </div>
                            <div className='form-info-detail'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.</p>
                            </div>
                            <div className='form-info-detail'>
                                <div className='form-horizon'>
                                    <i><GlobalOutlined /></i>
                                    <p style={{marginLeft: '5px'}}>Hiện ở chế độ công khai</p>
                                </div>
                                <div className='form-horizon' style={{ color: 'orange'}}>
                                    <i><SwapOutlined /></i>
                                    <p style={{marginLeft: '5px'}}>Phát ngẫu nhiên</p>
                                </div>
                                <div className='form-horizon'>
                                    <i><SyncOutlined /></i>
                                    <p style={{marginLeft: '5px'}}>Lặp lại</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='form-detail-right'>
                        {playlist?.id && <FormTableDetail playlistId={playlist?.id} />}
                    </div>

                </div>
            ) : (
                <>

                </>
            )}
        </>
    )
}

export default FormDetailPlaylist;
