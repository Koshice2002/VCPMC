import '../../../styles/styles.css'
import { Link } from 'react-router-dom';
import { Table, Pagination } from 'antd';
import { IBroadcast } from '../../../types';
import DeletePopUp from '../popup/DeletePopUp';
import { useMediaQuery } from 'react-responsive';
import React, { useEffect, useState } from 'react';
import { getIBroadcast } from '../../../redux/actions/broadcastAction';

const FormBroadcastTable: React.FC = () => {
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState<IBroadcast[]>([]);
    const [deletePopUp, setDeletePopUp] = useState(false);

    const showPopUp = () => {
        setDeletePopUp(true);
    };

    const closePopUp = () => {
        setDeletePopUp(false);
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
                const contracts = await getIBroadcast();
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
            title: 'Tên lịch',
            key: 'name',
            dataIndex: 'name',
        },
        {
            title: 'Thời hạn phát',
            key: 'duration',
            render: (record: IBroadcast) => (
                <span>
                    {record.create_at && record.expire_at ? `${formatDate(record.create_at.toDate())}  - ${formatDate(record.expire_at.toDate())}` : '-'}
                </span>
            )
        },
        {
            title: '',
            dataIndex: 'action',
            key: 'action',
            render: (text: string, record: any) => (
                <Link
                    to={`/broadcast-detail/${record.id}`}
                    style={{ color: 'orange' }}
                >
                    Xem chi tiết
                </Link>
            ),
        },
        {
            title: '',
            dataIndex: 'action',
            key: 'action',
            render: (text: string, record: any) => (
                <div 
                    onClick={showPopUp}
                    style={{ color: 'orange', cursor: 'pointer' }}
                >
                    Xóa
                </div>
            ),
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
                    <DeletePopUp open={deletePopUp} onClose={closePopUp}></DeletePopUp>
                </div>
            ) : (
                <></>
            )}
        </div>
    )
}

export default FormBroadcastTable