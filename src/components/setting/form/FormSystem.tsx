import moment from 'moment';
import React, { useState } from 'react';
import { CalendarOutlined } from '@ant-design/icons';
import { Button, DatePicker, Radio, RadioChangeEvent } from 'antd';

const FormSystem = () => {
    const [value, setValue] = useState(1);

    const onChange = (e: RadioChangeEvent) => {
        setValue(e.target.value);
    };
    
  return (
    <>
        <div style={{width: '1611px', height: '700px', backgroundColor: '#2F2F41'}}>
            <div style={{margin: '50px 0 0 50px'}}>
                <h2>Cài đặt chu kì đối soát</h2>

                <Radio.Group onChange={onChange} value={value} style={{color: 'white'}}>
                    <Radio value={1} style={{color: 'white'}}> <h3>Đối soát theo quý</h3> </Radio>
                    <Radio value={2} style={{color: 'white'}}> <h3>Đối soát theo tháng</h3> </Radio>
                </Radio.Group>
                {value === 1 ? (
                    <>
                        <div className='form-column'>
                            <div className='form-horizon'>
                                <h4 style={{marginRight: '10px'}}>Quý 1:</h4> <span>01/06 - 30/7</span>
                            </div>
                            <div className='form-horizon'>
                                <h4 style={{marginRight: '10px'}}>Quý 2:</h4> <span>01/08 - 30/9</span>
                            </div>
                            <div className='form-horizon'>
                                <h4 style={{marginRight: '10px'}}>Quý 3:</h4> <span>01/10 - 30/11</span>
                            </div>
                            <div className='form-horizon'>
                                <h4 style={{marginRight: '10px'}}>Quý 4:</h4> <span>01/12 - 31/12</span>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className='form-horizon'>
                            <div className='form-horizon'>
                                <h4 style={{marginRight: '10px'}}>Ngày bắt đầu: </h4>
                               <DatePicker
                                    format="DD-MM-YYYY"
                                    className={`form input-item item-change editable`}
                                    suffixIcon={<CalendarOutlined style={{ color: '#F26D21' }} />}
                                    defaultValue={moment('20-10-2023', 'DD-MM-YYYY')}
                                />
                            </div>
                            <div className='form-horizon' style={{marginLeft: '321px'}}>
                                <h4 style={{marginRight: '10px'}}>Ngày kết thúc: </h4>
                                <DatePicker
                                    format="DD-MM-YYYY"
                                    className={`form input-item item-change editable`}
                                    suffixIcon={<CalendarOutlined style={{ color: '#F26D21' }} />}
                                    defaultValue={moment('20-10-2024', 'DD-MM-YYYY')}
                                />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
        <div className='title' style={{ margin: '20px 180px 0 0' }}>
            <Button className='btnLogin'>
                Lưu
            </Button>
        </div>
    </>
  );
};

export default FormSystem
