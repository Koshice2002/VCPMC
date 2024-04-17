import React, { useState } from 'react';
import { RightOutlined } from '@ant-design/icons';
import MainLayout from '../../../layout/MainLayout';
import FormPartnerAuthorized from '../../../components/manage/form/partner/FormPartnerAuthorized';

const PartnerAuthorizedManage = () => {

  return (
    <MainLayout>
        <h3 style={{ color: 'gray', marginBottom: '-10px' }}>
            Quản lý <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Đối tác ủy quyền
        </h3>
        <h1>Danh sách đối tác ủy quyền</h1>

        <FormPartnerAuthorized></FormPartnerAuthorized>

    </MainLayout>
  )
};

export default PartnerAuthorizedManage
