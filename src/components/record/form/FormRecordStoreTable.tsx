import '../../../styles/styles.css'
import { Link } from 'react-router-dom';
import { Timestamp } from 'firebase/firestore';
import { useMediaQuery } from 'react-responsive';
import { IAuthorizedSong } from '../../../types';
import React, { useEffect, useState } from 'react';
import { Table, Pagination, Checkbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { getIAuthorizedSongs } from '../../../redux/actions/songAction';

interface Props {
    showCheckBox: boolean;
}

const FormRecordStoreTable: React.FC<Props> = ({ showCheckBox }) => {
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState<IAuthorizedSong[]>([]);
    
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
                const contracts = await getIAuthorizedSongs();
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
                    {showCheckBox && <Checkbox className='checkbox-custom' checked={selectAllChecked} onChange={handleSelectAllChange}></Checkbox>}
                </>
            ),
            colSpan: 1,
            key: 'id',
            render: (record: IAuthorizedSong) => (
                <>
                    {showCheckBox && record.id && (
                        <Checkbox
                            className='checkbox-custom'
                            checked={selectedRecords[record.id]}
                            onChange={(e: CheckboxChangeEvent) => handleRecordCheckboxChange(record.id!, e.target.checked)}
                        ></Checkbox>
                    )} 
                </>
            ),
        },
        {
            title: 'STT',
            dataIndex: 'rowNumber',
            key: 'rowNumber',
        },
        {
            title: 'Tên bản ghi',
            key: 'name',
            dataIndex: 'name',
        },
        {
            title: 'Mã ISRC',
            key: 'code',
            dataIndex: 'code',
        },
        {
            title: 'Thời lượng',
            key: 'duration',
            dataIndex: 'duration',
        },
        {
            title: 'Ca sĩ',
            key: 'singer',
            dataIndex: 'singer',
        },
        {
            title: 'Tác giả',
            key: 'artist',
            dataIndex: 'artist',
        },
        {
            title: 'Thể loại',
            key: 'type',
            dataIndex: 'type',
        },
        {
            title: 'Định dạng',
            key: 'format',
            dataIndex: 'format',
        },
        {
            title: 'Thời hạn sử dụng',
            key: 'status',
            render: (record: { downloadDate: Timestamp; status: number }) => {
                const createDate = record.downloadDate ? new Date(record.downloadDate.seconds * 1000) : null;
                const downloadDateString = createDate ? `${createDate.toLocaleDateString()}` : '';

                let statusText = '';
                let color = '';
                switch (record.status) {
                    case 1:
                        statusText = 'Mới';
                        color = 'green';
                        break;
                    case 2:
                        statusText = 'Còn thời hạn';
                        color = 'blue';
                        break;
                    case 3:
                        statusText = 'Đã hết hạn';
                        color = 'gray';
                        break;
                    default:
                        statusText = 'Không xác định';
                        color = 'black';
                        break;
                }

                return (
                    <>
                        <div style={{width: '120px'}}>
                            <div style={{ display: 'inline-flex', marginRight: '6px', width: '8px', height: '8px', borderRadius: '100%', border: `1px solid ${color}`, backgroundColor: color }}></div>
                                {statusText}
                            <div>
                                {downloadDateString && `${downloadDateString}`}
                            </div>
                        </div>
                    </>
                );
            }
        },
        {
            title: '',
            dataIndex: 'action',
            key: 'action',
            render: (text: string, record: any) => (
                <Link
                    to={`/edit-record/${record.id}`}
                    style={{ color: 'orange' }}
                >
                    Cập nhật
                </Link>
            ),
        },
        {
            title: '',
            dataIndex: 'action',
            key: 'action',
            render: (text: string, record: any) => (
                <Link
                    to={'/'}
                    style={{ color: 'orange' }}
                >
                    Nghe
                </Link>
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
                </div>
            ) : (
                <></>
            )}
        </div>
    )
}

export default FormRecordStoreTable