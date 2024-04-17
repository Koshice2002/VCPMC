import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { RightOutlined } from '@ant-design/icons';
import MainLayout from '../../../layout/MainLayout';
import { getIPartnerById } from '../../../redux/actions/partnerAction';
import FormPartnerDetail from '../../../components/manage/form/unit-used/FormPartnerDetail';
import MenuUnitUsedDetail from '../../../components/manage/menu/unit-used/MenuUnitUsedDetail';

const PartnerDetail = () => {
    const { id } = useParams<{ id: string }>();
    const [partner, setPartnerData] = useState<any>(null);

    useEffect(() => {
        const fetchPartnerData = async () => {
            try {
                if (id) {
                    const data = await getIPartnerById(id);
                    setPartnerData(data);
                }
            } catch (error) {
                console.error('Error fetching contract data:', error);
            }
        };
        fetchPartnerData();
    }, [id]);

  return (
    <MainLayout>
        <div style={{marginLeft: '-120px'}}>
            <h3 style={{ color: 'gray', marginBottom: '-10px' }}>
                Quản lý <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Đơn vị sử dụng <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Chi tiết <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Thông tin người dùng
            </h3>
            <h1>Thông tin người dùng</h1>
            
            <FormPartnerDetail partner={partner}></FormPartnerDetail>
        </div>
        <MenuUnitUsedDetail  id={partner?.id}></MenuUnitUsedDetail>
    </MainLayout>
  )
};

export default PartnerDetail
