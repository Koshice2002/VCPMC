import React from 'react';
import { RightOutlined } from '@ant-design/icons';
import MainLayout from '../../../layout/MainLayout';
import FormAddRole from '../../../components/setting/form/FormAddRole';

const RoleAdd = () => {

  return (
    <MainLayout>
        <div style={{ marginLeft: '-120px'}}>
            <h3 style={{ color: 'gray', marginBottom: '-10px' }}>
                Cài đặt <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Phân quyền người dùng <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Thêm vai trò
            </h3>
            <h1> Thêm vai trò người dùng </h1>

            <FormAddRole></FormAddRole>
        </div>
    </MainLayout> 
  )
};

export default RoleAdd
