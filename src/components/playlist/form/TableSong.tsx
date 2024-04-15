import '../../../styles/styles.css'
import { Link } from 'react-router-dom';
import { Table, Pagination } from 'antd';
import { IAuthorizedSong } from '../../../types';
import { useMediaQuery } from 'react-responsive';
import React, { useEffect, useState } from 'react';
import { getIAuthorizedSongs } from '../../../redux/actions/songAction';

const TableSong: React.FC = () => {
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    
    const [data, setData] = useState<IAuthorizedSong[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const contracts = await getIAuthorizedSongs();
                setData(contracts);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const dataSourceWithRowNumber = data.map((item, index) => ({ ...item, rowNumber: index + 1 }));

    const columns = [
        {
            title: 'STT',
            dataIndex: 'rowNumber',
            key: 'rowNumber',
        },
        {
            title: 'Tên bản ghi',
            key: 'name',
            dataIndex: 'name',
        },
        {
            title: 'Ca sĩ',
            key: 'singer',
            dataIndex: 'singer',
        },
        {
            title: 'Tác giả',
            key: 'artist',
            dataIndex: 'artist',
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
                    Nghe
                </Link>
            ),
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
                    Thêm
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
                <div className='form-content'  style={{width: '100%'}}>
                    <div className='form-table' style={{width: '100%', marginTop: '0px'}}>
                        <div className='table-content'>
                            <Table 
                                rowKey="index"
                                columns={columns} 
                                pagination={false}
                                className="custom-table"
                                style={{ zIndex: 100 }}
                                dataSource={dataSourceWithRowNumber}
                            />
                        </div>
                        <div className='custom-show-page'  style={{width: '100%'}}>
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
                                style={{marginRight: '30px'}}
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

export default TableSong