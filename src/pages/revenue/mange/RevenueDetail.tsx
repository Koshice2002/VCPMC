import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { RightOutlined } from '@ant-design/icons';
import MainLayout from '../../../layout/MainLayout';
import { getIAuthorizedContractById } from '../../../redux/actions/authorizedContractAction';
import RevenueTableSong from '../../../components/revenue/form/RevenueTableSong';
import ActionBtn from '../../../components/revenue/menu/ActionBtn';

const RevenueDetail = () => {
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
                console.error('Error fetching song data:', error);
            }
        };
        fetchContractData();
    }, [id]);

  return (
    <MainLayout>
        <div style={{marginLeft: '-120px'}}>
            <h3 style={{ color: 'gray', marginBottom: '-10px' }}>
                Doanh thu <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Phân phối doanh thu <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Chi tiết doanh thu
            </h3>
            <h1 style={{marginBottom: '-8px'}}>Hợp đồng Ủy quyền {contract?.number} - Quý 1</h1>

            <RevenueTableSong></RevenueTableSong>
            <ActionBtn></ActionBtn>
        </div>
    </MainLayout>
  )
};

export default RevenueDetail
