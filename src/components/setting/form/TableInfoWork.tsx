import '../../../styles/styles.css'
import { ICategory } from '../../../types';
import { Table, Pagination } from 'antd';
import AddRoleBtn from '../menu/AddRoleBtn';
import { useMediaQuery } from 'react-responsive';
import React, { useEffect, useState } from 'react';
import { getICategorys } from '../../../redux/actions/categoryAction';

const TableInfoWork: React.FC = () => {
    const [pageSize, setPageSize] = useState(10);
    const [data, setData] = useState<ICategory[]>([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
            const contracts = await getICategorys();
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
            title: 'Tên thể loại',
            key: 'name',
            dataIndex: 'name',
        },
        {
            title: 'Mô tả',
            key: 'describe',
            dataIndex: 'describe',
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
                        <div className='select-container'>
                                <h3>Thể loại tác phẩm</h3>
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

export default TableInfoWork