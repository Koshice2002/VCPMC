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

        if (    path === '/contract-manage' 
            ||  path === '/add-exploit-contract' 
            ||  path === '/add-authorized-contract' 
            ||  path.startsWith('/info-exploit-contract/') 
            ||  path.startsWith('/edit-exploit-contract/') 
            ||  path.startsWith('/copy-exploit-contract/') 
            ||  path.startsWith('/edit-authorized-contract/') 
            ||  path.startsWith('/info-authorized-contract/')
        ) { setPage('Manage'); }
        else 
        if (    path === '/record-store' 
            ||  path.startsWith('/edit-record/')

        ) { setPage ('Record')}
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

                    <Link to={'/'} className='custom-link item'>
                        <i className='icon-item'>
                            <UnorderedListOutlined />
                        </i>
                        <span>Playlist</span>
                    </Link>
                    
                    <Link to={'/'} className='custom-link item'>
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
                                <div className='popup-item'>Quản lý thiết bị</div>
                                <div className='popup-item'>Đơn vị ủy quyền</div>
                                <div className='popup-item'>Đơn vị sử dụng</div>
                            </div>
                        )}
                    </div>

                    <div 
                        className='item-more'
                        onMouseEnter={() => setShowSubItem2(true)} 
                        onMouseLeave={() => setShowSubItem2(false)}
                    >
                        <div className='item' style={{marginLeft: '25px'}}>
                            <i className='icon-item'>
                                <MoneyCollectOutlined />
                            </i>
                            <span>Doanh thu</span>
                        </div>
                        <i className='icon-more'>
                            <MoreOutlined></MoreOutlined>
                        </i>
                        {showSubItem2 && (
                            <div className='sub-item'>
                                <div className='popup-item'>Báo cáo doanh thu</div>
                                <div className='popup-item'>Lịch sử đối soát</div>
                                <div className='popup-item'>Phân phối doanh thu</div>
                            </div>
                        )}
                    </div>

                    <div 
                        className='item-more'
                        onMouseEnter={() => setShowSubItem3(true)} 
                        onMouseLeave={() => setShowSubItem3(false)}
                    >
                        <div className='item' style={{marginLeft: '25px'}}>
                            <i className='icon-item'>
                                <SettingOutlined />
                            </i>
                            <span>Cài đặt</span>
                        </div>
                        <i className='icon-more'>
                            <MoreOutlined></MoreOutlined>
                        </i>
                        {showSubItem3 && (
                            <div className='sub-item'>
                                <div className='popup-item'>Phân quyền người dùng</div>
                                <div className='popup-item'>Cấu hình</div>
                                <div className='popup-item'>Quản lý hợp đồng</div>
                                <div className='popup-item'>Thông tin tác phẩm</div>
                                <div className='popup-item'>Chu kỳ đối soát</div>
                            </div>
                        )}
                    </div>

                    <div 
                        className='item-more'
                        onMouseEnter={() => setShowSubItem4(true)} 
                        onMouseLeave={() => setShowSubItem4(false)}
                    >
                        <div className='item' style={{marginLeft: '25px'}}>
                            <i className='icon-item'>
                                <QuestionCircleOutlined />
                            </i>
                            <span>Hỗ trợ</span>
                        </div>
                        <i className='icon-more'>
                            <MoreOutlined></MoreOutlined>
                        </i>
                        {showSubItem4 && (
                            <div className='sub-item'>
                                <div className='popup-item'>Hướng dẫn sử dụng</div>
                                <div className='popup-item'>Tải app</div>
                                <div className='popup-item'>Feedback</div>
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
