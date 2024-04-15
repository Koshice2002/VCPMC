import React, { useState } from 'react';
import { Button } from 'antd';
import MainLayout from '../../layout/MainLayout';
import { RightOutlined } from '@ant-design/icons';
import AddContractBtn from '../../components/manage/menu/AddContractBtn';
import FormContractAuthorized from '../../components/manage/form/FormContractAuthorized';
import FormContractExploit from '../../components/manage/form/FormContractExploit';


const ContractManage = () => {
    const [activeTab, setActiveTab] = useState<'authorized' | 'exploit'>('authorized');

    const switchToAuthorizedTab = () => {
        setActiveTab('authorized');
    };

    const switchToExploitTab = () => {
        setActiveTab('exploit');
    };

  return (
    <MainLayout>
        <h3 style={{ color: 'gray', marginBottom: '-10px' }}>
            Quản lý <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Quản lý hợp đồng
        </h3>
        <h1>Danh sách hợp đồng</h1>

        <div className='switch-tabs' style={{margin: '-10px 0'}}>
            <span>
                <Button
                className={`${activeTab === 'authorized' ? 'switch-btn ' : 'switch-btn-inactive'}`}
                onClick={switchToAuthorizedTab}
            >
                Hợp đồng ủy quyền
            </Button>
            </span>
            <span>
            <Button
                className={`${activeTab === 'exploit' ? ' switch-btn' : 'switch-btn-inactive'}`}
                onClick={switchToExploitTab}
            >
                Hợp đồng khai thác
            </Button>
            </span>
        </div>

        {activeTab === 'exploit' && <FormContractExploit />}
        {activeTab === 'authorized' && <FormContractAuthorized />}

        <AddContractBtn activeTab={activeTab}></AddContractBtn>
    </MainLayout>
  )
};

export default ContractManage
