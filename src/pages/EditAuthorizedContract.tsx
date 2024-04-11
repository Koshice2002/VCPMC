import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import { RightOutlined } from '@ant-design/icons';
import FormEditAuthorizedContract from '../components/FormEditAuthorizedContract';
import { getIAuthorizedContractById } from '../redux/actions/authorizedContractAction';

const EditAuthorizedContract = () => {
    const { id } = useParams<{ id: string }>();
    const [contract, setContractData] = useState<any>(null);

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
        <div style={{ marginLeft: '-120px'}}>
            <h3 style={{ color: 'gray', marginBottom: '-10px' }}>
                Quản lý <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Quản lý hợp đồng <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Chi tiết <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Chỉnh sửa thông tin
            </h3>
            <h1>Hợp đồng ủy quyền bài hát - {contract?.number}</h1>

            <FormEditAuthorizedContract contract={contract}></FormEditAuthorizedContract>
        </div>
    </MainLayout>
  )
};

export default EditAuthorizedContract
