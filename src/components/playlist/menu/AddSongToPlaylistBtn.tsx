import React, { useEffect, useState } from 'react';
import '../../../styles/styles.css'
import { Link, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { PlusOutlined } from '@ant-design/icons';

interface Props {
    playlistId: string
}

const AddSongToPlaylistBtn: React.FC<Props> = ({playlistId}) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });

  return (
    <div>
        {isDesktopOrLaptop ? (
            <div className="subMenu">
                <div className='container'>
                    <Link 
                        to={`/playlist-add-song/${playlistId}`}
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
                        className='custom-link item-action'
                        to={`/playlist-add-song/${playlistId}`}
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

export default AddSongToPlaylistBtn;
