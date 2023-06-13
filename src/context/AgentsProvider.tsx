import { ReactNode, useState } from "react";
import providerFile from './context';

const AgentsProvider = ({ children }: { children: ReactNode }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const contextObj = {
    searchQuery, 
    setSearchQuery
  };

  return (
    <div>
      <providerFile.Provider value={contextObj}>
        {children}
      </providerFile.Provider>
    </div>
  );
};

export default AgentsProvider;