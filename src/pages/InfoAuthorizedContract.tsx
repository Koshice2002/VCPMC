import { Button } from 'antd';
import { useParams } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import { IAuthorizedContract } from '../types';
import { RightOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import MenuActionContract from '../components/MenuActionContract';
import FormAuthorizedWork from '../components/FormAuthorizedWork';
import FormInfoAuthorizedContract from '../components/FormInfoAuthorizedContract';
import { getIAuthorizedContractById } from '../redux/actions/authorizedContractAction';

const InfoAuthorizedContract: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [activeTab, setActiveTab] = useState<'info' | 'work'>('info');
    const [contractData, setContractData] = useState<IAuthorizedContract | null>(null);

    const switchToInfoTab = () => {
        setActiveTab('info');
    };

    const switchToWorkTab = () => {
        setActiveTab('work');
    };

    useEffect(() => {
        const fetchContractData = async () => {
            try {
                if (id) {
                    const data = await getIAuthorizedContractById(id);
                    setContractData(data);
                }
            } catch (error) {
                console.error('Error fetching contract data:', error);
            }
        };
        fetchContractData();
    }, [id]);

  return (
    <MainLayout>
      <div style={{ marginLeft: '-120px' }}>
        {contractData && (
          <>
            <h3 style={{ color: 'gray', marginBottom: '-10px' }}>
              Quản lý <i><RightOutlined style={{ color: '#FFAC69' }} /></i> Quản lý hợp đồng <i><RightOutlined style={{ color: '#FFAC69' }} /></i> Chi tiết
            </h3>
            <h1>Chi tiết hợp đồng ủy quyền bài hát - {contractData.number}</h1>

            <div className='switch-tabs'>
              <span>
                 <Button
                    className={`${activeTab === 'info' ? 'switch-btn ' : 'switch-btn-inactive'}`}
                    onClick={switchToInfoTab}
                >
                    Thông tin hợp đồng
                </Button>
              </span>
              <span>
                <Button
                    className={`${activeTab === 'work' ? ' switch-btn' : 'switch-btn-inactive'}`}
                    onClick={switchToWorkTab}
                >
                    Tác phẩm ủy quyền
                </Button>
              </span>
            </div>

            <MenuActionContract contractId={contractData?.id ?? ''} activeTab={activeTab}/>

            {activeTab === 'work' && <FormAuthorizedWork />}
            {activeTab === 'info' && <FormInfoAuthorizedContract contract={[contractData]} />}
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default InfoAuthorizedContract;
