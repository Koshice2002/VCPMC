import React from 'react';
import { RightOutlined } from '@ant-design/icons';
import MainLayout from '../../../layout/MainLayout';
import FormDownloadApp from '../../../components/support/form/downloadApp/FormDownloadApp';

const DownApp = () => {

  return (
    <MainLayout>
        <h3 style={{ color: 'gray', marginBottom: '-10px' }}>
            Hỗ trợ <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Tải App
        </h3>
        <h1> Tải App </h1>

        <FormDownloadApp></FormDownloadApp>
    </MainLayout> 
  )
};

export default DownApp
