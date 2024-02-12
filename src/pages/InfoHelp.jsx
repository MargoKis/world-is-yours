import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SideLinks from '../components/info-help/SideLinks';
import Payment from '../components/info-help/Payment';
import Return from '../components/info-help/Return';
import Delivery from '../components/info-help/Delivery';


const InfoHelp = () => {
  
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
      setSelectedComponent('payment');
    }
  }, [paramComponent]);

  return (
    <>


      <div className="flex flex-col">
        <div className="text-custom-black text-35px font-semibold mx-32 mt-12" id='dovidka'>Довідка</div>
        <div className="flex flex-row mx-32 mb-20 mt-12">
          <SideLinks onLinkClick={handleComponentClick} />
          
          {selectedComponent === 'payment' && <Payment />}
          {selectedComponent === 'delivery' && <Delivery />}
          {selectedComponent === 'return' && <Return />}
        </div>
      </div>

    </>
  );
};

export default InfoHelp;