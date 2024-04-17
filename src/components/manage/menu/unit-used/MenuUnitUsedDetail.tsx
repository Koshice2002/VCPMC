import '../../../../styles/styles.css'
import { useMediaQuery } from 'react-responsive';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { EditOutlined, CloseOutlined, PlusOutlined, DeleteOutlined, TeamOutlined } from '@ant-design/icons';

interface Props {
    id?: string;
}

const MenuUnitUsedDetail: React.FC<Props> = ({id}) => {
    const location = useLocation();
    const [page, setPage] = useState('');

    useEffect(() => {
        const path = location.pathname;

        if ( path === ('/unit-used-manage') )
            { setPage('Manage') }
        else if ( path.startsWith('/unit-used-detail/') )
            { setPage('Detail') }
        else if ( path.startsWith('/partner-detail/') )
            { setPage('Partner Detail')}
        else if ( path === '/broadcast-add-new-device' || path.startsWith('/broadcast-edit-device/'))
            { setPage('Device')}
    }, [location]);

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });

  return (
    <div>
        {isDesktopOrLaptop ? (
            <div className="subMenu">
                <div className='container'>
                    <Link 
                        className='custom-link item-action'
                        to={`/broadcast-edit-playlist/${id}`}
                        style={{ display: page === 'Manage' ? 'flex' : 'none'}}
                    >
                        <i className='icon-container'>
                            <CloseOutlined className='action-icon'/>
                        </i>
                        <p className='action-name'>
                            Xóa
                        </p>
                    </Link>

                    <div className='container' style={{ display: page === 'Detail' ? 'flex' : 'none'}}>
                        <Link 
                            to={`/partner-add/${id}`}
                            className='custom-link item-action'
                        >
                            <i className='icon-container'>
                                <PlusOutlined className='action-icon'/>
                            </i>
                            <p className='action-name'>
                                Thêm
                            </p>
                        </Link>
                        <Link 
                            to={'/broadcast-manage'}
                            className='custom-link item-action'
                        >
                            <i className='icon-container'>
                                <DeleteOutlined className='action-icon'/>
                            </i>
                            <p className='action-name'>
                                Xóa
                            </p>
                        </Link>
                        <Link 
                            to={'/broadcast-manage'}
                            className='custom-link item-action'
                        >
                            <i className='icon-container'>
                                <TeamOutlined className='action-icon'/>
                            </i>
                            <p className='action-name'>
                                Vai trò
                            </p>
                        </Link>
                    </div>

                    <Link 
                        className='custom-link item-action'
                        to={`/partner-edit/${id}`}
                        style={{ display: page === 'Partner Detail' ? 'flex' : 'none'}}
                    >
                        <i className='icon-container'>
                            <EditOutlined className='action-icon'/>
                        </i>
                        <p className='action-name'>
                            Chỉnh sửa
                        </p>
                    </Link>
                </div>
            </div>
        ) : (
            <></>
        )}
    </div>
  );
};

export default MenuUnitUsedDetail;
