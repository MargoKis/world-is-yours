import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import api from '../api/api';
import { useState } from 'react';

const useTranslation = () => {
  const [language, setLanguage] = useState('en');
  const locale = useSelector((state) => state.locale.locale);

  useEffect(() => {
    api.getLanguage(locale)
      .then(data => setLanguage(data))
      .catch(error => console.error('Error in useTranslation:', error));
  }, [locale]);

  const t = (key) => {
    const value = language[key];

    if (value !== undefined && value !== null) {
      return value;
    } else {
      return key;
    }
  };

  return t;
};

export default useTranslation;
