import React, { useEffect, useState } from 'react';
import { RightOutlined } from '@ant-design/icons';
import MainLayout from '../../../layout/MainLayout';
import { useParams } from 'react-router-dom';
import { getIDeviceById } from '../../../redux/actions/deviceAction';
import FormDeviceDetail from '../../../components/manage/form/device/FormDeviceDetail';
import MenuDetailDevice from '../../../components/manage/menu/device/MenuDetailDevice';

const DeviceDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [device, setDeviceData] = useState<any>(null);

    useEffect(() => {
        const fetchDeviceData = async () => {
            try {
                if (id) {
                    const data = await getIDeviceById(id);
                    setDeviceData(data);
                }
            } catch (error) {
                console.error('Error fetching contract data:', error);
            }
        };
        fetchDeviceData();
    }, [id]);
    
  return (
    <MainLayout>
        <div style={{marginLeft: '-120px'}}>
            <h3 style={{ color: 'gray', marginBottom: '-10px' }}>
                Danh sách thiết bị <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Chi tiết thiết bị
            </h3>
            <h1>Thông tin thiết bị - {device?.name}</h1>

            <FormDeviceDetail device={device}></FormDeviceDetail>
            <MenuDetailDevice device={device}></MenuDetailDevice>
        </div>
    </MainLayout>
  )
};

export default DeviceDetail
