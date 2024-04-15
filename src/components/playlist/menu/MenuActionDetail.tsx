import React from 'react';
import '../../../styles/styles.css'
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { AppstoreAddOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

interface Props {
    playlistId?: string;
}

const MenuActionDetail: React.FC<Props> = ({playlistId}) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });

  return (
    <div>
        {isDesktopOrLaptop ? (
            <div className="subMenu">
                <div className='container'>
                    <Link 
                        to={`/edit-playlist/${playlistId}`}
                        className='custom-link item-action'
                    >
                        <i className='icon-container'>
                                <EditOutlined className='action-icon'/>
                            </i>
                        <p className='action-name'>
                            Chỉnh sửa
                        </p>
                    </Link>
                </div>
                <div className='container'>
                    <Link 
                        to={''}
                        className='custom-link item-action'
                    >
                        <i className='icon-container'>
                            <DeleteOutlined className='action-icon' />
                        </i>
                        <p className='action-name'>
                            Xóa Playlist
                        </p>
                    </Link>
                </div>
            </div>
        ) : (
            <div className="subMenu">
                <div className='container'>
                    <Link 
                        to={`/edit-playlist/${playlistId}`}
                        className='custom-link item-action'
                    >
                        <i className='icon-container'>
                            <AppstoreAddOutlined className='action-icon' />
                        </i>
                        <p className='action-name'>
                            Chỉnh sửa
                        </p>
                    </Link>
                </div>
                <div className='container'>
                    <Link 
                        to={''}
                        className='custom-link item-action'
                    >
                        <i className='icon-container'>
                            <AppstoreAddOutlined className='action-icon' />
                        </i>
                        <p className='action-name'>
                            Xóa Playlist
                        </p>
                    </Link>
                </div>
            </div>
        )}
    </div>
  );
};

export default MenuActionDetail;
