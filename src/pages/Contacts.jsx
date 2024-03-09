import React from 'react'
import ChatPopupContact from '../components/contacts/ChatPopupContent'
import MediaIcons from '../components/contacts/MediaIcons'

const Contacts = () => {
  return (
    <div className='flex flex-row justify-center gap-32 my-20'>
      <ChatPopupContact/>
      <MediaIcons/>
    </div>
  )
}

export default Contacts
