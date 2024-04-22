import { useParams } from 'react-router-dom';
import { RightOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import MainLayout from '../../../layout/MainLayout';
import ActionBtn from '../../../components/revenue/menu/ActionBtn';
import { getIExploitContractById } from '../../../redux/actions/exploitContractAction';

const ReportRevenueDetail = () => {
  const { id } = useParams<{ id: string }>();
    const [contract, setContractData] = useState<any>(null);

    useEffect(() => {
        const fetchContractData = async () => {
            try {
                if (id) {
                    const data = await getIExploitContractById(id);
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
                Doanh thu <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Báo cáo doanh thu <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Báo cáo chi tiết <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Chi tiết doanh thu
            </h3>
            <h1>Hợp đồng {contract.number} - Kỳ tháng 06/2023</h1>
            
            
        </div>
        <ActionBtn></ActionBtn>
    </MainLayout>
  )
};

export default ReportRevenueDetail
