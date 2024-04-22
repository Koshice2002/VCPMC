import React from 'react';
import '../../../styles/styles.css'
import { ExportOutlined } from '@ant-design/icons';


const ActionBtn: React.FC = () => {

  return (
    <div className="subMenu">
        <div className='container'>
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
    </div>
  );
};

export default ActionBtn;
