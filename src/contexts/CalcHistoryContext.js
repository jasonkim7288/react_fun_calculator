import React, { useState, createContext } from 'react';

const CalcHistoryContext = createContext();

const CalcHistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);

  return (
    <CalcHistoryContext.Provider value={[history, setHistory]}>
      {children}
    </CalcHistoryContext.Provider>
  )
}

export { CalcHistoryContext, CalcHistoryProvider };
