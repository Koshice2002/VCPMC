import React from 'react';
import { RightOutlined } from '@ant-design/icons';
import MainLayout from '../../../layout/MainLayout';
import ActionMenuDetail from '../../../components/revenue/menu/ActionMenuDetail';
import FormRerportDetailTable from '../../../components/revenue/form/FormRerportDetailTable';

const RevenueReportDetail = () => {

  return (
    <MainLayout>
        <div style={{marginLeft: '-120px'}}>
            <h3 style={{ color: 'gray', marginBottom: '-10px' }}>
                Doanh thu <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Báo cáo doanh thu <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Báo cáo chi tiết
            </h3>
            <h1>Doanh thu theo hợp đồng khai thác</h1>
            
            <FormRerportDetailTable></FormRerportDetailTable>
        </div>

        <ActionMenuDetail></ActionMenuDetail>
    </MainLayout>
  )
};

export default RevenueReportDetail
