import React, { createContext, useContext } from 'react';

const SearchDetailsContext = createContext();

const SearchDetailsProvider = ({children, search, setSearch}) => {
  return <SearchDetailsContext.Provider value={{
    search,
    setSearch
  }}>
    {children}
  </SearchDetailsContext.Provider>
}

const useSearchDetails = () => useContext(SearchDetailsContext);

export { SearchDetailsProvider, useSearchDetails };