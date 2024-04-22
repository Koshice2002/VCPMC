import '../../../styles/styles.css'
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import React, { useEffect, useState } from 'react';
import { IAuthorizedContract } from '../../../types';
import { Table, Pagination, Input, Select } from 'antd';
import { SearchOutlined, DownOutlined } from '@ant-design/icons';
import { getIAuthorizedContracts } from '../../../redux/actions/authorizedContractAction';

const { Option } = Select

const RevenueTable: React.FC = () => {
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState<IAuthorizedContract[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
            const contracts = await getIAuthorizedContracts();
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
            title: 'Hợp đồng ủy quyền',
            key: 'number',
            dataIndex: 'number',
        },
        {
            title: 'Người ủy quyền',
            key: 'person',
            dataIndex: 'person',
        },
        {
            title: 'Số bài hát ủy quyền',
            key: 'numberSong',
            dataIndex: 'numberSong',
            render: () => (
                <>1</>
            )
        },
        {
            title: 'Doanh thu (VNĐ)',
            key: 'revenue',
            dataIndex: 'revenue',
            render: () => (
                <>365.000.000</>
            )
        },
        {
            title: 'Hành chính phí (VNĐ)',
            key: 'revenue',
            dataIndex: 'revenue',
            render: () => (
                <>365.000.000</>
            )
        },
        {
            title: 'Mức nhuận bút (VNĐ)',
            key: 'revenue',
            dataIndex: 'revenue',
            render: () => (
                <>365.000.000</>
            )
        },
        {
            title: 'Ngày chốt đối soát',
            key: 'day',
            dataIndex: 'day',
            render: () => (
                <>25/07/2023</>
            )
        },
        {
            title: 'Chi tiết doanh thu',
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
                                <div style={{marginRight: '10px'}}>Theo tháng:</div>
                                <Select className='form-dropdown long-dropdown' placeholder="Chọn nhóm tài khoản" suffixIcon={<DownOutlined style={{ color: 'orange' }} />}>
                                    <Option key='1' value='1' className='form-option'>Công ty TMCP Bách Hóa Xanh</Option>
                                    <Option key='2' value='2' className='form-option'>Công ty TNHH XYZ</Option>
                                    <Option key='3' value='3' className='form-option'>Công ty TMCP Adora</Option>
                                </Select>
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
                                Danh sách hợp đồng ủy quyền
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

export default RevenueTable