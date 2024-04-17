import '../../../../styles/styles.css'
import { Link } from 'react-router-dom';
import { Timestamp } from 'firebase/firestore';
import { useMediaQuery } from 'react-responsive';
import React, { useEffect, useState } from 'react';
import { IAuthorizedContract } from '../../../../types';
import { Input, Table, Select, Pagination } from 'antd';
import { SearchOutlined, DownOutlined } from '@ant-design/icons';
import { getIAuthorizedSongs } from '../../../../redux/actions/songAction';
import { create } from 'domain';

const { Option } = Select;

const FormAuthorizedWork: React.FC = () => {
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState<IAuthorizedContract[]>([]);

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });

    const formatDate = (date: Date) => {
        const day = date.getDate().toString().padStart(2, '0'); // Lấy ngày và thêm số 0 nếu cần
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Lấy tháng và thêm số 0 nếu cần
        const year = date.getFullYear(); // Lấy năm

        return `${day}/${month}/${year}`; // Kết hợp lại thành chuỗi "dd/mm/yyyy"
    };

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
            title: 'Mã ISRC',
            key: 'code',
            dataIndex: 'code',
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
            title: 'Ngày tải',
            dataIndex: 'downloadDate',
            key: 'downloadDate',
            render: (create_at: Timestamp) => (
                <span>
                    {formatDate(create_at.toDate())}
                    {' '}
                    {create_at.toDate().toLocaleTimeString()}
                </span>
            )
        },
        {
            title: 'Tình trạng',
            key: 'status',
            dataIndex: 'status',
            render: (status: number) => {
                let text = '';
                let color = '';
                switch (status) {
                    case 1:
                        text = 'Mới';
                        color = 'green';
                        break;
                    case 2:
                        text = 'Đã phê duyệt';
                        color = 'blue';
                        break;
                    case 3:
                        text = 'Từ chối';
                        color = 'red';
                        break;
                    default:
                        text = 'Không xác định';
                        color = 'gray';
                        break;
                }
                return (
                    <>
                        <div className='status-dot' style={{ border: `1px solid ${color}`, backgroundColor: color }}></div>
                        {text}
                    </>
                );
            }
        },
        {
            title: '',
            dataIndex: 'action',
            key: 'action',
            render: (text: string, record: any) => (
                <Link
                    to={'/'}
                    style={{ color: 'orange' }}
                >
                    Nghe
                </Link>
            ),
        },
    ];

    const handlePageChange = (page: any, pageSize: any) => {
        setCurrentPage(page);
        setPageSize(pageSize);
    };

    return (
        <div>
            {isDesktopOrLaptop ? (
                <div className='form-content' style={{ width: '1683px'}}>
                    <div className='form-filter'>
                        <div className='select-container'>
                            <div style={{ marginRight: '10px' }}>Tình trạng phê duyệt:</div>
                            <Select className='form-dropdown' placeholder="Tất cả" suffixIcon={<DownOutlined style={{ color: 'orange' }} />}>
                                <Option key='1' value='1' className='form-option'>Mới</Option>
                                <Option key='2' value='2' className='form-option'>Đã phê duyệt</Option>
                                <Option key='3' value='3' className='form-option'>Từ chối</Option>
                            </Select>
                        </div>

                        <div className='select-container' style={{marginLeft: 'auto'}}>
                            <Input
                                className='form-search'
                                placeholder="Tên bản ghi, tên ca sĩ, tác giả..."
                                suffix={<SearchOutlined style={{ color: 'white' }} />}
                            />
                        </div>
                    </div>

                    <div className='form-table' style={{ width: '1683px'}}>
                        <div className='table-content'>
                            <Table 
                                rowKey="index"
                                columns={columns} 
                                pagination={false}
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

export default FormAuthorizedWork