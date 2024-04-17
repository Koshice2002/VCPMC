import React from 'react';
import MainLayout from '../../../layout/MainLayout';
import FormDeviceTable from '../../../components/manage/form/device/FormDeviceTable';
import MenuActionDevice from '../../../components/manage/menu/device/MenuActionDevice';

const DeviceManage: React.FC = () => {
  return (
    <MainLayout>
        <h1>Danh sách thiết bị</h1>

        <FormDeviceTable></FormDeviceTable>
        <MenuActionDevice></MenuActionDevice>
    </MainLayout>
  )
};

export default DeviceManage
