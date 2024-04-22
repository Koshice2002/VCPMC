import React from 'react';
import { RightOutlined } from '@ant-design/icons';
import MainLayout from '../../../layout/MainLayout';
import FormSystem from '../../../components/setting/form/FormSystem';

const SystemSetting = () => {

  return (
    <MainLayout>
        <h3 style={{ color: 'gray', marginBottom: '-10px' }}>
            Cài đặt <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Cài đặt hệ thống
        </h3>
        <h1>Cài đặt hệ thống</h1>

        <FormSystem></FormSystem>
    </MainLayout> 
  )
};

export default SystemSetting
