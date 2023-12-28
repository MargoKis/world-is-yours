// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import api from '../api/api';
// import { useState } from 'react';


// Додайте цю функцію до вашого коду або включіть її безпосередньо в консолі браузера

function myConsoleFunction() {
  // Ваш код тут
  console.log('Ця функція викликається з консолі браузера!');
}

// Якщо ви хочете, щоб функція була доступна глобально, додайте її до об'єкту window
window.log = myConsoleFunction;


const useTranslation = () => {
  // const [language, setLanguage] = useState('en');
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
