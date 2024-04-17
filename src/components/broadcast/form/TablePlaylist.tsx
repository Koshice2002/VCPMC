import { Table } from 'antd';
import '../../../styles/styles.css'
import { Link, useParams } from 'react-router-dom';
import { IBroadcast, IPlaylist } from '../../../types';
import { useMediaQuery } from 'react-responsive';
import React, { useEffect, useState } from 'react';
import { getIPlaylist } from '../../../redux/actions/playlistAction';
import { Timestamp } from 'firebase/firestore';
import { fetchPlaylistForBroadcast } from '../../../redux/actions/broadcastAction';

interface Prop {
    id: string;
    createAt?: Timestamp;
    expireAt?: Timestamp;
}

const TablePlaylist: React.FC<Prop> = ({ id, createAt, expireAt }) => {
    const [data, setData] = useState<IPlaylist[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedSongs = await fetchPlaylistForBroadcast(id);
                setData(fetchedSongs);
            } catch (error) {
            } finally {
            }
        };

        fetchData();
    }, [id]);

    const dataSourceWithRowNumber = data.map((item, index) => ({ ...item, rowNumber: index + 1 }));

    const columns = [
        {
            title: 'STT',
            dataIndex: 'rowNumber',
            key: 'rowNumber',
        },
        {
            title: 'Tên Playlist',
            key: 'name',
            dataIndex: 'name',
        },
        {
            title: 'Ngày phát playlist',
            key: 'singer',
            render: () => (
                <span>
                    {createAt && expireAt ? `${createAt.toDate().toLocaleDateString()} - ${expireAt.toDate().toLocaleDateString()}` : '-'}
                </span>
            )
        },
        {
            title: 'Bắt đầu - Kết thúc',
            key: 'duration',
            render: (record: IBroadcast) => (
                <span>
                    06:00:00 - 08:00:00
                </span>
            )
        },
        {
            title: 'Chu kỳ phát',
            key: 'cycle',
            render: (record: any) => (
                <span>
                    Thứ 3 | Thứ 5 | Thứ 7
                </span>
            )
        },
        {
            title: 'Thiết bị',
            key: 'device',
            render: (record: any) => (
                <span>
                    Thiết bị 1 | Thiết bị 2 | Thiết bị 3 | Thiết bị 4 | Thiết bị 5 
                </span>
            )
        },
    ];

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });

    return (
        <div>
            {isDesktopOrLaptop ? (
                <div className='form-content' >
                    <div className='form-table' style={{width: '1690px', marginTop: '0px'}}>
                        <div className='table-content'>
                            <Table 
                                rowKey="index"
                                columns={columns} 
                                pagination={false}
                                className="custom-table"
                                style={{ zIndex: 100 }}
                                dataSource={dataSourceWithRowNumber}
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </div>
    )
}

export default TablePlaylist