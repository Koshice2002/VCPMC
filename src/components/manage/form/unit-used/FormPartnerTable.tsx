import '../../../../styles/styles.css'
import { Link } from 'react-router-dom';
import { IPartner } from '../../../../types';
import { useMediaQuery } from 'react-responsive';
import React, { useEffect, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Input, Table, Pagination, Switch } from 'antd';
import { getIPartners } from '../../../../redux/actions/partnerAction';
import Checkbox, { CheckboxChangeEvent } from 'antd/es/checkbox';

const FormPartnerTable: React.FC = () => {
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState<IPartner[]>([]);

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
            const partner = await getIPartners();
            setData(partner);
            } catch (error) {
            console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

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
            render: (record: IPartner) => (
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
            title: 'Tên người dùng',
            key: 'name',
            dataIndex: 'name',
        },
        {
            title: 'Vai trò',
            key: 'role',
            dataIndex: 'role',
        },
        {
            title: 'Email',
            key: 'email',
            dataIndex: 'email',
        },
        {
            title: 'Tên đăng nhập',
            key: 'email',
            dataIndex: 'email',
        },
        {
            title: 'Đăng nhập cuối cùng',
            key: 'email',
            render: () => '16/04/2024'
        },
        {
            title: 'Trạng thái',
            key: 'status',
            dataIndex: 'status',
            render: (status: boolean) => (
                <div>
                    <div className='status-dot' style={{ backgroundColor: status ? 'green' : 'red' }}></div>
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
                    to={`/partner-detail/${record.id}`}
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

export default FormPartnerTable;
