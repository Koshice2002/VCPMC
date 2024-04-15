import React from 'react';
import { Checkbox } from 'antd';
import '../../../styles/styles.css'
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { PlayCircleOutlined, EditOutlined } from '@ant-design/icons';

interface Song {
    id?: string;
    image?: string;
    name?: string;
    singer?: string;
    artist?: string;
    code?: string;
    type?: string;
    format?: string;
    duration?: string;
}

interface Props {
    song: Song;
    showCheckBox: boolean;
}

const Card: React.FC<Props> = ({ song, showCheckBox }) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });

  return (
    <div>
        {isDesktopOrLaptop ? (
            <>
                <div className='card'>
                    <div className='card-img'>
                        <img src={song.image} alt={song.name} className='img-thumb'/>
                        <PlayCircleOutlined className='play-icon'/>
                    </div>
                    <div className='card-content'>
                        <div className='card-info'>
                            <h3 className='card-title'> {song.name}</h3>

                            <span className='card-song'><strong>Ca sĩ:</strong> {song.singer}</span>
                            <span className='card-song'><strong>Sáng tác:</strong> {song.artist}</span>
                            <span className='card-song'><strong>Số hợp đồng:</strong> {song.code}</span>

                            <div className='form-horizon' style={{marginTop: '10px'}}>
                                <div className='mini-box'>
                                    <span style={{color: 'gray'}}>Thể loại</span>
                                    <h4 className='bold'>{song.type}</h4>
                                </div>
                                <div className='mini-box' style={{ margin: '0 8px'}}>
                                    <span style={{color: 'gray'}}>Định dạng</span>
                                    <h4 className='bold'>{song.format}</h4>
                                </div>
                                <div className='mini-box'>
                                    <span style={{color: 'gray'}}>Thời lượng</span>
                                    <h4 className='bold'>{song.duration}</h4>
                                </div>
                            </div>
                        </div>

                        { showCheckBox && 
                            <Checkbox className="edit-icon checkbox-custom"></Checkbox> }

                        { !showCheckBox &&
                            <Link to={`/edit-record/${song.id}`}>
                                <EditOutlined className="edit-icon" />
                            </Link>
                        }
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
