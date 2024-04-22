import React from 'react';
import '../../../styles/styles.css'
import { Link } from 'react-router-dom';
import { UserAddOutlined } from '@ant-design/icons';


const AddUserBtn: React.FC = () => {

  return (
    <div className="subMenu">
        <div className='container'>
            <Link 
                to={'/user-authorization-add'}
                className='custom-link item-action'
            >
                <i className='icon-container'>
                    <UserAddOutlined className='action-icon' />
                </i>
                <p className='action-name'>
                    Thêm user
                </p>
            </Link>
        </div>
    </div>
  );
};

export default AddUserBtn;
