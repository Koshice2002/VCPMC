import '../../../styles/styles.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import PopUpConfirmContract from '../popup/PopUpConfirmContract';
import { Radio, Input, RadioChangeEvent, DatePicker, Button } from 'antd';
import { CloudUploadOutlined, CalendarOutlined, ExclamationCircleOutlined, DownOutlined } from '@ant-design/icons';

const FormAddAuthorizedContract: React.FC = () => {
    const [value, setValue] = useState(1);
    const [valueGender, setValueGender] = useState(1);
    const [confirmContract, setConfirmContract] = useState(false);

    const showModalConfirm = () => {
        setConfirmContract(true);
    };

    const closeModalConfirm = () => {
        setConfirmContract(false);
    };

    const onChange = (e: RadioChangeEvent) => {
        setValue(e.target.value);
    };

    const onChangeGender = (e: RadioChangeEvent) => {
        setValueGender(e.target.value);
    };

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });

  return (
    <div>
        {isDesktopOrLaptop ? (
            <div className='add-contract-content'>
                <div className='content-upper'>
                    <div className='content-column'>
                        <div className='form-horizon'>
                            <p style={{ marginRight: '10px', width: '200px' }}>Số hợp đồng <i style={{color: 'red'}}>*</i></p>
                            <Input className='form' style={{width: '325px'}}></Input>
                        </div>

                        <div className='form-horizon'>
                            <p style={{ marginRight: '10px', width: '200px' }}>Tên hợp đồng <i style={{color: 'red'}}>*</i></p>
                            <Input className='form' style={{width: '325px'}}></Input>
                        </div>

                        <div className='form-horizon'>
                            <p style={{ marginRight: '10px', width: '200px' }}>Ngày hiệu lực <i style={{color: 'red'}}>*</i></p>
                            <DatePicker
                                format="DD/MM/YYYY"
                                placeholder='dd/mm/yy'
                                className={`form`} style={{width: '325px'}}
                                suffixIcon={<CalendarOutlined style={{ color: '#F26D21' }} />}
                            />
                        </div>

                        <div className='form-horizon'>
                            <p style={{ marginRight: '10px', width: '200px' }}>Ngày hết hạn <i style={{color: 'red'}}>*</i></p>
                            <DatePicker
                                format="DD/MM/YYYY"
                                placeholder='dd/mm/yy'
                                className={`form`} style={{width: '325px'}}
                                suffixIcon={<CalendarOutlined style={{ color: '#F26D21' }} />}
                            />
                        </div>
                    </div>

                    <div style={{marginLeft: '140px'}}>
                        <div className='form-horizon'>
                            <p style={{ width: '120px' }}>Đính kèm tệp:</p>
                            <div className='upload-btn'>
                                <CloudUploadOutlined style={{width: '20px', height: '16px'}}/> Tải lên
                            </div>

                        </div>
                    </div>

                    <div style={{ marginLeft: '370px', width: '273px' }}>
                        <p className='form-horizon' style={{ width: '100%', color: '#FFAC69' }}>
                            <i><ExclamationCircleOutlined style={{ marginRight: '5px' }} /></i> <strong>Mức nhuận bút</strong>
                        </p>

                        <div className='form-horizon' style={{ width: '100%', display: 'flex', justifyContent: 'space-between', margin: '16px 0' }}>
                            <strong>Quyền tác giả:</strong>
                            <p style={{ margin: '0' }}>0%</p>
                        </div>

                        <div className='form-horizon' style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                            <strong>Quyền liên quan:</strong>
                        </div>
                        <div className='form-horizon' style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                            <>Quyền của người biểu diễn:</>
                            <p style={{ margin: '0' }}>50%</p>
                        </div>
                        <div className='form-horizon' style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                            <>Quyền của nhà sản xuất:</>
                            <p style={{ margin: '0' }}>50%</p>
                        </div>
                        <div className='form-horizon' style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                            <>(Bản ghi/video)</>
                        </div>
                    </div>

                </div>

                <div className='content-lower'>
                    <div className='content-column'>
                        <h3 style={{ color: '#FFAC69'}}>Thông tin pháp nhân ủy quyền</h3>

                        <div className='form-horizon'>
                            <p style={{ marginRight: '10px', width: '200px' }}>Pháp nhân ủy quyền:</p>
                            <Radio.Group onChange={onChange} value={value} style={{color: 'white'}}>
                                <Radio value={1} style={{color: 'white'}}>Cá nhân</Radio>
                                <Radio value={2} style={{color: 'white'}}>Tổ chức</Radio>
                            </Radio.Group>
                        </div>

                        {value === 1 ? (
                            <>
                                {/* Cá nhân */}
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Tên người ủy quyền:<i style={{color: 'red'}}>*</i></p>
                                    <Input className='form' style={{width: '325px'}}></Input>
                                </div>
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Giới tính:<i style={{color: 'red'}}>*</i></p>
                                    <Radio.Group onChange={onChangeGender} value={valueGender} style={{color: 'white'}}>
                                        <Radio value={1} style={{color: 'white'}}>Nam</Radio>
                                        <Radio value={2} style={{color: 'white'}}>Nữ</Radio>
                                    </Radio.Group>
                                </div>
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Ngày sinh:<i style={{color: 'red'}}>*</i></p>
                                    <DatePicker
                                        format="DD/MM/YYYY"
                                        placeholder='dd/mm/yy'
                                        className='form' style={{width: '325px'}}
                                        suffixIcon={<CalendarOutlined style={{ color: '#F26D21' }} />}
                                    />
                                </div>
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Quốc tịch:<i style={{color: 'red'}}>*</i></p>
                                    <Button className='select-language' style={{width: '325px', height: '48px', display: 'flex', justifyContent: 'space-between'}}>
                                        <div>
                                            Việt Nam
                                        </div>

                                        <i style={{color: '#FF7506'}}>
                                            <DownOutlined style={{width: '10px'}}/>
                                        </i>
                                    </Button>
                                </div>
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Số điện thoại:</p>
                                    <Input className='form' style={{width: '325px'}}></Input>
                                </div>
                            </>
                        ) : (
                            <>
                                {/* Tổ chức  */}
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Tên tổ chức:<i style={{color: 'red'}}>*</i></p>
                                    <Input className='form' style={{width: '325px'}}></Input>
                                </div>
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Mã số thuế:</p>
                                    <Input className='form' style={{width: '325px'}}></Input>
                                </div>
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Số tài khoản:</p>
                                    <Input className='form' style={{width: '325px'}}></Input>
                                </div>
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Ngân hàng:</p>
                                    <Input className='form' style={{width: '325px'}}></Input>
                                </div>
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Địa chỉ:</p>
                                    <Input.TextArea className='form' style={{width: '325px', height: '170px'}}></Input.TextArea>
                                </div>
                            </>
                        )}

                        <div style={{ marginTop: '24px'}}>
                            <i style={{color: 'red'}}>*</i> là những trường thông tin bắt buộc
                        </div>
                    </div>

                    <div style={{margin: '65px 0 0 100px'}}>
                        {value === 1 ? (
                            <>
                                {/* Cá nhân */}
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>CMND/CCCD:<i style={{color: 'red'}}>*</i></p>
                                    <Input className='form' style={{width: '325px'}}></Input>
                                </div>
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Ngày cấp:<i style={{color: 'red'}}>*</i></p>
                                    <DatePicker
                                        format="DD/MM/YYYY"
                                        placeholder='dd/mm/yy'
                                        className='form' style={{width: '325px'}}
                                        suffixIcon={<CalendarOutlined style={{ color: '#F26D21' }} />}
                                    />
                                </div>
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Nơi cấp:<i style={{color: 'red'}}>*</i></p>
                                    <Input className='form' style={{width: '325px'}}></Input>
                                </div>
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Mã số thuế:</p>
                                    <Input className='form' style={{width: '325px'}}></Input>
                                </div>
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Nơi cư trú:<i style={{color: 'red'}}>*</i></p>
                                    <Input.TextArea className='form' style={{width: '325px', height: '107px'}}></Input.TextArea>
                                </div>
                            </>
                        ) : (
                            <>
                                {/* Tổ chức  */}
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Người đại diện:<i style={{color: 'red'}}>*</i></p>
                                    <Input className='form' style={{width: '325px'}}></Input>
                                </div>
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Chức vụ:</p>
                                    <Input className='form' style={{width: '325px'}}></Input>
                                </div>
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Ngày sinh:<i style={{color: 'red'}}>*</i></p>
                                    <DatePicker
                                        format="DD/MM/YYYY"
                                        placeholder='dd/mm/yy'
                                        className='form' style={{width: '325px'}}
                                        suffixIcon={<CalendarOutlined style={{ color: '#F26D21' }} />}
                                    />
                                </div>
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Giới tính:<i style={{color: 'red'}}>*</i></p>
                                    <Radio.Group onChange={onChangeGender} value={valueGender} style={{color: 'white'}}>
                                        <Radio value={1} style={{color: 'white'}}>Nam</Radio>
                                        <Radio value={2} style={{color: 'white'}}>Nữ</Radio>
                                    </Radio.Group>
                                </div>
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>CMND/CCCD:<i style={{color: 'red'}}>*</i></p>
                                    <Input className='form' style={{width: '325px'}}></Input>
                                </div>
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Ngày cấp:<i style={{color: 'red'}}>*</i></p>
                                    <DatePicker
                                        format="DD/MM/YYYY"
                                        placeholder='dd/mm/yy'
                                        className='form' style={{width: '325px'}}
                                        suffixIcon={<CalendarOutlined style={{ color: '#F26D21' }} />}
                                    />
                                </div>
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Nơi cấp:<i style={{color: 'red'}}>*</i></p>
                                    <Input className='form' style={{width: '325px'}}></Input>
                                </div>
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Quốc tịch:<i style={{color: 'red'}}>*</i></p>
                                    <Button className='select-language' style={{width: '325px', height: '48px', display: 'flex', justifyContent: 'space-between'}}>
                                        <div>
                                            Việt Nam
                                        </div>

                                        <i style={{color: '#FF7506'}}>
                                            <DownOutlined style={{width: '10px'}}/>
                                        </i>
                                    </Button>
                                </div>
                            </>
                        )}
                    </div>

                    <div style={{margin: '65px 0 0 100px'}}>
                        {value === 1 ? (
                            <>
                                {/* Cá nhân */}
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Email:<i style={{color: 'red'}}>*</i></p>
                                    <Input className='form' style={{width: '325px'}}></Input>
                                </div>
        
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Tên đăng nhập:<i style={{color: 'red'}}>*</i></p>
                                    <Input className='form' style={{width: '325px'}}></Input>
                                </div>
                                
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Mật khẩu:<i style={{color: 'red'}}>*</i></p>
                                    <Input className='form' style={{width: '325px'}}></Input>
                                </div>
        
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Số tài khoản:</p>
                                    <Input className='form' style={{width: '325px'}}></Input>
                                </div>
        
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Ngân hàng:</p>
                                    <Input className='form' style={{width: '325px'}}></Input>
                                </div>
                            </>
                        ) : (
                            <>
                            {/* Tổ chức  */}
                            <div className='form-horizon'>
                                <p style={{ marginRight: '10px', width: '200px' }}>Nơi cư trú:</p>
                                <Input.TextArea className='form' style={{width: '325px', height: '107px'}}></Input.TextArea>
                            </div>
                            <div className='form-horizon'>
                                <p style={{ marginRight: '10px', width: '200px' }}>Số điện thoại:</p>
                                <Input className='form' style={{width: '325px'}}></Input>
                            </div>
                            <div className='form-horizon'>
                                <p style={{ marginRight: '10px', width: '200px' }}>Email:<i style={{color: 'red'}}>*</i></p>
                                <Input className='form' style={{width: '325px'}}></Input>
                            </div>

                            <div className='form-horizon'>
                                <p style={{ marginRight: '10px', width: '200px' }}>Tên đăng nhập:<i style={{color: 'red'}}>*</i></p>
                                <Input className='form' style={{width: '325px'}}></Input>
                            </div>
                            
                            <div className='form-horizon'>
                                <p style={{ marginRight: '10px', width: '200px' }}>Mật khẩu:<i style={{color: 'red'}}>*</i></p>
                                <Input className='form' style={{width: '325px'}}></Input>
                            </div>
                            </>
                        )}
                    </div>
                </div>

                <div className='title' style={{margin: '40px 0'}}>
                    <Link to={'/contract-manage'}>
                        <Button className='btnCancel' style={{width: '168px', margin: '0 16px'}}>
                                Hủy
                        </Button>
                    </Link>
                    <Button className='btnLogin' htmlType="submit" style={{width: '168px', margin: '0 16px'}} onClick={showModalConfirm}>
                        Tạo
                    </Button>
                </div>
            </div>
        ) : (
            <div className='add-contract-content'>
                <div className='content-upper'>
                    <div className='content-column'>
                        <div className='form-horizon'>
                            <p style={{ marginRight: '10px', width: '200px' }}>Số hợp đồng <i style={{color: 'red'}}>*</i></p>
                            <Input className='form' style={{width: '325px'}}></Input>
                        </div>

                        <div className='form-horizon'>
                            <p style={{ marginRight: '10px', width: '200px' }}>Tên hợp đồng <i style={{color: 'red'}}>*</i></p>
                            <Input className='form' style={{width: '325px'}}></Input>
                        </div>

                        <div className='form-horizon'>
                            <p style={{ marginRight: '10px', width: '200px' }}>Ngày hiệu lực <i style={{color: 'red'}}>*</i></p>
                            <DatePicker
                                format="DD/MM/YYYY"
                                placeholder='dd/mm/yy'
                                className={`form`} style={{width: '325px'}}
                                suffixIcon={<CalendarOutlined style={{ color: '#F26D21' }} />}
                            />
                        </div>

                        <div className='form-horizon'>
                            <p style={{ marginRight: '10px', width: '200px' }}>Ngày hết hạn <i style={{color: 'red'}}>*</i></p>
                            <DatePicker
                                format="DD/MM/YYYY"
                                placeholder='dd/mm/yy'
                                className={`form`} style={{width: '325px'}}
                                suffixIcon={<CalendarOutlined style={{ color: '#F26D21' }} />}
                            />
                        </div>
                    </div>

                    <div style={{marginLeft: '140px'}}>
                        <div className='form-horizon'>
                            <p style={{ width: '120px' }}>Đính kèm tệp:</p>
                            <div className='upload-btn'>
                                <CloudUploadOutlined style={{width: '20px', height: '16px'}}/> Tải lên
                            </div>

                        </div>
                    </div>

                    <div style={{ marginLeft: '370px', width: '273px' }}>
                        <p className='form-horizon' style={{ width: '100%', color: '#FFAC69' }}>
                            <i><ExclamationCircleOutlined style={{ marginRight: '5px' }} /></i> <strong>Mức nhuận bút</strong>
                        </p>

                        <div className='form-horizon' style={{ width: '100%', display: 'flex', justifyContent: 'space-between', margin: '16px 0' }}>
                            <strong>Quyền tác giả:</strong>
                            <p style={{ margin: '0' }}>0%</p>
                        </div>

                        <div className='form-horizon' style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                            <strong>Quyền liên quan:</strong>
                        </div>
                        <div className='form-horizon' style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                            <>Quyền của người biểu diễn:</>
                            <p style={{ margin: '0' }}>50%</p>
                        </div>
                        <div className='form-horizon' style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                            <>Quyền của nhà sản xuất:</>
                            <p style={{ margin: '0' }}>50%</p>
                        </div>
                        <div className='form-horizon' style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                            <>(Bản ghi/video)</>
                        </div>
                    </div>

                </div>

                <div className='content-lower'>
                    <div className='content-column'>
                        <h3 style={{ color: '#FFAC69'}}>Thông tin pháp nhân ủy quyền</h3>

                        <div className='form-horizon'>
                            <p style={{ marginRight: '10px', width: '200px' }}>Pháp nhân ủy quyền:</p>
                            <Radio.Group onChange={onChange} value={value} style={{color: 'white'}}>
                                <Radio value={1} style={{color: 'white'}}>Cá nhân</Radio>
                                <Radio value={2} style={{color: 'white'}}>Tổ chức</Radio>
                            </Radio.Group>
                        </div>

                        {value === 1 ? (
                            <>
                                {/* Cá nhân */}
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Tên người ủy quyền:<i style={{color: 'red'}}>*</i></p>
                                    <Input className='form' style={{width: '325px'}}></Input>
                                </div>
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Giới tính:<i style={{color: 'red'}}>*</i></p>
                                    <Radio.Group onChange={onChangeGender} value={valueGender} style={{color: 'white'}}>
                                        <Radio value={1} style={{color: 'white'}}>Nam</Radio>
                                        <Radio value={2} style={{color: 'white'}}>Nữ</Radio>
                                    </Radio.Group>
                                </div>
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Ngày sinh:<i style={{color: 'red'}}>*</i></p>
                                    <DatePicker
                                        format="DD/MM/YYYY"
                                        placeholder='dd/mm/yy'
                                        className='form' style={{width: '325px'}}
                                        suffixIcon={<CalendarOutlined style={{ color: '#F26D21' }} />}
                                    />
                                </div>
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Quốc tịch:<i style={{color: 'red'}}>*</i></p>
                                    <Button className='select-language' style={{width: '325px', height: '48px', display: 'flex', justifyContent: 'space-between'}}>
                                        <div>
                                            Việt Nam
                                        </div>

                                        <i style={{color: '#FF7506'}}>
                                            <DownOutlined style={{width: '10px'}}/>
                                        </i>
                                    </Button>
                                </div>
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Số điện thoại:</p>
                                    <Input className='form' style={{width: '325px'}}></Input>
                                </div>
                            </>
                        ) : (
                            <>
                                {/* Tổ chức  */}
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Tên tổ chức:<i style={{color: 'red'}}>*</i></p>
                                    <Input className='form' style={{width: '325px'}}></Input>
                                </div>
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Mã số thuế:</p>
                                    <Input className='form' style={{width: '325px'}}></Input>
                                </div>
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Số tài khoản:</p>
                                    <Input className='form' style={{width: '325px'}}></Input>
                                </div>
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Ngân hàng:</p>
                                    <Input className='form' style={{width: '325px'}}></Input>
                                </div>
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Địa chỉ:</p>
                                    <Input.TextArea className='form' style={{width: '325px', height: '170px'}}></Input.TextArea>
                                </div>
                            </>
                        )}

                        <div style={{ marginTop: '24px'}}>
                            <i style={{color: 'red'}}>*</i> là những trường thông tin bắt buộc
                        </div>
                    </div>

                    <div style={{margin: '65px 0 0 100px'}}>
                        {value === 1 ? (
                            <>
                                {/* Cá nhân */}
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>CMND/CCCD:<i style={{color: 'red'}}>*</i></p>
                                    <Input className='form' style={{width: '325px'}}></Input>
                                </div>
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Ngày cấp:<i style={{color: 'red'}}>*</i></p>
                                    <DatePicker
                                        format="DD/MM/YYYY"
                                        placeholder='dd/mm/yy'
                                        className='form' style={{width: '325px'}}
                                        suffixIcon={<CalendarOutlined style={{ color: '#F26D21' }} />}
                                    />
                                </div>
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Nơi cấp:<i style={{color: 'red'}}>*</i></p>
                                    <Input className='form' style={{width: '325px'}}></Input>
                                </div>
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Mã số thuế:</p>
                                    <Input className='form' style={{width: '325px'}}></Input>
                                </div>
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Nơi cư trú:<i style={{color: 'red'}}>*</i></p>
                                    <Input.TextArea className='form' style={{width: '325px', height: '107px'}}></Input.TextArea>
                                </div>
                            </>
                        ) : (
                            <>
                                {/* Tổ chức  */}
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Người đại diện:<i style={{color: 'red'}}>*</i></p>
                                    <Input className='form' style={{width: '325px'}}></Input>
                                </div>
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Chức vụ:</p>
                                    <Input className='form' style={{width: '325px'}}></Input>
                                </div>
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Ngày sinh:<i style={{color: 'red'}}>*</i></p>
                                    <DatePicker
                                        format="DD/MM/YYYY"
                                        placeholder='dd/mm/yy'
                                        className='form' style={{width: '325px'}}
                                        suffixIcon={<CalendarOutlined style={{ color: '#F26D21' }} />}
                                    />
                                </div>
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Giới tính:<i style={{color: 'red'}}>*</i></p>
                                    <Radio.Group onChange={onChangeGender} value={valueGender} style={{color: 'white'}}>
                                        <Radio value={1} style={{color: 'white'}}>Nam</Radio>
                                        <Radio value={2} style={{color: 'white'}}>Nữ</Radio>
                                    </Radio.Group>
                                </div>
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>CMND/CCCD:<i style={{color: 'red'}}>*</i></p>
                                    <Input className='form' style={{width: '325px'}}></Input>
                                </div>
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Ngày cấp:<i style={{color: 'red'}}>*</i></p>
                                    <DatePicker
                                        format="DD/MM/YYYY"
                                        placeholder='dd/mm/yy'
                                        className='form' style={{width: '325px'}}
                                        suffixIcon={<CalendarOutlined style={{ color: '#F26D21' }} />}
                                    />
                                </div>
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Nơi cấp:<i style={{color: 'red'}}>*</i></p>
                                    <Input className='form' style={{width: '325px'}}></Input>
                                </div>
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Quốc tịch:<i style={{color: 'red'}}>*</i></p>
                                    <Button className='select-language' style={{width: '325px', height: '48px', display: 'flex', justifyContent: 'space-between'}}>
                                        <div>
                                            Việt Nam
                                        </div>

                                        <i style={{color: '#FF7506'}}>
                                            <DownOutlined style={{width: '10px'}}/>
                                        </i>
                                    </Button>
                                </div>
                            </>
                        )}
                    </div>

                    <div style={{margin: '65px 0 0 100px'}}>
                        {value === 1 ? (
                            <>
                                {/* Cá nhân */}
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Email:<i style={{color: 'red'}}>*</i></p>
                                    <Input className='form' style={{width: '325px'}}></Input>
                                </div>
        
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Tên đăng nhập:<i style={{color: 'red'}}>*</i></p>
                                    <Input className='form' style={{width: '325px'}}></Input>
                                </div>
                                
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Mật khẩu:<i style={{color: 'red'}}>*</i></p>
                                    <Input className='form' style={{width: '325px'}}></Input>
                                </div>
        
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Số tài khoản:</p>
                                    <Input className='form' style={{width: '325px'}}></Input>
                                </div>
        
                                <div className='form-horizon'>
                                    <p style={{ marginRight: '10px', width: '200px' }}>Ngân hàng:</p>
                                    <Input className='form' style={{width: '325px'}}></Input>
                                </div>
                            </>
                        ) : (
                            <>
                            {/* Tổ chức  */}
                            <div className='form-horizon'>
                                <p style={{ marginRight: '10px', width: '200px' }}>Nơi cư trú:</p>
                                <Input.TextArea className='form' style={{width: '325px', height: '107px'}}></Input.TextArea>
                            </div>
                            <div className='form-horizon'>
                                <p style={{ marginRight: '10px', width: '200px' }}>Số điện thoại:</p>
                                <Input className='form' style={{width: '325px'}}></Input>
                            </div>
                            <div className='form-horizon'>
                                <p style={{ marginRight: '10px', width: '200px' }}>Email:<i style={{color: 'red'}}>*</i></p>
                                <Input className='form' style={{width: '325px'}}></Input>
                            </div>

                            <div className='form-horizon'>
                                <p style={{ marginRight: '10px', width: '200px' }}>Tên đăng nhập:<i style={{color: 'red'}}>*</i></p>
                                <Input className='form' style={{width: '325px'}}></Input>
                            </div>
                            
                            <div className='form-horizon'>
                                <p style={{ marginRight: '10px', width: '200px' }}>Mật khẩu:<i style={{color: 'red'}}>*</i></p>
                                <Input className='form' style={{width: '325px'}}></Input>
                            </div>
                            </>
                        )}
                    </div>
                </div>

                <div className='title' style={{margin: '40px 0'}}>
                    <Button className='btnCancel' style={{width: '168px', margin: '0 16px'}}>
                        Hủy
                    </Button>
                    <Button className='btnLogin' htmlType="submit" style={{width: '168px', margin: '0 16px'}} onClick={showModalConfirm}>
                        Tạo
                    </Button>
                </div>
            </div>
        )}

        <PopUpConfirmContract open={confirmContract} onClose={closeModalConfirm}></PopUpConfirmContract>
    </div>
  );
};

export default FormAddAuthorizedContract;
