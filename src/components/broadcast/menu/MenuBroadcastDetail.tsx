import '../../../styles/styles.css'
import { useMediaQuery } from 'react-responsive';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { EditOutlined, CalendarOutlined, CloseOutlined, CheckOutlined } from '@ant-design/icons';

interface Props {
    id?: string;
}

const MenuBroadcastDetail: React.FC<Props> = ({id}) => {
    const location = useLocation();
    const [page, setPage] = useState('');

    useEffect(() => {
        const path = location.pathname;

        if ( path.startsWith('/broadcast-detail/') )
            { setPage('Detail') }
        else if ( path.startsWith('/broadcast-edit-playlist/') )
            { setPage('Edit') }
        else if ( path === '/broadcast-add' )
            { setPage('Add')}
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
                        style={{ display: page === 'Detail' ? 'flex' : 'none'}}
                    >
                        <i className='icon-container'>
                            <EditOutlined className='action-icon'/>
                        </i>
                        <p className='action-name'>
                            Chỉnh sửa
                        </p>
                    </Link>

                    <Link 
                        className='custom-link item-action'
                        style={{ display: page === 'Edit' || page === 'Add' ? 'flex' : 'none'}}
                        to={ page === 'Edit' || page === 'Add' ? `/broadcast-edit-device/${id}` : '/broadcast-add-new-device'}
                    >
                        <i className='icon-container'>
                            <CalendarOutlined className='action-icon'/>
                        </i>
                        <p className='action-name'>
                            Áp lịch
                        </p>
                    </Link>

                    <div className='container' style={{ display: page === 'Device' ? 'flex' : 'none'}}>
                        <Link 
                            to={'/broadcast-manage'}
                            className='custom-link item-action'
                        >
                            <i className='icon-container'>
                                <CheckOutlined className='action-icon'/>
                            </i>
                            <p className='action-name'>
                                Chọn
                            </p>
                        </Link>
                        <Link 
                            to={'/broadcast-manage'}
                            className='custom-link item-action'
                        >
                            <i className='icon-container'>
                                <CloseOutlined className='action-icon'/>
                            </i>
                            <p className='action-name'>
                                Hủy 
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        ) : (
            <div className="subMenu">
                <div className='container'>
                    <Link 
                        className='custom-link item-action'
                        to={`/broadcast-edit-playlist/${id}`}
                        style={{ display: page === 'Detail' ? 'flex' : 'none'}}
                    >
                        <i className='icon-container'>
                            <EditOutlined className='action-icon'/>
                        </i>
                        <p className='action-name'>
                            Chỉnh sửa
                        </p>
                    </Link>

                    <Link 
                        className='custom-link item-action'
                        to={`/broadcast-edit-device/${id}`}
                        style={{ display: page === 'Edit' ? 'flex' : 'none'}}
                    >
                        <i className='icon-container'>
                            <CalendarOutlined className='action-icon'/>
                        </i>
                        <p className='action-name'>
                            Áp lịch 
                        </p>
                    </Link>
                </div>
            </div>
        )}
    </div>
  );
};

export default MenuBroadcastDetail;
