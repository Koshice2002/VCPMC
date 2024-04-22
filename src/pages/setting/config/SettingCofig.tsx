import React from 'react';
import { RightOutlined } from '@ant-design/icons';
import MainLayout from '../../../layout/MainLayout';
import FormConfig from '../../../components/setting/form/FormConfig';

const SettingCofig = () => {

  return (
    <MainLayout>
        <h3 style={{ color: 'gray', marginBottom: '-10px' }}>
            Cài đặt <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Cài đặt hệ thống
        </h3>
        <h1> Cài đặt cấu hình </h1>

        <FormConfig></FormConfig>
    </MainLayout> 
  )
};

export default SettingCofig
