import React from 'react';
import ChatPopupContact from '../components/contacts/ChatPopupContent';
import MediaIcons from '../components/contacts/MediaIcons';

import { motion as m } from 'framer-motion';

const Contacts = () => {
  return (
    <m.div className='flex flex-row justify-center gap-32 my-16' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <ChatPopupContact />
      <MediaIcons />
    </m.div>
  );
};

export default Contacts;
