import '../../../styles/styles.css'
import { Link } from 'react-router-dom';
import { Table, Pagination, Switch } from 'antd';
import { useMediaQuery } from 'react-responsive';
import React, { useEffect, useState } from 'react';
import { IRole } from '../../../types';
import { Timestamp } from 'firebase/firestore';
import { getIRoles } from '../../../redux/actions/roleAction';
import AddRoleBtn from '../menu/AddRoleBtn';

const RoleTable: React.FC = () => {
    const [pageSize, setPageSize] = useState(10);
    const [data, setData] = useState<IRole[]>([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
            const contracts = await getIRoles();
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
            title: 'Tên nhóm người dùng',
            key: 'name',
            dataIndex: 'name',
        },
        {
            title: 'Số lượng người dùng',
            key: 'number',
            dataIndex: 'number',
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br></br> ut labore et dolore magna aliqua
                </div>
                
            ),
        },
        {
            title: '',
            key: 'action',
            dataIndex: 'action',
            render: (text: string, record: any) => (
                <Link to={`/role-edit/${record.id}`} style={{ color: 'orange' }}>
                    Chỉnh sửa
                </Link>
            )
        },
        {
            title: '',
            key: 'action',
            dataIndex: 'action',
            render: (text: string, record: any) => (
                <div style={{ color: 'red' }}>
                    Xóa
                </div>
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
                    <AddRoleBtn></AddRoleBtn>
                </div>
            ) : (
                <></>
            )}
        </div>
    )
}

export default RoleTable