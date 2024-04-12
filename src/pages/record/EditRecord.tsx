import { useParams } from 'react-router-dom';
import MainLayout from '../../layout/MainLayout';
import { RightOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { getIAuthorizedSongById } from '../../redux/actions/songAction';
import FormEditRecord from '../../components/record/form/FormEditRecord';

const EditRecord = () => {
    const { id } = useParams<{ id: string }>();
    const [song, setSongData] = useState<any>(null);

    useEffect(() => {
        const fetchSongData = async () => {
            try {
                if (id) {
                    const data = await getIAuthorizedSongById(id);
                    setSongData(data);
                }
            } catch (error) {
                console.error('Error fetching song data:', error);
            }
        };
        fetchSongData();
    }, [id]);

  return (
    <MainLayout>
        <div style={{ marginLeft: '-120px'}}>
            <h3 style={{ color: 'gray', marginBottom: '-10px' }}>
                Kho bản ghi <i><RightOutlined style={{ color: '#FFAC69' }}/></i> Cập nhật thông tin
            </h3>
            <h1> Bản ghi - {song?.name}</h1>

            <FormEditRecord song={song}></FormEditRecord>
        </div>
    </MainLayout>
  )
};

export default EditRecord
