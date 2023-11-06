// MyContextProvider.js
import React, { useState, useContext } from 'react';
import MyContext from './authContext';

const MyContextProvider = ({ children }) => {
  const [status, setstatus] = useState(false);
  
  return (
    <MyContext.Provider value={{ status, setstatus }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
