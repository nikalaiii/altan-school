import React, { createContext, useState, useContext, useCallback, useRef } from 'react';

type ClickContextType = {
  isActive: boolean;
  triggerClick: () => void;
};

const ClickContext = createContext<ClickContextType | undefined>(undefined);

export const ClickProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const triggerClick = useCallback(() => {
    setIsActive(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
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
