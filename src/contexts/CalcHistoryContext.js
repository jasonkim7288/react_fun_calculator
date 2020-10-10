import React, { useState } from 'react';

const CalcHistoryContext = React.createContext([{}, () => {}]);

const CalcHistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);

  return (
    <CalcHistoryContext.Provider value={[history, setHistory]}>
      {children}
    </CalcHistoryContext.Provider>
  )
}

export { CalcHistoryContext, CalcHistoryProvider };
