import React from 'react';
import MainLayout from '../../layout/MainLayout';
import FormBroadcastTable from '../../components/broadcast/form/FormBroadcastTable';
import AddBroadcastBtn from '../../components/broadcast/menu/AddBroadcastBtn';

const BroadcastManage = () => {
    
  return (
    <MainLayout>
        <h1>Danh sách lịch phát</h1>

        <FormBroadcastTable></FormBroadcastTable>
        <AddBroadcastBtn></AddBroadcastBtn>
    </MainLayout>
  )
};

export default BroadcastManage
