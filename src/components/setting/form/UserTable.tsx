import '../../../styles/styles.css'
import { Link } from 'react-router-dom';
import { Table, Pagination, Switch } from 'antd';
import { useMediaQuery } from 'react-responsive';
import React, { useEffect, useState } from 'react';
import { IUser } from '../../../types';
import { getIUsers } from '../../../redux/actions/userAction';
import { Timestamp } from 'firebase/firestore';
import AddUserBtn from '../menu/AddUserBtn';

const UserTable: React.FC = () => {
    const [pageSize, setPageSize] = useState(10);
    const [data, setData] = useState<IUser[]>([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
            const contracts = await getIUsers();
            setData(contracts);
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

    const dataSourceWithRowNumber = data.map((item, index) => ({ ...item, rowNumber: index + 1 }));

    const columns = [
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
            title: 'Tên đăng nhập',
            key: 'username',
            dataIndex: 'username',
        },
        {
            title: 'Vai trò',
            key: 'role',
            dataIndex: 'role',
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
            title: 'Email',
            key: 'email',
            dataIndex: 'email',
        },
        {
            title: 'Số điện thoại',
            key: 'phone',
            dataIndex: 'phone',
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
            title: '',
            key: 'action',
            dataIndex: 'action',
            render: (text: string, record: any) => (
                <Link to={`/user-authorization-edit/${record.id}`} style={{ color: 'orange' }}>
                    Chỉnh sửa
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
                    <AddUserBtn></AddUserBtn>
                </div>
            ) : (
                <></>
            )}
        </div>
    )
}

export default UserTable