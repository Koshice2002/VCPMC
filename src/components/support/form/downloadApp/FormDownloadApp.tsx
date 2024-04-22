import React  from 'react';
import '../../../../styles/styles.css'
import { Button } from 'antd';

const FormDownloadApp: React.FC = () => {
    return ( 
        <>
            <div className='group-item'>
                <div style={{ width: '600px', borderBottom: '1px dashed orange'}}>
                    <h1 style={{fontSize: '64px'}}>ỨNG DỤNG <strong style={{color: '#FF7506'}}>VCPMC</strong></h1>
                </div>
                <p style={{width: '542px', fontSize: '32px'}}>Bạn vui lòng chọn <br></br> <strong>nền tảng</strong> phù hợp để trải nghiệm</p>

                <div className='item-more' style={{width: '1272px'}}>
                    <div className='small-card-container'>
                        <div className='small-card-content'>
                            <img className='card-icon' src={process.env.PUBLIC_URL + '/Image/Upload.svg'} alt="upload-icon" />
                            <Button className='btnLogin'>Tool Upload</Button>
                        </div>
                    </div>
                    <div className='small-card-container'>
                        <div className='small-card-content'>
                            <img className='card-icon' src={process.env.PUBLIC_URL + '/Image/Window.svg'} alt="window-icon" />
                            <Button className='btnLogin'>Tải App Window</Button>
                        </div>
                    </div>
                    <div className='small-card-container'>
                        <div className='small-card-content'>
                            <img className='card-icon' src={process.env.PUBLIC_URL + '/Image/android.svg'} alt="android-icon" />
                            <Button className='btnLogin'>Tải App Android</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormDownloadApp;
