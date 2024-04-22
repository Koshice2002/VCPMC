import '../../../styles/styles.css'
import React, { useState } from 'react';
import PopUpAccept from '../popup/PopUpAccept';
import { FileDoneOutlined, ExportOutlined } from '@ant-design/icons';


const ActionMenuDetail: React.FC = () => {
    const [openPopUp, setOpenUp] = useState(false);

    const handleOpenPopUp = () => {
        setOpenUp(!openPopUp)
    }

    const handleClosePopUp = () => {
        setOpenUp(false)
    }

  return (
    <div className="subMenu">
        <div className='container'>
            <div
                onClick={handleOpenPopUp}
                className='custom-link item-action'
            >
                <i className='icon-container'>
                    <FileDoneOutlined className='action-icon' />
                </i>
                <p className='action-name'>
                    Chốt doanh thu
                </p>
            </div>
            <div
                className='custom-link item-action'
            >
                <i className='icon-container'>
                    <ExportOutlined className='action-icon' />
                </i>
                <p className='action-name'>
                    Xuất dữ liệu
                </p>
            </div>
        </div>

        <PopUpAccept open={openPopUp} onClose={handleClosePopUp} ></PopUpAccept>
    </div>
  );
};

export default ActionMenuDetail;
