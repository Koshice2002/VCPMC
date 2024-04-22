import '../../../styles/styles.css'
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { IExploitContract } from '../../../types';
import React, { useEffect, useState } from 'react';
import { Table, Pagination, Input, DatePicker } from 'antd';
import { SearchOutlined, CalendarOutlined } from '@ant-design/icons';
import { getIExploitContracts } from '../../../redux/actions/exploitContractAction';
import moment from 'moment';
import { render } from '@testing-library/react';

const RevenueTableContract: React.FC = () => {
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
            title: 'Tổng lượt phát',
            key: 'revenue',
            dataIndex: 'revenue',
            render: () => (
                <>365</>
            )
        },
        {
            title: 'Tổng doanh thu',
            key: 'revenue',
            dataIndex: 'revenue',
            render: () => (
                <>365.000.000</>
            )
        },
        {
            title: 'Doanh thu chưa phân phối',
            key: 'day',
            dataIndex: 'day',
            render: () => (
                <>1.000.000</>
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
                <Link to={`/revenue-detail/${record.id}`} style={{ color: 'orange' }}>
                    Xem chi tiết
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
                            <div className='select-container form-horizon'>
                                <div style={{marginRight: '10px'}}>Thời gian thực hiện:</div>
                                <DatePicker
                                    format="DD-MM-YYYY"
                                    className={`form input-item item-change editable`}
                                    suffixIcon={<CalendarOutlined style={{ color: '#F26D21' }} />}
                                    defaultValue={moment('03-10-2023', 'DD-MM-YYYY')}
                                />
                            </div>

                            <div className='select-container' style={{marginLeft: 'auto'}}>
                                <Input
                                    className='form-search'
                                    placeholder="Nhập tên bài hát"
                                    suffix={<SearchOutlined style={{ color: 'white' }} />}
                                />
                            </div>
                        </div>
                        <div className='form-filter' style={{ marginTop: '0px' }}>
                            <h2>
                                Danh sách hợp đồng khai thác đã đối soát
                            </h2>
                        </div>
                        <div className='form-table' style={{ width: '1683px', marginTop: '0px'}}>
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

export default RevenueTableContract