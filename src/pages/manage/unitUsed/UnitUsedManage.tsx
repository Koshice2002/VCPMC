import React from 'react';
import { RightOutlined } from '@ant-design/icons';
import MainLayout from '../../../layout/MainLayout';
import FormUnitUsed from '../../../components/manage/form/unit-used/FormUnitUsed';
import MenuUnitUsedDetail from '../../../components/manage/menu/unit-used/MenuUnitUsedDetail';

const UnitUsedManage: React.FC = () => {
  return (
    <MainLayout>
        <h3 style={{ color: 'gray', marginBottom: '-10px' }}>
            Quản lý <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Đơn vị sử dụng
        </h3>
        <h1>Danh sách đơn vị sử dụng</h1>

        <FormUnitUsed></FormUnitUsed>
        <MenuUnitUsedDetail></MenuUnitUsedDetail>
    </MainLayout>
  )
};

export default UnitUsedManage
