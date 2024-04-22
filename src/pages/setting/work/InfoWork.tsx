import React from 'react';
import { RightOutlined } from '@ant-design/icons';
import MainLayout from '../../../layout/MainLayout';
import TableInfoWork from '../../../components/setting/form/TableInfoWork';

const InfoWork = () => {

  return (
    <MainLayout>
        <h3 style={{ color: 'gray', marginBottom: '-10px' }}>
            Cài đặt <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Cài đặt hệ thống
        </h3>
        <h1> Thông tin tác phẩm </h1>

        <TableInfoWork></TableInfoWork>
    </MainLayout> 
  )
};

export default InfoWork
