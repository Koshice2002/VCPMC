import React from 'react';
import '../../../../styles/styles.css'
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { PlusOutlined } from '@ant-design/icons';

interface Props {
    activeTab: 'authorized' | 'exploit';
}

const AddContractBtn: React.FC<Props> = ({activeTab}) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });

  return (
    <div>
        {isDesktopOrLaptop ? (
            <div className="subMenu">
                <div className='container'>
                    <Link 
                        className='custom-link item-action'
                        to={activeTab === 'authorized' ? '/add-authorized-contract' : '/add-exploit-contract'}
                    >
                        <i className='icon-container'>
                            <PlusOutlined className='action-icon' />
                        </i>
                        <p className='action-name'>
                            Thêm hợp đồng
                        </p>
                    </Link>
                </div>
            </div>
        ) : (
            <div className="subMenu">
                <div className='container'>
                    <Link 
                        className='custom-link item-action'
                        to={activeTab === 'authorized' ? '/add-authorized-contract' : '/add-exploit-contract'}
                    >
                        <i className='icon-container'>
                            <PlusOutlined className='action-icon' />
                        </i>
                        <p className='action-name'>
                            Thêm hợp đồng
                        </p>
                    </Link>
                </div>
            </div>
        )}
    </div>
  );
};

export default AddContractBtn;
