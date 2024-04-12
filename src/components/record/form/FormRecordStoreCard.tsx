import Card from './Card';
import { Pagination } from 'antd';
import '../../../styles/styles.css'
import { useMediaQuery } from 'react-responsive';
import { IAuthorizedContract } from '../../../types';
import React, { useEffect, useState } from 'react';
import { getIAuthorizedSongs } from '../../../redux/actions/songAction';

interface Props {
    showCheckBox: boolean;
}

const FormRecordStoreCard: React.FC<Props> = ({ showCheckBox }) => {
    const itemsPerPage = 8;
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState<IAuthorizedContract[]>([]);

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });

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

    const handlePageChange = (page: any, pageSize: any) => {
        setCurrentPage(page);
        setPageSize(pageSize);
    };

    if (data.length === 0) {
        return <div>Loading...</div>;
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    // Logic để tạo các card từ dữ liệu hiện tại
    const renderedCards = currentItems.map((song, index) => (
        <Card key={index} song={song} showCheckBox={showCheckBox} />
    ));

    return (
        <div>
            {isDesktopOrLaptop ? (
                <div className='form-content'>
                    <div className='form-table' style={{ width: '1683px', backgroundColor: 'transparent'}}>
                        <div className="card-grid">
                            {renderedCards}
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

export default FormRecordStoreCard