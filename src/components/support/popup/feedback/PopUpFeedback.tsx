import React from "react";
import '../../../../styles/styles.css'
import { CheckCircleOutlined } from '@ant-design/icons';

interface Props {
    open: boolean;
}

const PopUpFeedback: React.FC<Props> = ({ open }) => {
    return (
        <div className={`popup popup-notify ${open ? 'open' : ''}`}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                <CheckCircleOutlined className="icon-notify"/>
                <p style={{ marginLeft: '16px', fontSize: '18px' }}>Gửi Feedback thành công</p>
            </div>

        </div>  
    )
}

export default PopUpFeedback