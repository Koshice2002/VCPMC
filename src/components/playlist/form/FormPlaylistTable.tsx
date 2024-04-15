import '../../../styles/styles.css'
import { Link } from 'react-router-dom';
import { Table, Pagination } from 'antd';
import { IPlaylist } from '../../../types';
import { Timestamp } from 'firebase/firestore';
import { useMediaQuery } from 'react-responsive';
import React, { useEffect, useState } from 'react';
import { getIPlaylist } from '../../../redux/actions/playlistAction';

const FormPlaylistTable: React.FC= () => {
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    
    const [data, setData] = useState<IPlaylist[]>([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const playlists = await getIPlaylist();
                setData(playlists);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const totalSongsPerPlaylist = data.map(playlist => {
        const total = playlist.songs ? playlist.songs.length : 0;
            return total;
    });

    const dataSourceWithRowNumber = data.map((item, index) => ({ ...item, rowNumber: index + 1 }));

    const columns = [
        {
            title: 'STT',
            dataIndex: 'rowNumber',
            key: 'rowNumber',
        },
        {
            title: 'Tiêu đề',
            key: 'name',
            dataIndex: 'name',
        },
        {
            title: 'Số bản ghi',
            dataIndex: 'number_record',
            render: (_: any, record: any, index: number) => totalSongsPerPlaylist[index],
        },
        {
            title: 'Thời lượng',
            key: 'duration',
            dataIndex: 'duration',
        },
        {
            title: 'Chủ đề',
            dataIndex: 'types',
            render: () => 'Pop, Ballad',
        },
        {
            title: 'Ngày tạo',
            dataIndex: 'create_at',
            key: 'create_at',
            render: (create_at: Timestamp) => (
                <span>
                    {create_at.toDate().toLocaleDateString()}
                </span>
            )
        },
        {
            title: 'Người tạo',
            key: 'person_create',
            dataIndex: 'person_create',
        },
        {
            title: '',
            dataIndex: 'action',
            key: 'action',
            render: (text: string, record: any) => (
                <Link
                    to={`/detail-playlist/${record.id}`}
                    style={{ color: 'orange' }}
                >
                    Chi tiết
                </Link>
            ),
        },
    ];

    const handlePageChange = (page: any, pageSize: any) => {
        setCurrentPage(page);
        setPageSize(pageSize);
    };

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });

    return (
        <div>
            {isDesktopOrLaptop ? (
                <div className='form-content'>
                    <div className='form-table' style={{ width: '1683px'}}>
                        <div className='table-content'>
                            <Table 
                                rowKey="index"
                                columns={columns} 
                                pagination={false}
                                style={{ zIndex: 100 }}
                                className="custom-table"
                                dataSource={dataSourceWithRowNumber}
                            />
                        </div>
                        <div className='custom-show-page' style={{ width: '1650px'}}>
                            <div> 
                                Hiển thị 
                                    <span 
                                        style={{ 
                                            width: '48px', 
                                            height: '32px', 
                                            margin: '0 5px',
                                            borderRadius: '4px', 
                                            alignItems: 'center', 
                                            display: 'inline-flex', 
                                            justifyContent: 'center',
                                            border: '1px solid orange', 
                                        }}
                                    >
                                        {dataSourceWithRowNumber.length}
                                    </span> 
                                hàng trong mỗi trang
                            </div>                        
                            <Pagination
                                current={currentPage}
                                pageSize={pageSize} 
                                total={data.length} 
                                className='custom-paginate'
                                onChange={handlePageChange} 
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

export default FormPlaylistTable