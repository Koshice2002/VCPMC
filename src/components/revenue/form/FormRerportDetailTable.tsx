import '../../../styles/styles.css'
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { IExploitContract } from '../../../types';
import React, { useEffect, useState } from 'react';
import { Table, Pagination, Input } from 'antd';
import { SearchOutlined, DownOutlined } from '@ant-design/icons';
import { getIExploitContracts } from '../../../redux/actions/exploitContractAction';

const FormRerportDetailTable: React.FC = () => {
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState<IExploitContract[]>([]);

    const formatDate = (date: Date) => {
        const day = date.getDate().toString().padStart(2, '0'); // Lấy ngày và thêm số 0 nếu cần
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Lấy tháng và thêm số 0 nếu cần
        const year = date.getFullYear(); // Lấy năm

        return `${day}/${month}/${year}`; // Kết hợp lại thành chuỗi "dd/mm/yyyy"
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
            const contracts = await getIExploitContracts();
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
            title: 'Số hợp đồng',
            key: 'number',
            dataIndex: 'number',
        },
        {
            title: 'Đơn vị khai thác',
            key: 'name',
            dataIndex: 'name',
        },
        {
            title: 'Thời gian hợp đồng',
            key: 'numberSong',
            render: (record: IExploitContract) => (
                <span>
                    {record.create_at && record.expire_at ? `${formatDate(record.create_at.toDate())}  - ${formatDate(record.expire_at.toDate())}` : '-'}
                </span>
            )
        },
        {
            title: 'Loại hợp đồng',
            key: 'revenue',
            dataIndex: 'revenue',
            render: () => (
                <>Trọn gói</>
            )
        },
        {
            title: 'Số thiết bị đã đồng bộ',
            key: 'revenue',
            dataIndex: 'revenue',
            render: () => (
                <>8/8</>
            )
        },
        {
            title: 'Tổng số lượt phát',
            key: 'revenue',
            dataIndex: 'revenue',
            render: () => (
                <>321.000</>
            )
        },
        {
            title: 'Ngày chốt đối soát',
            key: 'effect_at',
            render: (record: IExploitContract) => (
                <span>
                    {record.effect_at ? `${formatDate(record.effect_at.toDate())} ` : '-'}
                </span>
            )
        },
        {
            title: '',
            key: 'action',
            dataIndex: 'action',
            render: (text: string, record: any) => (
                <Link to={`/report-revenue-detail/${record.id}`} style={{ color: 'orange' }}>
                    Chi tiết doanh thu
                </Link>
            )
        },
        {
            title: '',
            key: 'action',
            dataIndex: 'action',
            render: (text: string, record: any) => (
                <Link to={`/revenue-detail/${record.id}`} style={{ color: 'orange' }}>
                    Lịch sử đồng bộ trên thiết bị
                </Link>
            )
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
                    <div className='form-content'>
                        <div className='form-filter' style={{ width: '1683px',  marginTop: '0px' }}>
                            <div className='select-container form-horizon' style={{width: '400px'}} >
                                <div style={{marginRight: '10px'}}>Theo tháng:</div>
                                <Input
                                    className='form-search'
                                    placeholder="Theo tháng"
                                    style={{width: '264px'}}
                                    suffix={<DownOutlined style={{ color: 'orange' }} />}
                                />
                            </div>

                            <div className='select-container' style={{width: '264px'}} >
                                <Input
                                    className='form-search'
                                    placeholder="Tháng 6/2023"
                                    suffix={<DownOutlined style={{ color: 'orange' }} />}
                                />
                            </div>

                            <div className='select-container' style={{marginLeft: 'auto'}}>
                                <Input
                                    className='form-search'
                                    placeholder="Nhập tên người dùng"
                                    suffix={<SearchOutlined style={{ color: 'white' }} />}
                                />
                            </div>
                        </div>
                        <div className='form-table' style={{ width: '1683px', marginTop: '20px'}}>
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
                </div>
            ) : (
                <></>
            )}
        </div>
    )
}

export default FormRerportDetailTable