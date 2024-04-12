import React, { useState } from 'react';
import '../../../styles/styles.css'
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { EditOutlined, CloseOutlined, CheckOutlined } from '@ant-design/icons';
import PopUpReasonDeny from '../popup/PopUpReasonDeny';

interface MenuProps {
    showCheckBox: boolean;
    hideCheckBox: () => void;
    handleShowCheckBox: () => void;
}

const MenuActionRecord: React.FC<MenuProps> = ({ showCheckBox, hideCheckBox, handleShowCheckBox }) => {
    const [reasonPopUp, setReasonPopUp] = useState(false);

    const showPopUp = () => {
        setReasonPopUp(true);
    };

    const closePopUp = () => {
        setReasonPopUp(false);
    };

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });

  return (
    <div>
        {isDesktopOrLaptop ? (
            <div className="subMenu">
                <div className='container'>
                    {   !showCheckBox && 
                        <div className='custom-link item-action' onClick={handleShowCheckBox}>
                            <i className='icon-container'>
                                <EditOutlined className='action-icon' />
                            </i>
                            <p className='action-name'>
                                Quản lý phê duyệt
                            </p>
                        </div>
                    }
                    {   showCheckBox &&
                        <>
                            <div className='custom-link item-action' onClick={hideCheckBox}>
                                <i className='icon-container'>
                                    <CheckOutlined className='action-icon agree' />
                                </i>
                                <p className='action-name'>
                                    Phê duyệt
                                </p>
                            </div>
                            <div className='custom-link item-action' onClick={showPopUp}>
                                <i className='icon-container'>
                                    <CloseOutlined className='action-icon deny' />
                                </i>
                                <p className='action-name' style={{marginRight: '-20px'}}>
                                    Từ chối
                                </p>
                            </div>
                        </>
                    }
                </div>
                <PopUpReasonDeny open={reasonPopUp} onClose={closePopUp}></PopUpReasonDeny>
            </div>
        ) : (
            <div className="subMenu">
                <div className='container'>
                    {   !showCheckBox && 
                        <div className='custom-link item-action' onClick={handleShowCheckBox}>
                            <i className='icon-container'>
                                <EditOutlined className='action-icon' />
                            </i>
                            <p className='action-name'>
                                Quản lý phê duyệt
                            </p>
                        </div>
                    }
                    {   showCheckBox &&
                        <>
                            <div className='custom-link item-action' onClick={hideCheckBox}>
                                <i className='icon-container'>
                                    <CheckOutlined className='action-icon agree' />
                                </i>
                                <p className='action-name'>
                                    Phê duyệt
                                </p>
                            </div>
                            <div className='custom-link item-action' onClick={showPopUp}>
                                <i className='icon-container'>
                                    <CloseOutlined className='action-icon deny' />
                                </i>
                                <p className='action-name' style={{marginRight: '-20px'}}>
                                    Từ chối
                                </p>
                            </div>
                        </>
                    }
                </div>
                <PopUpReasonDeny open={reasonPopUp} onClose={closePopUp}></PopUpReasonDeny>
            </div>
        )}
    </div>
  );
};

export default MenuActionRecord;
