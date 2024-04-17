import React from 'react';
import { RightOutlined } from '@ant-design/icons';
import MainLayout from '../../../layout/MainLayout';
import FormDeviceAdd from '../../../components/manage/form/device/FormDeviceAdd';

const DeviceAdd: React.FC = () => {
  return (
    <MainLayout>
        <div style={{marginLeft: '-120px'}}>
            <h3 style={{ color: 'gray', marginBottom: '-10px' }}>
                Danh sách thiết bị <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Chi tiết thiết bị <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Thêm thiết bị mới
            </h3>
            <h1>Thêm thiết bị mới</h1>

            <FormDeviceAdd></FormDeviceAdd>
        </div>
    </MainLayout>
  )
};

export default DeviceAdd
