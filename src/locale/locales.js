import { useSelector } from 'react-redux';

const useTranslation = () => {
  const language = useSelector((state) => state.locale.language);
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
