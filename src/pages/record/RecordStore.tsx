import { Checkbox, Input, Select } from 'antd';
import React, { useState } from 'react';
import MainLayout from '../../layout/MainLayout';
import MenuActionRecord from '../../components/record/menu/MenuActionRecord';
import FormRecordStoreCard from '../../components/record/form/FormRecordStoreCard';
import FormRecordStoreTable from '../../components/record/form/FormRecordStoreTable';
import { SearchOutlined, DownOutlined, UnorderedListOutlined, AppstoreOutlined } from '@ant-design/icons';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { IAuthorizedSong } from '../../types';

const { Option } = Select;

const RecordStore = () => {
    const [showButtons, setShowButtons] = useState(false);
    const [activeTab, setActiveTab] = useState<'table' | 'card'>('table');

    const switchToTableTab = () => {
        setActiveTab('table');
    };

    const switchToCardTab = () => {
        setActiveTab('card');
    };

     const handleShowBtn = () => {
        setShowButtons(!showButtons);
    };

    const handleHideBtn = () => {
        setShowButtons(false);
    };

  return (
    <MainLayout>
        <h1>Kho bản ghi</h1>

        <div style={{ width: '1700px'}}>
          <div className='select-container' style={{marginLeft: '-2px'}}>
                          <Input
                              className='form-search'
                              placeholder="Tên bản ghi, tên ca sĩ, tác giả..."
                              suffix={<SearchOutlined style={{ color: 'white' }} />}
                          />
          </div>
          <div className='form-filter' style={{ marginLeft: '-20px',justifyContent: 'space-between'}}>
                <div className='select-container'>
                    <div style={{ marginRight: '10px' }}>Thể loại:</div>
                    <Select className='form-dropdown' placeholder="Tất cả" suffixIcon={<DownOutlined style={{ color: 'orange' }} />}>
                        <Option key='1' value='1' className='form-option'>Tất cả</Option>
                        <Option key='2' value='2' className='form-option'>Pop</Option>
                        <Option key='3' value='3' className='form-option'>EDM</Option>
                        <Option key='4' value='4' className='form-option'>Ballad</Option>
                    </Select>
                </div>

                <div className='select-container' style={showButtons ? (activeTab === 'table' ? { marginLeft: '-1000px' } : { marginLeft: '-850px', marginRight: '-850px' }) : {}}>
                    <div style={{ marginRight: '10px' }}>Định dạng:</div>
                    <Select className='form-dropdown' placeholder="Tất cả" suffixIcon={<DownOutlined style={{ color: 'orange' }} />}>
                        <Option key='1' value='1' className='form-option'>Tất cả</Option>
                        <Option key='2' value='2' className='form-option'>Âm thanh</Option>
                        <Option key='3' value='3' className='form-option'>Video</Option>
                    </Select>
                </div>

                { !showButtons && 
                    <>
                        <div className='select-container'>
                            <div style={{ marginRight: '10px' }}>Thời hạn sử dụng:</div>
                            <Select className='form-dropdown' placeholder="Tất cả" suffixIcon={<DownOutlined style={{ color: 'orange' }} />}>
                                <Option key='1' value='1' className='form-option'>Tất cả</Option>
                                <Option key='2' value='2' className='form-option'>Còn thời hạn</Option>
                                <Option key='3' value='3' className='form-option'>Hết hạn</Option>
                            </Select>
                        </div>

                        <div className='select-container'>
                            <div style={{ marginRight: '10px' }}>Trạng thái:</div>
                            <Select className='form-dropdown' placeholder="Tất cả" suffixIcon={<DownOutlined style={{ color: 'orange' }} />}>
                                <Option key='1' value='1' className='form-option'>Tất cả</Option>
                                <Option key='2' value='2' className='form-option'>Duyệt bởi người dùng</Option>
                                <Option key='3' value='3' className='form-option'>Duyệt tự động</Option>
                            </Select>
                        </div>

                    </>
                }

                { showButtons && activeTab === 'card' &&
                    <div className='form-horizon'>
                        <Checkbox className='checkbox-custom' style={{marginRight: '10px'}}></Checkbox>
                        <p>Chọn tất cả</p>
                    </div>
                }

                <div className='select-container'>
                    <div onClick={switchToTableTab} className={`icon-item ${activeTab === 'table' ? 'item-active' : ''}`}  style={{marginRight: '16px', cursor: 'pointer'}}>
                        <UnorderedListOutlined />
                    </div>
                    <div onClick={switchToCardTab} className={`icon-item ${activeTab === 'card' ? 'item-active' : ''}`} style={{cursor: 'pointer'}}>
                        <AppstoreOutlined />
                    </div>
                </div>
                
          </div>

          {activeTab === 'table' && <FormRecordStoreTable showCheckBox={showButtons}/>}
          {activeTab === 'card' && <FormRecordStoreCard showCheckBox={showButtons}></FormRecordStoreCard>}

          <MenuActionRecord handleShowCheckBox={handleShowBtn} showCheckBox={showButtons} hideCheckBox={handleHideBtn}></MenuActionRecord>
        </div>
    </MainLayout>
  )
};

export default RecordStore
