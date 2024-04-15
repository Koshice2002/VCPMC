import { useParams } from 'react-router-dom';
import MainLayout from '../../layout/MainLayout';
import { RightOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { getIPlaylistById } from '../../redux/actions/playlistAction';
import MenuActionDetail from '../../components/playlist/menu/MenuActionDetail';
import FormDetailPlaylist from '../../components/playlist/form/FormDetailPlaylist';

const PlaylistDetail = () => {
    const { id } = useParams<{ id: string }>();
    const [playlist, setPlaylistData] = useState<any>(null);

    useEffect(() => {
        const fetchSongData = async () => {
            try {
                if (id) {
                    const data = await getIPlaylistById(id);
                    setPlaylistData(data);
                }
            } catch (error) {
                console.error('Error fetching song data:', error);
            }
        };
        fetchSongData();
    }, [id]);

  return (
    <MainLayout>
        <div style={{ marginLeft: '-120px'}}>
            <h3 style={{ color: 'gray', marginBottom: '-10px' }}>
                Playlist <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Chi tiết playlist
            </h3>
            <h1> Playlist - {playlist?.name}</h1>

            <FormDetailPlaylist playlist={playlist}></FormDetailPlaylist>

            <MenuActionDetail playlistId={playlist?.id}></MenuActionDetail>
        </div>
    </MainLayout>
  )
};

export default PlaylistDetail
