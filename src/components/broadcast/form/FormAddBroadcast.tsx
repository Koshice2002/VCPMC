import '../../../styles/styles.css'
import ListCard from './ListCard';
import React, { useState } from 'react';
import { DatePicker, Input } from 'antd';
import FormSchedule from './FormSchedule';
import { useMediaQuery } from 'react-responsive';
import { CalendarOutlined } from '@ant-design/icons';

const FormAddBroadcast: React.FC = () => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });

    return ( 
        <>
            {isDesktopOrLaptop ? (
                <div className='form-detail-playlist form-horizon'>
                    <div className='form-detail-left' style={{marginRight: '24px'}}>
                        <div className='form-top-left'>
                            <div className='form-column' style={{padding: '5px', marginLeft: '10px'}}>
                                <h3 style={{marginTop: '2px'}}>Thông tin lịch phát</h3>

                                <div className='form-column' style={{margin: '15px 0'}}>
                                    <h4 style={{margin: '2px 0'}}>Tiêu đề: <i style={{color: 'red'}}>*</i></h4>
                                    <Input className='form' style={{width: '240px'}}></Input>
                                </div>
                                <div className='form-column' style={{margin: '15px 0'}}>
                                    <h4 style={{margin: '2px 0'}}>Từ ngày: <i style={{color: 'red'}}>*</i></h4>
                                    <DatePicker 
                                        className='form' 
                                        format="DD/MM/YYYY"
                                        placeholder='dd/mm/yy' 
                                        style={{width: '240px'}}
                                        suffixIcon={<CalendarOutlined style={{ color: '#F26D21' }} />}
                                    ></DatePicker>
                                </div>
                                <div className='form-column' style={{margin: '15px 0'}}>
                                    <h4 style={{margin: '2px 0'}}>Đến ngày: <i style={{color: 'red'}}>*</i></h4>
                                    <DatePicker 
                                        className='form' 
                                        format="DD/MM/YYYY"
                                        placeholder='dd/mm/yy'
                                        style={{width: '240px'}}
                                        suffixIcon={<CalendarOutlined style={{ color: '#F26D21' }} />}
                                    ></DatePicker>
                                </div>
                            </div>
                        </div>
                        <div className='form-bottom-left'>
                            <ListCard></ListCard>
                        </div>
                    </div>
                    <div className='form-detail-right' style={{backgroundColor: '#2F2F41'}}>
                        <FormSchedule></FormSchedule>
                    </div>
                </div>
            ) : (
                <>

                </>
            )}
        </>
    )
}

export default FormAddBroadcast;
