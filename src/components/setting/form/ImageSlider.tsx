import React from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const ImageSlider = () => {
    

  return (
    <>
      <div className='form-horizon'>
        <div>
          <LeftOutlined />
        </div>
        <div className='img-container'>
          <img src={process.env.PUBLIC_URL + '/Image/theme1.svg'} alt=''/>
          <div>Theme 2</div>
        </div>

        <div className='img-container'>
          <img src={process.env.PUBLIC_URL + '/Image/theme2.svg'} alt=''/>
          <div>Theme 3</div>
        </div>

        <div className='img-container'>
          <img src={process.env.PUBLIC_URL + '/Image/theme3.svg'} alt=''/>
          <div>Theme 4</div>
        </div>
        <div>
          <RightOutlined />
        </div>
      </div>
    </>
  );
};

export default ImageSlider
