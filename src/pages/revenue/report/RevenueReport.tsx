import React from 'react';
import { RightOutlined } from '@ant-design/icons';
import MainLayout from '../../../layout/MainLayout';
import ActionMenuReport from '../../../components/revenue/menu/ActionMenuReport';
import FormRevenueReport from '../../../components/revenue/form/FormRevenueReport';

const RevenueReport = () => {

  return (
    <MainLayout>
        <h3 style={{ color: 'gray', marginBottom: '-10px' }}>
            Doanh thu <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Báo cáo doanh thu
        </h3>
        <h1>Báo cáo doanh thu</h1>

        <FormRevenueReport></FormRevenueReport>
        <ActionMenuReport></ActionMenuReport>
    </MainLayout>
  )
};

export default RevenueReport
