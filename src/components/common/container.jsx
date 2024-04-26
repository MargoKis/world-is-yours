import react from 'react';

const Container = (props) => {
  const { children, className, id } = props;

  return (
    <div className={`max-w-[1820px] px-16 mx-auto ${className}`} id={id}>
      {children}
    </div>
  );
};

export default Container;
