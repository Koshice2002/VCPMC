import React from 'react';
import '../../../styles/styles.css'
import { Link } from 'react-router-dom';
import { UsergroupAddOutlined } from '@ant-design/icons';

const AddRoleBtn: React.FC = () => {

  return (
    <div className="subMenu">
        <div className='container'>
            <Link 
                to={'/role-add'}
                className='custom-link item-action'
            >
                <i className='icon-container'>
                    <UsergroupAddOutlined className='action-icon' />
                </i>
                <p className='action-name'>
                    Thêm vai trò
                </p>
            </Link>
        </div>
    </div>
  );
};

export default AddRoleBtn;
