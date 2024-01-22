import React, { useEffect, useState } from 'react';
import Button from '../components/common/Button';
import { useLocation } from 'react-router-dom';
import Personal from '../components/profile/personal';


const Profile = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const paramComponent = searchParams.get('component');

    



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


    return (
        <>
            <div className='w-screen pt-20 px-170 pb-150'>
                <h1 className='text-40px flex font-raleway text-2xl font-semibold'>Профіль</h1>
                <div className="flex  mt-50  flex-col xl:flex-row">
                    {/* left side */}
                    <div className="min-w-235  h-80 flex flex-col items-start gap-2">
                        <Button
                            classNameBtn={`font-raleway text-base font-medium ${selectedComponent === 'personal'
                                ? 'underline text-black'
                                : 'text-gray'
                                }`}
                            onClickBtn={() => handleComponentClick('personal')}
                        >
                            Контактна інформація
                        </Button>
                        <Button
                            classNameBtn={`font-raleway text-base font-medium ${selectedComponent === 'addresses'
                                ? 'underline text-black'
                                : 'text-gray'
                                }`}
                            onClickBtn={() => handleComponentClick('addresses')}
                        >
                            Адресна книга
                        </Button>
                        <Button
                            classNameBtn={`font-raleway text-base font-medium ${selectedComponent === 'history'
                                ? 'underline text-black'
                                : 'text-gray'
                                }`}
                            onClickBtn={() => handleComponentClick('history')}
                        >
                            Історія замовлень
                        </Button>
                        <Button
                            classNameBtn={`font-raleway text-base font-medium ${selectedComponent === 'payment'
                                ? 'underline text-black'
                                : 'text-gray'
                                }`}
                            onClickBtn={() => handleComponentClick('payment')}
                        >
                            Платіжна карта
                        </Button>
                        <Button
                            classNameBtn={`font-raleway text-base font-medium ${selectedComponent === 'return'
                                ? 'underline text-black'
                                : 'text-gray'
                                }`}
                            onClickBtn={() => handleComponentClick('return')}
                        >
                            Вихід
                        </Button>

                    </div>

                    {/* right side */}
                    <div className="basis-5/5 pl-70 border-l border-solid border-gray-500">
                        {selectedComponent === 'personal' && <Personal />}
                        {selectedComponent === 'addresses' && <div>addresses</div>}
                        {selectedComponent === 'history' && <div>history</div>}
                        {selectedComponent === 'payment' && <div>payment</div>}
                        {selectedComponent === 'return' && <div>return</div>}

                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
