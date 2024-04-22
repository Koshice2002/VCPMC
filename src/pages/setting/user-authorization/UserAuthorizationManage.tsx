import { Button, Input } from 'antd';
import React, { useState } from 'react';
import MainLayout from '../../../layout/MainLayout';
import { RightOutlined, SearchOutlined } from '@ant-design/icons';
import UserTable from '../../../components/setting/form/UserTable';
import RoleTable from '../../../components/setting/form/RoleTable';

const UserAuthorizationManage = () => {
    const [activeTab, setActiveTab] = useState<'User' | 'Role'>('User');

    const switchToUserTab = () => {
        setActiveTab('User');
    };

    const switchToRoleTab = () => {
        setActiveTab('Role');
    };

  return (
    <MainLayout>
        <h3 style={{ color: 'gray', marginBottom: '-10px' }}>
            Cài đặt <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Phân quyền người dùng
        </h3>
        <h1>Danh sách người dùng</h1>

        <div className='form-horizon' style={{width: '1683px'}}>
            <div className='switch-tabs' style={{margin: '-10px 0'}}>
                <span>
                    <Button
                        className={`${activeTab === 'User' ? 'switch-btn ' : 'switch-btn-inactive'}`}
                        onClick={switchToUserTab}
                    >
                        Danh sách người dùng
                    </Button>
                </span>
                <span>
                    <Button
                        className={`${activeTab === 'Role' ? ' switch-btn' : 'switch-btn-inactive'}`}
                        onClick={switchToRoleTab}
                    >
                        Vai trò người dùng
                    </Button>
                </span>
            </div>

            <div className='select-container' style={{marginLeft: 'auto'}}>
                <Input
                    className='form-search'
                    placeholder="Nhập tên người dùng"
                    suffix={<SearchOutlined style={{ color: 'white' }} />}
                />
            </div>
        </div>

        {activeTab === 'User' && <UserTable></UserTable>}
        {activeTab === 'Role' && <RoleTable></RoleTable> }

    </MainLayout>
  )
};

export default UserAuthorizationManage
