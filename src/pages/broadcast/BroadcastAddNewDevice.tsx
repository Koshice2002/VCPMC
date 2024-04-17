import React, { useEffect, useState } from 'react';
import MainLayout from '../../layout/MainLayout';
import { RightOutlined } from '@ant-design/icons';
import FormDeviceTable from '../../components/broadcast/form/FormDeviceTable';
import MenuBroadcastDetail from '../../components/broadcast/menu/MenuBroadcastDetail';

const BroadcastAddNewDevice = () => {

  return (
    <MainLayout>
        <div style={{ marginLeft: '-120px'}}>
            <h3 style={{ color: 'gray', marginBottom: '-10px' }}>
                    Lập lịch phát <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Thêm lịch phát mới  <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Áp lịch cho thiết bị
            </h3>
            
            <h1> Danh sách thiết bị </h1>

            <FormDeviceTable></FormDeviceTable>
            <MenuBroadcastDetail></MenuBroadcastDetail>

        </div>
        
    </MainLayout> 
  )
};

export default BroadcastAddNewDevice
