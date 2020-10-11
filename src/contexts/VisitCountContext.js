import React, { useState, createContext } from 'react';

const VisitCountContext = createContext();

const VisitCountProvider =(({ children }) => {
  const [visitCount, setVisitCount] = useState(null);

  return (
    <VisitCountContext.Provider value={[visitCount, setVisitCount]}>
      {children}
    </VisitCountContext.Provider>
  )
})

export { VisitCountContext, VisitCountProvider };