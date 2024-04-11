import '../styles/styles.css'
import { useMediaQuery } from 'react-responsive';
import React, { useEffect, useState } from 'react';
import PopUpCancelContract from './PopUpCancelContract';
import PopUpExtendContract from './PopUpExtendContract';
import { Link, useLocation, useParams } from 'react-router-dom';
import { EditOutlined, FileTextOutlined, CloseOutlined, PlusOutlined } from '@ant-design/icons';

interface Props {
    validity?: number;
    contractId?: string;
    activeTab: 'info' | 'work';
}

const MenuActionContract: React.FC<Props> = ({ contractId, validity, activeTab }) => {
    const location = useLocation();
    const [page, setPage] = useState('');

    useEffect(() => {
        const path = location.pathname;

        if (path.startsWith('/info-exploit-contract')) {
            setPage('Exploit Contract')
        }
    }, [location]);

    const [cancelContract, setCancelContract] = useState(false);
    const [extendContract, setExtendContract] = useState(false);

    const showModalCancel = () => {
        setCancelContract(true);
    };

    const closeModalCancel = () => {
        setCancelContract(false);
    };

    const showModalExtend = () => {
        setExtendContract(true);
    };

    const closeModalExtend = () => {
        setExtendContract(false);
    };

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });

  return (
    <div>
        {isDesktopOrLaptop ? (
            <div className="subMenu">
                <div className='container'>
                    {validity !== 3 && validity !== 4 ? (
                        <Link 
                            to={page === 'Exploit Contract' ? `/edit-exploit-contract/${contractId}` : `/edit-authorized-contract/${contractId}`} 
                            className='custom-link item-action'
                        >
                            <i className='icon-container'>
                                <EditOutlined className='action-icon'/>
                            </i>
                            <p className='action-name'>
                                Chỉnh sửa hợp đồng
                            </p>
                        </Link>
                    ) : (
                        <div className='custom-link item-action disabled-link'>
                            <i className='icon-container'>
                                <EditOutlined className='action-icon disable-icon' />
                            </i>
                            <p className='action-name'>
                                Chỉnh sửa hợp đồng
                            </p>
                        </div>
                    )}
                </div>

                <div className='container'>
                    {page !== 'Exploit Contract' && (
                        <div className='custom-link item-action' onClick={showModalExtend}>
                            <i className='icon-container'>
                                <FileTextOutlined className='action-icon' />
                            </i>
                            <p className='action-name'>
                                Gia hạn hợp đồng
                            </p>
                        </div>
                    )}
                </div>

                <div className='container'>
                    <div className='custom-link item-action' onClick={showModalCancel}>
                        <i className='icon-container'>
                            <CloseOutlined className='action-icon' />
                        </i>
                        <p className='action-name'>
                            Hủy hợp đồng
                        </p>
                    </div>
                </div>

                {activeTab === 'work' && (
                    <div className='custom-link item-action' onClick={showModalCancel}>
                        <i className='icon-container'>
                            <PlusOutlined className='action-icon'/>
                        </i>
                        <p className='action-name'>
                            Thêm bản ghi
                        </p>
                    </div>
                )}
            </div>
        ) : (
            <div className="subMenu">
                <div className='container'>
                    <Link to={'/add-authorized-contract'} className='custom-link item-action'>
                        <i className='icon-container'>
                            <EditOutlined className='action-icon' />
                        </i>
                        <p className='action-name'>
                            Chỉnh sửa hợp đồng
                        </p>
                    </Link>
                </div>

                <div className='container'>
                    <div className='custom-link item-action' onClick={showModalExtend}>
                        <i className='icon-container'>
                            <FileTextOutlined className='action-icon' />
                        </i>
                        <p className='action-name'>
                            Gia hạn hợp đồng
                        </p>
                    </div>
                </div>

                <div className='container'>
                    <div className='custom-link item-action' onClick={showModalCancel}>
                        <i className='icon-container'>
                            <CloseOutlined className='action-icon' />
                        </i>
                        <p className='action-name'>
                            Hủy hợp đồng
                        </p>
                    </div>
                </div>

                {activeTab === 'work' && (
                    <div className='custom-link item-action' onClick={showModalCancel}>
                        <i className='icon-container'>
                            <PlusOutlined className='action-icon'/>
                        </i>
                        <p className='action-name'>
                            Thêm bản ghi
                        </p>
                    </div>
                )}
            </div>
        )}

        <PopUpCancelContract open={cancelContract} onClose={closeModalCancel}></PopUpCancelContract>
        <PopUpExtendContract open={extendContract} onClose={closeModalExtend}></PopUpExtendContract>
    </div>
  );
};

export default MenuActionContract;
