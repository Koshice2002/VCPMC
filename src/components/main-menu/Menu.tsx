import '../../styles/styles.css'
import { useMediaQuery } from 'react-responsive';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { InboxOutlined, UnorderedListOutlined, CalendarOutlined, FileTextOutlined, MoneyCollectOutlined, 
    SettingOutlined, QuestionCircleOutlined, MoreOutlined } from '@ant-design/icons';

const Menu: React.FC = () => {
    const [showSubItem1, setShowSubItem1] = useState(false);
    const [showSubItem2, setShowSubItem2] = useState(false);
    const [showSubItem3, setShowSubItem3] = useState(false);
    const [showSubItem4, setShowSubItem4] = useState(false);

    const location = useLocation();
    const [page, setPage] = useState('');

    useEffect(() => {
        const path = location.pathname;
 
        if (    path === '/record-store' 
            ||  path.startsWith('/edit-record/')

        ) { setPage ('Record')}
        else 
        if (    path === '/playlist' 
            ||  path === '/add-playlist'
            ||  path === '/new-playlist-add-song'
            ||  path.startsWith('/edit-playlist/')
            ||  path.startsWith('/detail-playlist/')
            ||  path.startsWith('/playlist-add-song/')

        ) { setPage ('Playlist')}
        else 
        if (    path === '/broadcast-add'
            ||  path === '/broadcast-manage'
            ||  path === '/broadcast-add-new-device' 
            ||  path.startsWith('/broadcast-detail/')
            ||  path.startsWith('/broadcast-edit-playlist/')
            ||  path.startsWith('/broadcast-edit-device/')

        ) { setPage ('Broadcast')}
        else
        if (    path === '/device-add' 
            ||  path === '/device-manage' 
            ||  path === '/contract-manage' 
            ||  path === '/unit-used-manage' 
            ||  path === '/add-exploit-contract' 
            ||  path.startsWith('/partner-add/')
            ||  path.startsWith('/partner-edit/')
            ||  path.startsWith('/device-detail/')
            ||  path === '/add-authorized-contract' 
            ||  path.startsWith('/partner-detail/')
            ||  path === '/partner-authorized-manage' 
            ||  path.startsWith('/unit-used-detail/') 
            ||  path.startsWith('/info-exploit-contract/') 
            ||  path.startsWith('/edit-exploit-contract/') 
            ||  path.startsWith('/copy-exploit-contract/') 
            ||  path.startsWith('/edit-partner-authorized/')
            ||  path.startsWith('/edit-authorized-contract/') 
            ||  path.startsWith('/info-authorized-contract/')
        ) { setPage('Manage'); }
        else
        if (    path === '/revenue-manage' 
            ||  path === '/revenue-report'
            ||  path === '/revenue-history'
            ||  path === '/revenue-report-detail'
            ||  path.startsWith('/revenue-detail/')
            ||  path.startsWith('/report-revenue-detail/')
        ) { setPage('Revenue')}
        else 
        if (    path === '/user-authorization-add'
            ||  path === '/config'
            ||  path === '/role-add'
            ||  path === '/info-work'
            ||  path === '/system-setting'
            ||  path === '/manage-contract'
            ||  path.startsWith('/role-edit')
            ||  path === '/user-authorization-manage'
            ||  path.startsWith('/user-authorization-edit')
        ) { setPage('Setting')}
        else 
        if (    path === '/download-app'
            ||  path === '/feedback'
            ||  path === '/instruction'
        ){  setPage('Support')}
    }, [location]);

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });

  return (
    <div>
        {isDesktopOrLaptop ? (
            <div className="menu">
                <div className="logo">
                    <img
                        alt="logo"
                        style={{ height: '96px'}}
                        src={process.env.PUBLIC_URL + '/Image/logo.svg'}
                    />
                </div>

                <div className="items">
                    <Link to={'/record-store'} className={page === 'Record' ? 'custom-link item item-active' : 'custom-link item'} style={{borderLeft: page === 'Record' ? '1px solid #ff7506' : 'none'}}>
                        <i className='icon-item'>
                            <InboxOutlined />
                        </i>
                        <span>Kho bản ghi</span>
                    </Link>

                    <Link to={'/playlist'} className={page === 'Playlist' ? 'custom-link item item-active' : 'custom-link item'} style={{borderLeft: page === 'Playlist' ? '1px solid #ff7506' : 'none'}}>
                        <i className='icon-item'>
                            <UnorderedListOutlined />
                        </i>
                        <span>Playlist</span>
                    </Link>
                    
                    <Link to={'/broadcast-manage'} className={page === 'Broadcast' ? 'custom-link item item-active' : 'custom-link item'} style={{borderLeft: page === 'Broadcast' ? '1px solid #ff7506' : 'none'}}>
                        <i className='icon-item'>
                            <CalendarOutlined />
                        </i>
                        <span>Lập lịch phát</span>
                    </Link>

                    <div 
                        className='item-more'
                        onMouseEnter={() => setShowSubItem1(true)} 
                        onMouseLeave={() => setShowSubItem1(false)}
                    >
                        <div className={page === 'Manage' ? 'item item-active' : 'item'} style={{marginLeft: '25px', borderLeft: page === 'Manage' ? '1px solid #ff7506' : 'none'}}>
                            <i className='icon-item'>
                                <FileTextOutlined />
                            </i>
                            <span>Quản lý</span>
                        </div>
                        <i className= {page === 'Manage' ? 'icon-more item-active' : 'icon-more'}>
                            <MoreOutlined></MoreOutlined>
                        </i>
                        {showSubItem1 && (
                            <div className='sub-item'>
                                <Link to={'/contract-manage'} className='popup-item custom-link'>Quản lý hợp đồng</Link>
                                <Link to={'/device-manage'} className='popup-item custom-link'>Quản lý thiết bị</Link>
                                <Link to={'/partner-authorized-manage'} className='popup-item custom-link'>Đối tác ủy quyền</Link>
                                <Link to={'/unit-used-manage'} className='popup-item custom-link'>Đơn vị sử dụng</Link>
                            </div>
                        )}
                    </div>

                    <div 
                        className='item-more'
                        onMouseEnter={() => setShowSubItem2(true)} 
                        onMouseLeave={() => setShowSubItem2(false)}
                    >
                        <div className={page === 'Revenue' ? 'item item-active' : 'item'} style={{marginLeft: '25px', borderLeft: page === 'Revenue' ? '1px solid #ff7506' : 'none'}}>
                            <i className='icon-item'>
                                <MoneyCollectOutlined />
                            </i>
                            <span>Doanh thu</span>
                        </div>
                        <i className= {page === 'Revenue' ? 'icon-more item-active' : 'icon-more'}>
                            <MoreOutlined></MoreOutlined>
                        </i>
                        {showSubItem2 && (
                            <div className='sub-item'>
                                <Link to={'/revenue-report'} className='popup-item custom-link'>Báo cáo doanh thu</Link>
                                <Link to={'/revenue-history'} className='popup-item custom-link'>Lịch sử đối soát</Link>
                                <Link to={'/revenue-manage'} className='popup-item custom-link'>Phân phối doanh thu</Link>
                            </div>
                        )}
                    </div>

                    <div 
                        className='item-more'
                        onMouseEnter={() => setShowSubItem3(true)} 
                        onMouseLeave={() => setShowSubItem3(false)}
                    >
                        <div className={page === 'Setting' ? 'item item-active' : 'item'} style={{marginLeft: '25px', borderLeft: page === 'Setting' ? '1px solid #ff7506' : 'none'}}>
                            <i className='icon-item'>
                                <SettingOutlined />
                            </i>
                            <span>Cài đặt</span>
                        </div>
                        <i className= {page === 'Setting' ? 'icon-more item-active' : 'icon-more'}>
                            <MoreOutlined></MoreOutlined>
                        </i>
                        {showSubItem3 && (
                            <div className='sub-item'>
                                <Link to={'/user-authorization-manage'} className='popup-item custom-link'>Phân quyền người dùng</Link>
                                <Link to={'/config'} className='popup-item custom-link'>Cấu hình</Link>
                                <Link to={'/manage-contract'} className='popup-item custom-link'>Quản lý hợp đồng</Link>
                                <Link to={'/info-work'} className='popup-item custom-link'>Thông tin tác phẩm</Link>
                                <Link to={'/system-setting'} className='popup-item custom-link'>Chu kỳ đối soát</Link>
                            </div>
                        )}
                    </div>

                    <div 
                        className='item-more'
                        onMouseEnter={() => setShowSubItem4(true)} 
                        onMouseLeave={() => setShowSubItem4(false)}
                    >
                        <div className={page === 'Support' ? 'item item-active' : 'item'} style={{marginLeft: '25px', borderLeft: page === 'Support' ? '1px solid #ff7506' : 'none'}}>
                            <i className='icon-item'>
                                <QuestionCircleOutlined />
                            </i>
                            <span>Hỗ trợ</span>
                        </div>
                        <i className= {page === 'Support' ? 'icon-more item-active' : 'icon-more'}>
                            <MoreOutlined></MoreOutlined>
                        </i>
                        {showSubItem4 && (
                            <div className='sub-item'>
                                <Link to={'/instruction'} className='popup-item custom-link'>Hướng dẫn sử dụng</Link>
                                <Link to={'/download-app'} className='popup-item custom-link'>Tải app</Link>
                                <Link to={'/feedback'} className='popup-item custom-link'>Feedback</Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        ) : (
            <div className="menu">
                <div className="logo">
                    <img
                        alt="logo"
                        style={{ height: '96px'}}
                        src={process.env.PUBLIC_URL + '/Image/logo.svg'}
                    />
                </div>

                <div className="items">
                    <div className="item">
                        <i className='icon-item'>
                            <InboxOutlined />
                        </i>
                        <span>Kho bản ghi</span>
                    </div>

                    <div className="item">
                        <i className='icon-item'>
                            <UnorderedListOutlined />
                        </i>
                        <span>Playlist</span>
                    </div>
                    
                    <div className="item">
                        <i className='icon-item'>
                            <CalendarOutlined />
                        </i>
                        <span>Lập lịch phát</span>
                    </div>

                    <div className="item">
                        <i className='icon-item'>
                            <FileTextOutlined />
                        </i>
                        <span>Quản lý</span>
                    </div>

                    <div className="item">
                        <i className='icon-item'>
                            <MoneyCollectOutlined />
                        </i>
                        <span>Doanh thu</span>
                    </div>

                    <div className="item">
                        <i className='icon-item'>
                            <SettingOutlined />
                        </i>
                        <span>Cài đặt</span>
                    </div>

                    <div className="item">
                        <i className='icon-item'>
                            <QuestionCircleOutlined />
                        </i>
                        <span>Hỗ trợ</span>
                    </div>
                </div>
            </div>
        )}
    </div>
  );
};

export default Menu;
