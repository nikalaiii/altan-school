import React, { createContext, useState, useContext, useCallback } from 'react';

type ClickContextType = {
  isActive: boolean;
  triggerClick: () => void;
};

const ClickContext = createContext<ClickContextType | undefined>(undefined);

export const ClickProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  let timeoutRef: NodeJS.Timeout;

  const triggerClick = useCallback(() => {
    setIsActive(true);

    clearTimeout(timeoutRef);
    timeoutRef = setTimeout(() => {
      setIsActive(false);
    }, 5000);
  }, []);

  return (
    <ClickContext.Provider value={{ isActive, triggerClick }}>
      {children}
    </ClickContext.Provider>
  );
};

export const useClickContext = () => {
  const context = useContext(ClickContext);
  if (!context) throw new Error('useClickContext must be used within ClickProvider');
  return context;
};
