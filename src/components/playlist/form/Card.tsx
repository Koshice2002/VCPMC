import '../../../styles/styles.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Timestamp } from 'firebase/firestore';
import { useMediaQuery } from 'react-responsive';
import { InfoCircleOutlined } from '@ant-design/icons';

interface Playlist {
    id?: string;
    name?: string;
    duration?: string;
    create_at?: Timestamp;
    person_create?: string;
}

interface Props {
    playlist: Playlist;
    totalSongsCount: number;
}

const Card: React.FC<Props> = ({ playlist, totalSongsCount }) => {
    const createDate = playlist.create_at ? new Date(playlist.create_at.seconds * 1000) : null;
    const createDateString = createDate ? createDate.toLocaleDateString() : '';

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });

  return (
    <div>
        {isDesktopOrLaptop ? (
            <>
                <div className='card'>
                    <div className='card-img'>
                        <img src={process.env.PUBLIC_URL + '/Image/thumbnail.jpg'} alt={playlist.name} className='img-thumb'/>
                    </div>
                    <div className='card-content'>
                        <div className='card-info'>
                            <h3 className='card-title'> {playlist.name}</h3>

                            <span className='card-song' style={{marginBottom: '5px'}}>Pop, Ballad</span>

                            <span className='card-song'><strong>Người tạo:</strong> {playlist.person_create}</span>
                            <span className='card-song'><strong>Ngày tạo:</strong> {createDateString}</span>

                            <div className='form-horizon' style={{marginTop: '10px'}}>
                                <div className='mini-box' style={{ margin: '0 8px'}}>
                                    <span style={{color: 'gray'}}>Số bản ghi</span>
                                    <h4 className='bold'>{totalSongsCount}</h4>
                                </div>
                                <div className='mini-box'>
                                    <span style={{color: 'gray'}}>Thời lượng</span>
                                    <h4 className='bold'>{playlist.duration}</h4>
                                </div>
                            </div>
                        </div>
                        <Link to={`/detail-playlist/${playlist.id}`}>
                            <InfoCircleOutlined className="edit-icon" />
                        </Link>
                    </div>
                </div>
            </>
        ) : (
            <></>
        )}
    </div>
  );
};

export default Card;
