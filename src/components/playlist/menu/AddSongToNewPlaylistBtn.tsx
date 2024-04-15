import React from 'react';
import '../../../styles/styles.css'
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { PlusOutlined } from '@ant-design/icons';

const AddSongToNewPlaylistBtn: React.FC = () => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });

  return (
    <div>
        {isDesktopOrLaptop ? (
            <div className="subMenu">
                <div className='container'>
                    <Link 
                        to={'/new-playlist-add-song'}
                        className='custom-link item-action'
                    >
                        <i className='icon-container'>
                            <PlusOutlined className='action-icon' />
                        </i>
                        <p className='action-name'>
                            Thêm bản ghi
                        </p>
                    </Link>
                </div>
            </div>
        ) : (
            <div className="subMenu">
                <div className='container'>
                    <Link 
                        to={'/new-playlist-add-song'}
                        className='custom-link item-action'
                    >
                        <i className='icon-container'>
                            <PlusOutlined className='action-icon' />
                        </i>
                        <p className='action-name'>
                            Thêm bản ghi
                        </p>
                    </Link>
                </div>
            </div>
        )}
    </div>
  );
};

export default AddSongToNewPlaylistBtn;
