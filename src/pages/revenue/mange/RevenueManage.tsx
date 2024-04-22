import React from 'react';
import { RightOutlined } from '@ant-design/icons';
import MainLayout from '../../../layout/MainLayout';
import ActionBtn from '../../../components/revenue/menu/ActionBtn';
import RevenueTable from '../../../components/revenue/form/RevenueTable';

const RevenueManage = () => {

  return (
    <MainLayout>
        <h3 style={{ color: 'gray', marginBottom: '-10px' }}>
            Doanh thu <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Phân phối doanh thu
        </h3>
        <h1>Quản lý phân phối doanh thu</h1>

        <RevenueTable></RevenueTable>
        <ActionBtn></ActionBtn>
    </MainLayout>
  )
};

export default RevenueManage
