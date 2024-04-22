import React  from 'react';
import { Button } from 'antd';
import '../../../styles/styles.css'
import ImageSlider from './ImageSlider';
import { DownOutlined } from '@ant-design/icons';

const FormConfig: React.FC = () => {
    return ( 
        <>
            <div className='content-upper' style={{border: 'none', marginTop: '50px'}}>
                <div className='content-column'>
                    <div className='form-horizon'>
                        <img src={process.env.PUBLIC_URL + '/Image/theme.svg'} alt="" style={{width: '571px', height: '320px', border: '1px solid transparent', borderRadius: '16px'}}/>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: '5px'}}><strong>Theme 1</strong></div>
                </div>
                <div className='form-horizon' style={{marginLeft: '125px'}}>
                    <ImageSlider></ImageSlider>
                </div>
            </div>
            <div className='form-horizon'>
                <div style={{marginTop: '12px'}}> Ngôn ngữ hiển thị </div>
                <Button className='select-language' style={{width: '325px', display: 'flex', justifyContent: 'space-between', marginLeft: '10px'}}>
                    <div>
                        Việt Nam
                    </div>

                    <i style={{color: '#FF7506'}}>
                        <DownOutlined style={{width: '10px'}}/>
                    </i>
                </Button>
            </div>
        </>
    )
}

export default FormConfig;
