import '../../../../styles/styles.css'
import { Link } from 'react-router-dom';
import { IUnitUsed } from '../../../../types';
import { Timestamp } from 'firebase/firestore';
import { Input, Table, Pagination, Switch, Checkbox } from 'antd';
import { useMediaQuery } from 'react-responsive';
import React, { useEffect, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { getIUnitUsed } from '../../../../redux/actions/unitUsedAction';
import { title } from 'process';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

const FormUnitUsed: React.FC = () => {
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState<IUnitUsed[]>([]);

    const [selectAllChecked, setSelectAllChecked] = useState(false);
    const [selectedRecords, setSelectedRecords] = useState<{ [key: string]: boolean }>({});

    const handleRecordCheckboxChange = (recordId: string, checked: boolean) => {
        setSelectedRecords(prevState => ({
            ...prevState,
            [recordId]: checked,
        }));
    };

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

    useEffect(() => {
        const fetchData = async () => {
            try {
            const partner = await getIUnitUsed();
            setData(partner);
            } catch (error) {
            console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const formatDate = (date: Date) => {
        const day = date.getDate().toString().padStart(2, '0'); // Lấy ngày và thêm số 0 nếu cần
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Lấy tháng và thêm số 0 nếu cần
        const year = date.getFullYear(); // Lấy năm

        return `${day}/${month}/${year}`; // Kết hợp lại thành chuỗi "dd/mm/yyyy"
    };


    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });

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
            render: (record: IUnitUsed) => (
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
            title: 'Họ tên',
            key: 'name',
            dataIndex: 'name',
        },
        {
            title: 'Số hợp đồng',
            key: 'number',
            dataIndex: 'number',
        },
        {
            title: 'Admin',
            key: 'admin',
            dataIndex: 'admin',
        },
        {
            title: 'Người dùng',
            key: 'number_user',
            dataIndex: 'number_user',
        },
        {
            title: 'Thiết bị được chỉ định',
            key: 'devices',
            dataIndex: 'devices',
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
            title: 'Trạng thái',
            key: 'status',
            dataIndex: 'status',
            render: (status: boolean) => (
                <div>
                    <Switch checked={status} style={{marginRight: '10px'}} />
                    {status ? 'Đang kích hoạt' : 'Ngừng kích hoạt'}
                </div>
                
            ),
        },
        {
            title: '',
            dataIndex: 'column9',
            key: 'column9', 
            render: (text: string, record: any) => (
                <Link
                    to={`/unit-used-detail/${record.id}`}
                    style={{ color: 'orange' }}
                >
                    Xem chi tiết
                </Link>
            ),
        }
    ];

     const handlePageChange = (page: any, pageSize: any) => {
        setCurrentPage(page);
        setPageSize(pageSize);
    };

  return (
    <div>
        {isDesktopOrLaptop ? (
            <div className='form-content'>
                <div className='form-filter'>
                    <div className='select-container'>
                        <Input
                            className='form-search'
                            placeholder="Họ tên, tên đăng nhập, email,..."
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
                    <div className='custom-show-page'>
                        <div> 
                            Hiển thị 
                                <span 
                                    style={{ 
                                        width: '48px', 
                                        height: '32px', 
                                        border: '1px solid orange', 
                                        borderRadius: '4px', 
                                        display: 'inline-flex', 
                                        alignItems: 'center', 
                                        justifyContent: 'center', 
                                        margin: '0 5px' 
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
  );
};

export default FormUnitUsed;
