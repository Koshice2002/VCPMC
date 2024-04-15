import { useParams } from 'react-router-dom';
import MainLayout from '../../layout/MainLayout';
import { RightOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { getIPlaylistById } from '../../redux/actions/playlistAction';
import FormAddPlaylist from '../../components/playlist/form/FormAddPlaylist';
import AddSongToPlaylistBtn from '../../components/playlist/menu/AddSongToPlaylistBtn';
import MenuActionDetail from '../../components/playlist/menu/MenuActionDetail';
import AddSongToNewPlaylistBtn from '../../components/playlist/menu/AddSongToNewPlaylistBtn';

const PlaylistAdd = () => {

  return (
    <MainLayout>
        <div style={{ marginLeft: '-120px'}}>
            <h3 style={{ color: 'gray', marginBottom: '-10px' }}>
                Playlist <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Thêm playlist mới
            </h3>
            <h1>Thêm Playlist</h1>

            <FormAddPlaylist></FormAddPlaylist>

            <AddSongToNewPlaylistBtn></AddSongToNewPlaylistBtn>
        </div>
    </MainLayout>
  )
};

export default PlaylistAdd
