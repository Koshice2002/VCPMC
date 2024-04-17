import { useParams } from 'react-router-dom';
import { RightOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import MainLayout from '../../../layout/MainLayout';
import { getUnitUsedById } from '../../../redux/actions/unitUsedAction';
import FormPartnerTable from '../../../components/manage/form/unit-used/FormPartnerTable';
import MenuUnitUsedDetail from '../../../components/manage/menu/unit-used/MenuUnitUsedDetail';

const UnitUsedDetail = () => {
    const { id } = useParams<{ id: string }>();
    const [partner, setPartnerData] = useState<any>(null);

    useEffect(() => {
        const fetchUnitUsedData = async () => {
            try {
                if (id) {
                    const data = await getUnitUsedById(id);
                    setPartnerData(data);
                }
            } catch (error) {
                console.error('Error fetching contract data:', error);
            }
        };
        fetchUnitUsedData();
    }, [id]);

  return (
    <MainLayout>
        <div style={{marginLeft: '-120px'}}>
            <h3 style={{ color: 'gray', marginBottom: '-10px' }}>
                Quản lý <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Đơn vị sử dụng <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Chi tiết
            </h3>
            <h1>Đơn vị sử dụng - {partner?.name}</h1>
            
            <FormPartnerTable></FormPartnerTable>
        </div>
        <MenuUnitUsedDetail id={partner?.id}></MenuUnitUsedDetail>
    </MainLayout>
  )
};

export default UnitUsedDetail
