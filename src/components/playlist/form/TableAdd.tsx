import '../../../styles/styles.css'
import { Link } from 'react-router-dom';
import { Table, Pagination } from 'antd';
import { IAuthorizedSong } from '../../../types';
import { useMediaQuery } from 'react-responsive';
import React, { useEffect, useState } from 'react';
import { fetchSongsForPlaylist } from '../../../redux/actions/playlistAction';


const TableAdd: React.FC= () => {
    const columns = [
        {
            title: 'STT',
            key: 'rowNumber',
        },
        {
            title: 'Tên bản ghi',
            key: 'name',
        },
        {
            title: 'Ca sĩ',
            key: 'singer',
        },
        {
            title: 'Tác giả',
            key: 'artist',
        },
    ];
    
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });

    return (
        <div>
            {isDesktopOrLaptop ? (
                <div className='form-content'  style={{width: '100%'}}>
                    <div className='form-table' style={{width: '100%', marginTop: '0px'}}>
                        <div className='table-content'>
                            <Table 
                                rowKey="index"
                                dataSource={[{}]}
                                columns={columns} 
                                pagination={false}
                                className="custom-table"
                                style={{ zIndex: 100, height: '650px' }}
                                summary={() => (
                                    <Table.Summary>
                                        <Table.Summary.Row>
                                            <Table.Summary.Cell index={0} colSpan={4} className="centered-cell">
                                                Vui lòng chọn bản ghi để thêm vào Playlist <i style={{color: 'red'}}>*</i>
                                            </Table.Summary.Cell>
                                        </Table.Summary.Row>
                                    </Table.Summary>
                                )}
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </div>
    )
}

export default TableAdd