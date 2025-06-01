
import { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [redirectToProducts, setRedirectToProducts] = useState(false);

  return (
    <SearchContext.Provider value={{ 
      searchTerm, 
      setSearchTerm,
      redirectToProducts,
      setRedirectToProducts
    }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);