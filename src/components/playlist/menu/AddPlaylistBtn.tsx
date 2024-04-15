import React from 'react';
import '../../../styles/styles.css'
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { AppstoreAddOutlined } from '@ant-design/icons';


const AddPlaylistBtn: React.FC = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });

  return (
    <div>
        {isDesktopOrLaptop ? (
            <div className="subMenu">
                <div className='container'>
                    <Link 
                        to={'/add-playlist'}
                        className='custom-link item-action'
                    >
                        <i className='icon-container'>
                            <AppstoreAddOutlined className='action-icon' />
                        </i>
                        <p className='action-name'>
                            Thêm Playlist
                        </p>
                    </Link>
                </div>
            </div>
        ) : (
            <div className="subMenu">
                <div className='container'>
                    <Link 
                        to={'/add-playlist'}
                        className='custom-link item-action'
                    >
                        <i className='icon-container'>
                            <AppstoreAddOutlined className='action-icon' />
                        </i>
                        <p className='action-name'>
                            Thêm Playlist
                        </p>
                    </Link>
                </div>
            </div>
        )}
    </div>
  );
};

export default AddPlaylistBtn;
