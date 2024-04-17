import '../../../../styles/styles.css'
import { IDevice } from '../../../../types';
import { Timestamp } from 'firebase/firestore';
import { useMediaQuery } from 'react-responsive';
import React, { useEffect, useState } from 'react';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { SearchOutlined, DownOutlined } from '@ant-design/icons';
import { Table, Pagination, Checkbox, Input, Select } from 'antd';
import { getIDevices } from '../../../../redux/actions/deviceAction';
import { Link } from 'react-router-dom';

const { Option } = Select

const deviceFields: string[] = [
  'MAC Address',
  'Memory',
  'SKU/ID',
  'Hạn bảo hành',
  'Tên đăng nhập',
  'Trạng thái',
  'Địa điểm',
  'Hạn hợp đồng'
];

const FormDeviceTable: React.FC = () => {
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState<IDevice[]>([]);
    
    const [selectAllChecked, setSelectAllChecked] = useState(false);
    const [selectedRecords, setSelectedRecords] = useState<{ [key: string]: boolean }>({});

    const handleSelectAllChange = (e: CheckboxChangeEvent) => {
        const checked = e.target.checked;
        setSelectAllChecked(checked);
        const updatedSelectedRecords: { [key: string]: boolean } = {};
        data.forEach(record => {
            if (record.id) {
                updatedSelectedRecords[record.id] = checked;
            }
        });
        setSelectedRecords(updatedSelectedRecords);
    };

    const handleRecordCheckboxChange = (recordId: string, checked: boolean) => {
        setSelectedRecords(prevState => ({
            ...prevState,
            [recordId]: checked,
        }));
    };

    const formatDate = (date: Date) => {
        const day = date.getDate().toString().padStart(2, '0'); // Lấy ngày và thêm số 0 nếu cần
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Lấy tháng và thêm số 0 nếu cần
        const year = date.getFullYear(); // Lấy năm

        return `${day}/${month}/${year}`; // Kết hợp lại thành chuỗi "dd/mm/yyyy"
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const contracts = await getIDevices();
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
            title: (
                <>
                    <Checkbox className='checkbox-custom' checked={selectAllChecked} onChange={handleSelectAllChange}></Checkbox>
                </>
            ),
            colSpan: 1,
            key: 'id',
            render: (record: IDevice) => (
                <>
                    <Checkbox
                        className='checkbox-custom'
                        onChange={(e: CheckboxChangeEvent) => handleRecordCheckboxChange(record.id!, e.target.checked)}
                    ></Checkbox>
                </>
            ),
        },
        {
            title: 'STT',
            dataIndex: 'rowNumber',
            key: 'rowNumber',
        },
        {
            title: 'Tên thiết bị',
            key: 'name',
            dataIndex: 'name',
        },
        {
            title: 'Trạng thái',
            key: 'status',
            dataIndex: 'status',
            render: (status: boolean) => (
                <div>
                    <div className='status-dot' style={{
                        borderColor: status ? 'green' : 'red',
                        backgroundColor: status ? 'green' : 'red',
                    }}></div>
                    {status ? 'Đang kích hoạt | Đang hoạt động' : 'Ngừng kích hoạt'}
                </div>
            ),
        },
        {
            title: 'Địa điểm',
            key: 'address',
            dataIndex: 'address',
        },
        {
            title: 'Ngày hết hạn',
            dataIndex: 'expire_at',
            key: 'expire_at',
            render: (expire_at: Timestamp) => (
                <span>
                    {formatDate(expire_at.toDate())}
                </span>
            )
        },
        {
            title: 'MAC Address',
            key: 'macAddress',
            dataIndex: 'macAddress',
        },
        {
            title: 'Memory',
            key: 'memory',
            dataIndex: 'memory',
            render: (memory: string) => (
                <span>
                    {parseFloat(memory).toFixed(2)} GB/32GB
                </span>
            )
        },
        {
            title: '',
            key: 'action',
            dataIndex: 'action',
            render: (text: string, record: any) => (
                <Link to={`/device-detail/${record.id}`} style={{ color: 'orange' }}>
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
                        <div className='form-filter' style={{ width: '1683px'}}>
                            <div className='select-container'>
                                <Select className='form-dropdown long-dropdown' placeholder="Chọn nhóm tài khoản" suffixIcon={<DownOutlined style={{ color: 'orange' }} />}>
                                    <Option key='1' value='1' className='form-option'>Công ty TMCP Bách Hóa Xanh</Option>
                                    <Option key='2' value='2' className='form-option'>Công ty TNHH XYZ</Option>
                                    <Option key='3' value='3' className='form-option'>Công ty TMCP Adora</Option>
                                </Select>
                            </div>

                            <div className='select-container' style={{ marginLeft: '24px' }}>
                                <Select className='form-dropdown' placeholder="Ẩn hiện cột" suffixIcon={<DownOutlined style={{ color: 'orange' }} />}>
                                    {deviceFields.map(field => (
                                        <Option key={field} value={field} className='form-option'>{field}</Option>
                                    ))}
                                </Select>
                            </div>

                            <div className='select-container' style={{marginLeft: 'auto'}}>
                                <Input
                                    className='form-search'
                                    placeholder="Tìm thiết bị theo tên, SKU, địa điểm, địa chỉ Mac"
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

export default FormDeviceTable