import React, { useEffect, useState } from 'react';
import MainLayout from '../../layout/MainLayout';
import { RightOutlined } from '@ant-design/icons';
import FormDeviceTable from '../../components/broadcast/form/FormDeviceTable';
import { useParams } from 'react-router-dom';
import { getIPlaylistById } from '../../redux/actions/playlistAction';
import MenuBroadcastDetail from '../../components/broadcast/menu/MenuBroadcastDetail';

const BroadcastEditDevice = () => {
  const { id } = useParams<{ id: string }>();
    const [broadcast, setBroadcastData] = useState<any>(null);

    useEffect(() => {
        const fetchBroadcastData = async () => {
            try {
                if (id) {
                    const data = await getIPlaylistById(id);
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
                    Lập lịch phát <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Chi tiết <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Chỉnh sửa lịch phát <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Áp lịch cho thiết bị
            </h3>
            
            <h1> Chọn thiết bị</h1>

            <FormDeviceTable></FormDeviceTable>
            <MenuBroadcastDetail></MenuBroadcastDetail>
        </div>
        
    </MainLayout> 
  )
};

export default BroadcastEditDevice
