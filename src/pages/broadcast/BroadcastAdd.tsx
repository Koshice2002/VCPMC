import React, { useEffect, useState } from 'react';
import MainLayout from '../../layout/MainLayout';
import { RightOutlined } from '@ant-design/icons';
import FormAddBroadcast from '../../components/broadcast/form/FormAddBroadcast';
import MenuBroadcastDetail from '../../components/broadcast/menu/MenuBroadcastDetail';

const BroadcastAdd = () => {

  return (
    <MainLayout>
        <div style={{ marginLeft: '-120px'}}>
            <h3 style={{ color: 'gray', marginBottom: '-10px' }}>
                    Lập lịch phát <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Thêm lịch phát mới
            </h3>
            
            <h1> Lập lịch phát </h1>

            <FormAddBroadcast></FormAddBroadcast>

            <MenuBroadcastDetail></MenuBroadcastDetail>
        </div>
        
    </MainLayout> 
  )
};

export default BroadcastAdd
