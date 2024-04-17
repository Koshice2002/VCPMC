import '../../../../styles/styles.css'
import { Link } from 'react-router-dom';
import { IPartner } from '../../../../types';
import { Timestamp } from 'firebase/firestore';
import { Input, Table, Pagination, Switch } from 'antd';
import { useMediaQuery } from 'react-responsive';
import React, { useEffect, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { getIPartners } from '../../../../redux/actions/partnerAction';

const FormPartnerAuthorized: React.FC = () => {
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState<IPartner[]>([]);

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
            key: 'email',
            dataIndex: 'email',
        },
        {
            title: 'Email',
            key: 'email',
            dataIndex: 'email',
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
            title: 'Số điện thoại',
            key: 'phone',
            dataIndex: 'phone',
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
                    to={`/edit-partner-authorized/${record.id}`}
                    style={{ color: 'orange' }}
                >
                    Cập nhật
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

export default FormPartnerAuthorized;
