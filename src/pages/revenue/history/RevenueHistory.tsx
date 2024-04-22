import React from 'react';
import { RightOutlined } from '@ant-design/icons';
import MainLayout from '../../../layout/MainLayout';
import ActionBtn from '../../../components/revenue/menu/ActionBtn';
import RevenueTableContract from '../../../components/revenue/form/RevenueTableContract';

const RevenueHistory = () => {

  return (
    <MainLayout>
        <h3 style={{ color: 'gray', marginBottom: '-10px' }}>
            Doanh thu <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Lịch sử đối soát
        </h3>
        <h1>Lịch sử đối soát doanh thu</h1>

        <RevenueTableContract></RevenueTableContract>
        <ActionBtn></ActionBtn>
    </MainLayout>
  )
};

export default RevenueHistory
