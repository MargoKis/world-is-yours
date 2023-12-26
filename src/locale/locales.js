// src/locale/useTranslation.js
import { useSelector } from 'react-redux';
import en from './en';
import uk from './uk';

const useTranslation = () => {
  const locale = useSelector((state) => state.locale.locale);

  const t = (key) => {
    let jsonData;

    if (locale === 'en') {
      jsonData = en;
    } else if (locale === 'uk') {
      jsonData = uk;
    } else {
      jsonData = en;
    }

    const value = jsonData[key];

    if (value !== undefined && value !== null) {
      return value;
    } else {
      return key;
    }
  };

  return t;
};

export default useTranslation;
