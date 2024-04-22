import '../../../styles/styles.css'
import { Table, Pagination, Input } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { IAuthorizedSong } from '../../../types';
import React, { useEffect, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { getIAuthorizedSongs } from '../../../redux/actions/songAction';
import { render } from '@testing-library/react';


const RevenueTableSong: React.FC = () => {
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

    const columns1 = [
        {
            title: 'STT',
            dataIndex: 'rowNumber',
            key: 'rowNumber',
        },
        {
            title: 'Bài hát',
            key: 'name',
            dataIndex: 'name',
        },
        {
            title: 'Số lượt phát',
            key: 'number',
            dataIndex: 'number',
        },
        {
            title: 'Doanh thu (VNĐ)',
            key: 'number',
            dataIndex: 'number',
            render: () => (
                <>365.000.000</>
            )
        },
        {
            title: 'Hành chính phí (VNĐ)',
            key: 'number',
            dataIndex: 'number',
            render: () => (
                <>365.000.000</>
            )
        },
        {
            title: 'Nhuận bút (VNĐ)',
            key: 'number',
            dataIndex: 'number',
            render: () => (
                <>365.000.000</>
            )
        },
    ];

    const columns2 = [
        {
            title: 'Đơn vị khai thác',
            key: 'rowNumber',
            render: () => (
                <>Cty TNHH A</>
            )
        },
        {
            title: 'Số lượt phát',
            key: 'name',
            render: () => (
                <>100</>
            )
        },
        {
            title: 'Doanh thu (VNĐ)',
            key: 'number',
            render: () => (
                <>200000</>
            )
        },
    ];

    const handlePageChange = (page: any, pageSize: any) => {
        setCurrentPage(page);
        setPageSize(pageSize);
    };

    return (
        <div className='form-horizon'>
            <div className='form-content'>
                <h2>Danh sách bản ghi</h2>
                <div className='select-container' style={{marginLeft: 'auto'}}>
                    <Input
                        className='form-search'
                        placeholder="Nhập tên bài hát"
                        suffix={<SearchOutlined style={{ color: 'white' }} />}
                    />
                </div>
                <div className='form-table' style={{ width: '1017px'}}>
                    <div className='table-content'>
                        <Table 
                            rowKey="index"
                            columns={columns1} 
                            pagination={false}
                            style={{ zIndex: 100 }}
                            className="custom-table"
                            dataSource={dataSourceWithRowNumber}
                        />
                    </div>
                    <div className='custom-show-page' style={{ width: '980px'}}>
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

            <div className='form-content' style={{ marginLeft: '-450px' , width: '645px'}}>
                <h3>Danh sách bản ghi</h3>
                <h2 style={{color: '#FFAC69'}}>Paper Crown</h2>

                <div className='form-table' style={{ width: '645px', marginTop: '28px'}}>
                    <div className='table-content'>
                        <Table 
                            rowKey="index"
                            columns={columns2} 
                            pagination={false}
                            style={{ zIndex: 100 }}
                            className="custom-table"
                            dataSource={dataSourceWithRowNumber}
                        />
                    </div>
                    <div className='custom-show-page' style={{ width: '450px'}}>
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
        </div>
    )
}

export default RevenueTableSong