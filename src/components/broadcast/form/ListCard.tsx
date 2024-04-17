import '../../../styles/styles.css'
import { IPlaylist } from '../../../types';
import React, { useEffect, useState } from 'react';
import { getIPlaylist } from '../../../redux/actions/playlistAction';

const ListCard: React.FC = () => {
    const [data, setData] = useState<IPlaylist[]>([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const playlists = await getIPlaylist();
                setData(playlists);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <div className='form-column' style={{padding: '5px', marginLeft: '10px'}}>
            <h3 style={{marginTop: '2px'}}>Danh sách Playlist</h3>

            {data.map((playlist, index) => (
                <div className='card-list'>
                    <div key={index} className='form-column' style={{margin: '8px'}}>
                        <h4 style={{margin: '5px 0', color: 'orange'}}>{playlist.name}</h4>
                        <div className='item-more'>
                            <strong>Thời lượng</strong>
                            <span>{playlist.duration}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ListCard