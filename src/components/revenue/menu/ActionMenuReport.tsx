import React from 'react';
import '../../../styles/styles.css'
import { Link } from 'react-router-dom';
import { FundProjectionScreenOutlined } from '@ant-design/icons';


const ActionMenuReport: React.FC = () => {

  return (
    <div className="subMenu">
        <div className='container'>
            <Link 
                to={'/revenue-report-detail'}
                className='custom-link item-action'
            >
                <i className='icon-container'>
                    <FundProjectionScreenOutlined className='action-icon' />
                </i>
                <p className='action-name'>
                    Báo cáo chi tiết
                </p>
            </Link>
        </div>
    </div>
  );
};

export default ActionMenuReport;
