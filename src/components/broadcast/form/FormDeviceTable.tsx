import '../../../styles/styles.css'
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import React, { useEffect, useState } from 'react';
import { Table, Pagination, Checkbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { IAuthorizedSong, IDevice } from '../../../types';
import { getIDevices } from '../../../redux/actions/deviceAction';

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
            render: (record: IAuthorizedSong) => (
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
            title: 'MAC Address',
            key: 'macAddress',
            dataIndex: 'macAddress',
        },
        {
            title: 'SKU/ID',
            key: 'skuID',
            dataIndex: 'skuID',
        },
        {
            title: 'Đơn vị sử dụng',
            key: 'unit',
            dataIndex: 'unit',
        },
        {
            title: 'Tên đăng nhập',
            key: 'username',
            dataIndex: 'username',
        },
        {
            title: 'Địa điểm hoạt động',
            key: 'address',
            dataIndex: 'address',
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
                </div>
            ) : (
                <></>
            )}
        </div>
    )
}

export default FormDeviceTable