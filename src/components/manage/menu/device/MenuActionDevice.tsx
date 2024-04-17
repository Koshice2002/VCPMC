import '../../../../styles/styles.css'
import { useMediaQuery } from 'react-responsive';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DeletePopUp from '../../popup/device/DeletePopup';
import { PoweroffOutlined, LockOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';


const MenuActionDevice: React.FC = () => {
    const location = useLocation();
    const [page, setPage] = useState('');
    const [deletePopUp, setDeletePopUp] = useState(false);

    const showPopUp = () => {
        setDeletePopUp(true);
    };

    const closePopUp = () => {
        setDeletePopUp(false);
    };

    useEffect(() => {
        const path = location.pathname;

        if (path.startsWith('/info-exploit-contract')) {
            setPage('Exploit Contract')
        }
    }, [location]);

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });

  return (
    <div>
        {isDesktopOrLaptop ? (
            <div className="subMenu">
                <Link 
                    to={'/device-add'} 
                    className='custom-link item-action'
                >
                    <i className='icon-container'>
                        <PlusOutlined className='action-icon'/>
                    </i>
                    <p className='action-name'>
                        Thêm thiết bị
                    </p>
                </Link>

                <div className='container'>
                    <div className='custom-link item-action'>
                        <i className='icon-container'>
                            <PoweroffOutlined className='action-icon' />
                        </i>
                        <p className='action-name'>
                            Kích hoạt thiết bị
                        </p>
                    </div>
                </div>

                <div className='container'>
                    <div className='custom-link item-action'>
                        <i className='icon-container'>
                            <LockOutlined className='action-icon' />
                        </i>
                        <p className='action-name'>
                            Khóa thiết bị
                        </p>
                    </div>
                </div>

                <div className='container'>
                    <div className='custom-link item-action' onClick={showPopUp}>
                        <i className='icon-container'>
                            <DeleteOutlined className='action-icon' />
                        </i>
                        <p className='action-name'>
                            Xóa thiết bị
                        </p>
                    </div>
                </div>
                <DeletePopUp open={deletePopUp} onClose={closePopUp}></DeletePopUp>

            </div>
        ) : (
            <></>
        )}
    </div>
  );
};

export default MenuActionDevice;
