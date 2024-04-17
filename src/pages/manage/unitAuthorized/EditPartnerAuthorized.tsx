import { useParams } from 'react-router-dom';
import { RightOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import MainLayout from '../../../layout/MainLayout';
import { getIPartnerById } from '../../../redux/actions/partnerAction';
import FormEditPartner from '../../../components/manage/form/partner/FormEditPartner';

const EditPartnerAuthorized = () => {
    const { id } = useParams<{ id: string }>();
    const [partner, setPartnerData] = useState<any>(null);

    useEffect(() => {
        const fetchContractData = async () => {
            try {
                if (id) {
                    const data = await getIPartnerById(id);
                    setPartnerData(data);
                }
            } catch (error) {
                console.error('Error fetching contract data:', error);
            }
        };
        fetchContractData();
    }, [id]);
 
  return (
    <MainLayout>
        <div style={{marginLeft: '-120px'}}>
            <h3 style={{ color: 'gray', marginBottom: '-10px' }}>
                Quản lý <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Đội tác ủy quyền <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Cập nhật thông tin người dùng
            </h3>
            <h1>Cập nhật thông tin</h1>

            <FormEditPartner partner={partner}></FormEditPartner>
        </div>


    </MainLayout>
  )
};

export default EditPartnerAuthorized
