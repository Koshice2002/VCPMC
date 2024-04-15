import '../../../styles/styles.css'
import TableAdd from './TableAdd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, Select } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { SearchOutlined, DownOutlined } from '@ant-design/icons';
import TableSong from './TableSong';

const {Option} = Select;

const FormAddSongPlaylist: React.FC= () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });

    return ( 
        <>
            {isDesktopOrLaptop ? (
                <>
                    <div className='form-add-song-playlist form-horizon'>
                        <div className='form-add-song-left'>
                            <div style={{margin: '0  0 20px 10px'}}>
                                <h4 style={{margin: '10px 0'}}>Kho bản ghi</h4>
                                <div className='form-horizon item-more' style={{width: '650px'}}>
                                    <div className='select-container' style={{ marginBottom: '10px' }}>
                                        <div style={{ marginRight: '10px' }}>Thể loại:</div>
                                        <Select className='form-dropdown' placeholder="Tất cả" suffixIcon={<DownOutlined style={{ color: 'orange' }} />}>
                                            <Option key='1' value='1' className='form-option'>Tất cả</Option>
                                            <Option key='2' value='2' className='form-option'>Pop</Option>
                                            <Option key='3' value='3' className='form-option'>EDM</Option>
                                            <Option key='4' value='4' className='form-option'>Ballad</Option>
                                        </Select>
                                    </div>

                                    <div className='select-container'>
                                        <div style={{ marginRight: '10px' }}>Playlist mẫu:</div>
                                        <Select className='form-dropdown' placeholder="Playlist mẫu" suffixIcon={<DownOutlined style={{ color: 'orange' }} />}>
                                            <Option key='1' value='1' className='form-option'>Tất cả</Option>
                                            <Option key='2' value='2' className='form-option'>Pop</Option>
                                            <Option key='3' value='3' className='form-option'>EDM</Option>
                                            <Option key='4' value='4' className='form-option'>Ballad</Option>
                                        </Select>
                                    </div>
                                </div>
                                <div className='select-container' style={{marginLeft: '-2px'}}>
                                    <Input
                                        className='form-search'
                                        style={{width: '650px'}}
                                        placeholder="Tên bản ghi, tên ca sĩ, tác giả..."
                                        suffix={<SearchOutlined style={{ color: 'white' }} />}
                                    />
                                </div>
                            </div>
                            <TableSong></TableSong>
                        </div>
                        <div className='form-add-song-right'>
                            <div style={{margin: '0  0 20px 10px'}}>
                                <h4 style={{margin: '25px 0'}}>Danh sách bản ghi được thêm vào playlist</h4>
                                <div className='form-horizon item-more' style={{width: '650px'}}>
                                    <div className='select-container' style={{ marginBottom: '10px' }}>
                                        <div style={{ marginRight: '10px' }}>Tổng số:</div>
                                        <p>0 bản ghi</p>
                                    </div>

                                    <div className='select-container'>
                                        <div style={{ marginRight: '10px' }}>Tổng thời lượng:</div>
                                        <p>--:--:--</p>
                                    </div>
                                </div>
                                <div className='select-container' style={{margin: '-10px 0 0 -2px'}}>
                                    <Input
                                        className='form-search'
                                        style={{width: '650px'}}
                                        placeholder="Tên bản ghi, tên ca sĩ, tác giả..."
                                        suffix={<SearchOutlined style={{ color: 'white' }} />}
                                    />
                                </div>
                            </div>
                            <TableAdd></TableAdd>
                        </div>
                    </div>
                    
                    <div className='title' style={{margin: '30px 0'}}>
                        <Link to={'/playlist'}>
                            <Button className='btnCancel' style={{width: '168px', margin: '0 16px'}}>
                                    Hủy
                            </Button>
                        </Link>
                        <Link to={'/playlist'}>
                            <Button className='btnLogin' htmlType="submit" style={{width: '168px', margin: '0 16px'}}>
                                Tạo
                            </Button>
                        </Link>
                    </div>
                </>
                
            ) : (
                <>

                </>
            )}
        </>
    )
}

export default FormAddSongPlaylist;
