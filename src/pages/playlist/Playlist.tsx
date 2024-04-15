import { Input, Select } from 'antd';
import React, { useState } from 'react';
import MainLayout from '../../layout/MainLayout';
import AddPlaylistBtn from '../../components/playlist/menu/AddPlaylistBtn';
import FormPlaylistCard from '../../components/playlist/form/FormPlaylistCard';
import FormPlaylistTable from '../../components/playlist/form/FormPlaylistTable';
import { SearchOutlined,  UnorderedListOutlined, AppstoreOutlined } from '@ant-design/icons';

const { Option } = Select;

const Playlist = () => {
    const [activeTab, setActiveTab] = useState<'table' | 'card'>('table');

    const switchToTableTab = () => {
        setActiveTab('table');
    };

    const switchToCardTab = () => {
        setActiveTab('card');
    };

  return (
    <MainLayout>
        <h1>Playlist</h1>

        <div className='form-horizon' style={{ width: '1680px', justifyContent: 'space-between'}}>
                <div className='select-container' style={{marginLeft: '-2px'}}>
                    <Input
                        className='form-search'
                        placeholder="Tên bản ghi, tên ca sĩ, tác giả..."
                        suffix={<SearchOutlined style={{ color: 'white' }} />}
                    />
                </div>
                
                <div className='select-container'>
                    <div onClick={switchToTableTab} className={`icon-item ${activeTab === 'table' ? 'item-active' : ''}`}  style={{marginRight: '16px', cursor: 'pointer'}}>
                        <UnorderedListOutlined />
                    </div>
                    <div onClick={switchToCardTab} className={`icon-item ${activeTab === 'card' ? 'item-active' : ''}`} style={{cursor: 'pointer'}}>
                        <AppstoreOutlined />
                    </div>
                </div>
        </div>

        {activeTab === 'table' && <FormPlaylistTable />}
        {activeTab === 'card' && <FormPlaylistCard></FormPlaylistCard>}

        <AddPlaylistBtn></AddPlaylistBtn>
    </MainLayout>
  )
};

export default Playlist
