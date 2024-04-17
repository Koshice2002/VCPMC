import '../styles/styles.css';
import { Flex, Button } from 'antd';
import Menu from '../components/main-menu/Menu';
import { Link, useLocation } from 'react-router-dom';
import React, { ReactNode, useEffect, useState } from 'react';
import { DownOutlined, RightOutlined } from '@ant-design/icons';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const location = useLocation();
    const [page, setPage] = useState('');
    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        const path = location.pathname;

        if (    path === '/device-add'
            ||  path === '/add-playlist'
            ||  path === '/broadcast-add' 
            ||  path === '/add-exploit-contract' 
            ||  path.startsWith('/edit-record/') 
            ||  path === '/new-playlist-add-song'
            ||  path.startsWith('/partner-add/')
            ||  path.startsWith('/partner-edit/')
            ||  path.startsWith('/device-detail/')
            ||  path.startsWith('/edit-playlist/')
            ||  path === '/add-authorized-contract'
            ||  path.startsWith('/partner-detail/')
            ||  path.startsWith('/detail-playlist/')
            ||  path === '/broadcast-add-new-device' 
            ||  path.startsWith('/broadcast-detail/')
            ||  path.startsWith('/unit-used-detail/')
            ||  path.startsWith('/playlist-add-song/')
            ||  path.startsWith('/broadcast-edit-device/')
            ||  path.startsWith('/edit-exploit-contract/') 
            ||  path.startsWith('/copy-exploit-contract/') 
            ||  path.startsWith('/info-exploit-contract/') 
            ||  path.startsWith('/edit-partner-authorized/')
            ||  path.startsWith('/broadcast-edit-playlist/')
            ||  path.startsWith('/edit-authorized-contract/') 
            ||  path.startsWith('/info-authorized-contract/') 
        ) { setPage('Hidden') }
    }, [location]);

    return (
        <>
            <div style={{display: 'flex', justifyContent: 'end'}}>
                <Button className='select-language'>
                    <div>
                        Tiếng Việt
                    </div>

                    <i style={{display: 'flex', justifyContent: 'center', marginLeft: '8px'}}>
                        <img
                            alt="vietnamese"
                            style={{ height: '24px', marginRight: '4px'}}
                            src={process.env.PUBLIC_URL + '/Image/vietnam 1.svg'}
                        />
                        <DownOutlined style={{width: '10px'}}/>
                    </i>
                </Button>
                <Link to={'/profile'} className='custom-link'>
                    <Flex justify='start' align='middle' className='account'>
                            <img
                                alt="avatar"
                                className='account-img'
                                src={process.env.PUBLIC_URL + '/Image/Avatar.jpg'}
                            />
                            <div style={{marginLeft: '5px'}}>
                                <h4 style={{ color: 'white', margin: '0' }}>Ng.Khoa</h4>
                                <p style={{ color: '#B65100', margin: '0' }}>Admin</p>
                            </div>
                    </Flex>
                </Link>
            </div>

            <div style={{ display: page === 'Hidden' ? ' none' : 'block' }}>
                <Menu />
            </div>

            <div style={{ display: page === 'Hidden' ? 'block' : 'none' }}>
                <div className='menu' style={{ width: '40px', justifyContent: 'center', cursor: 'pointer' }} onClick={handleShowMenu} >
                    <RightOutlined style={{ color: '#FF7506' }} />
                </div>
                {showMenu && (
                    <div className='menu-hidden' onClick={handleShowMenu}>
                        <div>
                            <Menu />
                        </div>
                    </div>
                )}
            </div>

            <div className='basic'>
                {children}
            </div>
        </>
    );
};

export default MainLayout;
