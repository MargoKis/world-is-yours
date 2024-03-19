import React, { useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faTh, faCog, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons/faLayerGroup';
import { faUsers } from '@fortawesome/free-solid-svg-icons/faUsers';
import Logo from '../../assets/icons/light/logo-light.svg';
import ReviewPage from '../pages/review/ReviewPage.jsx';
import CatalogPage from '../pages/catalog/CatalogPage.jsx'

const AdminPanel = () => {
    const [activeMenuItem, setActiveMenuItem] = useState('overview');

    const handleMenuItemClick = (menuItem) => {
        setActiveMenuItem(menuItem);
    };

    return (
        <Container fluid className="h-screen">
            <Row className='flex flex-row'>
                <Col xs={2} className="bg-black text-white d-flex flex-column justify-between  w-1/5">
                    <div className='flex flex-col justify-between h-full'>
                        <div className="">
                            <div className="flex flex-row text-center justify-center items-center mb-4">
                                <img src={Logo} alt="Logo" className="w-36 h-36 mr-3" />
                                <p className='mb-0 mt-7 text-sm'>Admin <br/> панель</p>
                            </div>
                            <Nav className="flex flex-col ml-10 gap-6">
                                <Nav.Item 
                                    className={`cursor-pointer text-white p-2 rounded-lg rounded-tr-none rounded-br-none ${activeMenuItem === 'overview' ? 'bg-white text-black' : ''}`} onClick={() => handleMenuItemClick('overview')}>
                                        <Nav.Link>
                                            <FontAwesomeIcon icon={faChartLine} className={`${activeMenuItem === 'overview' ? 'text-blue' : ''}`} /> 
                                            <span className={`ml-2 ${activeMenuItem === 'overview' ? 'text-black' : ''}`}>Огляд</span>
                                        </Nav.Link>
                                </Nav.Item>
                                <Nav.Item  className={`cursor-pointer text-white p-2 rounded-lg rounded-tr-none rounded-br-none ${activeMenuItem === 'catalog' ? 'bg-white text-black' : ''}`} onClick={() => handleMenuItemClick('catalog')}>
                                    <Nav.Link>
                                        <FontAwesomeIcon icon={faTh} className={`${activeMenuItem === 'catalog' ? 'text-blue' : ''}`} /> 
                                        <span className={`ml-2 ${activeMenuItem === 'catalog' ? 'text-black' : ''}`}>Каталог</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item  className={`cursor-pointer text-white p-2 rounded-lg rounded-tr-none rounded-br-none ${activeMenuItem === 'categories' ? 'bg-white text-black' : ''}`} onClick={() => handleMenuItemClick('categories')}>
                                    <Nav.Link>
                                        <FontAwesomeIcon icon={faLayerGroup} className={`${activeMenuItem === 'categories' ? 'text-blue' : ''}`} /> 
                                        <span className={`ml-2 ${activeMenuItem === 'categories' ? 'text-black' : ''}`}>Категорії</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item  className={`cursor-pointer text-white p-2 rounded-lg rounded-tr-none rounded-br-none ${activeMenuItem === 'orders' ? 'bg-white text-black' : ''}`}  onClick={() => handleMenuItemClick('orders')}>
                                    <Nav.Link>
                                        <FontAwesomeIcon icon={faUsers} className={`${activeMenuItem === 'orders' ? 'text-blue' : ''}`} /> 
                                        <span className={`ml-2 ${activeMenuItem === 'orders' ? 'text-black' : ''}`}>Замовлення</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className={`cursor-pointer text-white p-2 rounded-lg rounded-tr-none rounded-br-none ${activeMenuItem === 'settings' ? 'bg-white text-black' : ''}`} onClick={() => handleMenuItemClick('settings')}>
                                    <Nav.Link>
                                        <FontAwesomeIcon icon={faCog} className={`${activeMenuItem === 'settings' ? 'text-blue' : ''}`} /> 
                                        <span className={`ml-2 ${activeMenuItem === 'settings' ? 'text-black' : ''}`}>Налаштування сайту</span>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                        
                        <div className={`cursor-pointer text-white p-2 rounded-lg rounded-tr-none rounded-br-none ${activeMenuItem === 'exit' ? 'bg-white text-black' : ''}  flex flex-row items-center gap-2 ml-10 mb-4`} onClick={() => handleMenuItemClick('exit')}>
                            <FontAwesomeIcon icon={faArrowRightFromBracket} className={`${activeMenuItem === 'exit' ? 'text-blue' : ''}`} />
                            <p className={`ml-2 ${activeMenuItem === 'exit' ? 'text-black' : ''}`}> Вихід</p>
                        </div>

                    </div>
                </Col>

                <Col className='w-screen h-screen overflow-y-auto mb-4'>
                    {activeMenuItem === 'overview' && <ReviewPage />}
                    {activeMenuItem === 'catalog' && <CatalogPage />}
                    {/* Другие условия для отображения разных страниц */}
                </Col>

                
            </Row>
        </Container>
    );
};

export default AdminPanel;


