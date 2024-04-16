import React, { useEffect, useState } from 'react';
import Button from '../components/common/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import Personal from '../components/profile/personal';
import NotFound404 from './NotFound404';
import { useDispatch, useSelector } from 'react-redux';
import Adress from '../components/profile/adress';
import History from '../components/profile/history';
import { logout } from '../redux/userSlice';
import Cookies from 'js-cookie';

import { motion as m } from 'framer-motion';

const Profile = () => {
  const location = useLocation();
  let navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const paramComponent = searchParams.get('component');
  const dispatch = useDispatch();
  // const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const user = useSelector((state) => state.user.user);

  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleComponentClick = (component) => {
    setSelectedComponent(component);
    const urlSearchParams = new URLSearchParams(window.location.search);
    urlSearchParams.set('component', component);
    window.history.replaceState(null, '', `?${urlSearchParams.toString()}`);
  };

  useEffect(() => {
    if (paramComponent) {
      setSelectedComponent(paramComponent);
    } else {
      setSelectedComponent('personal');
    }
  }, [paramComponent]);

  if (!user.email) {
    console.log('user in store==' + JSON.stringify(user, null, 2));
    return <NotFound404 />;
  }
  return (
    <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <div className='w-screen pt-20 px-170 pb-150'>
        <h1 className='text-40px flex font-raleway text-2xl font-semibold'>Профіль</h1>
        <div className='flex  mt-50  flex-col xl:flex-row'>
          {/* left side */}
          <div className='min-w-235  h-80 flex flex-col items-start gap-2'>
            <Button classNameBtn={`font-raleway text-base font-medium ${selectedComponent === 'personal' ? 'underline text-black' : 'text-gray'}`} onClickBtn={() => handleComponentClick('personal')}>
              Контактна інформація
            </Button>
            <Button classNameBtn={`font-raleway text-base font-medium ${selectedComponent === 'addresses' ? 'underline text-black' : 'text-gray'}`} onClickBtn={() => handleComponentClick('addresses')}>
              Адресна книга
            </Button>
            <Button classNameBtn={`font-raleway text-base font-medium ${selectedComponent === 'history' ? 'underline text-black' : 'text-gray'}`} onClickBtn={() => handleComponentClick('history')}>
              Історія замовлень
            </Button>
            <Button
              classNameBtn={`font-raleway text-base font-medium ${selectedComponent === 'return' ? 'underline text-black' : 'text-gray'}`}
              onClickBtn={() => {
                dispatch(logout());
                Cookies.remove('user');
                navigate('/');
              }}>
              Вихід
            </Button>
          </div>

          {/* right side */}
          <div className='basis-5/5 pl-70 border-l border-solid border-gray-500'>
            {selectedComponent === 'personal' && <Personal />}
            {selectedComponent === 'addresses' && <Adress />}
            {selectedComponent === 'history' && (
              <div>
                <History />
              </div>
            )}
          </div>
        </div>
      </div>
    </m.div>
  );
};

export default Profile;
