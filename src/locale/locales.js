
import en from './en.json';
import uk from './uk.json';

const t = (key) => {
  let jsonData;
    let locale="uk";
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

export default t;
