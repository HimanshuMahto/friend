import React, { useState, useRef, useEffect } from 'react';
import Selector from './Selector';

const useLocalStorage = (key, initialValue = '') => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

const SwapField = React.forwardRef(({ obj }, inputRef) => {
  const { id, defaultValue, setToken, ignoreValue } = obj;
  const [value, setValue] = useLocalStorage('inputValue', ''); // Hook to manage local storage

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="flex items-center rounded-xl">
      <input
        ref={inputRef}
        className={getInputClassname()}
        type={'number'}
        value={value}
        placeholder={'0.0'}
        onChange={handleInputChange}
      />

      <Selector
        id={id}
        setToken={setToken}
        defaultValue={defaultValue}
        ignoreValue={ignoreValue}
      />
    </div>
  );

  function getInputClassname() {
    let className =
      'w-full outline-none h-8 px-2 appearance-none text-3xl bg-transparent';
    return className;
  }
});

export default SwapField;
