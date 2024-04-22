import React from 'react';
import { RightOutlined } from '@ant-design/icons';
import MainLayout from '../../../layout/MainLayout';
import FormContract from '../../../components/setting/form/FormContract';

const ManageContract = () => {

  return (
    <MainLayout>
        <h3 style={{ color: 'gray', marginBottom: '-10px' }}>
            Cài đặt <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Quản lý loại hợp đồng
        </h3>
        <h1> Loại hợp đồng </h1>

        <FormContract></FormContract>

    </MainLayout> 
  )
};

export default ManageContract
