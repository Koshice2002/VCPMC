import React from 'react';
import MainLayout from '../../../layout/MainLayout';
import { RightOutlined } from '@ant-design/icons';
import FormAddUser from '../../../components/setting/form/FormAddUser';

const UserAdd = () => {

  return (
    <MainLayout>
        <div style={{ marginLeft: '-120px'}}>
            <h3 style={{ color: 'gray', marginBottom: '-10px' }}>
                Cài đặt <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Phân quyền người dùng <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Thêm người dùng
            </h3>
            <h1> Thêm người dùng mới </h1>

            <FormAddUser></FormAddUser>
        </div>
    </MainLayout> 
  )
};

export default UserAdd
