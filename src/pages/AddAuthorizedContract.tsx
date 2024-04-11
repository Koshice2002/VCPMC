import React from 'react';
import MainLayout from '../layout/MainLayout';
import { RightOutlined } from '@ant-design/icons';
import FormAddAuthorizedContract from '../components/FormAddAuthorizedContract';

const AddAuthorizedContract = () => {
  return (
    <MainLayout>
        <div style={{ marginLeft: '-120px'}}>
            <h3 style={{ color: 'gray', marginBottom: '-10px' }}>
                Quản lý <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Quản lý hợp đồng <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Thêm hợp đồng
            </h3>
            <h1>Thêm hợp đồng ủy quyền mới</h1>

            <FormAddAuthorizedContract></FormAddAuthorizedContract>
        </div>
    </MainLayout>
  )
};

export default AddAuthorizedContract
