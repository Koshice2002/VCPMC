import React from 'react';
import MainLayout from '../../layout/MainLayout';
import { RightOutlined } from '@ant-design/icons';
import AddSongToNewPlaylistBtn from '../../components/playlist/menu/AddSongToNewPlaylistBtn';
import FormAddSongPlaylist from '../../components/playlist/form/FormAddSongPlaylist';

const NewPlaylistAddSong = () => {

  return (
    <MainLayout>
        <div style={{ marginLeft: '-120px'}}>
            <h3 style={{ color: 'gray', marginBottom: '-10px' }}>
                Playlist <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Thêm playlist mới
            </h3>
            <h1> Thêm Playlist </h1>

            <FormAddSongPlaylist></FormAddSongPlaylist>
            
            <AddSongToNewPlaylistBtn></AddSongToNewPlaylistBtn>

        </div>
    </MainLayout>
  )
};

export default NewPlaylistAddSong
