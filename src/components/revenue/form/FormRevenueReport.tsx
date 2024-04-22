import { Input } from 'antd';
import '../../../styles/styles.css'
import { useMediaQuery } from 'react-responsive';
import { DownOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import FormRevenuePerMonth from './FormRevenuePerMonth';

const FormRevenueReport: React.FC = () => {


    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });

    return (
        <div>
            {isDesktopOrLaptop ? (
                <div className='form-content'>
                    <div className='form-content'>
                        <div className='form-filter' style={{ width: '1683px',  marginTop: '0px' }}>
                            <div className='select-container form-horizon' style={{width: '400px'}} >
                                <div style={{marginRight: '10px'}}>Theo tháng:</div>
                                <Input
                                    className='form-search'
                                    placeholder="Theo tháng"
                                    style={{width: '264px'}}
                                    suffix={<DownOutlined style={{ color: 'orange' }} />}
                                />
                            </div>

                            <div className='select-container' style={{width: '264px'}} >
                                <Input
                                    className='form-search'
                                    placeholder="Nhập tên bài hát"
                                    suffix={<DownOutlined style={{ color: 'orange' }} />}
                                />
                            </div>
                        </div>
                        <div className='report-total'>
                            <div className='report-total-item' style={{borderRight: '1px solid gray'}}>
                                <span style={{color: 'gray'}}>Tổng bài hát</span>
                                <h3 style={{margin: '10px 0', color: '#FFAC69'}}>100</h3>
                            </div>
                            <div className='report-total-item' style={{borderRight: '1px solid gray'}}>
                                <span style={{color: 'gray'}}>Tổng số lượt phát</span>
                                <h3 style={{margin: '10px 0', color: '#FFAC69'}}>32.000.000</h3>
                            </div>
                            <div className='report-total-item' style={{borderRight: '1px solid gray'}}>
                                <span style={{color: 'gray'}}>Doanh thu trên lượt phát</span>
                                <h3 style={{margin: '10px 0', color: '#FFAC69'}}>1.564.745.000đ</h3>
                            </div>
                            <div className='report-total-item' style={{borderRight: '1px solid gray'}}>
                                <span style={{color: 'gray'}}>Doanh thu chưa phân phối</span>
                                <h3 style={{margin: '10px 0', color: '#FFAC69'}}>164.745.000đ</h3>
                            </div>
                            <div className='report-total-item'>
                                <span style={{color: 'gray'}}>Hành chính phí</span>
                                <h3 style={{margin: '10px 0', color: '#FFAC69'}}>3.253.000đ</h3>
                            </div>
                        </div>

                        <h2>Biểu đồ theo dõi lượt phát</h2>
                        
                        <div className='form-table' style={{width: '1683px', marginTop: '10px'}}>
                            <FormRevenuePerMonth></FormRevenuePerMonth>
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </div>
    )
}

export default FormRevenueReport