import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '../../layout/MainLayout';
import { RightOutlined } from '@ant-design/icons';
import { getIBroadcastById } from '../../redux/actions/broadcastAction';
import TablePlaylist from '../../components/broadcast/form/TablePlaylist';
import MenuBroadcastDetail from '../../components/broadcast/menu/MenuBroadcastDetail';

const BroadcastDetail = () => {
    const { id } = useParams<{ id: string }>();
    const [broadcast, setBroadcastData] = useState<any>(null);

    useEffect(() => {
        const fetchBroadcastData = async () => {
            try {
                if (id) {
                    const data = await getIBroadcastById(id);
                    setBroadcastData(data);
                }
            } catch (error) {
                console.error('Error fetching song data:', error);
            }
        };
        fetchBroadcastData();
    }, [id]);

    
  return (
    <MainLayout>
        <div style={{ marginLeft: '-120px'}}>
            <h3 style={{ color: 'gray', marginBottom: '-10px' }}>
                    Lập lịch phát <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Chi tiết
            </h3>
            
            <h1> {broadcast?.name} </h1>

            <h2>Danh sách Playlist</h2>

            <TablePlaylist id={broadcast?.id} createAt={broadcast?.create_at} expireAt={broadcast?.expire_at}></TablePlaylist>

            <MenuBroadcastDetail id={broadcast?.id}></MenuBroadcastDetail>
        </div>
        
    </MainLayout> 
  )
};

export default BroadcastDetail
