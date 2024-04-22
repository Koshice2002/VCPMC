import React, { useEffect, useState } from 'react';
import { RightOutlined } from '@ant-design/icons';
import MainLayout from '../../../layout/MainLayout';
import FormAddRole from '../../../components/setting/form/FormAddRole';
import { useParams } from 'react-router-dom';
import { getIRoleById } from '../../../redux/actions/roleAction';
import FormEditRole from '../../../components/setting/form/FormEditRole';

const RoleEdit = () => {
    const { id } = useParams<{ id: string }>();
    const [role, setRoleData] = useState<any>(null);

    useEffect(() => {
        const fetchRoleData = async () => {
            try {
                if (id) {
                    const data = await getIRoleById(id);
                    setRoleData(data);
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchRoleData();
    }, [id]);

  return (
    <MainLayout>
        <div style={{ marginLeft: '-120px'}}>
            <h3 style={{ color: 'gray', marginBottom: '-10px' }}>
                Cài đặt <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Phân quyền người dùng <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Cập nhật
            </h3>
            <h1> Cập nhật vai trò người dùng </h1>

            <FormEditRole role={role}></FormEditRole>
        </div>
    </MainLayout> 
  )
};

export default RoleEdit
