import '../../../../styles/styles.css'
import { useMediaQuery } from 'react-responsive';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import EditPopUp from '../../popup/device/EditPopUp';
import { SyncOutlined, LockOutlined, EditOutlined } from '@ant-design/icons';
import { IDevice } from '../../../../types';

interface Props {
    device: IDevice;
}

const MenuDetailDevice: React.FC<Props> = ({device}) => {
    const [editPopUp, setEditPopUp] = useState(false);

    const showPopUp = () => {
        setEditPopUp(true);
    };

    const closePopUp = () => {
        setEditPopUp(false);
    };

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });

  return (
    <div>
        {isDesktopOrLaptop ? (
            <div className="subMenu">
                <div 
                    onClick={showPopUp}
                    className='custom-link item-action'
                >
                    <i className='icon-container'>
                        <EditOutlined className='action-icon'/>
                    </i>
                    <p className='action-name'>
                        Thêm thiết bị
                    </p>
                </div>

                <div className='container'>
                    <div className='custom-link item-action'>
                        <i className='icon-container'>
                            <LockOutlined className='action-icon' />
                        </i>
                        <p className='action-name'>
                            Khôi phục mật khẩu
                        </p>
                    </div>
                </div>

                <div className='container'>
                    <div className='custom-link item-action'>
                        <i className='icon-container'>
                            <SyncOutlined className='action-icon' />
                        </i>
                        <p className='action-name'>
                            Khôi phục bộ nhớ
                        </p>
                    </div>
                </div>
                <EditPopUp open={editPopUp} onClose={closePopUp} device={device}></EditPopUp>
                
            </div>
        ) : (
            <></>
        )}
    </div>
  );
};

export default MenuDetailDevice;
