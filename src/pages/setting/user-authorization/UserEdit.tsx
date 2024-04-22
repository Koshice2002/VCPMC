import { useParams } from 'react-router-dom';
import { RightOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import MainLayout from '../../../layout/MainLayout';
import { getIUserById } from '../../../redux/actions/userAction';
import FormEditUser from '../../../components/setting/form/FormEditUser';

const UserEdit = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUserData] = useState<any>(null);

  useEffect(() => {
      const fetchUserData = async () => {
          try {
              if (id) {
                  const data = await getIUserById(id);
                  setUserData(data);
              }
          } catch (error) {
              console.error('Error fetching user data:', error);
          }
      };
      fetchUserData();
  }, [id]);

  return (
    <MainLayout>
        <div style={{ marginLeft: '-120px'}}>
            <h3 style={{ color: 'gray', marginBottom: '-10px' }}>
                Cài đặt <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Phân quyền người dùng <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Chỉnh sửa
            </h3>
            <h1> Chỉnh sửa người dùng </h1>

            <FormEditUser user={user}></FormEditUser>
        </div>
    </MainLayout> 
  )
};

export default UserEdit
